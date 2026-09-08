import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getPublishedBlogPosts } from "@/lib/ranked/posts";
import { toBlogPosts } from "@/lib/ranked/ui";

export default async function LatestBlogSection() {
  const featured = toBlogPosts(await getPublishedBlogPosts()).slice(0, 3);

  return (
    <section className="relative bg-brand-bg py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-brand-blue/10 blur-3xl pointer-events-none animate-drift"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none animate-drift"
        style={{ animationDelay: "-6s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="grid lg:grid-cols-12 gap-10 lg:items-end">
          <Reveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brand-blue" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                From the Blog
              </p>
            </div>
            <h2 className="section-title mt-5 text-4xl md:text-5xl lg:text-6xl text-brand-navyDark font-semibold leading-[1.05]">
              Insights for{" "}
              <span className="italic text-brand-blue">healthier living</span>.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <div className="flex flex-col items-start gap-5">
              <p className="text-brand-textLight leading-relaxed">
                Practical, research-backed articles on chiropractic care,
                spinal health, nutrition, and the everyday habits that support
                your body&apos;s natural ability to heal.
              </p>
              <Link
                href="/blog/"
                className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue hover:text-brand-navyDark transition"
              >
                <span>View all articles</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-brand-blue/20 group-hover:bg-brand-blue group-hover:ring-brand-blue transition">
                  <svg
                    className="h-3.5 w-3.5 text-brand-blue group-hover:text-white transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Cards */}
        <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 100}>
              <article className="group relative h-full flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.25)] hover:-translate-y-1 transition-all duration-500">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="absolute inset-0 z-10"
                  aria-label={post.title}
                >
                  <span className="sr-only">Read {post.title}</span>
                </Link>

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blueLight to-brand-navy">
                  {post.featureImage ? (
                    <Image
                      src={post.featureImage}
                      alt={post.coverAlt || post.title}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/40 blur-2xl animate-drift" />
                      <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-brand-gold/40 blur-2xl animate-drift" />
                    </div>
                  )}
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-textLight">
                    <time dateTime={post.isoDate}>{post.date}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="section-title mt-4 text-xl md:text-[1.35rem] font-semibold leading-snug text-brand-navyDark group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-text line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-black/5">
                    <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                      Read article
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-bg group-hover:bg-brand-blue transition-colors">
                      <svg
                        className="h-3.5 w-3.5 text-brand-blue group-hover:text-white transition-colors"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
