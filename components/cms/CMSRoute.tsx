import { draftMode } from "next/headers"
import type { ReactNode } from "react"

import { LivePreviewListener } from "@/components/cms/LivePreviewListener"
import { RenderRoutedContent } from "@/components/cms/RenderRoutedContent"
import { isBlogArticlePath, normalizePath } from "@/lib/cms/paths"
import { cmsConfigured, queryRoutedContentByPath } from "@/lib/cms/queries"
import { withCMS } from "@/lib/cms/safe"

export async function CMSRoute({
  path,
  children,
}: {
  path: string
  children: ReactNode
}) {
  if (!cmsConfigured()) return children

  const draft = await draftMode()
  // Blog articles render in the designed post template, which loads CMS content itself.
  if (isBlogArticlePath(path)) {
    return (
      <>
        {draft.isEnabled ? <LivePreviewListener /> : null}
        {children}
      </>
    )
  }

  const routed = await withCMS(
    () => queryRoutedContentByPath(normalizePath(path), draft.isEnabled),
    null,
  )

  if (!routed) return children

  return (
    <>
      {draft.isEnabled ? <LivePreviewListener /> : null}
      <RenderRoutedContent doc={routed.doc} />
    </>
  )
}
