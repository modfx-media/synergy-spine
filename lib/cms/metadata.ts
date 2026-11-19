import type { Metadata } from "next"

import { loadRoutedContent } from "@/lib/cms/load"
import { isCmsOnlyBlogPost, mergeCmsMetadata, mergeCmsOnlyPostHead } from "@/lib/cms/mergeDesigned"
import { cmsConfigured } from "@/lib/cms/queries"
import { withCMS } from "@/lib/cms/safe"

export async function withCMSMetadata(path: string, fallback: Metadata): Promise<Metadata> {
  if (!cmsConfigured()) return fallback
  return withCMS(async () => {
    const routed = await loadRoutedContent(path)
    if (!routed) return fallback
    if (isCmsOnlyBlogPost(path)) return mergeCmsOnlyPostHead(fallback, routed.doc, path)
    return mergeCmsMetadata(fallback, routed.doc)
  }, fallback)
}
