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
import OrbitGraphic from "@/components/motion/OrbitGraphic";
import AnimatedCounter from "@/components/motion/AnimatedCounter";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/about-us/";

const cmsFallbackMetadata: Metadata = {
  title: "About Us Synergy Spine and Nerve Center",
  description:
    "Looking for a chiropractor near Rio Rancho, New Mexico? Synergy Spine and Nerve Center is New Mexico's Premier Chiropractic care center.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "About Us Synergy Spine and Nerve Center",
    description:
      "New Mexico's Premier Chiropractic care center. Meet the team committed to helping you achieve your health goals.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  alt: string;
  href?: string;
  accent: "blue" | "gold" | "navy";
};

const TEAM: TeamMember[] = [
  {
    name: "DR. BRAD FACKRELL",
    role: "Owner, Founder & Chiropractor",
    image: "/office-images/dr-brad.jpg",
    alt: "Dr. Brad Fackrell, owner and founder of Synergy Spine and Nerve Center",
    href: "/about-us/meet-dr-brad/",
    accent: "blue",
  },
  {
    name: "AUSTIN HUBER",
    role: "Massage Therapist since 2017",
    image: "/office-images/dr-austin.jpg",
    alt: "Austin Huber, Massage Therapist at Synergy Spine and Nerve Center",
    href: "/about-us/meet-austin/",
    accent: "gold",
  },
];

const ACCENT = {
  blue: "from-brand-blue to-brand-blueLight",
  gold: "from-brand-gold to-brand-goldSoft",
  navy: "from-brand-navy to-brand-navyDark",
};

const OFFICE_GALLERY = [
  { src: "/office-images/1.jpg", alt: "Synergy Spine and Nerve Center office view 1" },
  { src: "/office-images/2.jpg", alt: "Synergy Spine and Nerve Center office view 2" },
  { src: "/office-images/3.jpg", alt: "Synergy Spine and Nerve Center office view 3" },
  { src: "/office-images/4.jpg", alt: "Synergy Spine and Nerve Center office view 4" },
  { src: "/office-images/5.jpg", alt: "Synergy Spine and Nerve Center office view 5" },
  { src: "/office-images/6.jpg", alt: "Synergy Spine and Nerve Center office view 6" },
  { src: "/office-images/7.jpg", alt: "Synergy Spine and Nerve Center office view 7" },
  { src: "/office-images/8.jpg", alt: "Synergy Spine and Nerve Center office view 8" },
];

