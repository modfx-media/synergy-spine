import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import SpineGraphic from "@/components/motion/SpineGraphic";
import PulseWave from "@/components/motion/PulseWave";
import AnimatedCounter from "@/components/motion/AnimatedCounter";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/about-us/meet-dr-brad/";
const PORTRAIT_IMAGE = "/office-images/dr-brad-2.jpg";
const SECONDARY_IMAGE = "/office-images/dr-brad-2.jpg";
const FAMILY_IMAGE = "/team/dr-brad-with-family.png";

const cmsFallbackMetadata: Metadata = {
  title: "Meet Dr. Brad Synergy Spine and Nerve Center",
  description:
    "Meet Dr. Brad Fackrell, owner, founder, and chiropractor at Synergy Spine and Nerve Center, the premier family chiropractic center in Rio Rancho, New Mexico.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Meet Dr. Brad Fackrell Owner, Founder & Chiropractor",
    description:
      "Owner, founder, and chiropractor at Synergy Spine and Nerve Center in Rio Rancho, NM.",
    url: CANONICAL,
    type: "profile",
    siteName: "Synergy Spine and Nerve Center",
    images: [PORTRAIT_IMAGE],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Brad Fackrell",
  jobTitle: "Owner, Founder & Chiropractor",
  image: `https://synergyspineandnerve.com${PORTRAIT_IMAGE}`,
  url: CANONICAL,
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Synergy Spine and Nerve Center",
    url: "https://synergyspineandnerve.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1453 Rio Rancho Blvd-Suite 2",
      addressLocality: "Rio Rancho",
      addressRegion: "NM",
      postalCode: "87124",
      addressCountry: "US",
    },
    telephone: "+1-505-891-2280",
  },
};

const FACTS = [
  { label: "Children", value: 9 },
  { label: "Grandchildren", value: 8 },
  { label: "Years drug-free", value: 30, suffix: "+" },
  { label: "Generations adjusted", value: 3 },
];

const JOURNEY = [
  {
    age: "Childhood",
    title: "Years of severe asthma",
    body: "Growing up I battled severe asthma, and nothing the medical world offered ever addressed the root cause.",
    accent: "from-brand-blue to-brand-blueLight",
  },
  {
    age: "Age 23",
    title: "First chiropractic adjustment",
    body: "A chiropractor discovered subluxation putting pressure on the nerves to my lungs, something no medical doctor had ever found.",
    accent: "from-brand-gold to-brand-goldSoft",
  },
  {
    age: "Transformation",
    title: "Drug-free, breathing freely",
    body: "As correction continued, my lungs started working the way they were designed to. I\u2019ve been relatively drug-free ever since.",
    accent: "from-brand-blueLight to-brand-blue",
  },
  {
    age: "Today",
    title: "Founder of Synergy",
    body: "I became a chiropractor so others could experience the same healing, and built Synergy so families could thrive together.",
    accent: "from-brand-navy to-brand-navyDark",
  },
];

const VALUES = [
  {
    title: "Family first",
    body: "Nine children, eight grandchildren, all adjusted since birth. Chiropractic is how we live.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M8 3.13a4 4 0 0 0 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Trained to find subluxation",
    body: "Only chiropractors are trained to find and correct subluxation \u2014 the silent root of so many health issues.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 2v6L4 22h16L15 8V2" />
        <path d="M9 2h6" />
      </svg>
    ),
  },
  {
    title: "Lived the transformation",
    body: "I don\u2019t just preach chiropractic \u2014 I\u2019m a living testimony of what it can do for a body in distress.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/about-us/meet-dr-brad", cmsFallbackMetadata);
}

