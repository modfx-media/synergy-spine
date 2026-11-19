import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import path from "node:path"
import test from "node:test"
import { fileURLToPath } from "node:url"
import { createElement, Fragment } from "react"
import { renderToStaticMarkup } from "react-dom/server"

import { pathsToRevalidate, pathsToRevalidateOnDelete } from "./revalidate-paths"
import {
  childrenAreDesigned,
  cmsOnlyDocIsRenderable,
  cmsSchemaJsonLd,
  docHasRenderableContent,
  mergeCmsJsonLd,
  mergeCmsMetadata,
  pickRoutedNode,
  selectRoutedBody,
  TITLE_TEMPLATE,
  type RoutedDocLike,
} from "./mergeDesigned"

const ABOUT: Parameters<typeof mergeCmsMetadata>[0] = {
  title: "About Us Synergy Spine and Nerve Center",
  description:
    "Looking for a chiropractor near Rio Rancho, New Mexico? Synergy Spine and Nerve Center is New Mexico's Premier Chiropractic care center.",
  alternates: { canonical: "https://synergyspineandnerve.com/about-us/" },
  openGraph: {
    title: "About Us Synergy Spine and Nerve Center",
    description: "New Mexico's Premier Chiropractic care center.",
    url: "https://synergyspineandnerve.com/about-us/",
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const CONTACT: Parameters<typeof mergeCmsMetadata>[0] = {
  title: { absolute: "Contact a Rio Rancho Chiropractor | Synergy Spine & Nerve" },
  description: "Call the Rio Rancho clinic.",
  alternates: { canonical: "https://synergyspineandnerve.com/contact-us/" },
  openGraph: {
    title: "Contact a Rio Rancho Chiropractor | Synergy Spine & Nerve",
    description: "Call the Rio Rancho clinic.",
    url: "https://synergyspineandnerve.com/contact-us/",
    type: "website",
  },
  robots: ABOUT.robots,
}

const emptyLexical = {
  root: {
    type: "root",
    children: [{ type: "paragraph", children: [{ type: "text", text: "   " }] }],
  },
}

const thinLexical = {
  root: {
    type: "root",
    children: [
      {
        type: "paragraph",
        children: [{ type: "text", text: "Imported excerpt that must not become the page body." }],
      },
    ],
  },
}

function aboutDoc(input: {
  meta?: Record<string, unknown>
  content?: unknown
  excerpt?: string
}): RoutedDocLike {
  return {
    collection: "pages",
    doc: {
      title: "About Us Synergy Spine and Nerve Center",
      path: "/about-us",
      _status: "published",
      excerpt: input.excerpt ?? "Imported excerpt that must not become the meta description.",
      content: input.content === undefined ? thinLexical : input.content,
      meta: input.meta ?? {},
    },
  }
}

function ogDescription(meta: ReturnType<typeof mergeCmsMetadata>): string | undefined {
  const og = meta.openGraph
  if (!og || Array.isArray(og)) return undefined
  return og.description
}

function ogTitle(meta: ReturnType<typeof mergeCmsMetadata>): unknown {
  const og = meta.openGraph
  if (!og || Array.isArray(og)) return undefined
  return og.title
}

test("published page with empty or thin content still renders the designed component", () => {
  const empty = aboutDoc({ content: emptyLexical, excerpt: "" })
  const thin = aboutDoc({})
  assert.equal(docHasRenderableContent(empty!.doc), false)
  assert.equal(docHasRenderableContent(thin!.doc), true)
  assert.equal(selectRoutedBody({ hasDesignedPage: true, doc: empty }), "designed")
  assert.equal(selectRoutedBody({ hasDesignedPage: true, doc: thin }), "designed")

  const html = renderToStaticMarkup(
    createElement(
      Fragment,
      null,
      pickRoutedNode(
        selectRoutedBody({ hasDesignedPage: true, doc: thin }),
        createElement("article", { id: "designed-about" }, "Six sections of the designed page"),
        createElement("article", { id: "generic" }, "Imported excerpt"),
      ),
    ),
  )
  assert.match(html, /id="designed-about"/)
  assert.match(html, /Six sections of the designed page/)
  assert.doesNotMatch(html, /id="generic"/)
  assert.doesNotMatch(html, /Imported excerpt/)
})

test("draft preview and a missing draft doc keep the designed page", () => {
  const draft = aboutDoc({ meta: { description: "Draft meta description" } })
  draft!.doc._status = "draft"
  assert.equal(selectRoutedBody({ hasDesignedPage: true, doc: draft }), "designed")
  assert.equal(selectRoutedBody({ hasDesignedPage: true, doc: null }), "designed")

  const html = renderToStaticMarkup(
    createElement(
      Fragment,
      null,
      pickRoutedNode(
        "designed",
        createElement("section", null, "Designed contact sections"),
        createElement("h1", null, "Bare template"),
      ),
    ),
  )
  assert.match(html, /Designed contact sections/)
  assert.doesNotMatch(html, /<h1/)
  assert.equal(mergeCmsMetadata(ABOUT, null), ABOUT)
})

test("publishing a doc with empty meta leaves the hardcoded head unchanged", () => {
  const doc = aboutDoc({
    meta: { title: "  ", description: "", canonicalUrl: " ", noIndex: false, noFollow: false },
    content: [],
  })
  doc!.doc.title = "Document title that must not become the SEO title"
  doc!.doc.excerpt = "Excerpt that must not become the meta description."
  assert.equal(mergeCmsMetadata(ABOUT, doc!.doc), ABOUT)
  assert.equal(mergeCmsMetadata(CONTACT, doc!.doc), CONTACT)
  assert.equal(mergeCmsMetadata(ABOUT, null), ABOUT)
})

test("a meta description edit changes only description tags", () => {
  const doc = aboutDoc({
    meta: { description: "SEO description edited in Payload." },
  })
  const meta = mergeCmsMetadata(ABOUT, doc!.doc)
  assert.equal(meta.description, "SEO description edited in Payload.")
  assert.equal(ogDescription(meta), "SEO description edited in Payload.")
  assert.equal(meta.title, ABOUT.title)
  assert.equal(ogTitle(meta), ogTitle(ABOUT))
  assert.equal(meta.robots, ABOUT.robots)
  assert.equal(meta.alternates, ABOUT.alternates)
  assert.equal(meta.twitter, ABOUT.twitter)
  assert.equal(meta.openGraph && !Array.isArray(meta.openGraph) ? meta.openGraph.url : "", ABOUT.openGraph && !Array.isArray(ABOUT.openGraph) ? ABOUT.openGraph.url : "")
  assert.notEqual(meta.description, doc!.doc.excerpt)
})

test("title overlay keeps the layout template for string titles and absolute titles absolute", () => {
  const layout = readFileSync(
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../app/(site)/layout.tsx"),
    "utf8",
  )
  assert.match(layout, new RegExp(TITLE_TEMPLATE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))

  const templated = mergeCmsMetadata(
    ABOUT,
    { title: "Document title", excerpt: "Excerpt", meta: { title: "Patient-focused healing" } },
  )
  assert.equal(templated.title, "Patient-focused healing")
  assert.equal(typeof templated.title, "string")
  assert.equal(ogTitle(templated), "Patient-focused healing")
  assert.equal(templated.robots, ABOUT.robots)

  const absolute = mergeCmsMetadata(
    CONTACT,
    { title: "Document title", meta: { title: "New contact title" } },
  )
  assert.deepEqual(absolute.title, { absolute: "New contact title" })
  assert.equal(ogTitle(absolute), "New contact title")
  assert.equal(absolute.description, CONTACT.description)
})

test("robots flags override only when checked and keep googleBot directives", () => {
  const untouched = mergeCmsMetadata(
    ABOUT,
    { meta: { noIndex: false, noFollow: false } },
  )
  assert.equal(untouched, ABOUT)

  const hidden = mergeCmsMetadata(
    ABOUT,
    { meta: { noIndex: true, canonicalUrl: "/about-us" } },
  )
  const robots = hidden.robots
  assert.ok(robots && typeof robots === "object")
  if (robots && typeof robots === "object") {
    assert.equal(robots.index, false)
    assert.equal(robots.follow, true)
    assert.ok(robots.googleBot && typeof robots.googleBot === "object")
    if (robots.googleBot && typeof robots.googleBot === "object") {
      assert.equal(robots.googleBot.index, false)
      assert.equal(robots.googleBot.follow, true)
      assert.equal(robots.googleBot["max-image-preview"], "large")
      assert.equal(robots.googleBot["max-snippet"], -1)
      assert.equal(robots.googleBot["max-video-preview"], -1)
    }
  }
  assert.equal(
    hidden.alternates && "canonical" in hidden.alternates ? hidden.alternates.canonical : undefined,
    "https://synergyspineandnerve.com/about-us/",
  )

  const withoutRobots = mergeCmsMetadata(
    { title: "Page", description: "Designed" },
    { meta: { noFollow: true } },
  )
  const created = withoutRobots.robots
  assert.ok(created && typeof created === "object" && created.googleBot && typeof created.googleBot === "object")
  if (created && typeof created === "object" && created.googleBot && typeof created.googleBot === "object") {
    assert.equal(created.follow, false)
    assert.equal(created.googleBot.follow, false)
    assert.equal(created.googleBot["max-image-preview"], "large")
  }
})

test("JSON-LD is added only for schema fields that are set", () => {
  assert.equal(
    cmsSchemaJsonLd("/about-us", {
      title: "Document title",
      excerpt: "Excerpt",
      meta: { description: "From the SEO tab", title: "SEO title" },
    }),
    null,
  )

  const overlay = cmsSchemaJsonLd("/about-us", {
    title: "Document title",
    meta: { title: "SEO title", schemaType: "AboutPage", breadcrumbLabel: "About" },
  })
  assert.equal(overlay?.["@type"], "AboutPage")
  assert.equal(overlay?.name, "SEO title")
  assert.equal(overlay?.alternateName, "About")
  assert.equal(overlay?.url, "https://synergyspineandnerve.com/about-us/")

  const merged = mergeCmsJsonLd(
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "About Us",
      description: "Hardcoded description",
      url: "https://synergyspineandnerve.com/about-us/",
    },
    { meta: { description: "From the SEO tab", schemaType: "AboutPage", title: "" } },
  )
  assert.equal(merged.name, "About Us")
  assert.equal(merged.description, "From the SEO tab")
  assert.equal(merged["@type"], "AboutPage")
})

test("generic renderer is only for CMS-only pages with real content", () => {
  const empty = aboutDoc({ content: emptyLexical, excerpt: "  " })
  const thin = aboutDoc({})
  assert.equal(selectRoutedBody({ hasDesignedPage: false, doc: empty }), "none")
  assert.equal(cmsOnlyDocIsRenderable(empty), false)
  assert.equal(selectRoutedBody({ hasDesignedPage: false, doc: thin }), "generic")
  assert.equal(cmsOnlyDocIsRenderable(null), false)

  const html = renderToStaticMarkup(
    createElement(
      Fragment,
      null,
      pickRoutedNode(
        selectRoutedBody({ hasDesignedPage: false, doc: thin }),
        createElement("article", { id: "designed-about" }, "designed"),
        createElement("article", { id: "generic" }, "Imported excerpt"),
      ),
    ),
  )
  assert.match(html, /id="generic"/)
  assert.doesNotMatch(html, /designed-about/)
})

test("designed route detection ignores null and empty fragments", () => {
  assert.equal(childrenAreDesigned(null), false)
  assert.equal(childrenAreDesigned(createElement(Fragment, null, null)), false)
  assert.equal(
    childrenAreDesigned(createElement("article", null, "About")),
    true,
  )
})

test("unpublishing or deleting a page revalidates the previously published path", () => {
  assert.deepEqual(
    pathsToRevalidate(
      { path: "/about-us", _status: "draft" },
      { path: "/about-us", _status: "published" },
    ),
    ["/about-us"],
  )
  assert.deepEqual(
    pathsToRevalidate(
      { path: "/services", _status: "published" },
      { path: "/about-us", _status: "published" },
    ),
    ["/services", "/about-us"],
  )
  assert.deepEqual(
    pathsToRevalidate(
      { path: "/blog/post", _status: "published" },
      { path: "/blog/post", _status: "published" },
    ),
    ["/blog/post"],
  )
  assert.deepEqual(
    pathsToRevalidate(
      { path: "/about-us", _status: "draft" },
      { path: "/about-us", _status: "draft" },
    ),
    [],
  )
  assert.deepEqual(
    pathsToRevalidateOnDelete({ path: "/contact-us", _status: "published" }),
    ["/contact-us"],
  )
  assert.deepEqual(
    pathsToRevalidateOnDelete({ path: "/contact-us", _status: "draft" }),
    ["/contact-us"],
  )
  assert.deepEqual(pathsToRevalidateOnDelete({ _status: "published" }), [])
})

test("pages and posts both revalidate on publish and delete", () => {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
  for (const file of ["collections/Pages.ts", "collections/Posts.ts"]) {
    const source = readFileSync(path.join(root, file), "utf8")
    assert.match(source, /revalidatePublished/)
    assert.match(source, /revalidateDeleted/)
    assert.match(source, /afterChange:\s*\[revalidatePublished\]/)
    assert.match(source, /afterDelete:\s*\[revalidateDeleted\]/)
  }
  const route = readFileSync(path.join(root, "components/cms/CMSRoute.tsx"), "utf8")
  assert.match(route, /selectRoutedBody/)
  assert.doesNotMatch(route, /if \(!routed\) return children/)
})
