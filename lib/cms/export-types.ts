export type FaqRecord = {
  question: string
  answer: string
}

export type ExportRecord = {
  collection: "pages" | "posts"
  legacyId: string
  sourceUrl: string
  path: string
  slug: string
  title: string
  excerpt?: string
  heroHeading?: string
  _status: "draft"
  content?: LexicalState
  faqs?: FaqRecord[]
  related?: { $ref: string }[]
  meta?: {
    title?: string
    description?: string
    canonicalUrl?: string
  }
  category?: string
  publishedAt?: string
  sourceUpdatedAt?: string
}

export type ContentExport = {
  version: 1
  records: ExportRecord[]
  globals: {
    header: Record<string, unknown>
    footer: Record<string, unknown>
    "site-settings": Record<string, unknown>
  }
}

export type LexicalText = {
  type: "text"
  detail: 0
  format: 0
  mode: "normal"
  style: ""
  text: string
  version: 1
}

export type LexicalNode = {
  type: string
  version: 1
  direction?: "ltr"
  format?: ""
  indent?: 0
  tag?: string
  textFormat?: 0
  textStyle?: ""
  children?: Array<LexicalNode | LexicalText>
  text?: string
  detail?: 0
  mode?: "normal"
  style?: ""
}

export type LexicalState = {
  root: {
    type: "root"
    format: ""
    indent: 0
    version: 1
    direction: "ltr"
    children: LexicalNode[]
  }
}
