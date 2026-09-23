import { NextResponse, type NextRequest } from "next/server"

import { normalizePath } from "@/lib/cms/paths"

function isPayloadPath(pathname: string): boolean {
  return (
    pathname === "/admin" ||
    pathname.startsWith("/admin/") ||
    pathname === "/api" ||
    pathname.startsWith("/api/")
  )
}

function isPublicPage(pathname: string): boolean {
  if (isPayloadPath(pathname)) return false
  if (pathname.startsWith("/_next")) return false
  if (pathname.startsWith("/next/preview")) return false
  return !pathname.includes(".")
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (isPublicPage(pathname) && pathname !== "/" && !pathname.endsWith("/")) {
    const url = request.nextUrl.clone()
    url.pathname = `${pathname}/`
    return NextResponse.redirect(url, 308)
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-pathname", normalizePath(pathname))

  if (isPayloadPath(pathname) && !pathname.endsWith("/") && !pathname.includes(".")) {
    const url = request.nextUrl.clone()
    url.pathname = `${pathname}/`
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } })
  }

  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|map|txt|xml|woff2?|mp4|webm)$).*)",
  ],
}
