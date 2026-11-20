import type { Metadata } from "next"
import { Fragment, isValidElement, type ReactNode } from "react"

import { getPostBySlug } from "@/lib/blog-posts"
import { mediaPublicURL } from "@/lib/cms/blog-index"
import { isBlogArticlePath, normalizePath, publicPath } from "@/lib/cms/paths"
import { SITE_ORIGIN } from "@/lib/site"

/**
 * Payload is the data plane. Designed routes always render their own
 * component. A CMS document may fill SEO and schema fields that are actually
 * set. It must not swap the page for the generic renderer.
 *
 * A published CMS `meta.title` is an absolute document title. The root layout
 * template (`%s | Synergy Spine & Nerve, Rio Rancho NM`) must not append the
 * brand, and the same string is used for og:title and twitter:title. Titles
 * that are not a published meta.title still pick up that template, unless
 * they already contain the suffix.
 */

export const TITLE_TEMPLATE = "%s | Synergy Spine & Nerve, Rio Rancho NM"
export const TITLE_SUFFIX = "Synergy Spine & Nerve, Rio Rancho NM"

/** Layout googleBot directives. Copied onto a robots override so they are not dropped. */
const LAYOUT_GOOGLE_BOT = {
  index: true,
  follow: true,
  "max-video-preview": -1,
  "max-image-preview": "large" as const,
  "max-snippet": -1,
}

export type RoutedDocLike = {
  collection: "pages" | "posts"
  doc: Record<string, unknown>
} | null

export type RoutedBody = "designed" | "generic" | "none"

type CmsImage = {
  url: string
  alt?: string
  width?: number
  height?: number
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value)
}

export function nonEmpty(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined
  const trimmed = value.trim()
  if (!trimmed || trimmed === "null" || trimmed === "undefined") return undefined
  return trimmed
}

function lexicalHasText(value: unknown): boolean {
  if (typeof value === "string") return Boolean(nonEmpty(value))
  if (Array.isArray(value)) return value.some((child) => lexicalHasText(child))
  if (!isRecord(value)) return false
  if (typeof value.text === "string" && value.text.trim()) return true
  if (Array.isArray(value.children) && value.children.some((child) => lexicalHasText(child))) {
    return true
  }
  if ("root" in value) return lexicalHasText(value.root)
  return false
}

function readImage(value: unknown): CmsImage | undefined {
  const url = mediaPublicURL(value)
  if (!url) return undefined
  if (!isRecord(value)) return { url }
  const alt = nonEmpty(value.alt)
  const width = typeof value.width === "number" ? value.width : undefined
  const height = typeof value.height === "number" ? value.height : undefined
  return { url, alt, width, height }
}

function absoluteCanonical(value: string): string {
  if (value.startsWith("https://") || value.startsWith("http://")) return value
  if (value.startsWith("/")) return `${SITE_ORIGIN}${publicPath(value)}`
  return value
}

function readJsonObject(value: unknown): Record<string, unknown> | undefined {
  if (typeof value === "string") {
    const trimmed = value.trim()
    if (!trimmed) return undefined
    try {
      return readJsonObject(JSON.parse(trimmed) as unknown)
    } catch {
      return undefined
    }
  }
  if (!isRecord(value) || Object.keys(value).length === 0) return undefined
  return value
}

export type CmsSeoFields = {
  title?: string
  description?: string
  image?: CmsImage
  canonicalUrl?: string
  schemaType?: string
  breadcrumbLabel?: string
  noIndex: boolean
  noFollow: boolean
  jsonLd?: Record<string, unknown>
}

export function readCmsSeo(doc: Record<string, unknown> | null | undefined): CmsSeoFields {
  const meta = isRecord(doc?.meta) ? doc.meta : {}
  const jsonLd =
    readJsonObject(meta.jsonLd) ??
    readJsonObject(meta.schema) ??
    readJsonObject(doc?.jsonLd) ??
    readJsonObject(doc?.schema)

  return {
    title: nonEmpty(meta.title),
    description: nonEmpty(meta.description),
    image: readImage(meta.image),
    canonicalUrl: nonEmpty(meta.canonicalUrl),
    schemaType: nonEmpty(meta.schemaType),
    breadcrumbLabel: nonEmpty(meta.breadcrumbLabel),
    noIndex: meta.noIndex === true,
    noFollow: meta.noFollow === true,
    jsonLd,
  }
}

