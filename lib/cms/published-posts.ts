import { cache } from "react"

import type { Post } from "@/payload-types"
import { cmsArticleFromDoc, mergeBlogPosts, type CmsArticle } from "@/lib/cms/blog-index"
import { cmsConfigured, getCMS } from "@/lib/cms/queries"
import { withCMS } from "@/lib/cms/safe"
import type { BlogPost } from "@/lib/blog-posts"
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

async function hydrateLexicalMedia(content: unknown): Promise<void> {
  const ids: Array<number | string> = []
  const pending: UploadNode[] = []
  collectUploadIds(content, ids, pending)
  if (!ids.length) return

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

function articleFromPost(doc: Post): CmsArticle | null {
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
    meta: doc.meta,
  })
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
  if (doc.meta?.image && (typeof doc.meta.image === "number" || typeof doc.meta.image === "string")) {
    const media = await payload.findByID({
      collection: "media",
      id: doc.meta.image,
      depth: 0,
      disableErrors: true,
    })
    if (media) doc.meta.image = media
  }
  return articleFromPost(doc)
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
    const article = articleFromPost(doc)
    if (article) articles.push(article)
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
