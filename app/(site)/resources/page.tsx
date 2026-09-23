import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/resources/";

const cmsFallbackMetadata: Metadata = {
  title: "Chiropractic Resources Synergy Spine and Nerve Center",
  description:
    "Helpful chiropractic resources from Synergy Spine and Nerve Center in Rio Rancho, NM, videos, spinal hygiene, nutrition, SHA scoring, and supplements.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Chiropractic Resources Synergy Spine and Nerve Center",
    description:
      "Stay informed with videos, spinal hygiene guides, nutrition help, SHA scoring, and recommended supplements.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

type Resource = {
  title: string;
  href: string;
  external?: boolean;
  desc: string;
  icon: React.ReactNode;
  accent: "blue" | "gold" | "navy" | "blueLight";
};

const RESOURCES: Resource[] = [
  {
    title: "Videos",
    href: "/resources/videos/",
    desc: "Years of chiropractic experience captured in helpful tips and explainer videos. Have a look!",
    accent: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="m22 8-6 4 6 4z" />
      </svg>
    ),
  },
  {
    title: "Spinal Hygiene",
    href: "/resources/all-about-spinal-hygiene/",
    desc: "Spinal hygiene exercises create movement in joints that can move, adjustments help joints that can't. Learn how to do both.",
    accent: "navy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v18M9 6c0 1 1 2 3 2s3-1 3-2M9 12c0 1 1 2 3 2s3-1 3-2M9 18c0 1 1 2 3 2s3-1 3-2" />
      </svg>
    ),
  },
  {
    title: "Nutrition",
    href: "/resources/all-about-nutrition/",
    desc: "Do you give your cells the nutrients they need to perform at the level you want to feel? Learn what a healthy dietary routine can do.",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2c4 4 4 9 0 13M12 22c-4-4-4-9 0-13" />
        <path d="M5 8c4 4 9 4 13 0M5 16c4-4 9-4 13 0" />
      </svg>
    ),
  },
  {
    title: "SHA Score",
    href: "/resources/improve-your-sha-score/",
    desc: "Many folks believe spinal health is proportional to pain. It is not. Learn what your Spinal Health Assessment really tells you.",
    accent: "blueLight",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12a9 9 0 1 1 18 0" />
        <path d="m12 12 4-3" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Nutrients & Supplements",
    href: "/resources/essential-nutrients-supplements/",
    desc: "Looking for effective nutrients or supplements to relieve your symptoms and support overall health? Start here.",
    accent: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="6" y="3" width="12" height="18" rx="6" />
        <path d="M6 12h12" />
      </svg>
    ),
  },
  {
    title: "Get Notified",
    href: "/resources/get-notified/",
    desc: "Stay in touch with text message notifications, sent right to your phone.",
    accent: "navy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
  },
  {
    title: "Calendar",
    href: "/resources/calendar/",
    desc: "A live look at office hours, workshops, and community events at the clinic.",
    accent: "blueLight",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
];

const ACCENT_BG: Record<Resource["accent"], string> = {
  blue: "from-brand-blue to-brand-blueLight",
  gold: "from-brand-gold to-brand-goldSoft",
  navy: "from-brand-navy to-brand-navyDark",
  blueLight: "from-brand-blueLight to-brand-blue",
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources", cmsFallbackMetadata);
}

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources" },
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
                Tools, videos &amp; guides
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Chiropractic{" "}
                <span className="italic normal-case text-brand-gold">
                  resources
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Check out these helpful chiropractic resources from Synergy
                Spine and Nerve Center in Rio Rancho, NM. Whether you are a
                current patient, curious about the field, or considering
                chiropractic care, we have the resources you need to stay
                informed.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 max-w-3xl text-white/70 text-base leading-relaxed">
                If you cannot find the information you are looking for or if
                you have any questions, feel free to{" "}
                <BookTrigger
                  className="text-brand-gold underline-offset-4 hover:underline"
                >
                  reach out to us directly
                </BookTrigger>
                .
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

        {/* RESOURCE CARD GRID */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Browse the library
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Pick a topic and start{" "}
                  <span className="italic text-brand-blue">learning</span>.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESOURCES.map((r, i) => {
                const inner = (
                  <article className="relative h-full bg-white rounded-3xl ring-1 ring-black/5 p-6 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.25)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    <div
                      className={`absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r ${ACCENT_BG[r.accent]} rounded-b scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
                      aria-hidden="true"
                    />
                    <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${ACCENT_BG[r.accent]} text-white shadow-lg`}>
                      <div className="w-6 h-6">{r.icon}</div>
                      <span className="absolute inset-0 rounded-2xl ring-2 ring-current opacity-30 animate-pulseRing pointer-events-none" />
                    </div>
                    <h3 className="section-title mt-5 text-xl text-brand-navyDark font-semibold">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {r.desc}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-navyDark group-hover:text-brand-blue transition-colors">
                      <span>{r.external ? "Visit" : "Open"}</span>
                      <svg
                        className="w-3.5 h-3.5 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {r.external ? (
                          <path d="M7 17 17 7M17 7H8M17 7v9" />
                        ) : (
                          <>
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </>
                        )}
                      </svg>
                    </div>
                  </article>
                );

                return (
                  <Reveal as="li" key={r.title} delay={i * 80}>
                    {r.external ? (
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full group"
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link href={r.href} className="block h-full group">
                        {inner}
                      </Link>
                    )}
                  </Reveal>
                );
              })}
            </ul>

            <Reveal delay={400}>
              <p className="mt-12 text-center text-brand-textLight">
                If you cannot find the information you are looking for or if
                you have any questions,{" "}
                <BookTrigger
                  className="text-brand-blue underline-offset-4 hover:underline font-semibold"
                >
                  reach out to us directly
                </BookTrigger>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* TRIUNE LINK */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <Link
                href="/triune-of-care/"
                className="group block rounded-3xl bg-gradient-to-r from-brand-navyDark via-brand-navy to-brand-navyDark p-8 lg:p-10 ring-1 ring-black/5 text-white hover:from-brand-blue hover:via-brand-blueLight hover:to-brand-blue transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                      Featured guide
                    </p>
                    <h3 className="section-title mt-2 text-2xl md:text-3xl font-semibold leading-snug">
                      The{" "}
                      <span className="italic text-brand-gold">
                        Triune of Care
                      </span>
, your three-pillar plan for whole-body health.
                    </h3>
                    <p className="mt-3 text-white/80">
                      Take an active role in your healing with three pillars
                      working in synergy.
                    </p>
                  </div>
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark group-hover:bg-white transition-colors">
                    <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl text-brand-navyDark font-semibold leading-snug">
                Stay informed.{" "}
                <span className="italic text-brand-blue">Stay healthy</span>.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-navyDark text-white rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-brand-blue transition-colors"
              >
                <span>Book $37 New Patient Visit</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark group-hover/cta:bg-white group-hover/cta:text-brand-blue transition-colors">
                  <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <BookTrigger
                className="text-sm font-semibold text-brand-navyDark hover:text-brand-blue transition-colors"
              >
                Or contact us with a question →
              </BookTrigger>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
