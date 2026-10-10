import { cache } from "react"
import { BlobNotFoundError, head } from "@vercel/blob"

import type { Post } from "@/payload-types"
import { cmsArticleFromDoc, mergeBlogPosts, type CmsArticle } from "@/lib/cms/blog-index"
import { cmsConfigured, getCMS } from "@/lib/cms/queries"
import { withCMS } from "@/lib/cms/safe"
import type { BlogPost } from "@/lib/blog-posts"
import { isLivePublishDay } from "@/lib/ranked/html-to-post"
import { getPublishedBlogPosts } from "@/lib/ranked/posts"
import { toBlogPosts } from "@/lib/ranked/ui"

type UploadNode = {
  type?: string
  value?: unknown
  children?: unknown[]
  root?: unknown
}

function collectUploadIds(node: unknown, ids: Array<number | string>, pending: UploadNode[]) {
  if (!node || typeof node !== "object") return
  const record = node as UploadNode
  if (record.root) {
    collectUploadIds(record.root, ids, pending)
    return
  }
  if (
    record.type === "upload" &&
    (typeof record.value === "number" || typeof record.value === "string")
  ) {
    ids.push(record.value)
    pending.push(record)
  }
  if (Array.isArray(record.children)) {
    for (const child of record.children) collectUploadIds(child, ids, pending)
  }
}

function mediaFilename(value: unknown): string | null {
  if (typeof value === "string") {
    const name = value.split("?")[0]?.split("/").pop() ?? ""
    return name.includes(".") ? decodeURIComponent(name) : null
  }
  if (!value || typeof value !== "object") return null
  const record = value as { filename?: unknown; url?: unknown }
  if (typeof record.filename === "string" && record.filename.trim()) return record.filename.trim()
  if (typeof record.url !== "string") return null
  const name = record.url.split("?")[0]?.split("/").pop() ?? ""
  return name.includes(".") ? decodeURIComponent(name) : null
}

function needsBlobLookup(value: unknown): boolean {
  if (typeof value === "string") {
    return value.startsWith("/media/") || value.startsWith("media/") || value.includes("/api/media/file/")
  }
  if (!value || typeof value !== "object") return false
  const url = "url" in value && typeof value.url === "string" ? value.url : ""
  if (url.startsWith("https://") || url.startsWith("http://")) return false
  if (url.startsWith("/") && !url.startsWith("/media/") && !url.startsWith("/api/media/file/")) return false
  return Boolean(mediaFilename(value))
}

async function blobURLForFilename(filename: string): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null
  for (const key of [filename, `media/${filename}`]) {
    try {
      const meta = await head(key)
      if (meta.url) return meta.url
    } catch (error) {
      if (!(error instanceof BlobNotFoundError)) return null
    }
  }
  return null
}

/** Point a Payload `/media` file at its public blob URL so next/image can render it on Vercel. */
async function resolveMediaValue(value: unknown): Promise<unknown> {
  if (!needsBlobLookup(value)) return value
  const filename = mediaFilename(value)
  if (!filename) return value
  const blob = await blobURLForFilename(filename)
  if (!blob) return value
  if (typeof value === "string" || !value || typeof value !== "object") return blob
  return { ...value, url: blob }
}

function walkUploads(node: unknown, visit: (node: UploadNode) => void) {
  if (!node || typeof node !== "object") return
  const record = node as UploadNode
  if (record.root) {
    walkUploads(record.root, visit)
    return
  }
  if (record.type === "upload") visit(record)
  if (Array.isArray(record.children)) {
    for (const child of record.children) walkUploads(child, visit)
  }
}

async function hydrateLexicalMedia(content: unknown): Promise<void> {
  const ids: Array<number | string> = []
  const pending: UploadNode[] = []
  collectUploadIds(content, ids, pending)
  if (ids.length) {
    const payload = await getCMS()
    const media = await payload.find({
      collection: "media",
      where: { id: { in: ids } },
      depth: 0,
      limit: ids.length,
      pagination: false,
    })
    const byId = new Map(media.docs.map((doc) => [String(doc.id), doc]))
    for (const node of pending) {
      const doc = byId.get(String(node.value))
      if (doc) node.value = doc
    }
  }
  await promoteUploadURLs(content)
}

async function promoteUploadURLs(content: unknown): Promise<void> {
  const uploads: UploadNode[] = []
  walkUploads(content, (node) => uploads.push(node))
  await Promise.all(
    uploads.map(async (node) => {
      node.value = await resolveMediaValue(node.value)
    }),
  )
}

function articleFromPost(doc: Post, image?: unknown): CmsArticle | null {
  return cmsArticleFromDoc({
    title: doc.title,
    slug: doc.slug,
    path: doc.path,
    publishedAt: doc.publishedAt,
    updatedAt: doc.updatedAt,
    createdAt: doc.createdAt,
    author: doc.author,
    category: doc.category,
    excerpt: doc.excerpt,
    heroHeading: doc.heroHeading,
    content: doc.content,
    meta: doc.meta ? { ...doc.meta, image } : doc.meta,
  })
}

async function featuredImage(doc: Post): Promise<unknown> {
  let image: unknown = doc.meta?.image
  if (typeof image === "number" || (typeof image === "string" && /^\d+$/.test(image))) {
    const payload = await getCMS()
    const media = await payload.findByID({
      collection: "media",
      id: image,
      depth: 0,
      disableErrors: true,
    })
    if (media) image = media
  }
  return resolveMediaValue(image)
}

export const getCMSBlogPost = cache(async (slug: string, draft: boolean): Promise<CmsArticle | null> => {
  if (!cmsConfigured()) return null
  const payload = await getCMS()
  const result = await payload.find({
    collection: "posts",
    where: {
      or: [{ slug: { equals: slug } }, { path: { equals: `/blog/${slug}` } }],
    },
    draft,
    overrideAccess: draft,
    depth: 2,
    limit: 1,
    pagination: false,
  })
  const doc = result.docs[0]
  if (!doc) return null
  if (!draft && doc._status !== "published") return null
  await hydrateLexicalMedia(doc.content)
  const article = articleFromPost(doc, await featuredImage(doc))
  if (!article) return null
  if (!draft && !isLivePublishDay(article.isoDate)) return null
  return article
})

async function listPublishedCMSArticles(): Promise<CmsArticle[]> {
  const payload = await getCMS()
  const result = await payload.find({
    collection: "posts",
    where: { _status: { equals: "published" } },
    sort: "-publishedAt",
    depth: 2,
    limit: 200,
    pagination: false,
  })
  const articles: CmsArticle[] = []
  for (const doc of result.docs) {
    if (doc._status !== "published") continue
    await hydrateLexicalMedia(doc.content)
    const article = articleFromPost(doc, await featuredImage(doc))
    if (article && isLivePublishDay(article.isoDate)) articles.push(article)
  }
  return articles
}

export const getSiteBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const fallback = toBlogPosts(await getPublishedBlogPosts().catch(() => []))
  if (!cmsConfigured()) return fallback
  return withCMS(async () => {
    const cmsPosts = await listPublishedCMSArticles()
    return mergeBlogPosts(fallback, cmsPosts)
  }, fallback)
})
