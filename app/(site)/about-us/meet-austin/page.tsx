import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import PulseWave from "@/components/motion/PulseWave";
import WaveBars from "@/components/motion/WaveBars";
import AnimatedCounter from "@/components/motion/AnimatedCounter";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/about-us/meet-austin/";
const PORTRAIT_IMAGE = "/office-images/dr-austin.jpg";

const cmsFallbackMetadata: Metadata = {
  title: "Meet Austin Synergy Spine and Nerve Center",
  description:
    "Meet Austin Vidonn Huber, your expert massage therapist at Synergy Spine and Nerve Center in Rio Rancho, NM. Bachelor's in Kinesiology and certified medical massage therapist.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "Discover Austin Huber: Your Expert Massage Therapist at Synergy Spine",
    description:
      "Expert massage therapist at Synergy Spine and Nerve Center in Rio Rancho, NM.",
    url: CANONICAL,
    type: "profile",
    siteName: "Synergy Spine and Nerve Center",
    images: [PORTRAIT_IMAGE],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Austin Vidonn Huber",
  jobTitle: "Massage Therapist",
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
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Bachelor's",
      name: "Bachelor's in Kinesiology",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Medical Massage Certification",
    },
  ],
};

const STATS = [
  { label: "Year began practice", value: 2017, plain: true },
  { label: "Years of bodywork", value: 8, suffix: "+" },
  { label: "Athletes worked on", value: 1000, suffix: "+" },
  { label: "Bachelor\u2019s", value: 1, suffix: " (Kinesiology)", plain: true },
];

