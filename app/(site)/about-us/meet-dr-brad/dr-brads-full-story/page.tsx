import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";

const CANONICAL =
  "https://synergyspineandnerve.com/about-us/meet-dr-brad/dr-brads-full-story/";

const PORTRAIT = "/team/dr-brad.webp";
const FAMILY = "/team/dr-brad-family.jpg";

const cmsFallbackMetadata: Metadata = {
  title: "Dr. Brad’s Full Story Synergy Spine and Nerve Center",
  description:
    "Dr. Brad Fackrell shares the full story of how chiropractic transformed his health from severe asthma and daily medication to a drug-free life, and why he became a chiropractor.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Dr. Brad Fackrell’s Full Story",
    description:
      "From wrestling injuries to severe asthma to drug-free, the full story of how chiropractic changed Dr. Brad's life.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const HERO_STATS = [
  { value: "16", label: "Age it began" },
  { value: "24", label: "Chiropractic entered life" },
  { value: "8 mo", label: "To halve medications" },
  { value: "0", label: "Prescriptions today" },
];

type Chapter = {
  number: string;
  title: string;
  ageTag?: string;
  paragraphs: string[];
};

const CHAPTERS: Chapter[] = [
  {
    number: "01",
    title: "The Wrestling Mat",
    ageTag: "Age 16 · Injury",
    paragraphs: [
      "When I was 16 years old I went to see a chiropractor because I had hurt my back in a wrestling accident. This chiropractor was great. He helped me get out of pain and get back on the wrestling mat. (It didn't make me a better wrestler though.) I remember getting adjusted by him for at least a month or so 3 times a week.",
      "The problem was that the care I received was not specific and it didn't begin with the right purpose. His purpose was to get me out of pain and therefore, that was my purpose too. It worked wonderfully too… for getting me out of pain.",
    ],
  },
  {
    number: "02",
    title: "A Different Kind of Care",
    ageTag: "Eight years later",
    paragraphs: [
      "But then about 8 years later I was introduced to a different chiropractor that took x-rays so that I could see how subluxation was interfering with my life. More importantly, he was able to see how to adjust me specifically so that it would really change my life.",
      "I did not have pain when I went to see this chiropractor. I was told by my brother and sister that referred me to his office that he could help the asthma that I had struggled with my whole life. At first I thought how was \u201ccracking\u201d my back going to help asthma. After all, my first chiropractic experience was all about pain.",
    ],
  },
  {
    number: "03",
    title: "Understanding Subluxation",
    ageTag: "The turning point",
    paragraphs: [
      "He explained to me that the nerve system controls all the functions in your body and that if you have subluxation putting pressure on the nerves, something is not going to work right. For me, that something was my lungs. I was taking pills every day, a steroid inhaler, a nebulizer, and I always had an asthma \u201cpuffer\u201d in my pocket for emergencies (emergencies happened several times a day). BTW, I also had eczema and allergies and was taking medication for that too.",
    ],
  },
  {
    number: "04",
    title: "A Life Transformed",
    ageTag: "Present day · Drug-free",
    paragraphs: [
      "I am so grateful for the education that this chiropractor gave me. He helped me to take control of my life. He literally saved my life. Chiropractic became a part of my life at the age of 24 and I have never looked back.",
      "About 8 months after starting wellness specific chiropractic care I was taking about half of the medication that I had to take before. This had never happened to me before. I was able to continue to decrease the medication and now in my mid forties I don't have a medical doctor that gives me prescriptions. Unless something environmental triggers it, I am drug-free.",
    ],
  },
  {
    number: "05",
    title: "Why I Practice",
    paragraphs: [
      "This is why I became a chiropractor and why I practice the way that I do. Chiropractic is so much more than just sore necks and backs.",
    ],
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dr. Brad Fackrell’s Full Story",
  description:
    "The full personal story of Dr. Brad Fackrell, from a teenage wrestling injury to severe asthma to a drug-free life through wellness chiropractic care.",
  author: {
    "@type": "Person",
    name: "Dr. Brad Fackrell",
  },
  publisher: {
    "@type": "Organization",
    name: "Synergy Spine and Nerve Center",
  },
  mainEntityOfPage: CANONICAL,
  image: `https://synergyspineandnerve.com${PORTRAIT}`,
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/about-us/meet-dr-brad/dr-brads-full-story", cmsFallbackMetadata);
}

export default function DrBradsFullStoryPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us/" },
          { label: "Meet Dr. Brad", href: "/about-us/meet-dr-brad/" },
          { label: "Full Story" },
        ]}
      />

      <main>
        {/* HERO */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div
            className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-brand-blue/25 blur-3xl animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 -right-24 h-[460px] w-[460px] rounded-full bg-brand-gold/15 blur-3xl animate-drift"
            style={{ animationDelay: "-6s" }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 lg:pt-20 lg:pb-32">
            <Reveal>
              <Link
                href="/about-us/meet-dr-brad/"
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 hover:text-brand-gold transition-colors"
              >
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>Back to Meet Dr. Brad</span>
              </Link>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <Reveal delay={80}>
                  <div className="inline-flex items-center gap-3">
                    <span className="h-px w-10 bg-brand-gold" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-gold">
                      The Full Story
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={140}>
                  <h1 className="section-title mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] uppercase">
                    Dr. Brad Fackrell&apos;s{" "}
                    <span className="italic normal-case text-brand-gold">
                      full story
                    </span>
                  </h1>
                </Reveal>
                <Reveal delay={220}>
                  <p className="mt-5 text-white/70 text-sm md:text-base uppercase tracking-[0.18em] font-semibold">
                    Owner · Founder · Chiropractor
                  </p>
                </Reveal>
                <Reveal delay={300}>
                  <p className="mt-6 max-w-xl text-white/85 text-base md:text-lg leading-relaxed">
                    From wrestling injuries at 16 to severe asthma to a
                    drug-free life. Here&apos;s the full story of how
                    chiropractic changed everything.
                  </p>
                </Reveal>
                <Reveal delay={380}>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <BookTrigger className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition-colors shadow-[0_15px_35px_-10px_rgba(245,197,24,0.5)]">
                      Book with Dr. Brad
                    </BookTrigger>
                    <a
                      href="#story"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-brand-navyDark transition-colors"
                    >
                      Read the story
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <polyline points="19 12 12 19 5 12" />
                      </svg>
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <Reveal delay={200} variant="fade">
                  <div className="relative mx-auto max-w-sm lg:max-w-none">
                    <div
                      aria-hidden="true"
                      className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-brand-gold/30 blur-2xl"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-brand-blue/30 blur-2xl"
                    />

                    <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] ring-1 ring-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
                      <Image
                        src={PORTRAIT}
                        alt="Dr. Brad Fackrell"
                        fill
                        priority
                        sizes="(min-width: 1024px) 420px, 80vw"
                        className="object-cover"
                      />
                      <div
                        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-navyDark/85 to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                          Rio Rancho, NM
                        </p>
                        <p className="mt-1 text-white font-semibold text-base md:text-lg leading-tight">
                          Dr. Brad Fackrell, D.C.
                        </p>
                      </div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-5 -left-5 hidden md:block">
                      <div className="rounded-2xl bg-white text-brand-navyDark px-4 py-3 shadow-xl ring-1 ring-black/5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue">
                          Since
                        </p>
                        <p className="text-2xl font-bold leading-none">2007</p>
                        <p className="mt-0.5 text-[11px] text-brand-textLight">
                          Serving Rio Rancho
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
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

        {/* STATS STRIP */}
        <section className="relative bg-white -mt-6 md:-mt-10 z-10">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_20px_50px_-15px_rgba(13,35,64,0.2)] px-6 py-6 md:py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
                {HERO_STATS.map((s) => (
                  <div key={s.label} className="text-center md:text-left">
                    <p className="text-3xl md:text-4xl font-bold text-brand-navyDark leading-none">
                      {s.value}
                    </p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-textLight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* STORY */}
        <section id="story" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="text-center mb-14 lg:mb-20">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-blue">
                    In his own words
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  A story of{" "}
                  <span className="italic text-brand-blue">
                    healing, discovery,
                  </span>{" "}
                  and purpose.
                </h2>
              </div>
            </Reveal>

            <div className="relative">
              {/* Vertical timeline line */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-4 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-gold/60 via-brand-blue/30 to-transparent"
              />

              <div className="space-y-16 md:space-y-20">
                {CHAPTERS.map((chapter, i) => (
                  <Reveal key={chapter.number} as="article" delay={i * 60}>
                    <div className="relative pl-14 md:pl-20">
                      {/* Chapter number badge */}
                      <div className="absolute left-0 top-0 flex flex-col items-center">
                        <span className="inline-flex h-9 md:h-11 w-9 md:w-11 items-center justify-center rounded-full bg-brand-navyDark text-white text-xs md:text-sm font-bold ring-4 ring-white shadow-md">
                          {chapter.number}
                        </span>
                      </div>

                      {chapter.ageTag && (
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                          {chapter.ageTag}
                        </p>
                      )}
                      <h3 className="section-title mt-2 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                        {chapter.title}
                      </h3>

                      <div className="mt-6 space-y-5">
                        {chapter.paragraphs.map((p, pi) => {
                          const dropCap = i === 0 && pi === 0;
                          return (
                            <p
                              key={pi}
                              className={`text-base md:text-lg leading-[1.75] text-brand-text ${
                                dropCap
                                  ? "first-letter:mr-3 first-letter:mt-1 first-letter:float-left first-letter:font-serif first-letter:text-6xl md:first-letter:text-7xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-brand-blue"
                                  : ""
                              }`}
                            >
                              {p}
                            </p>
                          );
                        })}
                      </div>

                      {/* Pull quote after chapter 2 */}
                      {i === 1 && (
                        <figure className="mt-10 relative rounded-2xl bg-gradient-to-br from-brand-navyDark to-brand-navy p-8 md:p-10 text-white overflow-hidden">
                          <span
                            aria-hidden="true"
                            className="absolute -top-8 -left-4 text-[140px] md:text-[180px] leading-none font-serif text-brand-gold/25 select-none"
                          >
                            &ldquo;
                          </span>
                          <blockquote className="relative text-lg md:text-2xl font-serif italic leading-snug">
                            He literally saved my life. Chiropractic became a
                            part of my life at the age of 24, and I have never
                            looked back.
                          </blockquote>
                          <figcaption className="relative mt-5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                            Dr. Brad Fackrell
                          </figcaption>
                        </figure>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Signature */}
            <Reveal delay={200}>
              <div className="mt-16 md:mt-20 pl-14 md:pl-20 border-t border-black/5 pt-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-textLight">
                  Written by
                </p>
                <p
                  className="mt-2 text-3xl md:text-4xl font-serif italic text-brand-navyDark"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Dr. Brad Fackrell
                </p>
                <p className="mt-1 text-sm text-brand-textLight">
                  Doctor of Chiropractic · Owner, Synergy Spine and Nerve Center
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MISSION */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <Reveal className="lg:col-span-5">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl bg-brand-gold/20"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-brand-blue/15"
                  />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] ring-1 ring-black/5 shadow-[0_30px_60px_-20px_rgba(13,35,64,0.25)]">
                    <Image
                      src={FAMILY}
                      alt="Dr. Brad Fackrell with his family"
                      fill
                      sizes="(min-width: 1024px) 460px, 80vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-7" delay={120}>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-blue">
                    Our mission
                  </p>
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Creating{" "}
                  <span className="italic text-brand-blue">real health</span>{" "}
                  for New Mexico families.
                </h2>
                <div className="mt-6 space-y-5 text-base md:text-lg leading-relaxed text-brand-text">
                  <p>
                    At Synergy Spine and Nerve Center, we believe that everyone
                    matters and that everyone can take their next step toward
                    better health. We take pride in discovering the cause of
                    your problem, whether it&apos;s neck or back pain or just
                    wanting to feel your best. We illuminate
                    the possibilities and then liberate you from your pain.
                  </p>
                  <p>
                    We are on a mission to change the paradigm of people living
                    in New Mexico from treating sickness and disease to{" "}
                    <em className="text-brand-navyDark font-semibold not-italic">
                      creating health
                    </em>{" "}
                    for themselves and their families, using evidence-based
                    protocols that improve quality of life.
                  </p>
                  <p className="text-brand-textLight italic">
                    If this mission resonates with you, please share this story
                    with a friend who needs to hear it.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-brand-navyDark text-white py-20 lg:py-24 overflow-hidden">
          <span
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-blue/25 blur-3xl animate-drift pointer-events-none"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-gold/15 blur-3xl animate-drift pointer-events-none"
            style={{ animationDelay: "-8s" }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-gold" />
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-gold">
                  Your next chapter
                </p>
                <span className="h-px w-10 bg-brand-gold" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="section-title mt-4 text-3xl md:text-4xl font-semibold leading-snug">
                Ready to take{" "}
                <span className="italic text-brand-gold">your next step</span>?
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-white/80 max-w-xl mx-auto leading-relaxed">
                Book a no-pressure consultation with Dr. Brad and discover what
                specific, wellness-focused chiropractic can do for your life.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <BookTrigger className="rounded-full bg-brand-gold px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition shadow-[0_20px_45px_-15px_rgba(245,197,24,0.6)]">
                  Book Appointment
                </BookTrigger>
                <a
                  href="tel:+15058912280"
                  className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-brand-navyDark transition"
                >
                  (505) 891-2280
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
