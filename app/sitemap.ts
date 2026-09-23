import type { MetadataRoute } from "next"
import { CATEGORIES, categorySlug, POSTS } from "@/lib/blog-posts"
import { CITIES } from "@/lib/programmatic/cities"
import { SERVICES } from "@/lib/programmatic/services"
import { CHIROPRACTIC_SERVICES, MASSAGE_SERVICES } from "@/lib/services-catalog"
import { getPublishedBlogPosts } from "@/lib/ranked/posts"
import { toBlogPosts } from "@/lib/ranked/ui"
import { getPublishedSitemapMeta } from "@/lib/cms/sitemap"
import { normalizePath, publicPath } from "@/lib/cms/paths"
import { SITE_ORIGIN as BASE_URL } from "@/lib/site"
import {
  PRIORITY_0_6,
  PRIORITY_0_7,
  PRIORITY_0_8,
  PRIORITY_0_9,
  PRIORITY_1_0,
  RESERVED_PROGRAMMATIC_SLUGS,
  WEEKLY_PATHS,
} from "@/lib/seo/public-paths"

const POSTS_PER_PAGE = 12

type Entry = MetadataRoute.Sitemap[number]

function buildEntries(paths: string[], priority: number, lastModified: Date): Entry[] {
  return paths.map((path) => ({
    url: `${BASE_URL}${publicPath(path)}`,
    lastModified,
    changeFrequency: WEEKLY_PATHS.has(path) ? "weekly" : "monthly",
    priority,
  }))
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()
  const published = toBlogPosts(await getPublishedBlogPosts().catch(() => []))
  const listing = published.length ? published : POSTS
  const cms = await getPublishedSitemapMeta()

  const blogPostEntries: Entry[] = listing.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}/`,
    lastModified: new Date(p.isoDate),
    changeFrequency: "weekly",
    priority: 0.5,
  }))

  const categoryEntries: Entry[] = CATEGORIES.map((c) => ({
    url: `${BASE_URL}/category/${categorySlug(c)}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }))

  const totalBlogPages = Math.max(1, Math.ceil(listing.length / POSTS_PER_PAGE))
  const blogPaginationEntries: Entry[] = []
  for (let i = 2; i <= totalBlogPages; i++) {
    blogPaginationEntries.push({
      url: `${BASE_URL}/blog/page/${i}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    })
  }

  const programmaticEntries: Entry[] = []
  for (const service of SERVICES) {
    for (const city of CITIES) {
      const slug = `${service.slug}-${city.slug}-nm`
      if (RESERVED_PROGRAMMATIC_SLUGS.has(slug)) continue
      programmaticEntries.push({
        url: `${BASE_URL}/${slug}/`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.5,
      })
    }
  }

  const serviceDetailEntries: Entry[] = [
    ...CHIROPRACTIC_SERVICES.map((s) => ({
      url: `${BASE_URL}/services/chiropractic/${s.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...MASSAGE_SERVICES.map((s) => ({
      url: `${BASE_URL}/services/massage/${s.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]

  const entries = [
    ...buildEntries(PRIORITY_1_0, 1.0, lastModified),
    ...buildEntries(PRIORITY_0_9, 0.9, lastModified),
    ...buildEntries(PRIORITY_0_8, 0.8, lastModified),
    ...buildEntries(PRIORITY_0_7, 0.7, lastModified),
    ...buildEntries(PRIORITY_0_6, 0.6, lastModified),
    ...serviceDetailEntries,
    ...categoryEntries,
    ...blogPaginationEntries,
    ...blogPostEntries,
    ...programmaticEntries,
  ]

  const known = new Set<string>()
  const filtered = entries.flatMap((entry) => {
    const path = normalizePath(new URL(entry.url).pathname)
    known.add(path)
    const row = cms.get(path)
    if (row?.skip) return []
    if (row?.updatedAt) {
      const updated = new Date(row.updatedAt)
      if (!Number.isNaN(updated.getTime())) {
        return [{ ...entry, lastModified: updated }]
      }
    }
    return [entry]
  })

  for (const [path, row] of cms) {
    if (row.skip || known.has(path)) continue
    const updated = row.updatedAt ? new Date(row.updatedAt) : lastModified
    filtered.push({
      url: `${BASE_URL}${publicPath(path)}`,
      lastModified: Number.isNaN(updated.getTime()) ? lastModified : updated,
      changeFrequency: "monthly",
      priority: 0.5,
    })
  }

  return filtered
}
