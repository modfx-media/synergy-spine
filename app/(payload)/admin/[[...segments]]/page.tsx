import type { Metadata } from "next"
import type { SanitizedConfig } from "payload"
import config from "@/payload.config"
import { generatePageMetadata, RootPage } from "@payloadcms/next/views"

import { importMap } from "../importMap.js"

const configPromise = Promise.resolve(config as unknown as SanitizedConfig)

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export const dynamic = "force-dynamic"

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config: configPromise, params, searchParams })

export default function AdminPage({ params, searchParams }: Args) {
  return RootPage({ config: configPromise, params, searchParams, importMap })
}