export default function MeetDrBradPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us/" },
          { label: "Meet Dr. Brad" },
        ]}
      />

      <main>
        {/* ───────────── HERO ───────────── */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-70 pointer-events-none animate-gradientShift"
            style={{
              backgroundImage:
                "radial-gradient(at 15% 25%, rgba(1,112,185,0.4), transparent 55%), radial-gradient(at 85% 80%, rgba(245,197,24,0.2), transparent 55%)",
              backgroundSize: "200% 200%",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-brand-blue/20 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 -right-32 w-[420px] h-[420px] rounded-full bg-brand-gold/15 blur-3xl pointer-events-none animate-drift"
            style={{ animationDelay: "-7s" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
          {/* Twinkles */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {[
              { top: "14%", left: "22%", delay: "0s" },
              { top: "30%", left: "82%", delay: "1.2s" },
              { top: "70%", left: "8%", delay: "2.0s" },
              { top: "82%", left: "76%", delay: "0.6s" },
              { top: "12%", left: "60%", delay: "2.4s" },
            ].map((s, i) => (
              <span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-brand-gold animate-twinkle"
                style={{ top: s.top, left: s.left, animationDelay: s.delay }}
              />
            ))}
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div>
              <Reveal>
                <Link
                  href="/about-us/"
                  className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/70 hover:text-brand-gold transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                  <span>About Us</span>
                </Link>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="section-title mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                  Meet{" "}
                  <span className="italic normal-case text-brand-gold">
                    Dr. Brad
                  </span>{" "}
                  Fackrell
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-4 text-white/80 text-lg md:text-xl font-medium uppercase tracking-wide">
                  Owner, Founder, &amp; Chiropractor
                </p>
              </Reveal>

              <Reveal delay={300}>
                <p className="mt-6 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed">
                  A father of nine, grandfather of eight, and the chiropractor
                  whose own asthma was healed when someone finally found the
                  root cause.
                </p>
              </Reveal>

              <Reveal delay={400} className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#story"
                  className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-6 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors shadow-[0_10px_30px_-10px_rgba(245,197,24,0.6)]"
                >
                  <span>Read my story</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                    <svg className="w-4 h-4 group-hover/cta:translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <polyline points="19 12 12 19 5 12" />
                    </svg>
                  </span>
                </a>
                <BookTrigger
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-brand-gold transition-colors"
                >
                  <span>Schedule with Dr. Brad</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </BookTrigger>
              </Reveal>
            </div>
          </div>

          {/* Wave divider */}
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

        {/* ───────────── FACTS / counters ───────────── */}
        <section className="relative bg-white pt-6 lg:pt-8 pb-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {FACTS.map((f, i) => (
                <Reveal key={f.label} delay={i * 80}>
                  <div className="group relative rounded-2xl bg-gradient-to-br from-white to-brand-bg ring-1 ring-black/5 px-5 py-6 text-center overflow-hidden hover:shadow-[0_20px_40px_-20px_rgba(13,35,64,0.25)] transition-shadow">
                    <div
                      className="absolute -top-12 -left-12 w-28 h-28 rounded-full bg-brand-gold/15 blur-2xl group-hover:bg-brand-blue/15 transition-colors"
                      aria-hidden="true"
                    />
                    <p className="relative section-title text-3xl md:text-4xl font-semibold text-brand-navyDark">
                      <AnimatedCounter end={f.value} suffix={f.suffix ?? ""} />
                    </p>
                    <p className="relative mt-1.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-brand-textLight">
                      {f.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── BIO ───────────── */}
        <section id="story" className="bg-white py-16 lg:py-24 scroll-mt-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Sticky spine + image column */}
              <Reveal className="lg:col-span-5 lg:sticky lg:top-28" variant="fade">
                <div className="relative">
                  <div
                    className="absolute -inset-3 rounded-[32px] bg-brand-gold/30 -rotate-2"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -inset-1 rounded-[28px] bg-brand-blue/15 rotate-1"
                    aria-hidden="true"
                  />
                  <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_-20px_rgba(13,35,64,0.45)] bg-brand-bg">
                    <Image
                      src={SECONDARY_IMAGE}
                      alt="Dr. Brad Fackrell at Synergy Spine and Nerve Center"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top scale-[1.35]"
                    />
                  </div>

                  {/* Floating spine accent */}
                  <div
                    className="absolute -top-10 -right-10 w-28 h-40 opacity-90 hidden md:block pointer-events-none"
                    aria-hidden="true"
                  >
                    <SpineGraphic className="w-full h-full" />
                  </div>
                </div>
              </Reveal>

              {/* Bio text */}
              <Reveal className="lg:col-span-7" delay={120}>
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    My Story
                  </p>
                </div>

                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  From{" "}
                  <span className="italic text-brand-blue">struggling for breath</span>
                  {" "}to setting families free.
                </h2>

                <div className="mt-8 space-y-5 text-brand-text text-base md:text-[17px] leading-relaxed">
                  <p>
                    My name is Dr. Brad Fackrell. When I decided to become a
                    chiropractor, my wife and I had just started this big
                    beautiful family. Now we have 9 terrific children (one not
                    pictured) and eight grandchildren. All of them have been
                    adjusted since birth. We are continually amazed and grateful
                    for the great health they have enjoyed as the benefit of
                    being chiropractic patients. My wife swears Chiropractic
                    care is the reason she was able to have so many healthy
                    pregnancies and deliveries.
                  </p>

                  <p>
                    My childhood wasn&apos;t so healthy. My whole life I
                    suffered from severe asthma. When I was 23 I began
                    chiropractic care. I found that I had subluxation putting
                    pressure on the nerves to my lungs. I never felt a problem
                    in my back or neck, because you can&apos;t feel
                    subluxation. My medical doctor didn&apos;t even find this
                    problem. That&apos;s because only a chiropractor is trained
                    to find subluxation.
                  </p>

                  <p>
                    My Chiropractor started correcting the cause of my problem.
                    My lungs worked better when my spine wasn&apos;t putting
                    pressure on my nerves. Today I am relatively drug free and
                    I became a chiropractor so others could experience the same
                    health benefits I have.
                  </p>
                </div>

                <div className="relative z-10 mt-8">
                  <Link
                    href="/about-us/meet-dr-brad/dr-brads-full-story/"
                    className="group relative z-10 inline-flex items-center gap-2 rounded-full bg-brand-blue text-white px-6 py-3 text-sm font-semibold hover:bg-brand-navyDark transition-colors shadow-[0_10px_30px_-10px_rgba(1,112,185,0.5)]"
                  >
                    <span>Read the Full Story</span>
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Photo strip: family */}
            <Reveal delay={180}>
              <div className="mt-16 lg:mt-20 mx-auto max-w-xl">
                <figure className="group relative overflow-hidden rounded-[24px] ring-1 ring-black/5 shadow-[0_20px_50px_-20px_rgba(13,35,64,0.25)] bg-brand-bg">
                  <div className="relative aspect-square">
                    <Image
                      src={FAMILY_IMAGE}
                      alt="Dr. Brad Fackrell with his family"
                      fill
                      sizes="(max-width: 1024px) 100vw, 576px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-navyDark ring-1 ring-black/5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <span>With family</span>
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────── JOURNEY TIMELINE ───────────── */}
        <section className="relative bg-brand-bg py-20 lg:py-28 overflow-hidden">
          <div
            className="absolute -top-32 left-1/3 w-[420px] h-[420px] rounded-full bg-brand-blue/8 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none animate-drift"
            style={{ animationDelay: "-5s" }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    The journey
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  A life shaped by{" "}
                  <span className="italic text-brand-blue">one adjustment</span>.
                </h2>
              </div>
            </Reveal>

            <div className="relative mt-14">
              {/* Central spine line */}
              <div
                className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-blue/40 to-transparent md:-translate-x-px"
                aria-hidden="true"
              />
              {/* Travelling pulse on the spine */}
              <div
                className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-3 h-16 bg-gradient-to-b from-brand-gold via-brand-gold/60 to-transparent rounded-full blur-sm animate-flowDown pointer-events-none"
                aria-hidden="true"
              />

              <ol className="space-y-10 md:space-y-16">
                {JOURNEY.map((j, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <Reveal as="li" key={j.title} delay={i * 100}>
                      <div className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${isLeft ? "" : "md:[&>*:first-child]:order-2"}`}>
                        {/* Card */}
                        <div className={`pl-16 md:pl-0 ${isLeft ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                          <p className={`text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue`}>
                            {j.age}
                          </p>
                          <h3 className="section-title mt-1 text-2xl text-brand-navyDark font-semibold">
                            {j.title}
                          </h3>
                          <p className="mt-3 text-brand-textLight leading-relaxed">
                            {j.body}
                          </p>
                        </div>

                        {/* Node on the spine */}
                        <div className="absolute left-6 md:left-1/2 top-1.5 -translate-x-1/2">
                          <span className={`relative grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br ${j.accent} text-white shadow-lg ring-4 ring-brand-bg`}>
                            <span className="text-[11px] font-bold">{String(i + 1).padStart(2, "0")}</span>
                            <span className="absolute inset-0 rounded-full ring-2 ring-current opacity-30 animate-pulseRing" />
                          </span>
                        </div>

                        {/* Empty placeholder for grid balance */}
                        <div className="hidden md:block" />
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* ───────────── VALUES / motion banner ───────────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  What I stand for
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight max-w-2xl">
                I don&apos;t cover symptoms, I correct the{" "}
                <span className="italic text-brand-blue">cause</span>.
              </h2>
            </Reveal>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 100}>
                  <div className="group relative rounded-3xl bg-gradient-to-br from-white to-brand-bg ring-1 ring-black/5 p-6 h-full hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(13,35,64,0.3)] transition-all duration-500">
                    <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg shadow-brand-blue/30">
                      <div className="w-6 h-6">{v.icon}</div>
                      <span className="absolute inset-0 rounded-2xl ring-2 ring-brand-blue/40 animate-pulseRing pointer-events-none" />
                    </div>
                    <h3 className="section-title mt-5 text-lg text-brand-navyDark font-semibold">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-14 relative rounded-3xl bg-gradient-to-r from-brand-navyDark via-brand-navy to-brand-navyDark p-8 lg:p-10 overflow-hidden ring-1 ring-black/5">
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                  aria-hidden="true"
                />
                <div className="relative grid md:grid-cols-2 items-center gap-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                      The principle
                    </p>
                    <h3 className="section-title mt-2 text-2xl md:text-3xl text-white font-semibold leading-snug">
                      Remove the interference. Let the body{" "}
                      <span className="italic text-brand-gold">do what it was built to do</span>.
                    </h3>
                  </div>
                  <PulseWave className="w-full max-w-md justify-self-end" accent="#3B9BDB" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* VIDEO: Survivor 47 */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Outside the office
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  Dr. Brad on{" "}
                  <span className="italic text-brand-blue">Survivor 47</span>
                </h2>
                <p className="mt-3 text-brand-text">
                  Resilience, strategy, and a whole lot of grit, the same
                  qualities Dr. Brad brings to your care.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10">
                <YouTubeEmbed
                  id="QbQP6OTlFlI"
                  title="Survivor 47, Brad Fackrell"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────── CTA ───────────── */}
        <section className="relative bg-brand-bg py-20 lg:py-24 overflow-hidden">
          <div
            className="absolute -top-32 -left-32 w-[460px] h-[460px] rounded-full bg-brand-blue/10 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -right-32 w-[460px] h-[460px] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none animate-drift"
            style={{ animationDelay: "-6s" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="text-brand-text text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Synergy Spine and Nerve Center is the premier family
                chiropractic center in Rio Rancho, New Mexico.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 section-title text-2xl md:text-3xl text-brand-navyDark font-semibold leading-snug">
                We look forward to{" "}
                <span className="italic text-brand-blue">serving you</span>! &mdash; Call{" "}
                <a
                  href="tel:+15058912280"
                  className="text-brand-blue hover:text-brand-navyDark transition-colors"
                >
                  (505) 891-2280
                </a>
              </p>
            </Reveal>

            <Reveal delay={220} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-navyDark text-white rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-brand-blue transition-colors shadow-[0_10px_30px_-10px_rgba(13,35,64,0.5)]"
              >
                <span>Book Appointment</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark group-hover/cta:bg-white group-hover/cta:text-brand-blue transition-colors">
                  <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <a
                href="tel:+15058912280"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-brand-navyDark hover:text-brand-blue transition-colors"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-brand-navyDark/10 group-hover:bg-brand-blue group-hover:text-white group-hover:ring-transparent transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <span className="border-b border-transparent group-hover:border-brand-blue transition-colors">
                  Call (505) 891-2280
                </span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
