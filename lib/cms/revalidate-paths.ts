type StatusDoc = {
  path?: unknown
  _status?: unknown
}

function publishedPath(doc?: StatusDoc | null): string | undefined {
  if (doc?._status !== "published") return undefined
  if (typeof doc.path !== "string" || !doc.path.startsWith("/")) return undefined
  return doc.path
}

/**
 * Paths whose cached HTML must be dropped after a publish, unpublish, move, or delete.
 * Unpublishing (published -> draft) revalidates the path that was live.
 */
export function pathsToRevalidate(
  doc?: StatusDoc | null,
  previousDoc?: StatusDoc | null,
): string[] {
  const path = publishedPath(doc)
  const prev = publishedPath(previousDoc)
  const paths: string[] = []
  if (path) paths.push(path)
  if (prev && prev !== path) paths.push(prev)
  return paths
}

/** Delete always clears the document path, including a published page reverted by removal. */
export function pathsToRevalidateOnDelete(doc?: StatusDoc | null): string[] {
  if (typeof doc?.path !== "string" || !doc.path.startsWith("/")) return []
  return [doc.path]
}
