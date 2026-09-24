import { draftMode } from "next/headers"
import { redirect } from "next/navigation"
import { getPayload } from "payload"
import type { NextRequest } from "next/server"

import config from "@/payload.config"
import { previewFromPath, publicPath } from "@/lib/cms/paths"

export async function GET(req: NextRequest): Promise<Response> {
  const path = req.nextUrl.searchParams.get("path")
  const previewSecret = req.nextUrl.searchParams.get("previewSecret")

  if (!process.env.PREVIEW_SECRET || previewSecret !== process.env.PREVIEW_SECRET) {
    return new Response("You are not allowed to preview this page", { status: 403 })
  }

  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: req.headers })
  if (!user) {
    return new Response("You are not allowed to preview this page", { status: 403 })
  }

  const safePath = previewFromPath(path)
  if (!safePath) {
    return new Response("Invalid preview path", { status: 404 })
  }

  const draft = await draftMode()
  draft.enable()
  redirect(publicPath(safePath))
}
