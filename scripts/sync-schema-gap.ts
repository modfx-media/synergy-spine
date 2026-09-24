import { getTableConfig } from "drizzle-orm/pg-core"
import { Pool } from "@neondatabase/serverless"
import { getPayload } from "payload"

import config from "../payload.config"

function quoteIdent(value: string): string {
  return `"${value.replaceAll('"', '""')}"`
}

function databaseURL(): string {
  const url = new URL(process.env.DATABASE_URL || "")
  url.searchParams.delete("channel_binding")
  return url.toString()
}

async function main() {
  process.env.PAYLOAD_DB_PUSH = "false"
  const payload = await getPayload({ config })
  const pool = new Pool({ connectionString: databaseURL() })
  const existing = await pool.query(
    "select table_name, column_name from information_schema.columns where table_schema = 'public'",
  )
  const columns = new Set(
    existing.rows.map((row) => `${row.table_name}.${row.column_name}`),
  )
  const tables = new Set(existing.rows.map((row) => row.table_name as string))

  const expected: ReturnType<typeof getTableConfig>[] = []
  for (const key of Object.keys(payload.db.tables)) {
    try {
      expected.push(getTableConfig(payload.db.tables[key]))
    } catch {
      // relations and non-tables
    }
  }

  const statements: string[] = []

  for (const table of expected) {
    if (!tables.has(table.name)) continue
    for (const column of table.columns) {
      if (columns.has(`${table.name}.${column.name}`)) continue
      const nullable = column.notNull ? " NULL" : ""
      statements.push(
        `ALTER TABLE ${quoteIdent(table.name)} ADD COLUMN IF NOT EXISTS ${quoteIdent(column.name)} ${column.getSQLType()}${column.notNull ? "" : nullable}`,
      )
    }
  }

  const pending = expected.filter((table) => !tables.has(table.name))
  const pendingNames = new Set(pending.map((table) => table.name))
  const created = new Set<string>()

  function parentName(table: ReturnType<typeof getTableConfig>): string | null {
    const fk = table.foreignKeys[0]
    if (!fk) return null
    return getTableConfig(fk.reference().foreignTable).name
  }

  while (created.size < pending.length) {
    const next = pending.find((table) => {
      if (created.has(table.name)) return false
      const parent = parentName(table)
      return !parent || !pendingNames.has(parent) || created.has(parent)
    })
    if (!next) throw new Error("Could not order new tables for foreign keys")
    created.add(next.name)

    const columnSQL = next.columns
      .map((column) => {
        const type = column.primary && column.getSQLType() === "serial" ? "serial" : column.getSQLType()
        const pk = column.primary ? " PRIMARY KEY" : ""
        const nn = column.notNull && !column.primary ? " NOT NULL" : ""
        return `${quoteIdent(column.name)} ${type}${pk}${nn}`
      })
      .join(", ")
    statements.push(`CREATE TABLE IF NOT EXISTS ${quoteIdent(next.name)} (${columnSQL})`)

    const fk = next.foreignKeys[0]
    if (fk) {
      const ref = fk.reference()
      const parent = getTableConfig(ref.foreignTable).name
      const from = ref.columns.map((column) => quoteIdent(column.name)).join(", ")
      const to = ref.foreignColumns.map((column) => quoteIdent(column.name)).join(", ")
      const constraint = `${next.name}_${ref.columns[0].name}_fk`
      statements.push(
        `DO $$ BEGIN ALTER TABLE ${quoteIdent(next.name)} ADD CONSTRAINT ${quoteIdent(constraint)} FOREIGN KEY (${from}) REFERENCES ${quoteIdent(parent)} (${to}) ON DELETE CASCADE; EXCEPTION WHEN duplicate_object THEN NULL; END $$`,
      )
    }
  }

  console.log(`Applying ${statements.length} schema statements`)
  for (const statement of statements) {
    await pool.query(statement)
  }
  await pool.end()
  console.log("Schema gap closed")
  process.exit(0)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
