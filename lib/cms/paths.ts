/** Public CMS paths have no trailing slash. Home is `/`. */
export function normalizePath(input: string | null | undefined): string {
  if (!input) return "/"
  const withoutQuery = input.split("?")[0]?.split("#")[0] ?? "/"
  let path = withoutQuery.trim()
  if (!path.startsWith("/")) path = `/${path}`
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1)
  return path || "/"
}

/** Public site URLs keep the trailing slash used in production. */
export function publicPath(path: string): string {
  const normalized = normalizePath(path)
  return normalized === "/" ? "/" : `${normalized}/`
}

/** `/blog/:slug` article routes. Pagination (`/blog/page/2`) is not an article. */
export function isBlogArticlePath(path: string): boolean {
  const parts = normalizePath(path).split("/").filter(Boolean)
  return parts.length === 2 && parts[0] === "blog" && parts[1] !== "page"
}

export function previewFromPath(path: unknown): string | null {
  if (typeof path !== "string") return null
  const trimmed = path.trim()
  if (!trimmed.startsWith("/")) return null
  if (trimmed.includes("://")) return null
  const segments = trimmed.split("/")
  for (const segment of segments) {
    if (segment === "null" || segment === "undefined") return null
    if (segment.includes("..")) return null
  }
  return normalizePath(trimmed)
}
