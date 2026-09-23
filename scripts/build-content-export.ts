import fs from "node:fs"
import path from "node:path"

import { getPostContent } from "@/lib/blog-content"
import { CATEGORIES, categorySlug } from "@/lib/blog-posts"
import type { ContentExport, ExportRecord, LexicalNode } from "@/lib/cms/export-types"
import { collectExpectedPaths, type ExpectedPath } from "@/lib/cms/manifest"
import { CITY_BY_SLUG } from "@/lib/programmatic/cities"
import { buildEnrichedCopy } from "@/lib/programmatic/enrich"
import { SERVICE_BY_SLUG, SERVICES, type ServiceCopy } from "@/lib/programmatic/services"
import type { CityCopy } from "@/lib/programmatic/cities"
import { getPublishedBlogPosts } from "@/lib/ranked/posts"
import {
  CATEGORY_BY_SLUG,
  CHIROPRACTIC_SERVICES,
  MASSAGE_SERVICES,
  type ServiceItem,
} from "@/lib/services-catalog"
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  POSTAL_CODE,
  PRACTICE_NAME,
  SITE_ORIGIN,
  STREET_ADDRESS,
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
} from "@/lib/site"
import { heading, htmlToNodes, paragraph, richText } from "./lexical"

function slugFor(pagePath: string): string {
  if (pagePath === "/") return "home"
  return pagePath.slice(1).replaceAll("/", "-")
}

function canonical(pagePath: string): string {
  return pagePath === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${pagePath}/`
}

function titleFromSlug(pagePath: string): string {
  if (pagePath === "/") return "Synergy Spine and Nerve Center"
  const last = pagePath.split("/").filter(Boolean).at(-1) ?? "page"
  return last
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function readPageSource(pagePath: string): string {
  const rel = pagePath === "/" ? "app/(site)/page.tsx" : `app/(site)${pagePath}/page.tsx`
  const full = path.join(process.cwd(), rel)
  if (!fs.existsSync(full)) return ""
  return fs.readFileSync(full, "utf8")
}

function metaString(source: string, key: string): string | undefined {
  const match = source.match(
    new RegExp(`${key}:\\s*(?:\\{\\s*absolute:\\s*)?["'\`]([^"'\`]{4,400})["'\`]`),
  )
  return match?.[1]?.replace(/\\n/g, " ").trim()
}

function copyFromSource(source: string): string[] {
  const found: string[] = []
  for (const match of source.matchAll(/"([^"\\]{70,500})"/g)) {
    const value = match[1]?.trim() ?? ""
    if (!value.includes(" ")) continue
    if (value.startsWith("http") || value.startsWith("/")) continue
    found.push(value)
  }
  return [...new Set(found)].slice(0, 24)
}

function baseRecord(pagePath: string, collection: "pages" | "posts"): ExportRecord {
  return {
    collection,
    legacyId: `${collection === "posts" ? "post" : "page"}:${pagePath}`,
    sourceUrl: canonical(pagePath),
    path: pagePath,
    slug: collection === "posts" ? pagePath.split("/").filter(Boolean).at(-1) ?? "post" : slugFor(pagePath),
    title: titleFromSlug(pagePath),
    _status: "draft",
    meta: { canonicalUrl: canonical(pagePath) },
  }
}

function withMeta(record: ExportRecord, title: string, description?: string): ExportRecord {
  record.title = title
  record.heroHeading = title
  if (description) record.excerpt = description
  record.meta = {
    title,
    ...(description ? { description } : {}),
    canonicalUrl: canonical(record.path),
  }
  return record
}

function parseProgrammatic(pagePath: string): { service: ServiceCopy; city: CityCopy } | null {
  const slug = pagePath.slice(1)
  if (!slug.endsWith("-nm")) return null
  const stripped = slug.slice(0, -"-nm".length)
  const sorted = [...SERVICES].sort((a, b) => b.slug.length - a.slug.length)
  for (const service of sorted) {
    const prefix = `${service.slug}-`
    if (!stripped.startsWith(prefix)) continue
    const city = CITY_BY_SLUG[stripped.slice(prefix.length)]
    if (city) return { service, city }
  }
  return null
}

function fill(value: string, city: string): string {
  return value.replaceAll("{city}", city)
}

