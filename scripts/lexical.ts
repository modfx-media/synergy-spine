import type { LexicalNode, LexicalState, LexicalText } from "@/lib/cms/export-types"

function text(value: string): LexicalText {
  return {
    type: "text",
    detail: 0,
    format: 0,
    mode: "normal",
    style: "",
    text: value,
    version: 1,
  }
}

export function paragraph(value: string): LexicalNode {
  return {
    type: "paragraph",
    direction: "ltr",
    format: "",
    indent: 0,
    version: 1,
    textFormat: 0,
    textStyle: "",
    children: [text(value)],
  }
}

export function heading(value: string, tag: "h1" | "h2" | "h3" = "h2"): LexicalNode {
  return {
    type: "heading",
    tag,
    direction: "ltr",
    format: "",
    indent: 0,
    version: 1,
    children: [text(value)],
  }
}

export function richText(nodes: LexicalNode[]): LexicalState {
  return {
    root: {
      type: "root",
      format: "",
      indent: 0,
      version: 1,
      direction: "ltr",
      children: nodes.filter((node) => {
        const child = node.children?.[0]
        const copy = child && "text" in child ? child.text : ""
        return Boolean(copy?.trim())
      }),
    },
  }
}

export function decodeHtml(value: string): string {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim()
}

export function htmlToNodes(html: string): LexicalNode[] {
  const nodes: LexicalNode[] = []
  const pattern = /<(h[1-3]|p|li)[^>]*>([\s\S]*?)<\/\1>/gi
  for (const match of html.matchAll(pattern)) {
    const copy = decodeHtml(match[2] ?? "")
    if (!copy) continue
    const tag = match[1]?.toLowerCase()
    if (tag === "h1" || tag === "h2" || tag === "h3") nodes.push(heading(copy, tag))
    else if (tag === "li") nodes.push(paragraph(copy))
    else nodes.push(paragraph(copy))
  }
  return nodes
}
