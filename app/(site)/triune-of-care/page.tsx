import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/triune-of-care/";
const HERO_IMAGE = "/triune-of-care.jpeg";

const cmsFallbackMetadata: Metadata = {
  title: "Triune of Care Synergy Spine and Nerve Center",
  description:
    "Take an active role in your healing with the Triune of Care: chiropractic adjustments, daily spinal hygiene, and intentional nutrition working together.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Triune of Care Synergy Spine and Nerve Center",
    description:
      "Three pillars working in synergy, adjustments, spinal hygiene, and nutrition, for whole-body health.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const PILLARS = [
  {
    n: "01",
    title: "Spinal Movement",
    body: "This is accomplished by utilizing appropriately spaced frequency of Chiropractic adjustments and following your prescribed home spinal hygiene exercise program.",
    href: "/resources/all-about-spinal-hygiene/",
    cta: "Spinal hygiene",
    accent: "from-brand-blue to-brand-blueLight",
  },
  {
    n: "02",
    title: "Nutrient Sufficiency",
    body: "Supplementing with the essential nutrients for proper neurological function will help to reduce unnecessary inflammation.",
    href: "/resources/all-about-nutrition/",
    cta: "Nutrition basics",
    accent: "from-brand-navy to-brand-navyDark",
  },
  {
    n: "03",
    title: "Daily Exercise",
    body: "Exercise stimulates your brain positively and in the research is considered to be an essential nutrient. Lack of daily exercise is abnormal and will result in ill health.",
    href: "/helpful-stretches/",
    cta: "Helpful stretches",
    accent: "from-brand-gold to-brand-goldSoft text-brand-navyDark",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/triune-of-care", cmsFallbackMetadata);
}

export default function TriuneOfCarePage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Triune of Care" },
        ]}
      />

      <main>
        {/* HERO (clean) */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    Three pillars · One plan
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase">
                    Embrace the{" "}
                    <span className="italic normal-case text-brand-gold">
                      triune of care
                    </span>{" "}
                    for comprehensive health &amp; wellness
                  </h1>
                </Reveal>
                <Reveal delay={220}>
                  <p className="mt-5 max-w-xl text-white/80 text-base md:text-lg leading-relaxed">
                    Take an active role in your healing with the Triune of
                    Care, three pillars working together so your body has
                    everything it needs to function the way it was designed
                    to.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <Reveal delay={200} variant="fade">
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-brand-gold/25 blur-2xl"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-brand-blue/25 blur-2xl"
                    />
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] ring-1 ring-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
                      <Image
                        src={HERO_IMAGE}
                        alt="Triune of Care at Synergy Spine and Nerve Center"
                        fill
                        priority
                        sizes="(min-width: 1024px) 460px, 80vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="relative">
            <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Why three?
                </p>
                <span className="h-px w-10 bg-brand-blue" />
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                None of these pillars is enough on its own, {" "}
                <span className="italic text-brand-blue">together</span> they
                multiply.
              </h2>
              <p className="mt-6 text-brand-text leading-relaxed">
                You can&apos;t out-adjust a poor diet. You can&apos;t out-eat a sedentary
                spine. You can&apos;t out-stretch a subluxated nervous system. The
                Triune of Care is our framework for working on all three
                pillars at the same time so progress compounds.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SYNERGY VENN GRAPHIC */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="mx-auto max-w-xl">
                <svg viewBox="0 0 400 360" className="w-full h-auto" role="img" aria-labelledby="triuneTitle">
                  <title id="triuneTitle">Triune of Care synergy diagram</title>
                  <defs>
                    <radialGradient id="g1" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3B9BDB" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#0170B9" stopOpacity="0.35" />
                    </radialGradient>
                    <radialGradient id="g2" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#1a3a5c" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#0d2340" stopOpacity="0.35" />
                    </radialGradient>
                    <radialGradient id="g3" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFE066" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#F5C518" stopOpacity="0.5" />
                    </radialGradient>
                  </defs>
                  <circle cx="150" cy="140" r="100" fill="url(#g1)" className="animate-drift" style={{ transformOrigin: "150px 140px" }} />
                  <circle cx="250" cy="140" r="100" fill="url(#g2)" className="animate-drift" style={{ transformOrigin: "250px 140px", animationDelay: "-4s" }} />
                  <circle cx="200" cy="230" r="100" fill="url(#g3)" className="animate-drift" style={{ transformOrigin: "200px 230px", animationDelay: "-8s" }} />
                  <text x="105" y="100" textAnchor="middle" className="fill-brand-navyDark" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em" }}>
                    SPINAL MOVEMENT
                  </text>
                  <text x="295" y="100" textAnchor="middle" className="fill-brand-navyDark" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em" }}>
                    EXERCISE
                  </text>
                  <text x="200" y="320" textAnchor="middle" className="fill-brand-navyDark" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em" }}>
                    NUTRIENT SUFFICIENCY
                  </text>
                  <text x="200" y="180" textAnchor="middle" className="fill-brand-navyDark" style={{ fontSize: "20px", fontWeight: 700, fontStyle: "italic", fontFamily: "Playfair Display, serif" }}>
                    synergy
                  </text>
                </svg>
              </div>
              <p className="mt-8 text-center text-brand-textLight max-w-xl mx-auto">
                Where the three circles overlap is where your body finds true
                synergy, and where lasting healing happens.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PILLARS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  The three{" "}
                  <span className="italic text-brand-blue">pillars</span>.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid md:grid-cols-3 gap-6">
              {PILLARS.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 100}>
                  <article className="group relative h-full bg-white rounded-3xl ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.25)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                    <span className={`absolute top-0 left-7 right-7 h-[3px] bg-gradient-to-r ${p.accent} rounded-b`} aria-hidden="true" />
                    <p className={`text-5xl font-semibold leading-none bg-gradient-to-r ${p.accent} bg-clip-text text-transparent`}>
                      {p.n}
                    </p>
                    <h3 className="section-title mt-4 text-xl text-brand-navyDark font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-brand-textLight leading-relaxed">
                      {p.body}
                    </p>
                    <Link
                      href={p.href}
                      className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-blue group-hover:text-brand-navyDark transition-colors"
                    >
                      <span>{p.cta}</span>
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ACTIVE ROLE */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-white ring-1 ring-black/5 p-8 lg:p-10 border-l-4 border-brand-gold shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                  Take an active role
                </p>
                <p className="mt-3 section-title text-xl md:text-2xl text-brand-navyDark font-semibold leading-snug">
                  Healing isn&apos;t something we do <em>to</em> you, it&apos;s
                  something we partner with you on.
                </p>
                <p className="mt-4 text-brand-text leading-relaxed">
                  Our role is to remove the interference. Your role is to
                  show up with the daily habits, the movement, the
                  nutrition, the rest, that let your body do what it&apos;s
                  designed to do. That partnership is the Triune of Care.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* VIDEO: Triune of Care Exercise */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Watch · 60 seconds
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  Triune of Care{" "}
                  <span className="italic text-brand-blue">exercise</span>
                </h2>
                <p className="mt-3 text-brand-text">
                  Dr. Brad walks through a quick at-home exercise that brings
                  all three pillars together.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10">
                <YouTubeEmbed
                  id="xkRHJBF10zM"
                  title="Triune of Care Exercise"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-brand-navyDark text-white py-20 lg:py-24 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl animate-drift pointer-events-none" aria-hidden="true" />
          <span className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-gold/12 blur-3xl animate-drift pointer-events-none" style={{ animationDelay: "-7s" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Three pillars.{" "}
                <span className="italic text-brand-gold">One you</span>.
              </p>
              <p className="mt-4 text-white/80">
                Start your $37 New Patient Special and we&apos;ll map out your
                Triune of Care together.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-white transition-colors"
              >
                <span>Book $37 New Patient Visit</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <Link
                href="/resources/"
                className="text-sm font-semibold text-white/90 hover:text-brand-gold transition-colors"
              >
                Browse all resources →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
