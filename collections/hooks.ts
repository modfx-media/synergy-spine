import { revalidatePath } from "next/cache"
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  CollectionBeforeChangeHook,
  FieldHook,
  TextField,
} from "payload"

import { normalizePath } from "@/lib/cms/paths"
import { pathsToRevalidate, pathsToRevalidateOnDelete } from "@/lib/cms/revalidate-paths"

export const emptyToNull: FieldHook = ({ value }) => {
  if (value == null) return null
  if (typeof value !== "string") return value
  const trimmed = value.trim()
  return trimmed.length ? trimmed : null
}

export function nullableUniqueText(name: string, label: string): TextField {
  return {
    name,
    label,
    type: "text",
    unique: true,
    index: true,
    hooks: {
      beforeValidate: [emptyToNull],
    },
  }
}

export function pathFromSlug(prefix = ""): CollectionBeforeChangeHook {
  return ({ data }) => {
    if (!data) return data
    if (typeof data.path === "string") {
      const cleaned = data.path.trim()
      data.path = cleaned ? normalizePath(cleaned) : null
    } else if (data.path === "") {
      data.path = null
    }
    if (!data.path && typeof data.slug === "string" && data.slug.trim() && data._status === "published") {
      const slug = data.slug.trim()
      data.path = slug === "home" ? "/" : normalizePath(`${prefix}/${slug}`)
    }
    return data
  }
}

function safeRevalidate(path: string) {
  if (!path.startsWith("/")) return
  const normalized = normalizePath(path)
  try {
    revalidatePath(normalized)
    if (normalized === "/blog" || normalized.startsWith("/blog/")) revalidatePath("/blog")
    revalidatePath("/sitemap.xml")
  } catch (error) {
    console.error("[cms] revalidate failed", error)
  }
}

export const revalidatePublished: CollectionAfterChangeHook = ({ doc, previousDoc }) => {
  for (const path of pathsToRevalidate(doc, previousDoc)) safeRevalidate(path)
  return doc
}

export const revalidateDeleted: CollectionAfterDeleteHook = ({ doc }) => {
  for (const path of pathsToRevalidateOnDelete(doc)) safeRevalidate(path)
  return doc
}
