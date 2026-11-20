import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import path from "node:path"
import test from "node:test"
import { fileURLToPath } from "node:url"
import { createElement, Fragment } from "react"
import { renderToStaticMarkup } from "react-dom/server"

import { pathsToRevalidate, pathsToRevalidateOnDelete } from "./revalidate-paths"
import {
  applyPublishedTwitterTitle,
  childrenAreDesigned,
  cmsOnlyDocIsRenderable,
  cmsSchemaJsonLd,
  docHasRenderableContent,
  isCmsOnlyBlogPost,
  mergeCmsJsonLd,
  mergeCmsMetadata,
  mergeCmsOnlyPostHead,
  pickRoutedNode,
  selectRoutedBody,
  TITLE_SUFFIX,
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

function renderedTitle(title: Parameters<typeof mergeCmsMetadata>[0]["title"]): string {
  if (typeof title === "string") return TITLE_TEMPLATE.replaceAll("%s", title)
  if (title && typeof title === "object" && "absolute" in title && title.absolute) return title.absolute
  return ""
}

function twitterTitle(meta: ReturnType<typeof mergeCmsMetadata>): unknown {
  const twitter = meta.twitter
  if (!twitter || typeof twitter !== "object") return undefined
  return "title" in twitter ? twitter.title : undefined
}

const HOME: Parameters<typeof mergeCmsMetadata>[0] = {
  title: { absolute: "Chiropractor in Rio Rancho, NM | Synergy Spine & Nerve Center" },
  description:
    "Looking for a chiropractor in Rio Rancho, NM? Synergy Spine and Nerve Center treats back pain, sciatica, disc herniation, neuropathy, and family care. 20+ years. Call (505) 891-2280.",
  alternates: { canonical: "https://synergyspineandnerve.com/" },
  openGraph: {
    title: "Chiropractor in Rio Rancho, NM | Synergy Spine & Nerve",
    description:
      "Evidence-based chiropractic in Rio Rancho. Serving Albuquerque, Corrales, Bernalillo, and the East Mountains.",
    url: "https://synergyspineandnerve.com/",
  },
  robots: ABOUT.robots,
}

const TESTIMONIALS: Parameters<typeof mergeCmsMetadata>[0] = {
  title: "Patient Testimonials & Google Reviews Synergy Spine and Nerve Center",
  description:
    "Real Google reviews from Rio Rancho, NM patients who found relief through Synergy Spine and Nerve Center.",
  alternates: { canonical: "https://synergyspineandnerve.com/testimonials/" },
  openGraph: {
    title: "Patient Testimonials Synergy Spine and Nerve Center",
    description:
      "Real Google reviews from patients at Synergy Spine and Nerve Center in Rio Rancho, NM.",
    url: "https://synergyspineandnerve.com/testimonials/",
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
  robots: ABOUT.robots,
}

const LOCATION: Parameters<typeof mergeCmsMetadata>[0] = {
  title: { absolute: "Chiropractor in Corrales, NM | Synergy Spine & Nerve Center" },
  description:
    "Looking for a chiropractor in Corrales, NM? Synergy Spine and Nerve Center serves Corrales and surrounding areas. Call (505) 891-2280 to schedule.",
  alternates: { canonical: "https://synergyspineandnerve.com/chiropractor-corrales-nm/" },
  openGraph: {
    title: "Chiropractor in Corrales, NM | Synergy Spine & Nerve Center",
    description:
      "Looking for a chiropractor in Corrales, NM? Synergy Spine and Nerve Center serves Corrales and surrounding areas. Call (505) 891-2280 to schedule.",
    url: "https://synergyspineandnerve.com/chiropractor-corrales-nm/",
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
  robots: ABOUT.robots,
}

const GENERATED: Parameters<typeof mergeCmsMetadata>[0] = {
  title: { absolute: "Sciatica Chiropractor in Tijeras, NM | Synergy Spine and Nerve" },
  description: "Sciatica care in Tijeras. About 28 min from Tijeras. Call (505) 891-2280.",
  alternates: { canonical: "https://synergyspineandnerve.com/sciatica-treatment-tijeras-nm/" },
  openGraph: {
    title: "Sciatica Chiropractor in Tijeras, NM | Synergy Spine and Nerve",
    description: "Sciatica care in Tijeras. About 28 min from Tijeras. Call (505) 891-2280.",
    url: "https://synergyspineandnerve.com/sciatica-treatment-tijeras-nm/",
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
  robots: ABOUT.robots,
}

const BLOG_POST: Parameters<typeof mergeCmsMetadata>[0] = {
  title: "Sitting Is the New Sugar | Synergy Spine & Nerve Center",
  description: "Daily movement for a healthier spine.",
  alternates: {
    canonical:
      "https://synergyspineandnerve.com/blog/sitting-is-the-new-sugar-daily-movement-for-a-healthier-spine/",
  },
  openGraph: {
    title: "Sitting Is the New Sugar",
    description: "Daily movement for a healthier spine.",
    url: "https://synergyspineandnerve.com/blog/sitting-is-the-new-sugar-daily-movement-for-a-healthier-spine/",
    type: "article",
  },
  robots: ABOUT.robots,
}

const LAYOUT_TWITTER = {
  card: "summary_large_image" as const,
  title: "Chiropractor in Rio Rancho, NM | Synergy Spine & Nerve",
  description:
    "Chiropractic care in Rio Rancho, NM for back pain, sciatica, discs, and family care.",
}

test("published meta.title is the absolute document title and is not branded or truncated", () => {
  const layout = readFileSync(
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../app/(site)/layout.tsx"),
    "utf8",
  )
  assert.match(layout, new RegExp(TITLE_TEMPLATE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
  assert.match(layout, /applyPublishedTwitterTitle/)
  assert.match(layout, /summary_large_image/)
  assert.match(layout, /dJ3k9kDSyULRLNB670eeUVggenhGH3OTvaZLABGgPAw/)

  const triune = "The Triune of Care | Our Three-Pillar Healing Method"
  const published = mergeCmsMetadata(TESTIMONIALS, {
    title: "Document title that must not win",
    excerpt: "Excerpt that must not win",
    meta: { title: triune },
  })
  assert.deepEqual(published.title, { absolute: triune })
  assert.equal(renderedTitle(published.title), triune)
  assert.equal(ogTitle(published), triune)
  assert.equal(published.description, TESTIMONIALS.description)
  assert.equal(published.robots, TESTIMONIALS.robots)
  assert.equal(published.twitter, undefined)

  const longTitle = `${triune} ${"and the rest of the editor title ".repeat(8)}`.trim()
  const unclamped = mergeCmsMetadata(ABOUT, { meta: { title: longTitle } })
  assert.equal(renderedTitle(unclamped.title), longTitle)
  assert.equal(ogTitle(unclamped), longTitle)

  const alreadySuffixed = `Sports Injury Chiropractor Tijeras NM | Active Recovery | ${TITLE_SUFFIX}`
  const once = mergeCmsMetadata(CONTACT, { meta: { title: alreadySuffixed } })
  assert.deepEqual(once.title, { absolute: alreadySuffixed })
  assert.equal(renderedTitle(once.title), alreadySuffixed)
  assert.equal(ogTitle(once), alreadySuffixed)
  assert.doesNotMatch(renderedTitle(once.title), new RegExp(`(?:${TITLE_SUFFIX.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}){2}`))

  const root = {
    title: {
      default: "Chiropractor in Rio Rancho, NM | Synergy Spine & Nerve Center",
      template: TITLE_TEMPLATE,
    },
    description: "Rio Rancho chiropractor.",
    twitter: LAYOUT_TWITTER,
    robots: ABOUT.robots,
  }
  assert.equal(applyPublishedTwitterTitle(root, undefined), root)
  assert.equal(applyPublishedTwitterTitle(root, "  "), root)
  const social = applyPublishedTwitterTitle(root, triune)
  assert.equal(social.title, root.title)
  assert.equal(social.description, root.description)
  assert.equal(social.robots, root.robots)
  assert.equal(twitterTitle(social), triune)
  assert.equal(
    social.twitter && typeof social.twitter === "object" && "card" in social.twitter
      ? social.twitter.card
      : undefined,
    "summary_large_image",
  )
  assert.equal(
    social.twitter && typeof social.twitter === "object" && "description" in social.twitter
      ? social.twitter.description
      : undefined,
    LAYOUT_TWITTER.description,
  )
})

test("empty CMS title and description leave home, page, location, generated, and blog fallbacks unchanged", () => {
  const empty = {
    title: "Document title that must not become the SEO title",
    excerpt: "Excerpt that must not become the meta description.",
    meta: { title: "  ", description: "", canonicalUrl: " " },
  }
  for (const fallback of [HOME, TESTIMONIALS, LOCATION, GENERATED, BLOG_POST]) {
    assert.equal(mergeCmsMetadata(fallback, empty), fallback)
    assert.equal(mergeCmsMetadata(fallback, null), fallback)
  }

  const blogFallback = {
    title: { absolute: "Neck Pain Self-Screen in Rio Rancho: ROM Tests and When to Seek Care" },
    description: "Imported excerpt",
    alternates: { canonical: "https://synergyspineandnerve.com/blog/neck-pain-self-screen-rio-rancho/" },
    openGraph: {
      title: "Neck Pain Self-Screen in Rio Rancho: ROM Tests and When to Seek Care",
      description: "Imported excerpt",
      url: "https://synergyspineandnerve.com/blog/neck-pain-self-screen-rio-rancho/",
      type: "article" as const,
    },
    twitter: LAYOUT_TWITTER,
  }
  const unchangedPost = mergeCmsOnlyPostHead(
    blogFallback,
    {
      title: "Neck Pain Self-Screen in Rio Rancho: ROM Tests and When to Seek Care",
      excerpt: "Imported excerpt",
      meta: { title: "", description: "" },
    },
    "/blog/neck-pain-self-screen-rio-rancho",
  )
  assert.equal(
    unchangedPost.title,
    "Neck Pain Self-Screen in Rio Rancho: ROM Tests and When to Seek Care",
  )
  assert.equal(typeof unchangedPost.title, "string")
  assert.equal(
    renderedTitle(unchangedPost.title),
    `Neck Pain Self-Screen in Rio Rancho: ROM Tests and When to Seek Care | ${TITLE_SUFFIX}`,
  )
  assert.equal(unchangedPost.description, "Imported excerpt")
  assert.equal(unchangedPost.twitter, blogFallback.twitter)

  const cmsTitle = "Neck Pain Self-Check and Care Options in Rio Rancho"
  const verbatimPost = mergeCmsOnlyPostHead(
    blogFallback,
    {
      title: "Document title that must not win",
      excerpt: "Excerpt that must not win",
      meta: { title: cmsTitle },
    },
    "/blog/neck-pain-self-screen-rio-rancho",
  )
  assert.deepEqual(verbatimPost.title, { absolute: cmsTitle })
  assert.equal(renderedTitle(verbatimPost.title), cmsTitle)
  assert.equal(ogTitle(verbatimPost), cmsTitle)
  assert.equal(verbatimPost.description, "Excerpt that must not win")
  assert.equal(verbatimPost.twitter, blogFallback.twitter)

  for (const [fallback, cmsTitleText] of [
    [HOME, "Rio Rancho Chiropractor | Same-Week Spine Care"],
    [TESTIMONIALS, "Patient Testimonials | Real Stories of Lasting Relief"],
    [LOCATION, "Corrales Chiropractor | Spinal Exams Without the Wait"],
    [GENERATED, "Sciatica Treatment in Tijeras | Synergy Spine"],
    [BLOG_POST, "Daily Movement for a Healthier Spine"],
  ] as const) {
    const meta = mergeCmsMetadata(fallback, {
      title: "Document title that must not win",
      excerpt: "Excerpt that must not win",
      meta: { title: cmsTitleText },
    })
    assert.deepEqual(meta.title, { absolute: cmsTitleText })
    assert.equal(renderedTitle(meta.title), cmsTitleText)
    assert.equal(ogTitle(meta), cmsTitleText)
    assert.equal(meta.description, fallback.description)
    assert.equal(meta.robots, fallback.robots)
    assert.notEqual(renderedTitle(meta.title), renderedTitle(fallback.title))
  }

  const longDescription = `True healing addresses structure, nutrition, and the nervous system together. ${"Keep every word. ".repeat(30)}`.trim()
  const described = mergeCmsMetadata(TESTIMONIALS, { meta: { description: longDescription } })
  assert.equal(described.description, longDescription)
  assert.equal(ogDescription(described), longDescription)
  assert.equal(described.title, TESTIMONIALS.title)
  assert.equal(described.twitter, TESTIMONIALS.twitter)
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

test("CMS-only blog posts use main's head and do not add a googlebot tag", () => {
  assert.equal(isCmsOnlyBlogPost("/blog/neck-pain-self-screen-rio-rancho"), true)
  assert.equal(isCmsOnlyBlogPost("/blog/sitting-is-the-new-sugar-daily-movement-for-a-healthier-spine"), false)
  assert.equal(isCmsOnlyBlogPost("/about-us"), false)
  assert.equal(isCmsOnlyBlogPost("/sports-injury-chiropractor-tijeras-nm"), false)

  const fallback = {
    title: { absolute: "Neck Pain Self-Screen in Rio Rancho: ROM Tests and When to Seek Care" },
    description: "Imported excerpt",
    alternates: { canonical: "https://synergyspineandnerve.com/blog/neck-pain-self-screen-rio-rancho/" },
    openGraph: {
      title: "Neck Pain Self-Screen in Rio Rancho: ROM Tests and When to Seek Care",
      description: "Imported excerpt",
      url: "https://synergyspineandnerve.com/blog/neck-pain-self-screen-rio-rancho/",
      type: "article" as const,
    },
    robots: ABOUT.robots,
  }
  const head = mergeCmsOnlyPostHead(
    fallback,
    {
      title: "Neck Pain Self-Screen in Rio Rancho: ROM Tests and When to Seek Care",
      excerpt: "Imported excerpt",
      meta: {
        title: "Neck Pain Self-Check and Care Options in Rio Rancho",
        description: "Try at-home range-of-motion tests.",
        noIndex: false,
        noFollow: false,
      },
    },
    "/blog/neck-pain-self-screen-rio-rancho",
  )
  assert.deepEqual(head.title, {
    absolute: "Neck Pain Self-Check and Care Options in Rio Rancho",
  })
  assert.equal(renderedTitle(head.title), "Neck Pain Self-Check and Care Options in Rio Rancho")
  assert.equal(ogTitle(head), "Neck Pain Self-Check and Care Options in Rio Rancho")
  assert.equal(head.description, "Try at-home range-of-motion tests.")
  assert.deepEqual(head.robots, { index: true, follow: true })

  const hidden = mergeCmsOnlyPostHead(
    fallback,
    { title: "Post", meta: { noIndex: true } },
    "/blog/neck-pain-self-screen-rio-rancho",
  )
  assert.equal(hidden.title, "Post")
  assert.equal(typeof hidden.title, "string")
  assert.deepEqual(hidden.robots, { index: false, follow: true })

  const designed = mergeCmsMetadata(ABOUT, {
    meta: { title: "Chiropractic Clinic Rio Rancho | Patient-Centered Care", noIndex: false, noFollow: false },
  })
  assert.equal(designed.robots, ABOUT.robots)
  assert.equal(
    designed.robots && typeof designed.robots === "object" && designed.robots.googleBot && typeof designed.robots.googleBot === "object"
      ? designed.robots.googleBot["max-image-preview"]
      : undefined,
    "large",
  )
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