function programmaticRecord(pagePath: string): ExportRecord {
  const record = baseRecord(pagePath, "pages")
  const parsed = parseProgrammatic(pagePath)
  if (!parsed) return record
  const { service, city } = parsed
  const enriched = buildEnrichedCopy(service, city)
  const title = fill(service.titleTemplate, city.name)
  const description = `${fill(service.descriptionTemplate, city.name)} About ${city.driveMin} min from the Rio Rancho office.`
  const nodes: LexicalNode[] = [
    heading(fill(service.h1Template, city.name), "h1"),
    paragraph(enriched.intro),
    heading("How this care works"),
    ...service.howItWorks.map((item) => paragraph(item)),
    paragraph(service.whatItIs),
    heading(`Getting here from ${city.name}`),
    paragraph(enriched.commute),
    paragraph(enriched.directions),
    heading("Why patients come in"),
    paragraph(enriched.lifestyle),
    paragraph(enriched.whyHere),
    paragraph(service.whoItsFor),
    heading("What to expect"),
    ...service.expect.map((item) => paragraph(item)),
    heading("When to seek care"),
    ...enriched.whenToSeek.map((item) => paragraph(item)),
    paragraph(enriched.examStory),
    paragraph(enriched.vsChain),
    paragraph(enriched.searchIntent),
    ...enriched.localSymptoms.map((item) => paragraph(item)),
    ...enriched.alsoSearch.map((item) => paragraph(item.label)),
  ]
  withMeta(record, title, description)
  record.content = richText(nodes)
  record.faqs = [...service.faqs, ...enriched.extraFaqs].map((item) => ({
    question: fill(item.q, city.name),
    answer: fill(item.a, city.name),
  }))
  record.related = service.related.map((related) => ({
    $ref: `page:/${related}-${city.slug}-nm`,
  }))
  return record
}

function serviceRecord(pagePath: string, item: ServiceItem, categorySlug: "chiropractic" | "massage"): ExportRecord {
  const record = baseRecord(pagePath, "pages")
  const category = CATEGORY_BY_SLUG[categorySlug]
  const title =
    categorySlug === "chiropractic"
      ? `${item.name} Chiropractic Care | Synergy Spine & Nerve Center`
      : `${item.name} in Rio Rancho | Synergy Spine & Nerve Center`
  const description = item.intro.length > 155 ? `${item.intro.slice(0, 152)}...` : item.intro
  withMeta(record, title, description)
  record.content = richText([
    heading(item.name, "h1"),
    paragraph(item.tagline),
    paragraph(item.intro),
    heading("This care helps with"),
    ...item.helpsWith.map((line) => paragraph(line)),
    heading("What to expect"),
    ...item.whatToExpect.map((line) => paragraph(line)),
    paragraph(category.intro),
  ])
  record.related = [{ $ref: `page:/services/${categorySlug}` }]
  return record
}

function pageFromSource(pagePath: string): ExportRecord {
  const record = baseRecord(pagePath, "pages")
  const source = readPageSource(pagePath)
  const title = metaString(source, "title") || record.title
  const description = metaString(source, "description")
  withMeta(record, title, description)
  const nodes = [
    heading(title, "h1"),
    ...(description ? [paragraph(description)] : []),
    ...copyFromSource(source).map((line) => paragraph(line)),
  ]
  record.content = richText(nodes)
  return record
}

async function postRecords(): Promise<ExportRecord[]> {
  const posts = await getPublishedBlogPosts().catch(() => [])
  return posts.map((post) => {
    const pagePath = `/blog/${post.slug}`
    const record = baseRecord(pagePath, "posts")
    const html = getPostContent(post.slug)
    const fromHtml = html ? htmlToNodes(html) : []
    const fromSections: LexicalNode[] = [
      heading(post.h1 || post.title, "h1"),
      ...(post.intro ? [paragraph(post.intro)] : []),
      ...post.sections.flatMap((section) => [
        heading(section.heading),
        ...section.body.map((line) => paragraph(line)),
      ]),
    ]
    withMeta(record, post.title, post.metaDescription || post.intro)
    record.heroHeading = post.h1 || post.title
    record.publishedAt = post.publishDate
    record.sourceUpdatedAt = post.publishDate
    record.content = richText(fromHtml.length ? fromHtml : fromSections)
    record.related = (post.relatedPosts ?? []).map((related) => ({
      $ref: `post:/blog/${related.slug}`,
    }))
    return record
  })
}

