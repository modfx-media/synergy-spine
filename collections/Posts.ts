import type { CollectionConfig } from "payload"

import { publishedOrLoggedIn } from "@/collections/access"
import { nullableUniqueText, pathFromSlug } from "@/collections/hooks"
import { previewURL } from "@/lib/cms/preview"

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "path", "_status", "publishedAt"],
    preview: (doc) => previewURL(doc.path),
    livePreview: {
      url: ({ data }) => previewURL(data.path),
    },
  },
  access: {
    read: publishedOrLoggedIn,
  },
  versions: {
    drafts: {
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
  fields: [
    { name: "title", type: "text", required: true },
    nullableUniqueText("slug", "Slug"),
    nullableUniqueText("path", "Path"),
    nullableUniqueText("legacyId", "Legacy ID"),
    { name: "sourceUrl", type: "text", index: true },
    { name: "sourceUpdatedAt", type: "date" },
    { name: "publishedAt", type: "date" },
    { name: "author", type: "text", defaultValue: "Dr. Brad Fackrell" },
    { name: "category", type: "text" },
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
    beforeChange: [pathFromSlug("/blog")],
  },
}
