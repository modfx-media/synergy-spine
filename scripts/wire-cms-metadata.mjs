import fs from "node:fs"
import path from "node:path"

const root = path.join(process.cwd(), "app", "(site)")

function pagePath(file) {
  const rel = path.relative(root, file).replaceAll("\\", "/")
  const route = rel.replace(/\/page\.tsx$/, "")
  if (!route || route === "page.tsx") return "/"
  return `/${route}`
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name.includes("[")) continue
      walk(full, files)
    } else if (entry.name === "page.tsx") {
      files.push(full)
    }
  }
  return files
}

let updated = 0
for (const file of walk(root)) {
  let source = fs.readFileSync(file, "utf8")
  if (!source.includes("export const metadata")) continue
  if (source.includes("withCMSMetadata")) continue
  if (source.includes("function generateMetadata") || source.includes("async function generateMetadata")) {
    continue
  }
  if (source.includes("export const metadata: Metadata =")) {
    source = source.replace(
      "export const metadata: Metadata =",
      "const cmsFallbackMetadata: Metadata =",
    )
  } else if (source.includes("export const metadata =")) {
    source = source.replace("export const metadata =", "const cmsFallbackMetadata: Metadata =")
  } else {
    console.warn(`skipped ${file}`)
    continue
  }
  if (!source.includes('from "@/lib/cms/metadata"')) {
    const importLine = 'import { withCMSMetadata } from "@/lib/cms/metadata";\n'
    const metadataImport = source.indexOf('import type { Metadata } from "next";')
    if (metadataImport >= 0) {
      const end = source.indexOf("\n", metadataImport)
      source = `${source.slice(0, end + 1)}${importLine}${source.slice(end + 1)}`
    } else {
      source = `${importLine}${source}`
    }
  }
  const route = pagePath(file)
  const fn = `export async function generateMetadata(): Promise<Metadata> {\n  return withCMSMetadata(${JSON.stringify(route)}, cmsFallbackMetadata);\n}\n\n`
  const defaultExport = source.indexOf("export default")
  if (defaultExport < 0) {
    console.warn(`no default export ${file}`)
    continue
  }
  source = `${source.slice(0, defaultExport)}${fn}${source.slice(defaultExport)}`
  fs.writeFileSync(file, source)
  updated += 1
}

console.log(`Wired CMS metadata on ${updated} pages`)
