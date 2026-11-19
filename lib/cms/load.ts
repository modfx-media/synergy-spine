import { draftMode } from "next/headers"

import { cmsConfigured, queryRoutedContentByPath, type RoutedContent } from "@/lib/cms/queries"
import { withCMS } from "@/lib/cms/safe"

/** Published doc on the public site. Draft versions only when preview mode is on. */
export async function loadRoutedContent(path: string): Promise<RoutedContent | null> {
  if (!cmsConfigured()) return null
  let draft = false
  try {
    draft = (await draftMode()).isEnabled
  } catch {
    draft = false
  }
  return withCMS(() => queryRoutedContentByPath(path, draft), null)
}
