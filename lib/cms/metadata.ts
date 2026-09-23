import type { Metadata } from "next"
import { draftMode } from "next/headers"

import { publicPath } from "@/lib/cms/paths"
import { cmsConfigured, queryRoutedContentByPath } from "@/lib/cms/queries"
import { withCMS } from "@/lib/cms/safe"
import { SITE_ORIGIN } from "@/lib/site"

export async function withCMSMetadata(path: string, fallback: Metadata): Promise<Metadata> {
  if (!cmsConfigured()) return fallback
  return withCMS(async () => {
    const draft = await draftMode()
    const routed = await queryRoutedContentByPath(path, draft.isEnabled)
    if (!routed) return fallback

    const meta = routed.doc.meta
    const title = meta?.title || routed.doc.title || undefined
    const description = meta?.description || routed.doc.excerpt || undefined
    const canonical = meta?.canonicalUrl || `${SITE_ORIGIN}${publicPath(path)}`
    const alternates =
      fallback.alternates && typeof fallback.alternates === "object" ? fallback.alternates : {}
    const openGraph =
      fallback.openGraph && typeof fallback.openGraph === "object" ? fallback.openGraph : {}

    return {
      ...fallback,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      alternates: { ...alternates, canonical },
      openGraph: {
        ...openGraph,
        ...(title ? { title } : {}),
        ...(description ? { description } : {}),
        url: canonical,
      },
      robots: {
        index: !meta?.noIndex,
        follow: meta?.noFollow ? false : true,
      },
    }
  }, fallback)
}
