import type { BlogCategory, BlogPost } from "@/lib/blog-posts"
import { CATEGORIES } from "@/lib/blog-posts"
import { normalizePath } from "@/lib/cms/paths"
import { formatBlogDate, inferCategory } from "@/lib/ranked/ui"

export type CmsPostSource = {
  title?: string | null
  slug?: string | null
  path?: string | null
  publishedAt?: string | null
  updatedAt?: string | null
  createdAt?: string | null
  author?: string | null
  category?: string | null
  excerpt?: string | null
  heroHeading?: string | null
  content?: unknown
  meta?: {
    title?: string | null
    description?: string | null
    image?: unknown
  } | null
}

export type CmsArticle = BlogPost & {
  author: string
  content: unknown
}

type LexicalNode = {
  type?: string
  text?: string
  children?: unknown[]
  value?: unknown
  fields?: { alt?: string | null }
  root?: unknown
}

/** Public media URL. Local `/media/...` files 404 on Vercel, so they are dropped. */
export function mediaPublicURL(value: unknown): string | null {
  const raw =
    typeof value === "string"
      ? value
      : value && typeof value === "object" && "url" in value && typeof value.url === "string"
        ? value.url
        : ""
  const url = raw.trim()
  if (!url || url.startsWith("/media/") || url.startsWith("media/")) return null
  if (url.startsWith("/")) return url
  try {
    const parsed = new URL(url)
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return null
    return url
  } catch {
    return null
  }
}

export function blogSlugFromDoc(doc: { slug?: string | null; path?: string | null }): string | null {
  const path = typeof doc.path === "string" ? normalizePath(doc.path) : ""
  const parts = path.split("/").filter(Boolean)
  if (parts[0] === "blog" && parts.length === 2 && parts[1] && parts[1] !== "page") {
    return parts[1]
  }
  const slug = typeof doc.slug === "string" ? doc.slug.trim() : ""
  if (!slug || slug === "null" || slug === "undefined") return null
  return slug
}

function collectNodes(node: unknown, visit: (node: LexicalNode) => void) {
  if (!node || typeof node !== "object") return
  const record = node as LexicalNode
  if (record.root) {
    collectNodes(record.root, visit)
    return
  }
  visit(record)
  if (Array.isArray(record.children)) {
    for (const child of record.children) collectNodes(child, visit)
  }
}

export function lexicalPlainText(content: unknown): string {
  const parts: string[] = []
  collectNodes(content, (node) => {
    if (typeof node.text === "string" && node.text.trim()) parts.push(node.text.trim())
  })
  return parts.join(" ")
}

export function readTimeFromText(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const mins = Math.max(1, Math.round(words / 200) || 1)
  return `${mins} min read`
}

function categoryFrom(raw: string | null | undefined, title: string, slug: string): BlogCategory {
  const trimmed = raw?.trim() ?? ""
  const match = CATEGORIES.find((category) => category.toLowerCase() === trimmed.toLowerCase())
  if (match) return match
  const inferred = inferCategory(title, slug)
  if ((CATEGORIES as readonly string[]).includes(inferred)) return inferred
  return "Chiropractic Care"
}

function isoDay(doc: CmsPostSource): string {
  const raw = doc.publishedAt || doc.updatedAt || doc.createdAt || ""
  const date = new Date(raw)
  if (Number.isNaN(date.getTime())) return "1970-01-01"
  return date.toISOString().slice(0, 10)
}

function firstInlineImage(content: unknown): { url: string; alt: string } | null {
  let found: { url: string; alt: string } | null = null
  collectNodes(content, (node) => {
    if (found || node.type !== "upload") return
    const url = mediaPublicURL(node.value)
    if (!url) return
    const media =
      node.value && typeof node.value === "object"
        ? (node.value as { alt?: string; mimeType?: string })
        : null
    if (media?.mimeType && !media.mimeType.startsWith("image/")) return
    found = { url, alt: node.fields?.alt || media?.alt || "" }
  })
  return found
}

export function cmsArticleFromDoc(doc: CmsPostSource): CmsArticle | null {
  const slug = blogSlugFromDoc(doc)
  const title = (doc.title || doc.meta?.title || "").trim()
  if (!slug || !title) return null

  const text = lexicalPlainText(doc.content)
  const explicit = (doc.excerpt || doc.meta?.description || "").trim()
  const excerpt = explicit || (text.length > 180 ? `${text.slice(0, 177).trimEnd()}...` : text)
  const featured = mediaPublicURL(doc.meta?.image)
  const inline = featured ? null : firstInlineImage(doc.content)
  const featureImage = featured || inline?.url || null
  const mediaAlt =
    doc.meta?.image && typeof doc.meta.image === "object" && "alt" in doc.meta.image
      ? doc.meta.image.alt
      : ""
  const coverAlt =
    (featured && typeof mediaAlt === "string" && mediaAlt.trim()) || inline?.alt || title
  const isoDate = isoDay(doc)

  return {
    slug,
    title,
    excerpt: excerpt || title,
    category: categoryFrom(doc.category, title, slug),
    date: formatBlogDate(isoDate),
    isoDate,
    readTime: readTimeFromText(text || excerpt || title),
    featureImage,
    h1: (doc.heroHeading || title).trim(),
    coverAlt,
    author: (doc.author || "").trim() || "Dr. Brad Fackrell",
    content: doc.content ?? null,
  }
}

/** Hardcoded and Ranked cards stay. Published CMS posts fill in missing slugs. */
export function mergeBlogPosts(fallback: BlogPost[], cmsPosts: BlogPost[]): BlogPost[] {
  const seen = new Set(fallback.map((post) => post.slug))
  const merged = [...fallback]
  for (const post of cmsPosts) {
    if (!post.slug || seen.has(post.slug)) continue
    seen.add(post.slug)
    merged.push(post)
  }
  return merged.sort((a, b) => b.isoDate.localeCompare(a.isoDate) || a.slug.localeCompare(b.slug))
}