const PILLARS = [
  {
    title: "Discover the cause",
    body: "Pain is a symptom, we hunt the source so healing isn't a guessing game.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    ),
  },
  {
    title: "Illuminate the path",
    body: "Clear, evidence-based plans that respect biological law, not band-aids.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </svg>
    ),
  },
  {
    title: "Liberate from pain",
    body: "When the body works the way it was designed to, healing follows naturally.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const STATS = [
  { label: "Years serving Rio Rancho", value: 25, suffix: "+" },
  { label: "Families restored", value: 5000, suffix: "+" },
  { label: "Adjustments delivered", value: 100000, suffix: "+" },
  { label: "Star reviews", value: 5, suffix: "★" },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/about-us", cmsFallbackMetadata);
}

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Us" },
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
            className="absolute inset-0 opacity-60 pointer-events-none animate-gradientShift"
            style={{
              backgroundImage:
                "radial-gradient(at 20% 20%, rgba(1,112,185,0.35), transparent 55%), radial-gradient(at 80% 30%, rgba(245,197,24,0.18), transparent 55%), radial-gradient(at 50% 90%, rgba(59,155,219,0.25), transparent 60%)",
              backgroundSize: "200% 200%",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-blue/20 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-brand-gold/12 blur-3xl pointer-events-none animate-drift"
            style={{ animationDelay: "-9s" }}
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
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {[
              { top: "12%", left: "18%", delay: "0s" },
              { top: "22%", left: "78%", delay: "1.4s" },
              { top: "65%", left: "12%", delay: "2.1s" },
              { top: "78%", left: "84%", delay: "0.6s" },
              { top: "44%", left: "92%", delay: "1.8s" },
              { top: "8%", left: "55%", delay: "2.6s" },
            ].map((s, i) => (
              <span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-brand-gold animate-twinkle"
                style={{ top: s.top, left: s.left, animationDelay: s.delay }}
              />
            ))}
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/15 pl-2 pr-4 py-1.5">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold">
                    <svg className="w-3 h-3 text-brand-navyDark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7L12 2z" />
                    </svg>
                  </span>
                  <span className="text-[12px] font-semibold uppercase tracking-[0.18em]">
                    About Us
                  </span>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="section-title mt-6 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] max-w-5xl uppercase">
                  About Us: Your{" "}
                  <span className="italic normal-case text-brand-gold">
                    Trusted
                  </span>{" "}
                  Chiropractic Care in Rio Rancho
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-6 max-w-2xl text-white/75 text-base md:text-lg leading-relaxed">
                  A team built on biological law, evidence-based care, and the
                  unshakeable belief that your body was designed to heal.
                </p>
              </Reveal>

              <Reveal delay={320} className="mt-8 flex flex-wrap items-center gap-4">
                <BookTrigger
                  className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-6 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors shadow-[0_10px_30px_-10px_rgba(245,197,24,0.6)]"
                >
                  <span>Book Appointment</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                    <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </BookTrigger>
                <a
                  href="#meet-the-team"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-brand-gold transition-colors"
                >
                  <span>Meet the team</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </a>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-5" delay={200} variant="fade">
              <div className="relative mx-auto w-full max-w-md aspect-square">
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm ring-1 ring-white/10" />
                <div className="absolute inset-6 rounded-[30px] overflow-hidden ring-1 ring-white/10">
                  <SpineGraphic className="absolute inset-0 w-full h-full" />
                </div>
                <div className="absolute -top-3 -right-3 rounded-2xl bg-white text-brand-navyDark px-4 py-3 shadow-2xl ring-1 ring-black/5 animate-float">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-brand-blue font-bold">Live</p>
                  <p className="text-sm font-semibold">Nerve flow active</p>
                </div>
                <div
                  className="absolute -bottom-3 -left-3 rounded-2xl bg-brand-gold text-brand-navyDark px-4 py-3 shadow-2xl ring-1 ring-black/5 animate-float"
                  style={{ animationDelay: "-2s" }}
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold">Synergy</p>
                  <p className="text-sm font-semibold">Spine · Nerve · Body</p>
                </div>
              </div>
            </Reveal>
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

        {/* ───────────── STATS ───────────── */}
        <section className="relative bg-white pt-10 lg:pt-12 pb-12">
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
                      <AnimatedCounter end={s.value} suffix={s.suffix} />
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

        {/* ───────────── INTRO + ORBIT motion ───────────── */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Our philosophy
                  </p>
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl lg:text-5xl text-brand-navyDark font-semibold leading-tight">
                  Honoring{" "}
                  <span className="italic text-brand-blue">biological law</span>
                  {" "}, and your body&apos;s built-in ability to heal.
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="mt-8 text-brand-text text-lg leading-relaxed">
                  Looking for a solution to your pain and health problems near Rio
                  Rancho, New Mexico? Synergy Spine and Nerve Center is New
                  Mexico&apos;s Premier Chiropractic care center.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-6 text-brand-text text-lg leading-relaxed">
                  We believe that everyone matters and that everyone can take their
                  next step towards better health. The problem is that most folks
                  are tossed around in the medical community and often
                  don&apos;t get answers to the underlying cause of their health
                  challenges. Pain is often debilitating and keeps you from living
                  the quality of life you deserve. However, pain is only a symptom
                  of the underlying problem.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <p className="mt-6 text-brand-text text-lg leading-relaxed">
                  Often, folks come to our office thinking that the pain they are
                  experiencing is the problem. In our office we do our best to
                  discover the cause of your problem, illuminate the possibilities
                  and then as a natural result, you are liberated from the pain,
                  all by honoring biological law and your body&apos;s ability to
                  heal. In other words, we don&apos;t cover up your pain at the
                  expense of your problem.
                </p>
              </Reveal>

              <Reveal delay={340}>
                <p className="mt-6 text-brand-text text-lg leading-relaxed">
                  We do this by following evidence based protocols to help you
                  achieve a better quality of life. Each person on our team is
                  committed to helping you achieve your health goals. Click on the
                  pictures below to learn why we each have a commitment to
                  excellence.
                </p>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-5 lg:sticky lg:top-28" variant="fade" delay={200}>
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-brand-bg to-white ring-1 ring-black/5 shadow-[0_20px_60px_-30px_rgba(13,35,64,0.3)]" />
                <OrbitGraphic className="absolute inset-0" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue">Synergy</p>
                  <p className="section-title text-sm text-brand-navyDark font-semibold">Spine · Nerve · Body</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────── PILLARS ───────────── */}
        <section className="relative bg-brand-bg py-20 lg:py-24 overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-[460px] h-[460px] rounded-full bg-brand-blue/8 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    How we work
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Three steps. One{" "}
                  <span className="italic text-brand-blue">commitment</span>.
                </h2>
              </div>
            </Reveal>

            <ol className="mt-12 grid md:grid-cols-3 gap-6 relative">
              <div
                className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent"
                aria-hidden="true"
              />
              {PILLARS.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 120}>
                  <div className="relative group rounded-3xl bg-white p-6 ring-1 ring-black/5 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(13,35,64,0.3)] transition-all duration-500 h-full">
                    <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg shadow-brand-blue/30">
                      <div className="w-6 h-6">{p.icon}</div>
                      <span className="absolute inset-0 rounded-2xl ring-2 ring-brand-blue/40 animate-pulseRing pointer-events-none" />
                    </div>
                    <p className="mt-5 text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                      Step {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="section-title mt-1 text-xl font-semibold text-brand-navyDark">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────── PULSE WAVE BANNER ───────────── */}
        <section className="bg-white py-12 lg:py-16">
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
                      Nerve flow
                    </p>
                    <h3 className="section-title mt-2 text-2xl md:text-3xl text-white font-semibold leading-snug">
                      When the signal moves freely, the body{" "}
                      <span className="italic text-brand-gold">remembers how to heal</span>.
                    </h3>
                  </div>
                  <PulseWave
                    className="w-full max-w-md justify-self-end"
                    accent="#3B9BDB"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────── TEAM ───────────── */}
        <section
          id="meet-the-team"
          className="relative bg-brand-bg py-20 lg:py-28 overflow-hidden scroll-mt-28"
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #0d2340 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-40 -left-32 w-[480px] h-[480px] rounded-full bg-brand-blue/8 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Meet the Team
                </p>
              </div>
              <h2 className="section-title mt-5 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-[1.05]">
                Committed to{" "}
                <span className="italic text-brand-blue">excellence</span>.
              </h2>
            </Reveal>

            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {TEAM.map((member, i) => {
                const accent = ACCENT[member.accent];
                const Tile = (
                  <article className="group relative h-full overflow-hidden bg-white rounded-3xl ring-1 ring-black/5 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.25)] hover:-translate-y-2 transition-all duration-500">
                    <div
                      className={`absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r ${accent} rounded-b scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-10`}
                      aria-hidden="true"
                    />

                    <div className="relative aspect-[3/4] overflow-hidden bg-brand-bg">
                      <Image
                        src={member.image}
                        alt={member.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top scale-[1.6] transition-transform duration-700 group-hover:scale-[1.7]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/55 via-brand-navyDark/0 to-transparent" />

                      <div
                        className={`absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${accent} text-white shadow-lg opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500`}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="section-title text-lg text-brand-navyDark font-semibold leading-tight uppercase tracking-wide">
                        {member.name}
                      </h3>
                      <p className="mt-1.5 text-[13px] text-brand-textLight">
                        {member.role}
                      </p>

                      {member.href && (
                        <div className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-navyDark group-hover:text-brand-blue transition-colors">
                          <span>Read bio</span>
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
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </article>
                );

                return (
                  <Reveal as="li" key={member.name} delay={i * 100}>
                    {member.href ? (
                      <Link href={member.href} className="block h-full">
                        {Tile}
                      </Link>
                    ) : (
                      Tile
                    )}
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ───────────── OFFICE GALLERY ───────────── */}
        <section className="relative bg-white py-20 lg:py-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #0d2340 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Inside our office
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  A peek at{" "}
                  <span className="italic text-brand-blue">where we work</span>.
                </h2>
                <p className="mt-4 text-brand-text">
                  Calm, clean, and built for healing. Take a quick tour of our
                  Rio Rancho practice.
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
              {OFFICE_GALLERY.map((img, i) => (
                <Reveal as="li" key={img.src} delay={i * 60}>
                  <div className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-black/5 bg-brand-bg shadow-[0_2px_10px_rgba(13,35,64,0.05)] hover:shadow-[0_20px_40px_-20px_rgba(13,35,64,0.25)] transition-shadow">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* VIDEO: How chiropractic will make you healthier */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Watch · Why we do this
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  How chiropractic will{" "}
                  <span className="italic text-brand-blue">make you healthier</span>
                </h2>
                <p className="mt-3 text-brand-text">
                  The two-minute version of our entire philosophy of care.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10">
                <YouTubeEmbed
                  id="EIwr96ukKrw"
                  title="How Chiropractic will make you healthier"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────── CTA ───────────── */}
        <section className="relative bg-white py-20 lg:py-24 overflow-hidden">
          <div
            className="absolute -top-32 right-1/4 w-[420px] h-[420px] rounded-full bg-brand-gold/8 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 left-1/4 w-[420px] h-[420px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none animate-drift"
            style={{ animationDelay: "-6s" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="text-brand-text text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Synergy Spine and Nerve Center is the premier family
                chiropractic treatment center in Rio Rancho, New
                Mexico.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 section-title text-2xl md:text-3xl text-brand-navyDark font-semibold leading-snug">
                We look forward to{" "}
                <span className="italic text-brand-blue">serving you</span>!
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
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-bg ring-1 ring-brand-navyDark/10 group-hover:bg-brand-blue group-hover:text-white group-hover:ring-transparent transition-all">
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
