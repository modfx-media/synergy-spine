import fs from "node:fs"
import path from "node:path"

import { CATEGORIES, categorySlug } from "@/lib/blog-posts"
import { normalizePath } from "@/lib/cms/paths"
import { CITIES } from "@/lib/programmatic/cities"
import { SERVICES } from "@/lib/programmatic/services"
import { getPublishedBlogPosts } from "@/lib/ranked/posts"
import { CHIROPRACTIC_SERVICES, MASSAGE_SERVICES } from "@/lib/services-catalog"
import {
  RESERVED_PROGRAMMATIC_SLUGS,
  STATIC_PUBLIC_PATHS,
} from "@/lib/seo/public-paths"

export type ExpectedKind = "page" | "post" | "programmatic" | "service" | "category" | "blog-page"

export type ExpectedPath = {
  path: string
  kind: ExpectedKind
}

const POSTS_PER_PAGE = 12

function walkPages(dir: string, parts: string[] = []): string[] {
  if (!fs.existsSync(dir)) return []
  const found: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith("[")) continue
    if (entry.name === "next" || entry.name === "api") continue
    if (entry.isDirectory()) {
      const nextParts = entry.name.startsWith("(") ? parts : [...parts, entry.name]
      found.push(...walkPages(path.join(dir, entry.name), nextParts))
      continue
    }
    if (entry.name === "page.tsx") {
      found.push(parts.length ? `/${parts.join("/")}` : "/")
    }
  }
  return found
}

export async function collectExpectedPaths(): Promise<ExpectedPath[]> {
  const kinds = new Map<string, ExpectedKind>()
  const add = (value: string, kind: ExpectedKind) => {
    const key = normalizePath(value)
    if (!kinds.has(key)) kinds.set(key, kind)
  }

  const siteDir = path.join(process.cwd(), "app", "(site)")
  for (const pagePath of walkPages(siteDir)) add(pagePath, "page")
  for (const pagePath of STATIC_PUBLIC_PATHS) add(pagePath, "page")
  for (const service of CHIROPRACTIC_SERVICES) {
    add(`/services/chiropractic/${service.slug}`, "service")
  }
  for (const service of MASSAGE_SERVICES) {
    add(`/services/massage/${service.slug}`, "service")
  }
  for (const service of SERVICES) {
    for (const city of CITIES) {
      const slug = `${service.slug}-${city.slug}-nm`
      if (RESERVED_PROGRAMMATIC_SLUGS.has(slug)) continue
      add(`/${slug}`, "programmatic")
    }
  }
  for (const category of CATEGORIES) add(`/category/${categorySlug(category)}`, "category")

  const posts = await getPublishedBlogPosts().catch(() => [])
  for (const post of posts) add(`/blog/${post.slug}`, "post")
  const pages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE))
  for (let i = 2; i <= pages; i += 1) add(`/blog/page/${i}`, "blog-page")

  return [...kinds.entries()]
    .map(([pagePath, kind]) => ({ path: pagePath, kind }))
    .sort((a, b) => a.path.localeCompare(b.path))
}
