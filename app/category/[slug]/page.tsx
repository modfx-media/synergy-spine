import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import {
  CATEGORIES,
  categorySlug,
  getCategoryByslug,
  type BlogPost,
} from "@/lib/blog-posts";
import { getPublishedBlogPosts } from "@/lib/ranked/posts";
import { toBlogPosts } from "@/lib/ranked/ui";
import { SITE_ORIGIN } from "@/lib/site";

export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: categorySlug(c) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryByslug(slug);
  if (!category) {
    return { title: "Category not found | Synergy Spine & Nerve Center" };
  }
  const url = `${SITE_ORIGIN}/category/${slug}/`;
  return {
    title: `${category} Articles | Synergy Spine & Nerve Center`,
    description: `Browse articles in the ${category} category from Synergy Spine and Nerve Center in Rio Rancho, NM.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${category} Articles | Synergy Spine & Nerve Center`,
      description: `Browse articles in the ${category} category from Synergy Spine and Nerve Center.`,
      url,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryByslug(slug);
  if (!category) notFound();

  const posts = toBlogPosts(await getPublishedBlogPosts()).filter(
    (p) => categorySlug(p.category) === slug,
  );
  const visible = posts;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_ORIGIN}/blog/` },
      {
        "@type": "ListItem",
        position: 3,
        name: category,
        item: `${SITE_ORIGIN}/category/${slug}/`,
      },
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
          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog/" },
                { label: category },
              ]}
            />
            <div className="mt-8 max-w-3xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                Category Archive
              </p>
              <h1 className="section-title mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                {category}
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                {posts.length} {posts.length === 1 ? "article" : "articles"} in this category.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORY CHIPS */}
        <section className="bg-white border-b border-black/5">
          <div className="mx-auto max-w-6xl px-6 py-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-textLight mr-2">
                All categories:
              </span>
              <Link
                href="/blog/"
                className="rounded-full border border-black/10 bg-white px-3 py-1 text-[12px] font-semibold text-brand-text hover:border-brand-blue hover:text-brand-blue transition"
              >
                All posts
              </Link>
              {CATEGORIES.map((c) => {
                const cs = categorySlug(c);
                const active = cs === slug;
                return (
                  <Link
                    key={c}
                    href={`/category/${cs}/`}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "rounded-full bg-brand-blue px-3 py-1 text-[12px] font-semibold text-white"
                        : "rounded-full border border-brand-blue/30 bg-brand-blue/5 px-3 py-1 text-[12px] font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition"
                    }
                  >
                    {c}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* GRID */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            {posts.length === 0 ? (
              <Reveal>
                <div className="rounded-2xl bg-white p-12 text-center ring-1 ring-black/5 shadow-sm">
                  <p className="text-brand-textLight">
                    No articles yet in this category. Check back soon, or browse all{" "}
                    <Link href="/blog/" className="font-semibold text-brand-blue hover:underline">
                      articles
                    </Link>
                    .
                  </p>
                </div>
              </Reveal>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visible.map((post, i) => (
                  <Reveal key={post.slug} delay={Math.min(i * 30, 360)}>
                    <PostCard post={post} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