function layoutBlockHasContent(doc: Record<string, unknown>): boolean {
  if (!Array.isArray(doc.layout)) return false
  return doc.layout.some((block) => {
    if (!isRecord(block)) return false
    const type = nonEmpty(block.blockType)
    if (type === "cta") {
      return Boolean(nonEmpty(block.heading) || nonEmpty(block.body) || nonEmpty(block.label))
    }
    if (type === "content") return lexicalHasText(block.body)
    return Object.entries(block).some(([key, value]) => {
      if (key === "blockType" || key === "id" || key === "blockName") return false
      return typeof value === "string" ? Boolean(nonEmpty(value)) : lexicalHasText(value)
    })
  })
}

/** Real body copy. A title alone, or whitespace in the rich text, is not content. */
export function docHasRenderableContent(doc: Record<string, unknown>): boolean {
  if (lexicalHasText(doc.content)) return true
  if (nonEmpty(doc.excerpt)) return true
  if (
    Array.isArray(doc.faqs) &&
    doc.faqs.some(
      (item) => isRecord(item) && (nonEmpty(item.question) || nonEmpty(item.answer)),
    )
  ) {
    return true
  }
  return layoutBlockHasContent(doc)
}

export function childrenAreDesigned(children: ReactNode): boolean {
  if (children == null || typeof children === "boolean") return false
  if (typeof children === "string") return children.trim().length > 0
  if (typeof children === "number") return true
  if (Array.isArray(children)) return children.some((child) => childrenAreDesigned(child))
  if (isValidElement(children) && children.type === Fragment) {
    const nested = (children.props as { children?: ReactNode }).children
    return childrenAreDesigned(nested)
  }
  return isValidElement(children)
}

/**
 * Designed pages win even when a published doc exists and its content is
 * empty or only a thin import. The generic renderer is reserved for paths
 * with no designed page and real content.
 */
export function selectRoutedBody(input: {
  hasDesignedPage: boolean
  doc: RoutedDocLike
}): RoutedBody {
  if (input.hasDesignedPage) return "designed"
  if (!input.doc) return "none"
  return docHasRenderableContent(input.doc.doc) ? "generic" : "none"
}

export function cmsOnlyDocIsRenderable(
  doc: RoutedDocLike,
): doc is NonNullable<RoutedDocLike> {
  return selectRoutedBody({ hasDesignedPage: false, doc }) === "generic"
}

export function pickRoutedNode(
  body: RoutedBody,
  designed: ReactNode,
  generic: ReactNode,
): ReactNode {
  if (body === "designed") return designed
  if (body === "generic") return generic
  return null
}

function mergeMappedFields(
  defaults: Record<string, unknown>,
  overlay: Record<string, unknown> | null | undefined,
): Record<string, unknown> {
  if (!overlay) return defaults
  const next: Record<string, unknown> = { ...defaults }
  for (const [key, value] of Object.entries(overlay)) {
    if (value == null) continue
    if (typeof value === "string" && value.trim() === "") continue
    if (Array.isArray(value) && value.length === 0) continue
    next[key] = value
  }
  return next
}

export function mergeCmsJsonLd<T extends Record<string, unknown>>(
  hardcoded: T,
  doc: Record<string, unknown> | null | undefined,
): T {
  if (!doc) return hardcoded
  const seo = readCmsSeo(doc)
  let next: Record<string, unknown> = seo.jsonLd
    ? mergeMappedFields({ ...hardcoded }, seo.jsonLd)
    : { ...hardcoded }

  const patch: Record<string, unknown> = {}
  if (seo.schemaType) patch["@type"] = seo.schemaType
  if (seo.title) {
    if ("headline" in hardcoded) patch.headline = seo.title
    if ("name" in hardcoded || !("headline" in hardcoded)) patch.name = seo.title
  }
  if (seo.description) patch.description = seo.description
  if (seo.canonicalUrl) {
    const href = absoluteCanonical(seo.canonicalUrl)
    patch.url = href
    if (typeof hardcoded["@id"] === "string" && hardcoded["@id"].endsWith("#cms")) {
      patch["@id"] = `${href}#cms`
    }
  }
  if (seo.breadcrumbLabel) patch.alternateName = seo.breadcrumbLabel
  if (seo.image) patch.image = seo.image.url
  next = mergeMappedFields(next, patch)
  return next as T
}

/**
 * Extra JSON-LD only when a schema field is actually stored.
 * SEO title and description stay in the head and do not add a script tag.
 */
