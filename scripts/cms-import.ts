import fs from "node:fs"
import path from "node:path"

import type { ContentExport, ExportRecord } from "@/lib/cms/export-types"

type Existing = { id: number | string; _status?: "draft" | "published" | null }

function shouldApply(): boolean {
  return process.argv.includes("--apply") || process.env.CMS_IMPORT_APPLY === "1"
}

function exportFile(): string {
  const arg = process.argv.find((value) => value.endsWith(".json"))
  return arg ? path.resolve(valueOrCwd(arg)) : path.join(process.cwd(), "data", "content-export.json")
}

function valueOrCwd(file: string): string {
  return path.isAbsolute(file) ? file : path.join(process.cwd(), file)
}

function dataFor(record: ExportRecord, relatedPaths: string[]) {
  const shared = {
    title: record.title,
    slug: record.slug,
    path: record.path,
    legacyId: record.legacyId,
    sourceUrl: record.sourceUrl,
    excerpt: record.excerpt,
    heroHeading: record.heroHeading,
    content: record.content,
    faqs: record.faqs,
    relatedPaths,
    meta: record.meta,
    sourceUpdatedAt: record.sourceUpdatedAt,
    _status: "draft" as const,
  }
  if (record.collection === "posts") {
    return {
      ...shared,
      category: record.category,
      publishedAt: record.publishedAt,
      author: "Dr. Brad Fackrell",
    }
  }
  return shared
}

async function findExisting(
  payload: Awaited<ReturnType<typeof import("payload").getPayload>>,
  record: ExportRecord,
): Promise<Existing | undefined> {
  const byLegacy = await payload.find({
    collection: record.collection,
    where: { legacyId: { equals: record.legacyId } },
    draft: true,
    overrideAccess: true,
    limit: 1,
    depth: 0,
    pagination: false,
  })
  if (byLegacy.docs[0]) return byLegacy.docs[0] as Existing

  const bySource = await payload.find({
    collection: record.collection,
    where: { sourceUrl: { equals: record.sourceUrl } },
    draft: true,
    overrideAccess: true,
    limit: 1,
    depth: 0,
    pagination: false,
  })
  return bySource.docs[0] as Existing | undefined
}

async function main() {
  const apply = shouldApply()
  const file = exportFile()
  if (!fs.existsSync(file)) {
    console.error(`Missing export file: ${file}`)
    process.exit(1)
  }
  const parsed = JSON.parse(fs.readFileSync(file, "utf8")) as ContentExport
  const known = new Set(parsed.records.map((record) => record.legacyId))
  console.log(`${parsed.records.length} records in ${file}`)
  if (!apply) {
    console.log("Dry run. Re-run with --apply to write drafts. Published docs are left unchanged.")
    return
  }
  if (!process.env.PAYLOAD_SECRET || (!process.env.DATABASE_URL && !process.env.POSTGRES_URL)) {
    console.error("Set PAYLOAD_SECRET and a pooled DATABASE_URL before importing.")
    process.exit(1)
  }

  process.env.PAYLOAD_DB_PUSH = "false"
  process.env.CMS_IMPORT_APPLY = "1"
  const { getPayload } = await import("payload")
  const { default: config } = await import("../payload.config")
  const payload = await getPayload({ config })

  let created = 0
  let updated = 0
  let skippedPublished = 0
  const idByLegacy = new Map<string, number | string>()

  for (const record of parsed.records) {
    const relatedPaths = (record.related ?? [])
      .map((item) => item.$ref)
      .filter((ref) => {
        if (known.has(ref)) return true
        console.warn(`[cms] skipping missing $ref ${ref} on ${record.path}`)
        return false
      })
      .map((ref) => ref.replace(/^(page|post):/, ""))

    const existing = await findExisting(payload, record)
    if (existing?._status === "published") {
      skippedPublished += 1
      idByLegacy.set(record.legacyId, existing.id)
      continue
    }

    const data = dataFor(record, relatedPaths)
    if (existing) {
      const doc = await payload.update({
        collection: record.collection,
        id: existing.id,
        data,
        draft: true,
        overrideAccess: true,
      })
      idByLegacy.set(record.legacyId, doc.id)
      updated += 1
    } else {
      const doc = await payload.create({
        collection: record.collection,
        data,
        draft: true,
        overrideAccess: true,
      })
      idByLegacy.set(record.legacyId, doc.id)
      created += 1
    }
    if ((created + updated) % 100 === 0) {
      console.log(`Imported ${created + updated} drafts...`)
    }
  }

  await payload.updateGlobal({ slug: "header", data: parsed.globals.header, draft: true, overrideAccess: true })
  await payload.updateGlobal({ slug: "footer", data: parsed.globals.footer, draft: true, overrideAccess: true })
  await payload.updateGlobal({
    slug: "site-settings",
    data: parsed.globals["site-settings"],
    draft: true,
    overrideAccess: true,
  })

  console.log(
    `Draft import finished. created=${created} updated=${updated} skippedPublished=${skippedPublished} linked=${idByLegacy.size}`,
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
