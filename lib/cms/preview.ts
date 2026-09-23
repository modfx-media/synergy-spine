import { previewFromPath } from "@/lib/cms/paths"
import { serverURL } from "@/lib/cms/server-url"

export function previewURL(path: unknown): string | null {
  const safePath = previewFromPath(path)
  const secret = process.env.PREVIEW_SECRET
  if (!safePath || !secret) return null
  const params = new URLSearchParams({
    path: safePath,
    previewSecret: secret,
  })
  return `${serverURL()}/next/preview?${params.toString()}`
}