function globals(): ContentExport["globals"] {
  return {
    header: {
      announcement: "Now Welcoming New Patients",
      phoneDisplay: PHONE_DISPLAY,
      phoneTel: PHONE_TEL,
      address: `${STREET_ADDRESS}, ${ADDRESS_LOCALITY}, ${ADDRESS_REGION} ${POSTAL_CODE}`,
      navItems: [
        { label: "Home", href: "/" },
        {
          label: "About Us",
          href: "/about-us/",
          children: [
            { label: "Meet Dr. Brad", href: "/about-us/meet-dr-brad/" },
            { label: "Meet Austin", href: "/about-us/meet-austin/" },
            { label: "Book Appointment", href: "#book" },
          ],
        },
        {
          label: "New Folks",
          href: "/new-folks/",
          children: [
            { label: "What to Expect on Your First Visit", href: "/new-folks/first-visit/" },
            { label: "Our Vision", href: "/new-folks/our-vision/" },
            { label: "Testimonials", href: "/testimonials/" },
            { label: "Book a New Patient Appointment", href: "#book" },
          ],
        },
        {
          label: "Services",
          href: "/services/",
          children: [
            {
              label: "Chiropractic",
              href: "/services/chiropractic/",
              children: CHIROPRACTIC_SERVICES.map((item) => ({
                label: item.name,
                href: `/services/chiropractic/${item.slug}/`,
              })),
            },
            {
              label: "Massage",
              href: "/services/massage/",
              children: MASSAGE_SERVICES.map((item) => ({
                label: item.name,
                href: `/services/massage/${item.slug}/`,
              })),
            },
            { label: "Car/Truck Accident Care", href: "/services/car-truck-accident-care/" },
            { label: "Book Appointment", href: "#book" },
          ],
        },
        {
          label: "Resources",
          href: "/resources/",
          children: [
            { label: "Triune of Care", href: "/triune-of-care/" },
            { label: "Spinal Health Assessment", href: "/resources/improve-your-sha-score/" },
            { label: "Essential Nutrients", href: "/resources/essential-nutrients-supplements/" },
            { label: "Purchase Supplements", href: "/purchase-supplements-2/" },
            { label: "Book Appointment", href: "#book" },
          ],
        },
        { label: "Blog", href: "/blog/" },
        {
          label: "Patient Portal",
          href: "https://www.atlaschirosys.com/booking/#/login?s=13323023",
          external: true,
        },
      ],
    },
    footer: {
      blurb:
        "Looking for a chiropractor near Rio Rancho, New Mexico? Synergy Spine and Nerve Center is New Mexico's Premier Chiropractic provider.",
      phoneDisplay: PHONE_DISPLAY,
      address: `${STREET_ADDRESS}, ${ADDRESS_LOCALITY}, ${ADDRESS_REGION} ${POSTAL_CODE}`,
      links: [
        { label: "About Us", href: "/about-us/" },
        { label: "New Folks", href: "/new-folks/" },
        { label: "Testimonials", href: "/testimonials/" },
        { label: "Area We Serve", href: "/area-we-serve/" },
        { label: "Resources", href: "/resources/" },
        { label: "Blog", href: "/blog/" },
        { label: "Sitemap", href: "/sitemap/" },
      ],
    },
    "site-settings": {
      practiceName: PRACTICE_NAME,
      phoneDisplay: PHONE_DISPLAY,
      phoneTel: PHONE_TEL,
      email: EMAIL,
      streetAddress: STREET_ADDRESS,
      city: ADDRESS_LOCALITY,
      region: ADDRESS_REGION,
      postalCode: POSTAL_CODE,
      siteUrl: SITE_ORIGIN,
    },
  }
}

function recordFor(entry: ExpectedPath, postsByPath: Map<string, ExportRecord>): ExportRecord {
  if (entry.kind === "post") {
    return postsByPath.get(entry.path) ?? baseRecord(entry.path, "posts")
  }
  if (entry.kind === "programmatic") return programmaticRecord(entry.path)
  if (entry.kind === "service") {
    const chiro = CHIROPRACTIC_SERVICES.find((item) => entry.path === `/services/chiropractic/${item.slug}`)
    if (chiro) return serviceRecord(entry.path, chiro, "chiropractic")
    const massage = MASSAGE_SERVICES.find((item) => entry.path === `/services/massage/${item.slug}`)
    if (massage) return serviceRecord(entry.path, massage, "massage")
  }
  if (entry.kind === "category") {
    const slug = entry.path.split("/").filter(Boolean).at(-1)
    const name = CATEGORIES.find((category) => categorySlug(category) === slug) ?? "Articles"
    const record = pageFromSource(entry.path)
    return withMeta(
      record,
      `${name} Articles | Synergy Spine & Nerve Center`,
      `Browse articles in the ${name} category from Synergy Spine and Nerve Center in Rio Rancho, NM.`,
    )
  }
  if (entry.kind === "blog-page") {
    const page = entry.path.split("/").filter(Boolean).at(-1)
    const record = pageFromSource(entry.path)
    return withMeta(
      record,
      `Blog Page ${page} | Synergy Spine & Nerve Center`,
      "Educational articles on chiropractic care, spinal health, nutrition, and natural wellness from the team at Synergy Spine and Nerve Center in Rio Rancho, NM.",
    )
  }
  return pageFromSource(entry.path)
}

async function main() {
  const expected = await collectExpectedPaths()
  const posts = await postRecords()
  const postsByPath = new Map(posts.map((post) => [post.path, post]))
  const records = expected.map((entry) => recordFor(entry, postsByPath))
  const payload: ContentExport = {
    version: 1,
    records,
    globals: globals(),
  }
  const outDir = path.join(process.cwd(), "data")
  fs.mkdirSync(outDir, { recursive: true })
  const outFile = path.join(outDir, "content-export.json")
  fs.writeFileSync(outFile, JSON.stringify(payload))
  const pages = records.filter((record) => record.collection === "pages").length
  const postCount = records.filter((record) => record.collection === "posts").length
  console.log(`Wrote ${records.length} draft records (${pages} pages, ${postCount} posts) to ${outFile}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
