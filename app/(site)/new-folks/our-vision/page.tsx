import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import PulseWave from "@/components/motion/PulseWave";
import AnimatedCounter from "@/components/motion/AnimatedCounter";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/new-folks/our-vision/";

const cmsFallbackMetadata: Metadata = {
  title: "Our Vision Synergy Spine and Nerve Center",
  description:
    "Empowering families: our vision for health and wellness. We educate and adjust families across Rio Rancho and Albuquerque toward optimal natural health.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Our Vision Synergy Spine and Nerve Center",
    description:
      "Educate and adjust as many families as possible toward optimal health through chiropractic.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const PILLARS = [
  {
    label: "Educate",
    title: "Knowledge before adjustment.",
    body:
      "We teach families how the spine, nervous system, and overall health are connected, so every choice you make at home builds on what we do at the office.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5L2 10z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    label: "Adjust",
    title: "Care that actually corrects.",
    body:
      "Targeted chiropractic adjustments that respect each member of your family, from infants to grandparents, and give the body its best chance to heal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v8M8 6h8M5 14c0 4 3 7 7 7s7-3 7-7" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    ),
  },
  {
    label: "Empower",
    title: "Health that lasts a lifetime.",
    body:
      "Every family we serve becomes a small force for natural health in their community, that ripple effect is why we do this work.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12c2-3 5-5 9-5s7 2 9 5c-2 3-5 5-9 5s-7-2-9-5z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
];

const RESULTS = [
  "Migraines fading after years of medication",
  "Blood pressure normalizing without drugs",
  "Cholesterol numbers improving",
  "Immune systems bouncing back",
  "Children sleeping deeper, parents breathing easier",
];

const VALUES = [
  { title: "Family-first care", body: "We treat infants, kids, parents, and grandparents, generations of health under one roof." },
  { title: "Natural before invasive", body: "We pursue every drug-free option that respects the body's own ability to heal." },
  { title: "Honest plans", body: "Clear communication, clear expectations, clear pricing, every step of the way." },
  { title: "Whole-community impact", body: "From Rio Rancho and Albuquerque to Tucumcari, Gallup, and Taos, distance is no obstacle to feeling great." },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/new-folks/our-vision", cmsFallbackMetadata);
}

