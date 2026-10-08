import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"

import AnnouncementBar from "@/components/home/AnnouncementBar"
import Breadcrumb from "@/components/Breadcrumb"
import { CmsRichText } from "@/components/cms/CmsRichText"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { mediaPublicURL } from "@/lib/cms/blog-index"
import { normalizePath } from "@/lib/cms/paths"
import type { RoutedContent } from "@/lib/cms/queries"

function isEditorState(value: unknown): value is SerializedEditorState {
  return Boolean(
    value &&
      typeof value === "object" &&
      "root" in value &&
      (value as { root?: { children?: unknown } }).root?.children,
  )
}

export function RenderRoutedContent({ doc }: { doc: RoutedContent["doc"] }) {
  const path = typeof doc.path === "string" ? normalizePath(doc.path) : "/"
  const title = doc.heroHeading || doc.title || "Synergy Spine and Nerve Center"
  const faqs = (doc.faqs ?? []).filter((item) => item?.question && item?.answer)
  const metaImage = doc.meta && "image" in doc.meta ? mediaPublicURL(doc.meta.image) : null
  const metaAlt =
    doc.meta &&
    "image" in doc.meta &&
    doc.meta.image &&
    typeof doc.meta.image === "object" &&
    "alt" in doc.meta.image &&
    typeof doc.meta.image.alt === "string"
      ? doc.meta.image.alt
      : title

  return (
    <>
      {path === "/" ? <AnnouncementBar /> : null}
      <Header />
      <main>
        {path !== "/" ? (
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: title }]} />
        ) : null}
        <article className="bg-white">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="font-serif text-4xl text-brand-navy md:text-5xl">{title}</h1>
            {doc.excerpt ? (
              <p className="mt-6 text-lg leading-relaxed text-brand-textLight">{doc.excerpt}</p>
            ) : null}
            {metaImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={metaImage} alt={metaAlt} className="mt-10 w-full rounded-2xl shadow-md" />
            ) : null}
            {isEditorState(doc.content) ? (
              <CmsRichText
                className="prose prose-lg mt-10 max-w-none prose-headings:font-serif prose-headings:text-brand-navy prose-a:text-brand-blue prose-img:rounded-xl prose-img:shadow-md"
                data={doc.content}
              />
            ) : null}
            {faqs.length ? (
              <section className="mt-14">
                <h2 className="font-serif text-3xl text-brand-navy">Questions</h2>
                <div className="mt-6 space-y-6">
                  {faqs.map((item) => (
                    <div key={item.question}>
                      <h3 className="text-lg font-semibold text-brand-navy">{item.question}</h3>
                      <p className="mt-2 leading-relaxed text-brand-text">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
