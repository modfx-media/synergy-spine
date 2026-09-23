import type { CollectionBeforeChangeHook, FieldHook, TextField } from "payload"

import { normalizePath } from "@/lib/cms/paths"

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
