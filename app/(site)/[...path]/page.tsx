import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { RenderRoutedContent } from "@/components/cms/RenderRoutedContent"
import { loadRoutedContent } from "@/lib/cms/load"
import { cmsOnlyDocIsRenderable, cmsOnlyFallbackMetadata } from "@/lib/cms/mergeDesigned"
import { withCMSMetadata } from "@/lib/cms/metadata"
import { normalizePath } from "@/lib/cms/paths"

type Params = { path: string[] }

function pathnameFrom(parts: string[]): string {
  return normalizePath(`/${parts.join("/")}`)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { path } = await params
  const pathname = pathnameFrom(path)
  const routed = await loadRoutedContent(pathname)
  if (!cmsOnlyDocIsRenderable(routed)) {
    return { title: "Page not found", robots: { index: false, follow: true } }
  }
  return withCMSMetadata(pathname, cmsOnlyFallbackMetadata(routed.doc))
}

export default async function CmsOnlyPage({ params }: { params: Promise<Params> }) {
  const { path } = await params
  const pathname = pathnameFrom(path)
  const routed = await loadRoutedContent(pathname)
  if (!cmsOnlyDocIsRenderable(routed)) notFound()
  return <RenderRoutedContent doc={routed.doc} />
}
