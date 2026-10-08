import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"
import { RichText, type JSXConvertersFunction } from "@payloadcms/richtext-lexical/react"

import { mediaPublicURL } from "@/lib/cms/blog-index"

function isEditorState(value: unknown): value is SerializedEditorState {
  return Boolean(
    value &&
      typeof value === "object" &&
      "root" in value &&
      (value as { root?: { children?: unknown } }).root?.children,
  )
}

const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  upload: ({ node }) => {
    const upload = node as {
      value?: unknown
      fields?: { alt?: string | null }
    }
    const url = mediaPublicURL(upload.value)
    if (!url || !upload.value || typeof upload.value !== "object") return null
    const media = upload.value as {
      alt?: string | null
      filename?: string | null
      mimeType?: string | null
      width?: number | null
      height?: number | null
    }
    const alt = upload.fields?.alt || media.alt || ""
    if (media.mimeType && !media.mimeType.startsWith("image/")) {
      return (
        <a href={url} rel="noopener noreferrer">
          {media.filename || "Download"}
        </a>
      )
    }
    return (
      // Public blob URL, rendered directly so it is not rewritten to /media.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={url}
        alt={alt}
        width={media.width || undefined}
        height={media.height || undefined}
        className="rounded-xl shadow-md"
      />
    )
  },
})

export function CmsRichText({ data, className }: { data: unknown; className?: string }) {
  if (!isEditorState(data)) return null
  return <RichText className={className} converters={converters} data={data} />
}