export function cmsSchemaJsonLd(
  path: string,
  doc: Record<string, unknown> | null | undefined,
): Record<string, unknown> | null {
  if (!doc) return null
  const seo = readCmsSeo(doc)
  if (!seo.schemaType && !seo.breadcrumbLabel && !seo.jsonLd) return null
  const url = `${SITE_ORIGIN}${publicPath(path)}`
  return mergeCmsJsonLd(
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#cms`,
      url,
    },
    doc,
  )
}

/** Published `meta.title`. Absolute so the layout template does not append the brand. */
export function absoluteMetaTitle(cmsTitle: string): Metadata["title"] {
  return { absolute: cmsTitle }
}

/**
 * Document titles that are not a published meta.title still pick up the layout
 * template. A title that already contains the suffix stays absolute.
 */
export function titleForTemplate(title: string): Metadata["title"] {
  if (title.includes(TITLE_SUFFIX)) return { absolute: title }
  return title
}

/**
 * Set twitter:title to a published meta.title without replacing the layout
 * twitter object from a page. A page-level twitter object would drop the
 * shared twitter-image attached to the root layout.
 */
export function applyPublishedTwitterTitle(
  metadata: Metadata,
  cmsTitle: string | undefined,
): Metadata {
  const title = nonEmpty(cmsTitle)
  if (!title) return metadata
  const twitter = twitterRecord(metadata.twitter) ?? {}
  return {
    ...metadata,
    twitter: {
      ...twitter,
      title,
    } as Metadata["twitter"],
  }
}

/** Blog URL with no local article. Those posts use main's head, which has no googlebot tag. */
export function isCmsOnlyBlogPost(path: string): boolean {
  if (!isBlogArticlePath(path)) return false
  const slug = normalizePath(path).split("/").filter(Boolean)[1]
  if (!slug) return false
  return !getPostBySlug(slug)
}

function openGraphRecord(current: Metadata["openGraph"]): Record<string, unknown> | null {
  if (!current || typeof current !== "object" || Array.isArray(current)) return null
  return current as Record<string, unknown>
}

function twitterRecord(current: Metadata["twitter"]): Record<string, unknown> | null {
  if (!current || typeof current !== "object") return null
  return current as Record<string, unknown>
}

function existingOgImageUrl(current: Metadata["openGraph"]): string | undefined {
  const record = openGraphRecord(current)
  if (!record || !record.images) return undefined
  const images = record.images
  const first = Array.isArray(images) ? images[0] : images
  if (!first) return undefined
  if (typeof first === "string") return first
  if (first instanceof URL) return first.toString()
  if (typeof first === "object" && "url" in first && first.url) {
    const url = first.url
    return typeof url === "string" ? url : url instanceof URL ? url.toString() : undefined
  }
  return undefined
}

function patchOgImage(current: Metadata["openGraph"], image: CmsImage): Metadata["openGraph"] {
  const base = openGraphRecord(current) ?? {}
  const images = base.images
  const first = Array.isArray(images) ? images[0] : images
  const previous =
    first && typeof first === "object" && !(first instanceof URL) ? { ...first } : {}
  const nextImage = {
    ...previous,
    url: image.url,
    ...(image.alt ? { alt: image.alt } : {}),
    ...(image.width ? { width: image.width } : {}),
    ...(image.height ? { height: image.height } : {}),
  }
  return { ...base, images: [nextImage] } as Metadata["openGraph"]
}

function patchRobots(
  current: Metadata["robots"],
  noIndex: boolean,
  noFollow: boolean,
): Metadata["robots"] {
  const base = current && typeof current === "object" ? { ...current } : { index: true, follow: true }
  const previousBot =
    base.googleBot && typeof base.googleBot === "object" ? base.googleBot : LAYOUT_GOOGLE_BOT
  const googleBot = { ...previousBot }
  if (noIndex) {
    base.index = false
    googleBot.index = false
  }
  if (noFollow) {
    base.follow = false
    googleBot.follow = false
  }
  return { ...base, googleBot }
}

/**
 * Overlay only meta fields an editor actually set. Document title and excerpt
 * are not SEO fields. Unchecked robots flags leave the hardcoded robots and
 * googleBot tags unchanged. A published `meta.title` is absolute, and
 * `meta.description` is copied verbatim with no length clamp.
 */
