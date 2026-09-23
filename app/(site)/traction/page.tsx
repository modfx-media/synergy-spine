import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/traction/";

const cmsFallbackMetadata: Metadata = {
  title:
    "Traction & Spinal Hygiene Devices Synergy Spine and Nerve Center",
  description:
    "Three traction tools to keep your spine moving, Thoracic Roller, 6-Way Strap, and Over-the-Door Traction. Part of the Pettibon System of Spinal Hygiene.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Traction Tools | Pettibon Spinal Hygiene",
    description:
      "Thoracic Roller · 6-Way Strap · Over-the-Door Traction.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const TOOLS = [
  {
    title: "Thoracic Roller",
    blurb:
      "Improve mobility in the upper back, reduce pain, and open up the chest. The starting point for most folks.",
    href: "/thoracic-roller/",
    accent: "from-brand-blue to-brand-blueLight",
  },
  {
    title: "6-Way Strap",
    blurb:
      "Restore neck mobility and decrease neck pain and headaches with six gentle, guided directions.",
    href: "/6-way-strap/",
    accent: "from-brand-gold to-brand-goldSoft",
  },
  {
    title: "Over-the-Door Traction",
    blurb:
      "Rehydrate the discs in your neck and improve posture, using gravity and a doorway.",
    href: "/over-the-door-traction/",
    accent: "from-brand-navy to-brand-navyDark",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://synergyspineandnerve.com/",
    },
    { "@type": "ListItem", position: 2, name: "Traction", item: CANONICAL },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/traction", cmsFallbackMetadata);
}

export default function TractionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Traction" },
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
                Pettibon System · Spinal Hygiene
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Traction{" "}
                <span className="italic normal-case text-brand-gold">tools</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                A few simple, at-home devices keep your spine moving the way
                it&apos;s supposed to. Pick the right one for your problem
                area, and use it daily, that&apos;s how the magic happens.
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

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ul className="grid gap-6 md:grid-cols-3">
              {TOOLS.map((t, i) => (
                <Reveal as="li" key={t.href} delay={i * 80}>
                  <Link
                    href={t.href}
                    className="group relative block h-full overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className={`absolute top-0 left-6 right-6 h-[3px] rounded-b bg-gradient-to-r ${t.accent} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-10`}
                      aria-hidden="true"
                    />
                    <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navyDark to-brand-blue">
                      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand-gold/40 blur-2xl" />
                        <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white/30 blur-2xl" />
                      </div>
                      <div className="relative z-10 flex h-full items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-brand-navyDark shadow-lg group-hover:bg-brand-gold transition">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6 ml-1"
                            aria-hidden="true"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="section-title text-lg font-semibold text-brand-navyDark">
                        {t.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-brand-text">
                        {t.blurb}
                      </p>
                      <p className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                        Watch the video
                        <svg
                          className="w-3.5 h-3.5 transition group-hover:translate-x-0.5"
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
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-brand-bg py-16">
          <div className="mx-auto max-w-5xl px-6 grid sm:grid-cols-3 gap-4">
            <Link
              href="/resources/videos/spinal-hygiene-videos/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                All daily care
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">
                Spinal Hygiene Videos
              </p>
            </Link>
            <Link
              href="/helpful-stretches/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Stretches
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">
                Helpful Stretches
              </p>
            </Link>
            <Link
              href="/resources/all-about-spinal-hygiene/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Deeper read
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">
                All About Spinal Hygiene
              </p>
            </Link>
          </div>
        </section>

        <section className="relative bg-brand-navyDark text-white py-20 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" aria-hidden="true" />
          <span className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-gold/12 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Not sure which tool is{" "}
                <span className="italic text-brand-gold">right for you</span>?
              </p>
              <p className="mt-4 text-white/80">
                Ask us at your next visit, we&apos;ll point you in the right
                direction.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
    </>
  );
}
