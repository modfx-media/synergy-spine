import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

import BookTrigger from "@/components/booking/BookTrigger";
const SLUG = "other-videos";
const CANONICAL = `https://synergyspineandnerve.com/resources/videos/${SLUG}/`;

const cmsFallbackMetadata: Metadata = {
  title:
    "Informative Videos on Chiropractic Care and Health Strategies Synergy Spine and Nerve Center",
  description:
    "Healthy chocolate recipes, glimpses of Dr. Brad\u2019s personal life, and other odds-and-ends content from Synergy Spine and Nerve Center.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Other Videos | Synergy Spine and Nerve Center",
    description:
      "Healthy chocolate recipes and a few glimpses into life around the office.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const VIDEOS: { id: string; title: string }[] = [
  { id: "Ou3xjc5c7LA", title: "Fit at Fifty" },
  { id: "hxNgICmIkLM", title: "Paleo Chocolate Tutorial" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://synergyspineandnerve.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Resources",
      item: "https://synergyspineandnerve.com/resources/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Videos",
      item: "https://synergyspineandnerve.com/resources/videos/",
    },
    { "@type": "ListItem", position: 4, name: "Other Videos", item: CANONICAL },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Other Videos",
  itemListElement: VIDEOS.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: v.title,
    url: `https://www.youtube.com/watch?v=${v.id}`,
  })),
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources/videos/other-videos", cmsFallbackMetadata);
}

export default function OtherVideosPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Videos", href: "/resources/videos/" },
          { label: "Other Videos" },
        ]}
      />

      <main>
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Lighter content
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Informative{" "}
                <span className="italic normal-case text-brand-gold">videos</span> on
                chiropractic care and health strategies
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Healthy chocolate recipes, a glimpse of Dr. Brad&apos;s personal life,
                and other odds-and-ends from around the office.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 1440 80"
              className="block w-full h-12 md:h-20"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <ul className="grid sm:grid-cols-2 gap-8">
              {VIDEOS.map((v, i) => (
                <Reveal as="li" key={v.id} delay={i * 80}>
                  <article className="flex flex-col gap-4">
                    <YouTubeEmbed id={v.id} title={v.title} />
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] font-bold text-brand-blue tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="section-title text-lg text-brand-navyDark font-semibold leading-snug">
                        {v.title}
                      </h3>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-brand-bg py-16">
          <div className="mx-auto max-w-5xl px-6 grid sm:grid-cols-3 gap-4">
            <Link
              href="/resources/videos/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Back to
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">All Videos</p>
            </Link>
            <Link
              href="/resources/videos/workshop-videos/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Go deeper
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">Workshop Videos</p>
            </Link>
            <Link
              href="/resources/videos/promo-videos/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Quick clips
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">Promo Videos</p>
            </Link>
          </div>
        </section>

        <section className="relative bg-brand-navyDark text-white py-20 overflow-hidden">
          <span
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-drift pointer-events-none"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-gold/12 blur-3xl animate-drift pointer-events-none"
            style={{ animationDelay: "-7s" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Have a question about a video?{" "}
                <span className="italic text-brand-gold">Ask us.</span>
              </p>
              <p className="mt-4 text-white/80">
                Bring it up at your next visit, or give us a call.
              </p>
            </Reveal>
            <Reveal
              delay={150}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
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
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </>
  );
}