export function mergeCmsMetadata(
  fallback: Metadata,
  doc: Record<string, unknown> | null | undefined,
): Metadata {
  if (!doc) return fallback
  const seo = readCmsSeo(doc)
  const imageIsNew = Boolean(seo.image && seo.image.url !== existingOgImageUrl(fallback.openGraph))
  if (
    !seo.title &&
    !seo.description &&
    !seo.canonicalUrl &&
    !imageIsNew &&
    !seo.noIndex &&
    !seo.noFollow
  ) {
    return fallback
  }

  let next: Metadata = fallback
  if (seo.title) {
    const openGraph = openGraphRecord(next.openGraph)
    const twitter = twitterRecord(next.twitter)
    next = {
      ...next,
      title: absoluteMetaTitle(seo.title),
      ...(openGraph ? { openGraph: { ...openGraph, title: seo.title } as Metadata["openGraph"] } : {}),
      ...(twitter ? { twitter: { ...twitter, title: seo.title } as Metadata["twitter"] } : {}),
    }
  }
  if (seo.description) {
    const openGraph = openGraphRecord(next.openGraph)
    const twitter = twitterRecord(next.twitter)
    next = {
      ...next,
      description: seo.description,
      ...(openGraph
        ? { openGraph: { ...openGraph, description: seo.description } as Metadata["openGraph"] }
        : {}),
      ...(twitter
        ? { twitter: { ...twitter, description: seo.description } as Metadata["twitter"] }
        : {}),
    }
  }
  if (seo.canonicalUrl) {
    const href = absoluteCanonical(seo.canonicalUrl)
    const openGraph = openGraphRecord(next.openGraph)
    const alternates =
      next.alternates && typeof next.alternates === "object" ? next.alternates : {}
    next = {
      ...next,
      alternates: { ...alternates, canonical: href },
      ...(openGraph ? { openGraph: { ...openGraph, url: href } as Metadata["openGraph"] } : {}),
    }
  }
  if (seo.image && imageIsNew) {
    const twitter = twitterRecord(next.twitter)
    next = {
      ...next,
      openGraph: patchOgImage(next.openGraph, seo.image),
      ...(twitter
        ? { twitter: { ...twitter, images: [seo.image.url] } as Metadata["twitter"] }
        : {}),
    }
  }
  if (seo.noIndex || seo.noFollow) {
    next = { ...next, robots: patchRobots(next.robots, seo.noIndex, seo.noFollow) }
  }
  return next
}

/**
 * Head for a CMS-only blog post. Matches main: title and description may fall
 * back to the document title and excerpt, canonical is always set, and robots
 * is only index/follow so the layout googlebot tag is not emitted.
 * A published meta.title is absolute. The document-title fallback still uses
 * the layout template.
 */
export function mergeCmsOnlyPostHead(
  fallback: Metadata,
  doc: Record<string, unknown> | null | undefined,
  path: string,
): Metadata {
  if (!doc) return fallback
  const meta = isRecord(doc.meta) ? doc.meta : {}
  const metaTitle = typeof meta.title === "string" && meta.title ? meta.title : undefined
  const fallbackTitle =
    !metaTitle && typeof doc.title === "string" && doc.title ? doc.title : undefined
  const socialTitle = metaTitle || fallbackTitle
  const description =
    (typeof meta.description === "string" && meta.description) ||
    (typeof doc.excerpt === "string" && doc.excerpt) ||
    undefined
  const canonical =
    (typeof meta.canonicalUrl === "string" && meta.canonicalUrl) ||
    `${SITE_ORIGIN}${publicPath(path)}`
  const alternates =
    fallback.alternates && typeof fallback.alternates === "object" ? fallback.alternates : {}
  const openGraph =
    fallback.openGraph && typeof fallback.openGraph === "object" && !Array.isArray(fallback.openGraph)
      ? fallback.openGraph
      : {}

  return {
    ...fallback,
    ...(metaTitle
      ? { title: absoluteMetaTitle(metaTitle) }
      : fallbackTitle
        ? { title: titleForTemplate(fallbackTitle) }
        : {}),
    ...(description ? { description } : {}),
    alternates: { ...alternates, canonical },
    openGraph: {
      ...openGraph,
      ...(socialTitle ? { title: socialTitle } : {}),
      ...(description ? { description } : {}),
      url: canonical,
    } as Metadata["openGraph"],
    robots: {
      index: meta.noIndex !== true,
      follow: meta.noFollow !== true,
    },
  }
}

/** Base head for a CMS-only path. Designed pages pass their own fallback instead. */
export function cmsOnlyFallbackMetadata(doc: Record<string, unknown>): Metadata {
  const title = nonEmpty(doc.title) || "Page"
  const description = nonEmpty(doc.excerpt)
  return {
    title,
    ...(description ? { description } : {}),
    openGraph: {
      title,
      ...(description ? { description } : {}),
      type: "website",
      siteName: "Synergy Spine and Nerve Center",
    },
  }
}
