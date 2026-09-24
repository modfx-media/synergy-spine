import { getPayload, type Payload } from "payload"

import config from "@/payload.config"
import { normalizePath } from "@/lib/cms/paths"

let payloadPromise: Promise<Payload> | null = null

export function cmsConfigured(): boolean {
  return Boolean(
    process.env.PAYLOAD_SECRET && (process.env.DATABASE_URL || process.env.POSTGRES_URL),
  )
}

export function getCMS(): Promise<Payload> {
  if (!cmsConfigured()) {
    throw new Error("[cms] PAYLOAD_SECRET or DATABASE_URL is not set")
  }
  if (!payloadPromise) {
    payloadPromise = getPayload({ config })
  }
  return payloadPromise
}

export type RoutedContent = {
  collection: "pages" | "posts"
  doc: Record<string, unknown> & {
    id: number | string
    title?: string | null
    path?: string | null
    excerpt?: string | null
    heroHeading?: string | null
    content?: unknown
    faqs?: { question?: string | null; answer?: string | null }[] | null
    meta?: {
      title?: string | null
      description?: string | null
      canonicalUrl?: string | null
      noIndex?: boolean | null
      noFollow?: boolean | null
      excludeFromSitemap?: boolean | null
    } | null
    updatedAt?: string
    sourceUpdatedAt?: string | null
    _status?: "draft" | "published" | null
  }
}

export async function queryRoutedContentByPath(
  path: string,
  draft: boolean,
): Promise<RoutedContent | null> {
  const payload = await getCMS()
  const normalized = normalizePath(path)
  const where = { path: { equals: normalized } }

  for (const collection of ["pages", "posts"] as const) {
    const result = await payload.find({
      collection,
      where,
      draft,
      overrideAccess: draft,
      limit: 1,
      depth: 0,
      pagination: false,
    })
    const doc = result.docs[0]
    if (!doc) continue
    if (!draft && doc._status !== "published") continue
    return { collection, doc: doc as unknown as RoutedContent["doc"] }
  }

  return null
}
