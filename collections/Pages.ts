import type { CollectionConfig } from "payload"

import { publishedOrLoggedIn } from "@/collections/access"
import { nullableUniqueText, pathFromSlug } from "@/collections/hooks"
import { previewURL } from "@/lib/cms/preview"

const drafts = {
  drafts: {
    schedulePublish: true,
  },
  maxPerDoc: 50,
} as const

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "path", "_status", "updatedAt"],
    preview: (doc) => previewURL(doc.path),
    livePreview: {
      url: ({ data }) => previewURL(data.path),
    },
  },
  access: {
    read: publishedOrLoggedIn,
  },
  versions: drafts,
  fields: [
    { name: "title", type: "text", required: true },
    nullableUniqueText("slug", "Slug"),
    nullableUniqueText("path", "Path"),
    nullableUniqueText("legacyId", "Legacy ID"),
    { name: "sourceUrl", type: "text", index: true },
    { name: "sourceUpdatedAt", type: "date" },
    { name: "excerpt", type: "textarea" },
    { name: "heroHeading", type: "text" },
    { name: "content", type: "richText" },
    {
      name: "faqs",
      type: "array",
      fields: [
        { name: "question", type: "text" },
        { name: "answer", type: "textarea" },
      ],
    },
    { name: "relatedPaths", type: "text", hasMany: true },
  ],
  hooks: {
    beforeChange: [pathFromSlug("")],
  },
}
