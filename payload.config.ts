import path from "path"
import { fileURLToPath } from "url"
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { seoPlugin } from "@payloadcms/plugin-seo"
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob"
import { buildConfig } from "payload"
import sharp from "sharp"

import { Media } from "@/collections/Media"
import { Pages } from "@/collections/Pages"
import { Posts } from "@/collections/Posts"
import { Users } from "@/collections/Users"
import { Footer, Header, SiteSettings } from "@/globals"
import { allowedOrigins, serverURL } from "@/lib/cms/server-url"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const pushSchema =
  process.env.VERCEL !== "1" &&
  process.env.CMS_IMPORT_APPLY !== "1" &&
  process.env.PAYLOAD_DB_PUSH !== "false"

/** Neon console URLs include channel_binding, which the serverless WebSocket driver rejects. */
function databaseURL(): string {
  const raw = process.env.DATABASE_URL || process.env.POSTGRES_URL || ""
  try {
    const url = new URL(raw)
    url.searchParams.delete("channel_binding")
    return url.toString()
  } catch {
    return raw
  }
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: "- Synergy Spine",
    },
    livePreview: {
      breakpoints: [
        { label: "Mobile", name: "mobile", width: 375, height: 667 },
        { label: "Tablet", name: "tablet", width: 768, height: 1024 },
        { label: "Desktop", name: "desktop", width: 1440, height: 900 },
      ],
    },
  },
  collections: [Users, Media, Pages, Posts],
  globals: [Header, Footer, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  serverURL: serverURL(),
  cors: allowedOrigins(),
  csrf: allowedOrigins(),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: databaseURL(),
    },
    forceUseVercelPostgres: true,
    push: pushSchema,
  }),
  jobs: {
    access: {
      run: ({ req }) => Boolean(req.user),
    },
  },
  plugins: [
    seoPlugin({
      collections: ["pages", "posts"],
      globals: ["site-settings"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) => {
        const title = typeof doc?.title === "string" ? doc.title.trim() : ""
        return title ? `${title} | Synergy Spine & Nerve` : "Synergy Spine & Nerve"
      },
      generateDescription: ({ doc }) =>
        typeof doc?.excerpt === "string" ? doc.excerpt : "",
      generateURL: ({ doc }) => {
        const docPath = typeof doc?.path === "string" ? doc.path : "/"
        const origin = serverURL()
        return docPath === "/" ? `${origin}/` : `${origin}${docPath}/`
      },
      fields: ({ defaultFields }) => [
        ...defaultFields,
        { name: "canonicalUrl", type: "text" },
        {
          name: "noIndex",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "noFollow",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "excludeFromSitemap",
          type: "checkbox",
          defaultValue: false,
        },
      ],
    }),
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
