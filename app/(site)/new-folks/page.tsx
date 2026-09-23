import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import OrbitGraphic from "@/components/motion/OrbitGraphic";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/new-folks/";

const cmsFallbackMetadata: Metadata = {
  title: "New Folks Synergy Spine and Nerve Center",
  description:
    "Welcome to Synergy Spine and Nerve Center. Everything new patients need, first visit guide, intake forms, our vision, and online scheduling in Rio Rancho, NM.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "New Folks Synergy Spine and Nerve Center",
    description:
      "Welcome new patients! First visit guide, intake forms, our vision, and online scheduling.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

type Card = {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
  accent: "blue" | "gold" | "navy" | "blueLight";
};

const CARDS: Card[] = [
  {
    title: "First Visit",
    desc: "Walk in knowing exactly what to expect, from intake to consultation, exam, and your report of findings.",
    href: "/new-folks/first-visit/",
    accent: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="3" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Our Vision",
    desc: "Educate and adjust as many families as possible toward optimal health through natural chiropractic care.",
    href: "/new-folks/our-vision/",
    accent: "navy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Book Appointment",
    desc: "Get our $37 New Patient Special, a consultation, complete Spinal Health Assessment, any necessary X-rays, your first treatment, and a care plan, normally $450.",
    href: "/new-folks/np-schedule/",
    accent: "blueLight",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

const ACCENT_BG: Record<Card["accent"], string> = {
  blue: "from-brand-blue to-brand-blueLight",
  gold: "from-brand-gold to-brand-goldSoft",
  navy: "from-brand-navy to-brand-navyDark",
  blueLight: "from-brand-blueLight to-brand-blue",
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/new-folks", cmsFallbackMetadata);
}

export default function NewFolksPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "New Folks" },
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

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/15 pl-2 pr-4 py-1.5">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold">
                  <svg className="w-3 h-3 text-brand-navyDark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7L12 2z" />
                  </svg>
                </span>
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em]">
                  New Patients
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="section-title mt-6 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-5xl">
                Welcome to Synergy Spine{" "}
                <span className="italic normal-case text-brand-gold">
                  &amp; Nerve Center
                </span>
, your new patient guide
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-2xl text-white/75 text-base md:text-lg leading-relaxed">
                Many people find us because they&apos;re in some kind of pain.
                Over the years we&apos;ve helped a lot of folks live a better
                life, but what makes us feel <em>great</em> is helping someone
                overcome a major health challenge.
              </p>
            </Reveal>

            <Reveal delay={320} className="mt-8 flex flex-wrap items-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-6 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors shadow-[0_10px_30px_-10px_rgba(245,197,24,0.6)]"
              >
                <span>$37 New Patient Special</span>
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
                <span>Read testimonials</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
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

        {/* WHAT CAN WE DO copy + orbit */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    What can we do to help you?
                  </p>
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  More than pain relief, {" "}
                  <span className="italic text-brand-blue">
                    real change
                  </span>
                  .
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-6 text-brand-text text-lg leading-relaxed">
                  Many people find us because they are in some kind of pain.
                  Over the years we&apos;ve been able to help a lot of people
                  live a better life. That makes us feel good. But what makes
                  us feel <em>GREAT</em> is when we are able to help someone
                  overcome a major health challenge.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-5 text-brand-text text-lg leading-relaxed">
                  Be sure to check out our testimonials page to see stories of
                  folks overcoming things like high blood pressure, bed
                  wetting, fibromyalgia, diabetes, asthma, bone loss, and so
                  many others.
                </p>
              </Reveal>

              <Reveal delay={280} className="mt-8">
                <Link
                  href="/testimonials/"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-blue text-white px-6 py-3 text-sm font-semibold hover:bg-brand-navyDark transition-colors shadow-[0_10px_30px_-10px_rgba(1,112,185,0.5)]"
                >
                  <span>Testimonials</span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-5" delay={150} variant="fade">
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

        {/* CARD GRID */}
        <section className="relative bg-brand-bg py-20 lg:py-24 overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-[460px] h-[460px] rounded-full bg-brand-blue/8 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full bg-brand-gold/8 blur-3xl pointer-events-none animate-drift"
            style={{ animationDelay: "-5s" }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-6xl px-6">
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
                  Everything you need before your{" "}
                  <span className="italic text-brand-blue">first visit</span>.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {CARDS.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 100}>
                  <Link href={c.href} className="block h-full group">
                    <article className="relative h-full bg-white rounded-3xl ring-1 ring-black/5 p-6 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.25)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                      <div
                        className={`absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r ${ACCENT_BG[c.accent]} rounded-b scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
                        aria-hidden="true"
                      />

                      <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${ACCENT_BG[c.accent]} text-white shadow-lg`}>
                        <div className="w-6 h-6">{c.icon}</div>
                        <span className="absolute inset-0 rounded-2xl ring-2 ring-current opacity-30 animate-pulseRing pointer-events-none" />
                      </div>

                      <p className="mt-5 text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                        Step {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="section-title mt-1 text-xl text-brand-navyDark font-semibold">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                        {c.desc}
                      </p>

                      <div className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-navyDark group-hover:text-brand-blue transition-colors">
                        <span>Open</span>
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
                    </article>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="relative bg-brand-bg py-20 lg:py-24 overflow-hidden">
          <div
            className="absolute -top-32 right-1/4 w-[420px] h-[420px] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 left-1/4 w-[420px] h-[420px] rounded-full bg-brand-blue/10 blur-3xl pointer-events-none animate-drift"
            style={{ animationDelay: "-6s" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl text-brand-navyDark font-semibold leading-snug">
                Ready to take your{" "}
                <span className="italic text-brand-blue">next step</span>{" "}
                toward better health?
              </p>
            </Reveal>

            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
