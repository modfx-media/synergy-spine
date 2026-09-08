import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import BookTrigger from "@/components/booking/BookTrigger";
import { CATEGORIES, categorySlug, type BlogPost } from "@/lib/blog-posts";

export const POSTS_PER_PAGE = 12;

import { SITE_ORIGIN } from "@/lib/site";

function pageHref(page: number): string {
  return page <= 1 ? "/blog/" : `/blog/page/${page}/`;
}

export function BlogListing({ page, posts }: { page: number; posts: BlogPost[] }) {
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const start = (page - 1) * POSTS_PER_PAGE;
  const visible = posts.slice(start, start + POSTS_PER_PAGE);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Synergy Spine & Nerve Center Blog",
    url: `${SITE_ORIGIN}${pageHref(page)}`,
    blogPost: visible.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.isoDate,
      url: `${SITE_ORIGIN}/blog/${p.slug}/`,
    })),
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
          <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: page > 1 ? "/blog/" : undefined },
                ...(page > 1 ? [{ label: `Page ${page}` }] : []),
              ]}
            />
            <div className="mt-8 max-w-3xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                Articles &amp; Insights
              </p>
              <h1 className="section-title mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                Health &amp; Wellness <span className="italic text-brand-goldSoft">Blog</span>
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Practical, research-backed articles on chiropractic care, spinal health, nutrition,
                and the everyday habits that support your body&apos;s natural ability to heal.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORY CHIPS */}
        <section className="bg-white border-b border-black/5">
          <div className="mx-auto max-w-6xl px-6 py-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-textLight mr-2">
                Browse by topic:
              </span>
              {CATEGORIES.map((c) => (
                <Link
                  key={c}
                  href={`/category/${categorySlug(c)}/`}
                  className="rounded-full border border-brand-blue/30 bg-brand-blue/5 px-3 py-1 text-[12px] font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition"
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* POST GRID */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex items-center justify-between gap-4">
              <p className="text-sm text-brand-textLight">
                Showing{" "}
                <strong className="text-brand-navyDark">
                  {start + 1}{start + visible.length}
                </strong>{" "}
                of <strong className="text-brand-navyDark">{posts.length}</strong> articles
              </p>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-textLight">
                Page {page} of {totalPages}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visible.map((post, i) => (
                <Reveal key={post.slug} delay={Math.min(i * 30, 360)}>
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>

            <Pagination current={page} total={totalPages} />
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-brand-navyDark text-white py-20">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl animate-drift" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl animate-drift" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="section-title text-3xl md:text-4xl font-semibold leading-tight">
              Ready to take the next step toward{" "}
              <span className="italic text-brand-goldSoft">better health?</span>
            </h2>
            <p className="mt-4 text-white/80">
              Schedule a no-pressure consultation with our team and get a clear plan for your spine.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <BookTrigger
                className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold text-brand-navyDark uppercase tracking-wide hover:bg-brand-goldSoft transition"
              >
                Book Appointment
              </BookTrigger>
              <a
                href="tel:+15058912280"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-brand-navyDark transition"
              >
                (505) 891-2280
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
    </>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:ring-brand-blue/30">
      <Link
        href={`/blog/${post.slug}/`}
        className="absolute inset-0 z-10"
        aria-label={post.title}
      >
        <span className="sr-only">Read {post.title}</span>
      </Link>

      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blueLight to-brand-navy">
        {post.featureImage ? (
          <Image
            src={post.featureImage}
            alt={post.coverAlt || post.title}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/40 blur-2xl animate-drift" />
            <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-brand-gold/40 blur-2xl animate-drift" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="relative h-full flex items-end p-5">
          <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="section-title text-xl font-semibold leading-snug text-brand-navyDark group-hover:text-brand-blue transition">
          {post.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-brand-text">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between text-[12px] text-brand-textLight">
          <time dateTime={post.isoDate}>{post.date}</time>
          <span className="font-semibold text-brand-blue group-hover:translate-x-1 transition">
            Read more →
          </span>
        </div>
      </div>
    </article>
  );
}

function buildPageList(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const items: (number | "ellipsis")[] = [];
  const add = (n: number) => items.push(n);
  add(1);
  if (current > 4) items.push("ellipsis");
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) add(i);
  if (current < total - 3) items.push("ellipsis");
  add(total);
  return items;
}

function Pagination({ current, total }: { current: number; total: number }) {
  if (total <= 1) return null;
  const pages = buildPageList(current, total);
  const prev = current > 1 ? pageHref(current - 1) : null;
  const next = current < total ? pageHref(current + 1) : null;

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-16 flex flex-wrap items-center justify-center gap-2"
    >
      {prev ? (
        <Link
          href={prev}
          rel="prev"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-navyDark ring-1 ring-black/10 hover:bg-brand-navyDark hover:text-white transition"
        >
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>Previous</span>
        </Link>
      ) : (
        <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-brand-textLight ring-1 ring-black/5 cursor-not-allowed select-none">
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>Previous</span>
        </span>
      )}

      <ul className="flex flex-wrap items-center gap-2">
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <li
              key={`e-${i}`}
              className="inline-flex h-10 w-10 items-center justify-center text-sm text-brand-textLight"
              aria-hidden="true"
            >
              …
            </li>
          ) : (
            <li key={p}>
              {p === current ? (
                <span
                  aria-current="page"
                  className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-brand-navyDark px-3 text-sm font-bold text-white shadow-md"
                >
                  {p}
                </span>
              ) : (
                <Link
                  href={pageHref(p)}
                  className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white px-3 text-sm font-semibold text-brand-navyDark ring-1 ring-black/10 hover:bg-brand-blue hover:text-white hover:ring-brand-blue transition"
                  aria-label={`Go to page ${p}`}
                >
                  {p}
                </Link>
              )}
            </li>
          )
        )}
      </ul>

      {next ? (
        <Link
          href={next}
          rel="next"
          className="inline-flex items-center gap-2 rounded-full bg-brand-navyDark px-4 py-2 text-sm font-semibold text-white ring-1 ring-black/10 hover:bg-brand-blue transition"
        >
          <span>Next</span>
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      ) : (
        <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-brand-textLight ring-1 ring-black/5 cursor-not-allowed select-none">
          <span>Next</span>
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      )}
    </nav>
  );
}
