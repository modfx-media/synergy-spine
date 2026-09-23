import fs from "node:fs"
import path from "node:path"

import type { ContentExport } from "@/lib/cms/export-types"
import { collectExpectedPaths } from "@/lib/cms/manifest"
import { normalizePath } from "@/lib/cms/paths"

async function main() {
  const file = process.argv[2] ?? path.join(process.cwd(), "data", "content-export.json")
  if (!fs.existsSync(file)) {
    console.error(`Missing export file: ${file}`)
    process.exit(1)
  }
  const parsed = JSON.parse(fs.readFileSync(file, "utf8")) as ContentExport
  if (parsed.version !== 1 || !Array.isArray(parsed.records)) {
    console.error("Export must be { version: 1, records, globals }")
    process.exit(1)
  }

  const expected = await collectExpectedPaths()
  const exported = new Set(parsed.records.map((record) => normalizePath(record.path)))
  const missing = expected.filter((entry) => !exported.has(entry.path))
  const blanks = parsed.records.filter((record) => !record.path || !record.sourceUrl || !record.legacyId)

  console.log(`Export records: ${parsed.records.length}`)
  console.log(`Expected URLs: ${expected.length}`)
  if (blanks.length) {
    console.error(`${blanks.length} records are missing path, sourceUrl, or legacyId`)
  }
  if (missing.length) {
    console.error(`Missing ${missing.length} URLs, including:`)
    for (const entry of missing.slice(0, 20)) console.error(`  ${entry.path}`)
    process.exit(1)
  }
  console.log("Export covers every public URL.")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
