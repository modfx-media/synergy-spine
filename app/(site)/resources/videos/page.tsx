import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/resources/videos/";

const cmsFallbackMetadata: Metadata = {
  title:
    "Chiropractic Videos: Your Guide to Spinal Health Education Synergy Spine and Nerve Center",
  description:
    "Browse our chiropractic video library, Spinal Hygiene, Workshops, Promo, Humorous and educational videos from over 20 years of practice.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "Chiropractic Videos: Your Guide to Spinal Health Education Synergy Spine and Nerve Center",
    description:
      "Spinal hygiene, workshops, intros, and lighter promo content, pick a category and start watching.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

type VideoCat = {
  title: string;
  href: string;
  desc: string;
  accent: "blue" | "navy" | "gold" | "blueLight" | "navyLight" | "goldDeep";
  thumbId: string;
};

const CATEGORIES: VideoCat[] = [
  {
    title: "Spinal Hygiene Videos",
    href: "/resources/videos/spinal-hygiene-videos/",
    desc: "What you can do at home, every day, to take better care of your spine and nerve system.",
    accent: "blue",
    thumbId: "9wPYA3RWAwI",
  },
  {
    title: "Workshop Videos",
    href: "/resources/videos/workshop-videos/",
    desc: "Our most-recent 30-minute workshops, informative and educational. Folks usually find them very valuable.",
    accent: "navy",
    thumbId: "fX2yQ5rJVi4",
  },
  {
    title: "Workshop Videos of the Past",
    href: "/resources/videos/workshop-videos-of-the-past/",
    desc: "Educational workshops from earlier years, habits people changed to overcome significant health challenges.",
    accent: "navyLight",
    thumbId: "uKrWp84qU4c",
  },
  {
    title: "Promo Videos",
    href: "/resources/videos/promo-videos/",
    desc: "Short promotional and educational clips, quick ways to learn what we do and why it works.",
    accent: "gold",
    thumbId: "UAuYYnLuh6U",
  },
  {
    title: "Humorous Promo Videos of the Past",
    href: "/resources/videos/humorous-promo-videos-of-the-past/",
    desc: "A creative, funny family making short videos to promote past workshops, go back and have a laugh.",
    accent: "goldDeep",
    thumbId: "DmyGPDNkPpQ",
  },
  {
    title: "Other Videos",
    href: "/resources/videos/other-videos/",
    desc: "Healthy chocolate recipes, glimpses of Dr. Brad&apos;s personal life, and more odds-and-ends content.",
    accent: "blueLight",
    thumbId: "Ou3xjc5c7LA",
  },
];

const ACCENT_BG: Record<VideoCat["accent"], string> = {
  blue: "from-brand-blue to-brand-blueLight",
  blueLight: "from-brand-blueLight to-brand-blue",
  navy: "from-brand-navy to-brand-navyDark",
  navyLight: "from-brand-navyLight to-brand-navy",
  gold: "from-brand-gold to-brand-goldSoft",
  goldDeep: "from-brand-gold to-brand-blue",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://synergyspineandnerve.com/" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://synergyspineandnerve.com/resources/" },
    { "@type": "ListItem", position: 3, name: "Videos", item: CANONICAL },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources/videos", cmsFallbackMetadata);
}

export default function VideosHubPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Videos" },
        ]}
      />

      <main>
        {/* HERO (clean, no motion) */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Video library
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Chiropractic videos:{" "}
                <span className="italic normal-case text-brand-gold">your guide</span>{" "}
                to spinal health education
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Straight Chiropractic is committed to helping you take control of your
                health. With over 20 years of experience, we have many resources here in
                our video section that can help you feel better and improve your overall
                health.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 max-w-3xl text-white/70 text-base leading-relaxed">
                We recommend you start by watching our{" "}
                <span className="text-white font-semibold">
                  Introduction to Straight Chiropractic
                </span>{" "}
                video first, it will help you know what you can expect in our office.
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

        {/* INTRO VIDEO */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Start here
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Introduction to Straight{" "}
                  <span className="italic text-brand-blue">Chiropractic</span> Care
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-10 relative mx-auto max-w-2xl">
                <span
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-blue/30 blur-3xl animate-drift pointer-events-none -z-10"
                  aria-hidden="true"
                />
                <span
                  className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-brand-gold/15 blur-3xl animate-drift pointer-events-none -z-10"
                  style={{ animationDelay: "-6s" }}
                  aria-hidden="true"
                />
                <YouTubeEmbed
                  id="BtIRyXk9iZc"
                  title="Introduction to Straight Chiropractic Care"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CATEGORY GRID */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Browse by{" "}
                  <span className="italic text-brand-blue">category</span>.
                </h2>
                <p className="mt-4 text-brand-text">
                  Pick a topic that fits where you are today, from the basics of spinal
                  hygiene to deeper workshop content.
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORIES.map((c, i) => (
                <Reveal as="li" key={c.href} delay={(i % 3) * 80}>
                  <Link
                    href={c.href}
                    className="group block h-full bg-white rounded-3xl ring-1 ring-black/5 overflow-hidden shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.25)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div
                      className={`relative aspect-video bg-gradient-to-br ${ACCENT_BG[c.accent]} overflow-hidden`}
                    >
                      <Image
                        src={`https://i.ytimg.com/vi/${c.thumbId}/hqdefault.jpg`}
                        alt={c.title}
                        fill
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        unoptimized
                      />
                      <span
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                        aria-hidden="true"
                      />
                      <span
                        className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/15 blur-2xl"
                        aria-hidden="true"
                      />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-navyDark shadow-xl group-hover:scale-110 transition-transform">
                          <svg
                            className="w-7 h-7 translate-x-0.5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          <span className="absolute inset-0 rounded-full ring-2 ring-white/40 animate-pulseRing" />
                        </span>
                      </span>
                      <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.22em] font-bold text-white/85">
                        Category · {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="section-title text-lg text-brand-navyDark font-semibold group-hover:text-brand-blue transition-colors">
                        {c.title}
                      </h3>
                      <p
                        className="mt-2 text-sm text-brand-textLight leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: c.desc }}
                      />
                      <div className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-blue group-hover:text-brand-navyDark transition-colors">
                        <span>See more</span>
                        <svg
                          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
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
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-brand-navyDark text-white py-20 lg:py-24 overflow-hidden">
          <span
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl animate-drift pointer-events-none"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-gold/12 blur-3xl animate-drift pointer-events-none"
            style={{ animationDelay: "-7s" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Ready to take the{" "}
                <span className="italic text-brand-gold">next step</span>?
              </p>
              <p className="mt-4 text-white/80">
                Watch a video, then book your $37 New Patient Special, and see what 20+
                years of practice can do for you.
              </p>
            </Reveal>
            <Reveal
              delay={150}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-white transition-colors"
              >
                <span>Book $37 New Patient Visit</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg
                    className="w-4 h-4"
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
              </BookTrigger>
              <Link
                href="/resources/"
                className="text-sm font-semibold text-white/90 hover:text-brand-gold transition-colors"
              >
                Back to all resources →
              </Link>
            </Reveal>
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
