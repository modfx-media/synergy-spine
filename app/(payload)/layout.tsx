import type { Metadata } from "next"
import type { SanitizedConfig, ServerFunctionClient } from "payload"
import config from "@/payload.config"
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts"
import React from "react"

import { importMap } from "./admin/importMap.js"
import "@payloadcms/next/css"

const configPromise = Promise.resolve(config as unknown as SanitizedConfig)

const serverFunction: ServerFunctionClient = async function (args) {
  "use server"
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

export const dynamic = "force-dynamic"

export default function PayloadLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}
