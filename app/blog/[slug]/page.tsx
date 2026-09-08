import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import RankedArticleBody from "@/components/RankedArticleBody";
import {
  BLOG_AUTHOR,
  categorySlug,
} from "@/lib/blog-posts";
import { getPostContent } from "@/lib/blog-content";
import { getPublishedBlogPost, getPublishedBlogPosts, getPublishedBlogSlugs } from "@/lib/ranked/posts";
import { relatedFromPosts, toBlogPost, toBlogPosts } from "@/lib/ranked/ui";

import BookTrigger from "@/components/booking/BookTrigger";
import { SITE_ORIGIN } from "@/lib/site";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getPublishedBlogSlugs().catch(() => []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPublishedBlogPost(slug);
  if (!data) {
    return { title: "Post not found | Synergy Spine & Nerve Center" };
  }
  const post = toBlogPost(data);
  const url = `${SITE_ORIGIN}/blog/${post.slug}/`;
  const ogImage = post.featureImage
    ? post.featureImage.startsWith("http")
      ? post.featureImage
      : `${SITE_ORIGIN}${post.featureImage}`
    : undefined;
  return {
    title: `${post.title} | Synergy Spine & Nerve Center`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.isoDate,
      images: ogImage ? [{ url: ogImage, alt: post.coverAlt || post.title }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getPublishedBlogPost(slug);
  if (!data) notFound();

  const post = toBlogPost(data);
  const allPosts = toBlogPosts(await getPublishedBlogPosts());
  const related = relatedFromPosts(allPosts, slug, 3);
  const localHtml = getPostContent(slug);
  const url = `${SITE_ORIGIN}/blog/${post.slug}/`;
  const coverSrc = post.featureImage;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: coverSrc
      ? [coverSrc.startsWith("http") ? coverSrc : `${SITE_ORIGIN}${coverSrc}`]
      : undefined,
    author: {
      "@type": "Person",
      name: BLOG_AUTHOR,
      affiliation: "Synergy Spine and Nerve Center",
    },
    publisher: {
      "@type": "Organization",
      name: "Synergy Spine and Nerve Center",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/logo.png`,
      },
    },
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
    url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_ORIGIN}/blog/` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-navyDark via-brand-navy to-brand-navyDark text-white">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-blue blur-3xl" />
            <div className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-gold/30 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-5xl px-6 py-20 lg:py-28">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog/" },
                { label: post.title },
              ]}
            />
            <div className="mt-8">
              <Link
                href={`/category/${categorySlug(post.category)}/`}
                className="inline-block rounded-full bg-brand-gold px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-navyDark hover:bg-brand-goldSoft transition"
              >
                {post.category}
              </Link>
              <h1 className="section-title mt-5 text-3xl md:text-5xl font-semibold leading-[1.1] max-w-4xl">
                {post.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <time dateTime={post.isoDate}>{post.date}</time>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span>{post.readTime}</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span>By {BLOG_AUTHOR}</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE IMAGE */}
        {coverSrc ? (
          <section className="bg-brand-bg pt-10 lg:pt-14">
            <div className="mx-auto max-w-5xl px-6">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-lg">
                <Image
                  src={coverSrc}
                  alt={post.coverAlt || post.title}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>
        ) : null}

        {/* BODY + SIDEBAR */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            {/* Article */}
            <Reveal as="article">
              <div className="rounded-2xl bg-white p-8 lg:p-12 ring-1 ring-black/5 shadow-sm">
                {localHtml ? (
                  <div
                    className="prose prose-lg max-w-3xl prose-headings:font-serif prose-headings:text-brand-navyDark prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-brand-text prose-p:leading-relaxed prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline prose-strong:text-brand-navyDark prose-li:text-brand-text prose-img:rounded-xl prose-img:shadow-md"
                    dangerouslySetInnerHTML={{ __html: localHtml }}
                  />
                ) : post.sections?.length ? (
                  <>
                    <RankedArticleBody intro={post.intro} title={post.title} sections={post.sections} />
                    {post.cta ? (
                      <p className="mt-10">
                        <Link
                          href={post.cta.href}
                          className="inline-flex rounded-full bg-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition"
                        >
                          {post.cta.label}
                        </Link>
                      </p>
                    ) : null}
                  </>
                ) : (
                  <p className="text-brand-text leading-relaxed">{post.excerpt}</p>
                )}

                <hr className="mt-12 border-black/5" />

                {/* Author bio */}
                <div className="mt-10 rounded-2xl bg-gradient-to-br from-brand-bg to-white p-6 ring-1 ring-black/5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                    About the Author
                  </p>
                  <div className="mt-3 flex items-start gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-navy text-xl font-bold text-white shadow-md">
                      DB
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-navyDark">
                        {BLOG_AUTHOR}
                      </h3>
                      <p className="text-sm text-brand-textLight">
                        Synergy Spine and Nerve Center · Rio Rancho, NM
                      </p>
                      <p className="mt-2 text-sm text-brand-text leading-relaxed">
                        Dr. Brad and the Synergy team are committed to gentle, principled
                        chiropractic care that supports your body&apos;s natural ability to heal.
                        Have a question about an article? Bring it up at your next visit, we
                        love the conversation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              <Reveal>
                <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                    Related Posts
                  </p>
                  <ul className="mt-5 space-y-5">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={`/blog/${r.slug}/`} className="group block">
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                            {r.category}
                          </p>
                          <h4 className="mt-1 text-sm font-semibold leading-snug text-brand-navyDark group-hover:text-brand-blue transition">
                            {r.title}
                          </h4>
                          <time
                            dateTime={r.isoDate}
                            className="mt-1 block text-[11px] text-brand-textLight"
                          >
                            {r.date}
                          </time>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navyDark via-brand-navy to-brand-navyDark p-6 text-white shadow-lg">
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-gold/30 blur-2xl animate-drift" />
                  <p className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
                    Book Appointment
                  </p>
                  <h3 className="relative section-title mt-3 text-xl font-semibold leading-snug">
                    Take the next step toward feeling better.
                  </h3>
                  <p className="relative mt-3 text-sm text-white/80">
                    Schedule a no-pressure consultation with our team.
                  </p>
                  <div className="relative mt-5 flex flex-col gap-3">
                    <BookTrigger
                      className="rounded-full bg-brand-gold px-5 py-2.5 text-center text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition"
                    >
                      Schedule Online
                    </BookTrigger>
                    <a
                      href="tel:+15058912280"
                      className="rounded-full border border-white/30 px-5 py-2.5 text-center text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-brand-navyDark transition"
                    >
                      (505) 891-2280
                    </a>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </section>

        {/* BACK TO BLOG */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-6">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-navy transition"
            >
              ← Back to all articles
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