export default function OurVisionPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "New Folks", href: "/new-folks/" },
          { label: "Our Vision" },
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
            className="absolute inset-0 opacity-60 pointer-events-none animate-gradientShift"
            style={{
              backgroundImage:
                "radial-gradient(at 25% 25%, rgba(245,197,24,0.18), transparent 55%), radial-gradient(at 75% 35%, rgba(1,112,185,0.32), transparent 55%), radial-gradient(at 50% 90%, rgba(59,155,219,0.22), transparent 60%)",
              backgroundSize: "200% 200%",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-blue/20 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {[
              { top: "14%", left: "20%", delay: "0s" },
              { top: "28%", left: "76%", delay: "1.4s" },
              { top: "62%", left: "14%", delay: "2.1s" },
              { top: "76%", left: "82%", delay: "0.6s" },
              { top: "42%", left: "90%", delay: "1.8s" },
            ].map((s, i) => (
              <span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-brand-gold animate-twinkle"
                style={{ top: s.top, left: s.left, animationDelay: s.delay }}
              />
            ))}
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <Link
                  href="/new-folks/"
                  className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 hover:text-brand-gold transition-colors"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                  <span>New Folks</span>
                </Link>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="section-title mt-5 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase">
                  Empowering families:{" "}
                  <span className="italic normal-case text-brand-gold">
                    our vision
                  </span>{" "}
                  for health and wellness
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-6 max-w-xl text-white/75 text-base md:text-lg leading-relaxed">
                  Our purpose is to educate and adjust as many families as we
                  possibly can on the road to optimal health.
                </p>
              </Reveal>

              <Reveal delay={320} className="mt-8 flex flex-wrap items-center gap-4">
                <BookTrigger
                  className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-6 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors shadow-[0_10px_30px_-10px_rgba(245,197,24,0.6)]"
                >
                  <span>Become Part of It</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                    <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </BookTrigger>
                <Link
                  href="/testimonials/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-brand-gold transition-colors"
                >
                  <span>See real stories</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-5" delay={150} variant="fade">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
                {/* Ambient glow */}
                <div
                  className="absolute -inset-8 rounded-[48px] bg-gradient-to-br from-brand-gold/25 via-brand-blue/10 to-transparent blur-2xl"
                  aria-hidden="true"
                />
                {/* Portrait card */}
                <div className="relative h-full w-full overflow-hidden rounded-[36px] ring-1 ring-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] bg-brand-navyDark/60">
                  <Image
                    src="/team/dr-brad.webp"
                    alt="Dr. Brad Fackrell of Synergy Spine and Nerve Center"
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 360px"
                    className="object-cover"
                    priority
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/85 via-brand-navyDark/10 to-transparent" />
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                    Three generations
                  </p>
                  <p className="section-title text-sm text-white font-semibold">
                    One healthier family
                  </p>
                </div>
              </div>
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

        {/* THE STORY */}
        <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
          <div
            className="absolute -top-24 -left-32 w-[480px] h-[480px] rounded-full bg-brand-blue/[0.06] blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-brand-gold/[0.07] blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 lg:items-center">
              {/* Left, video */}
              <Reveal className="lg:col-span-6" variant="fade">
                <div className="relative">
                  <div
                    className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-gold/15 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative rounded-[28px] p-2 bg-white ring-1 ring-black/[0.06] shadow-[0_30px_60px_-25px_rgba(13,35,64,0.35)]">
                    <YouTubeEmbed
                      id="Sod3VjIEKOA"
                      title="Watch our story, Synergy Spine and Nerve Center"
                      aspect="aspect-[4/3]"
                    />
                  </div>
                  <div className="absolute -bottom-5 left-6 inline-flex items-center gap-2 rounded-full bg-brand-navyDark px-4 py-2 shadow-lg ring-1 ring-white/10">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-gold" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                      Watch our story
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Right, copy */}
              <div className="lg:col-span-6">
                <Reveal>
                  <div className="inline-flex items-center gap-3">
                    <span className="h-px w-10 bg-brand-blue" />
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                      Our story
                    </p>
                  </div>
                  <h2 className="section-title mt-4 text-3xl md:text-4xl lg:text-[2.6rem] text-brand-navyDark font-semibold leading-[1.1]">
                    Serving the Rio Rancho &amp; Albuquerque area, {" "}
                    <span className="italic text-brand-blue">and beyond</span>.
                  </h2>
                </Reveal>

                <Reveal delay={140}>
                  <p className="mt-6 text-brand-text text-base md:text-lg leading-relaxed">
                    Our office is located in the heart of Rio Rancho, but we are
                    blessed to serve the Albuquerque area. Many of our patients
                    travel from East-Albuquerque, the South Valley, and the
                    surrounding mountain communities, we even have folks who
                    come to us from Tucumcari, Gallup, and Taos.
                  </p>
                </Reveal>

                <Reveal delay={220}>
                  <div className="mt-7 flex gap-4 rounded-2xl bg-brand-bg/70 ring-1 ring-black/[0.05] p-5">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z" />
                        <circle cx="12" cy="11" r="2.5" />
                      </svg>
                    </span>
                    <p className="text-brand-text text-[15px] md:text-base leading-relaxed">
                      Why do they make the trip? Because the changes are real, 
                      long-standing migraines fading, blood pressure and
                      cholesterol numbers improving, immune systems bouncing
                      back, and families finally getting a good night&apos;s
                      sleep.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={300}>
                  <p className="mt-7 text-brand-navyDark text-lg md:text-xl font-medium leading-relaxed">
                    Our purpose is simple:{" "}
                    <span className="text-brand-blue">
                      educate and adjust as many families as we possibly can
                    </span>{" "}
                    on the road to optimal health. That is the work, and it is
                    what gets us out of bed every day.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* COUNTERS */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Real change,{" "}
                  <span className="italic text-brand-blue">measured</span>.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <Reveal>
                <article className="bg-white rounded-3xl ring-1 ring-black/5 p-8 text-center shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                  <p className="section-title text-5xl md:text-6xl text-brand-navyDark font-semibold leading-none">
                    <AnimatedCounter end={3} suffix="" />
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                    Generations cared for
                  </p>
                  <p className="mt-2 text-sm text-brand-textLight">
                    Infants, kids, parents, and grandparents, all under one roof.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={100}>
                <article className="bg-white rounded-3xl ring-1 ring-black/5 p-8 text-center shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                  <p className="section-title text-5xl md:text-6xl text-brand-navyDark font-semibold leading-none">
                    <AnimatedCounter end={30} suffix="+" />
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                    Years drug-free
                  </p>
                  <p className="mt-2 text-sm text-brand-textLight">
                    Living proof that natural health works long-term.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={200}>
                <article className="bg-white rounded-3xl ring-1 ring-black/5 p-8 text-center shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                  <p className="section-title text-5xl md:text-6xl text-brand-navyDark font-semibold leading-none">
                    <AnimatedCounter end={1000} suffix="+" />
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                    Lives improved
                  </p>
                  <p className="mt-2 text-sm text-brand-textLight">
                    From migraines to immunity, your story is welcome here.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MISSION PILLARS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Three pillars
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  How we live the{" "}
                  <span className="italic text-brand-blue">mission</span>.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid md:grid-cols-3 gap-6">
              {PILLARS.map((p, i) => (
                <Reveal as="li" key={p.label} delay={i * 120}>
                  <article className="relative h-full bg-white rounded-3xl ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.2)] hover:-translate-y-1 transition-all duration-500">
                    <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg">
                      <div className="w-6 h-6">{p.icon}</div>
                      <span className="absolute inset-0 rounded-2xl ring-2 ring-current opacity-30 animate-pulseRing pointer-events-none" />
                    </div>
                    <p className="mt-5 text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                      {p.label}
                    </p>
                    <h3 className="section-title mt-1 text-xl text-brand-navyDark font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-brand-textLight leading-relaxed">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* RESULTS BANNER */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="relative rounded-3xl bg-gradient-to-r from-brand-navyDark via-brand-navy to-brand-navyDark p-8 lg:p-10 overflow-hidden ring-1 ring-black/5 text-white">
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                  aria-hidden="true"
                />
                <div className="relative grid md:grid-cols-2 items-center gap-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                      Real changes folks see
                    </p>
                    <h3 className="section-title mt-2 text-2xl md:text-3xl font-semibold leading-snug">
                      What patients{" "}
                      <span className="italic text-brand-gold">come back</span>{" "}
                      to tell us.
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {RESULTS.map((r) => (
                      <li key={r} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-white/85">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <PulseWave className="absolute right-2 bottom-2 w-48 opacity-40" accent="#FFE066" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  What we{" "}
                  <span className="italic text-brand-blue">stand for</span>.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 gap-6">
              {VALUES.map((v, i) => (
                <Reveal as="li" key={v.title} delay={i * 100}>
                  <article className="h-full bg-brand-bg/60 rounded-3xl ring-1 ring-black/5 p-7 hover:bg-white hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.2)] transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="section-title text-lg text-brand-navyDark font-semibold">
                          {v.title}
                        </h3>
                        <p className="mt-2 text-brand-text leading-relaxed">
                          {v.body}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="relative bg-brand-navyDark text-white py-20 lg:py-24 overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-brand-blue/20 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-brand-gold/12 blur-3xl pointer-events-none animate-drift"
            style={{ animationDelay: "-7s" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Bring your family in.{" "}
                <span className="italic text-brand-gold">
                  Let&apos;s build a healthier generation
                </span>
                .
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors"
              >
                <span>$37 New Patient Special</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <BookTrigger
                className="text-sm font-semibold text-white/85 hover:text-brand-gold transition-colors"
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
