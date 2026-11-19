import { draftMode } from "next/headers"
import type { ReactNode } from "react"

import { LivePreviewListener } from "@/components/cms/LivePreviewListener"
import { RenderRoutedContent } from "@/components/cms/RenderRoutedContent"
import { loadRoutedContent } from "@/lib/cms/load"
import {
  childrenAreDesigned,
  cmsSchemaJsonLd,
  pickRoutedNode,
  selectRoutedBody,
} from "@/lib/cms/mergeDesigned"
import { isBlogArticlePath, normalizePath } from "@/lib/cms/paths"
import { cmsConfigured } from "@/lib/cms/queries"

function schemaScript(path: string, doc: Record<string, unknown> | undefined) {
  if (!doc) return null
  const data = cmsSchemaJsonLd(path, doc)
  if (!data) return null
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

export async function CMSRoute({
  path,
  children,
}: {
  path: string
  children: ReactNode
}) {
  if (!cmsConfigured()) return children

  const draft = await draftMode()
  const listener = draft.isEnabled ? <LivePreviewListener /> : null
  const normalized = normalizePath(path)

  // Blog articles render in the designed post template, which loads CMS content itself.
  if (isBlogArticlePath(normalized)) {
    return (
      <>
        {listener}
        {children}
      </>
    )
  }

  const routed = await loadRoutedContent(normalized)
  // Designed routes always render `children`, in draft preview and after publish.
  // A CMS doc contributes SEO and schema only. The generic renderer is for
  // CMS-only paths whose document actually has content.
  const body = selectRoutedBody({
    hasDesignedPage: childrenAreDesigned(children),
    doc: routed,
  })
  const generic =
    routed && body === "generic" ? <RenderRoutedContent doc={routed.doc} /> : null

  return (
    <>
      {listener}
      {body === "designed" ? schemaScript(normalized, routed?.doc) : null}
      {pickRoutedNode(body, children, generic)}
    </>
  )
}
