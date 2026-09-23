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
const CANONICAL =
  "https://synergyspineandnerve.com/resources/essential-nutrients-supplements/";
const HERO_IMAGE = "/resources/essential-nutrients.jpg";

const cmsFallbackMetadata: Metadata = {
  title: "Essential Nutrients & Supplements Synergy Spine and Nerve Center",
  description:
    "The three supplements most people are deficient in, Vitamin A&D fish oil, probiotics, and a quality multi-vitamin. Why we recommend Innate Choice.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Essential Nutrients & Supplements Synergy Spine and Nerve Center",
    description:
      "Two qualifications, three core supplements, one trusted brand. Here's the foundation we recommend.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const QUALIFICATIONS = [
  {
    title: "First, fix the diet",
    body:
      "Supplements are not a substitute for whole food. We do not recommend supplements as a way to keep eating poorly, we recommend them on top of the cleanest diet you can sustain.",
  },
  {
    title: "Quality matters",
    body:
      "Most retail supplements are filled with binders and fillers, with active ingredients in forms your body can't easily absorb. Source matters more than label.",
  },
];

const SUPPLEMENTS = [
  {
    title: "Vitamin A & D Fish Oil",
    pillar: "Anti-inflammatory",
    body:
      "Omega-3 fatty acids from a clean fish source, paired with naturally occurring Vitamins A and D. Supports brain, joint, immune, and cardiovascular health, the foundational supplement we recommend for nearly every patient.",
    accent: "from-brand-blue to-brand-blueLight",
  },
  {
    title: "Probiotics",
    pillar: "Digestion · Immunity",
    body:
      "More than 70% of your immune system lives in your gut. A high-quality, multi-strain probiotic helps re-establish a healthy gut microbiome, especially important after antibiotics, stress, or a standard processed diet.",
    accent: "from-brand-navy to-brand-navyDark",
  },
  {
    title: "Multi-Vitamin",
    pillar: "Daily insurance",
    body:
      "Even with a great diet, soil depletion and food storage make it hard to get every micronutrient your cells need. A whole-food-based multi covers the gaps so deficiency never silently builds up.",
    accent: "from-brand-gold to-brand-goldSoft text-brand-navyDark",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources/essential-nutrients-supplements", cmsFallbackMetadata);
}

export default function EssentialNutrientsSupplementsPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Nutrients & Supplements" },
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
            <Reveal>
              <Link
                href="/resources/"
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 hover:text-brand-gold transition-colors"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>Resources</span>
              </Link>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <Reveal delay={120}>
                  <h1 className="section-title text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase">
                    Essential{" "}
                    <span className="italic normal-case text-brand-gold">
                      nutrients
                    </span>
                  </h1>
                </Reveal>
                <Reveal delay={220}>
                  <p className="mt-5 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed">
                    Looking for effective nutrients to relieve your symptoms
                    and support overall health? Start with the three
                    most-deficient nutrients in the modern diet, and a brand
                    we actually trust.
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
                        alt="Essential nutrients at Synergy Spine and Nerve Center"
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

        {/* QUALIFICATIONS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Two qualifications
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Before you{" "}
                  <span className="italic text-brand-blue">supplement</span>.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid md:grid-cols-2 gap-6">
              {QUALIFICATIONS.map((q, i) => (
                <Reveal as="li" key={q.title} delay={i * 100}>
                  <article className="h-full rounded-3xl bg-brand-bg ring-1 ring-black/5 p-7">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark text-sm font-bold">
                      {i + 1}
                    </span>
                    <h3 className="section-title mt-4 text-xl text-brand-navyDark font-semibold">
                      {q.title}
                    </h3>
                    <p className="mt-2 text-brand-text leading-relaxed">
                      {q.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* VITAMIN C EXAMPLE */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-white ring-1 ring-black/5 p-8 lg:p-10 border-l-4 border-brand-gold shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                  An example
                </p>
                <p className="mt-3 section-title text-xl md:text-2xl text-brand-navyDark font-semibold leading-snug">
                  Take Vitamin C, most over-the-counter brands are isolated
                  ascorbic acid.
                </p>
                <p className="mt-4 text-brand-text leading-relaxed">
                  In nature, Vitamin C never shows up alone. It comes packaged
                  with bioflavonoids, rutin, and other co-factors that make it
                  useable to your cells. A whole-food source delivers the full
                  complex, the way your body was designed to receive it.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* THREE SUPPLEMENTS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  The three we{" "}
                  <span className="italic text-brand-blue">recommend</span>{" "}
                  for almost everyone.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid md:grid-cols-3 gap-6">
              {SUPPLEMENTS.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 100}>
                  <article className="group relative h-full bg-white rounded-3xl ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.25)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                    <span className={`absolute top-0 left-7 right-7 h-[3px] bg-gradient-to-r ${s.accent} rounded-b`} aria-hidden="true" />
                    <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                      {s.pillar}
                    </p>
                    <h3 className="section-title mt-2 text-xl text-brand-navyDark font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-brand-textLight leading-relaxed">
                      {s.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* INNATE CHOICE */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-gradient-to-br from-brand-navyDark via-brand-navy to-brand-navyDark text-white p-8 lg:p-10 shadow-[0_30px_60px_-20px_rgba(13,35,64,0.45)] relative overflow-hidden">
                <span className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-blue/30 blur-3xl animate-drift pointer-events-none" aria-hidden="true" />
                <span className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-brand-gold/15 blur-3xl animate-drift pointer-events-none" style={{ animationDelay: "-6s" }} aria-hidden="true" />
                <div className="relative grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6">
                    <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                      The brand we trust
                    </p>
                    <h2 className="section-title mt-2 text-2xl md:text-3xl font-semibold leading-snug">
                      We carry{" "}
                      <span className="italic text-brand-gold">
                        Innate Choice
                      </span>{" "}
                      supplements at the office.
                    </h2>
                    <p className="mt-4 text-white/90 leading-relaxed">
                      After years of vetting suppliers, Innate Choice is the
                      line we put our name behind. Whole-food sourcing, no
                      fillers, third-party tested, and formulated by clinicians
                      who care about results, not retail margins.
                    </p>
                  </div>
                  <div className="lg:col-span-6">
                    <YouTubeEmbed
                      id="sT1Xx1DWs_c"
                      title="Innate Choice supplements"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* RELATED */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="section-title text-center text-2xl md:text-3xl text-brand-navyDark font-semibold">
                Pair with the rest of the{" "}
                <span className="italic text-brand-blue">plan</span>.
              </h2>
            </Reveal>
            <ul className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                {
                  href: "/resources/all-about-nutrition/",
                  title: "Nutrition basics",
                  desc: "Eat for your genes, avoid toxic foods, and track inflammation.",
                },
                {
                  href: "/resources/all-about-spinal-hygiene/",
                  title: "Spinal Hygiene",
                  desc: "The daily movement habits that pair with great nutrition.",
                },
                {
                  href: "/triune-of-care/",
                  title: "Triune of Care",
                  desc: "How adjustments, hygiene, and nutrition multiply each other.",
                },
              ].map((l, i) => (
                <Reveal as="li" key={l.href} delay={i * 100}>
                  <Link
                    href={l.href}
                    className="group block h-full bg-white rounded-3xl ring-1 ring-black/5 p-6 hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <h3 className="section-title text-lg text-brand-navyDark font-semibold">
                      {l.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {l.desc}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-blue group-hover:text-brand-navyDark transition-colors">
                      <span>Read more</span>
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* VIDEOS: D + Omega-3 */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Watch · Daily essentials
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  Two supplements{" "}
                  <span className="italic text-brand-blue">we recommend daily</span>
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Reveal delay={120}>
                <article>
                  <YouTubeEmbed
                    id="n_qKsJ5jaLU"
                    title="Why you should take Vitamin D every day"
                  />
                  <h3 className="section-title mt-4 text-lg text-brand-navyDark font-semibold">
                    Why you should take Vitamin D every day
                  </h3>
                </article>
              </Reveal>
              <Reveal delay={200}>
                <article>
                  <YouTubeEmbed
                    id="Q5IQ9Pcs928"
                    title="Which Fish Oil should I take?"
                  />
                  <h3 className="section-title mt-4 text-lg text-brand-navyDark font-semibold">
                    Which fish oil should I take?
                  </h3>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl text-brand-navyDark font-semibold leading-snug">
                Ask us at your{" "}
                <span className="italic text-brand-blue">next visit</span>.
              </p>
              <p className="mt-4 text-brand-text">
                We&apos;ll match the right supplements to your goals, no upsell,
                no guesswork.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-navyDark text-white rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-brand-blue transition-colors"
              >
                <span>Contact the Office</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark group-hover/cta:bg-white group-hover/cta:text-brand-blue transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <BookTrigger
                className="text-sm font-semibold text-brand-navyDark hover:text-brand-blue transition-colors"
              >
                $37 New Patient Special →
              </BookTrigger>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