const CREDENTIALS = [
  {
    title: "B.S. Kinesiology",
    body: "Bachelor\u2019s in Kinesiology \u2014 a deep working knowledge of how the body moves, fires, and recovers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Medical Massage Cert.",
    body: "Certified in medical massage \u2014 trained to work alongside chiropractic care, not in isolation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m9 12 2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Deep Tissue Focus",
    body: "Specialized in deep tissue work \u2014 going past surface tension to where the real restriction lives.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const CHAPTERS = [
  {
    label: "Born in",
    title: "Albuquerque, NM",
    body: "From the moment I was born I\u2019ve been learning about physical movement and expression of every kind.",
  },
  {
    label: "Age 10",
    title: "Introduced to massage",
    body: "A friend\u2019s mother introduced me to massage therapy \u2014 the spark for what would become a calling.",
  },
  {
    label: "Athletics",
    title: "Soccer, football, snowboarding, wrestling",
    body: "I became proficient in any sport I could try \u2014 and wrestling became the focus through high school.",
  },
  {
    label: "Setback",
    title: "Unhappy triad knee injury",
    body: "I postponed surgery to finish my senior season \u2014 and leaned on regular massage to keep going.",
  },
  {
    label: "Calling",
    title: "B.S. Kinesiology + Medical Massage",
    body: "Inspired by sport and recovery, I pursued a degree in Kinesiology and a medical massage certification.",
  },
  {
    label: "Today",
    title: "Synergy with Chiropractic",
    body: "Combining deep tissue massage with chiropractic principles \u2014 separately they\u2019re great, together they\u2019re amazing.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/about-us/meet-austin", cmsFallbackMetadata);
}

export default function MeetAustinPage() {
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
          { label: "Meet Austin" },
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
                "radial-gradient(at 75% 20%, rgba(245,197,24,0.22), transparent 55%), radial-gradient(at 15% 80%, rgba(1,112,185,0.35), transparent 55%)",
              backgroundSize: "200% 200%",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-brand-gold/15 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full bg-brand-blue/20 blur-3xl pointer-events-none animate-drift"
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

          {/* Rhythm bars across bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 opacity-40 pointer-events-none flex items-end px-6">
            <WaveBars className="w-full h-full" accent="#3B9BDB" count={60} />
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
                  <span>Meet Austin Your Deep Tissue Massage Therapist</span>
                </Link>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="section-title mt-6 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-5xl">
                  Discover{" "}
                  <span className="italic normal-case text-brand-gold">
                    Austin Huber
                  </span>
                  : Your Expert Massage Therapist at Synergy Spine
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-4 text-white/80 text-lg md:text-xl font-medium uppercase tracking-wide">
                  Massage Therapy
                </p>
              </Reveal>

              <Reveal delay={300}>
                <p className="mt-6 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed">
                  Kinesiologist, percussionist, athlete &mdash; and the
                  deep-tissue massage therapist who makes chiropractic care
                  work even better.
                </p>
              </Reveal>

              <Reveal delay={400} className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#story"
                  className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-6 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors shadow-[0_10px_30px_-10px_rgba(245,197,24,0.6)]"
                >
                  <span>Read Austin&apos;s story</span>
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
                  <span>Book a session</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </BookTrigger>
              </Reveal>
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

        {/* ───────────── STATS ───────────── */}
        <section className="relative bg-white pt-6 lg:pt-8 pb-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="group relative rounded-2xl bg-gradient-to-br from-white to-brand-bg ring-1 ring-black/5 px-5 py-6 text-center overflow-hidden hover:shadow-[0_20px_40px_-20px_rgba(13,35,64,0.25)] transition-shadow">
                    <div
                      className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-brand-blue/10 blur-2xl group-hover:bg-brand-gold/20 transition-colors"
                      aria-hidden="true"
                    />
                    <p className="relative section-title text-3xl md:text-4xl font-semibold text-brand-navyDark">
                      {s.plain ? (
                        <>
                          {s.value}
                          {s.suffix ?? ""}
                        </>
                      ) : (
                        <AnimatedCounter end={s.value} suffix={s.suffix ?? ""} />
                      )}
                    </p>
                    <p className="relative mt-1.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-brand-textLight">
                      {s.label}
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
              {/* Sticky portrait */}
              <Reveal className="lg:col-span-5 lg:sticky lg:top-28" variant="fade">
                <div className="relative">
                  <div
                    className="absolute -inset-3 rounded-[32px] bg-brand-blue/20 -rotate-2"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -inset-1 rounded-[28px] bg-brand-gold/25 rotate-1"
                    aria-hidden="true"
                  />
                  <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_-20px_rgba(13,35,64,0.45)] bg-brand-bg">
                    <Image
                      src={PORTRAIT_IMAGE}
                      alt="Austin Vidonn Huber, Massage Therapist at Synergy Spine and Nerve Center"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Bio text */}
              <Reveal className="lg:col-span-7" delay={120}>
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Austin&apos;s Story
                  </p>
                </div>

                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Athlete. Drummer.{" "}
                  <span className="italic text-brand-blue">Healer</span>.
                </h2>

                <div className="mt-8 space-y-5 text-brand-text text-base md:text-[17px] leading-relaxed">
                  <p>
                    My Name is Austin Vidonn Huber. I was born in Albuquerque
                    NM. From the time I was born I have been learning about
                    physical movement and expression of all types. I have a
                    fairly extensive background in Athletics and outdoor sports.
                    I also have a great love for music and am constantly
                    working on perfecting my skills as a percussionist and
                    drummer. I was introduced to massage therapy at the age of
                    ten by a friends mother.
                  </p>

                  <p>
                    When I was young I enjoyed playing any sport I could. I
                    became proficient in soccer, football, snowboarding and
                    wrestling. As I entered junior high the focus became
                    wrestling and this continued through high school. My high
                    school wrestling career was plagued by an ongoing knee
                    injury called unhappy triad. Not wanting to miss any time I
                    decided to wait for surgery until my senior year had ended.
                    During this struggle I received a lot of help from my
                    friends mother. This left a lasting impression on me.
                  </p>

                  <p>
                    Because of my love for sports and my positive experience
                    receiving massage through my injuries I was ultimately
                    inspired to pursue my Bachelor&apos;s in Kinesiology as
                    well as a medical massage certification. I am grateful and
                    excited to have the opportunity to use my experiences to
                    assist others as they heal. Since I have been at Straight
                    Chiropractic I have come to realize the great benefit of
                    combining deep tissue massage with the principles and
                    application of Chiropractic. Massage is great. Chiropractic
                    is great. But when used together the progress a person has
                    is amazing.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────────── RHYTHM BANNER ───────────── */}
        <section className="bg-white pb-16">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="relative rounded-3xl bg-gradient-to-r from-brand-navyDark via-brand-navy to-brand-navyDark p-8 lg:p-10 overflow-hidden ring-1 ring-black/5">
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
                      The rhythm of recovery
                    </p>
                    <h3 className="section-title mt-2 text-2xl md:text-3xl text-white font-semibold leading-snug">
                      Bodies move in rhythm &mdash; recovery does too. Austin works{" "}
                      <span className="italic text-brand-gold">with the beat</span>, not against it.
                    </h3>
                  </div>
                  <WaveBars className="w-full" accent="#3B9BDB" count={36} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────── JOURNEY ───────────── */}
        <section className="relative bg-brand-bg py-20 lg:py-28 overflow-hidden">
          <div
            className="absolute -top-32 left-1/3 w-[420px] h-[420px] rounded-full bg-brand-blue/8 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Chapters
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  A path written by{" "}
                  <span className="italic text-brand-blue">movement</span>.
                </h2>
              </div>
            </Reveal>

            <div className="relative mt-14">
              {/* Center line */}
              <div
                className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-blue/40 to-transparent md:-translate-x-px"
                aria-hidden="true"
              />
              {/* Pulse */}
              <div
                className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-3 h-16 bg-gradient-to-b from-brand-gold via-brand-gold/60 to-transparent rounded-full blur-sm animate-flowDown pointer-events-none"
                aria-hidden="true"
              />

              <ol className="space-y-10 md:space-y-12">
                {CHAPTERS.map((c, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <Reveal as="li" key={c.title} delay={i * 80}>
                      <div className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${isLeft ? "" : "md:[&>*:first-child]:order-2"}`}>
                        <div className={`pl-16 md:pl-0 ${isLeft ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                          <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                            {c.label}
                          </p>
                          <h3 className="section-title mt-1 text-xl text-brand-navyDark font-semibold">
                            {c.title}
                          </h3>
                          <p className="mt-2 text-brand-textLight leading-relaxed">
                            {c.body}
                          </p>
                        </div>

                        <div className="absolute left-6 md:left-1/2 top-1.5 -translate-x-1/2">
                          <span className="relative grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg ring-4 ring-brand-bg">
                            <span className="text-[11px] font-bold">{String(i + 1).padStart(2, "0")}</span>
                            <span className="absolute inset-0 rounded-full ring-2 ring-brand-blue/40 opacity-30 animate-pulseRing" />
                          </span>
                        </div>

                        <div className="hidden md:block" />
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* ───────────── CREDENTIALS ───────────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Credentials
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight max-w-2xl">
                Trained where movement meets{" "}
                <span className="italic text-brand-blue">medicine</span>.
              </h2>
            </Reveal>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {CREDENTIALS.map((c, i) => (
                <Reveal key={c.title} delay={i * 100}>
                  <div className="group relative rounded-3xl bg-gradient-to-br from-white to-brand-bg ring-1 ring-black/5 p-6 h-full hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(13,35,64,0.3)] transition-all duration-500">
                    <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg shadow-brand-blue/30">
                      <div className="w-6 h-6">{c.icon}</div>
                      <span className="absolute inset-0 rounded-2xl ring-2 ring-brand-blue/40 animate-pulseRing pointer-events-none" />
                    </div>
                    <h3 className="section-title mt-5 text-lg text-brand-navyDark font-semibold">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {c.body}
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
                      Better together
                    </p>
                    <h3 className="section-title mt-2 text-2xl md:text-3xl text-white font-semibold leading-snug">
                      Massage is great. Chiropractic is great. Together &mdash;{" "}
                      <span className="italic text-brand-gold">the progress is amazing</span>.
                    </h3>
                  </div>
                  <PulseWave className="w-full max-w-md justify-self-end" accent="#3B9BDB" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────── CTA ───────────── */}
        <section className="relative bg-brand-bg py-20 lg:py-24 overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-[460px] h-[460px] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full bg-brand-blue/10 blur-3xl pointer-events-none animate-drift"
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
