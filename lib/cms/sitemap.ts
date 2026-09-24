import { unstable_cache } from "next/cache"

import { cmsConfigured, getCMS, type RoutedContent } from "@/lib/cms/queries"
import { normalizePath } from "@/lib/cms/paths"
import { withCMS } from "@/lib/cms/safe"

export type SitemapMeta = {
  updatedAt?: string
  skip: boolean
}

async function loadPublishedSitemapMeta(): Promise<Map<string, SitemapMeta>> {
  const payload = await getCMS()
  const map = new Map<string, SitemapMeta>()

  for (const collection of ["pages", "posts"] as const) {
    let page = 1
    while (page < 200) {
      const result = await payload.find({
        collection,
        where: { _status: { equals: "published" } },
        limit: 200,
        page,
        depth: 0,
        overrideAccess: true,
        pagination: true,
      })
      for (const doc of result.docs as unknown as RoutedContent["doc"][]) {
        if (typeof doc.path !== "string" || !doc.path) continue
        const meta = doc.meta
        const updated = doc.sourceUpdatedAt || doc.updatedAt
        map.set(normalizePath(doc.path), {
          updatedAt: updated ? String(updated) : undefined,
          skip: Boolean(meta?.noIndex || meta?.excludeFromSitemap),
        })
      }
      if (!result.hasNextPage) break
      page += 1
    }
  }

  return map
}

const cachedSitemapMeta = unstable_cache(loadPublishedSitemapMeta, ["cms-sitemap-meta"], {
  revalidate: 3600,
})

export function getPublishedSitemapMeta(): Promise<Map<string, SitemapMeta>> {
  if (!cmsConfigured()) return Promise.resolve(new Map())
  return withCMS(() => cachedSitemapMeta(), new Map())
}
