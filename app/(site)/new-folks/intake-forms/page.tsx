import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import OrbitGraphic from "@/components/motion/OrbitGraphic";

import BookTrigger from "@/components/booking/BookTrigger";
import IntakeForm from "@/components/forms/IntakeForm";
const CANONICAL = "https://synergyspineandnerve.com/new-folks/intake-forms/";

const cmsFallbackMetadata: Metadata = {
  title: {
    absolute: "New Patient Intake Forms | Rio Rancho Chiropractor",
  },
  description:
    "Complete your Synergy Spine and Nerve Center intake form online before your first Rio Rancho visit. Encrypted to our care team. Call (505) 891-2280.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Complete Your Intake Forms Synergy Spine and Nerve Center",
    description:
      "Fill out your New Patient form online so your first visit goes smoothly.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const PERKS = [
  {
    title: "Skip the wait",
    desc: "No clipboard, no lobby paperwork, your check-in moves fast.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Secure & private",
    desc: "Information is encrypted and only seen by your care team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Paperless office",
    desc: "We are committed to a paperless workflow, better for you and the planet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
    ),
  },
  {
    title: "Better consultation",
    desc: "Sharing your story up front means we can dig deeper, sooner.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const PREP = [
  "Name, date of birth, and contact info",
  "A brief summary of your main concern (when it started, what makes it worse / better)",
  "Current medications and any past surgeries or major conditions",
  "Insurance details (optional, only if you plan to use coverage)",
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/new-folks/intake-forms", cmsFallbackMetadata);
}

export default function IntakeFormsPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "New Folks", href: "/new-folks/" },
          { label: "Intake Forms" },
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
                <h1 className="section-title mt-5 text-3xl md:text-5xl lg:text-[3.4rem] font-semibold leading-[1.05] uppercase">
                  Complete your intake forms for a{" "}
                  <span className="italic normal-case text-brand-gold">
                    smooth first visit
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-6 max-w-xl text-white/75 text-base md:text-lg leading-relaxed">
                  We have quality online forms ready to go. Please fill these
                  out before you arrive, your wait at the office will be very
                  short. We aim to be a paperless office.
                </p>
              </Reveal>

              <Reveal delay={320} className="mt-8 flex flex-wrap items-center gap-4">
                <BookTrigger
                  className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-6 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors shadow-[0_10px_30px_-10px_rgba(245,197,24,0.6)]"
                >
                  <span>Book an appointment</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17 17 7M17 7H8M17 7v9" />
                    </svg>
                  </span>
                </BookTrigger>
                <Link
                  href="/new-folks/first-visit/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-brand-gold transition-colors"
                >
                  <span>Read the first-visit guide</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-5" delay={150} variant="fade">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
                <div className="absolute inset-0 rounded-[36px] bg-white/95 ring-1 ring-black/5 shadow-[0_30px_60px_-20px_rgba(13,35,64,0.6)]" />
                {/* Mock form card */}
                <div className="absolute inset-0 p-7 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                      New Patient Form
                    </span>
                  </div>

                  <div className="mt-8 space-y-5">
                    <div>
                      <div className="h-2.5 w-20 rounded-full bg-brand-bg" />
                      <div className="mt-2 h-9 rounded-lg bg-brand-bg ring-1 ring-black/5" />
                    </div>
                    <div>
                      <div className="h-2.5 w-28 rounded-full bg-brand-bg" />
                      <div className="mt-2 h-9 rounded-lg bg-brand-bg ring-1 ring-black/5" />
                    </div>
                    <div>
                      <div className="h-2.5 w-16 rounded-full bg-brand-bg" />
                      <div className="mt-2 h-20 rounded-lg bg-brand-bg ring-1 ring-black/5" />
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-textLight">
                      Step 1 of 3
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue text-white px-4 py-2 text-xs font-bold">
                      Next
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Floating glow */}
                <div
                  className="absolute -inset-4 rounded-[44px] bg-gradient-to-br from-brand-blue/25 to-brand-gold/15 blur-2xl -z-10 animate-drift"
                  aria-hidden="true"
                />
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

        {/* INSTRUCTIONS + PERKS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    A few minutes, big payoff
                  </p>
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Here&apos;s what to{" "}
                  <span className="italic text-brand-blue">have ready</span>.
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-6 text-brand-text text-lg leading-relaxed">
                  Filling out your forms ahead of time is the single fastest
                  way to make day one feel calm and easy. Grab your phone or
                  laptop and have these handy:
                </p>
              </Reveal>

              <ul className="mt-8 space-y-3">
                {PREP.map((item, i) => (
                  <Reveal as="li" key={item} delay={i * 80}>
                    <div className="flex items-start gap-3 rounded-2xl bg-brand-bg/60 ring-1 ring-black/5 px-5 py-4">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white text-xs font-bold">
                        {i + 1}
                      </span>
                      <p className="text-brand-text leading-relaxed">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <div className="mt-10">
                <IntakeForm />
              </div>
            </div>

            <Reveal className="lg:col-span-5" delay={150} variant="fade">
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-brand-bg to-white ring-1 ring-black/5 shadow-[0_20px_60px_-30px_rgba(13,35,64,0.3)]" />
                <OrbitGraphic className="absolute inset-0" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                    Synergy
                  </p>
                  <p className="section-title text-sm text-brand-navyDark font-semibold">
                    Connect · Calibrate · Care
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PERKS */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Why we ask you to fill it out{" "}
                  <span className="italic text-brand-blue">online</span>.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PERKS.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 100}>
                  <article className="h-full bg-white rounded-3xl ring-1 ring-black/5 p-6 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.2)] hover:-translate-y-1 transition-all duration-500">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg">
                      <div className="w-5 h-5">{p.icon}</div>
                    </div>
                    <h3 className="section-title mt-4 text-lg text-brand-navyDark font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {p.desc}
                    </p>
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
                Ready when you are, {" "}
                <span className="italic text-brand-gold">forms first</span>,
                handshake second.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors"
              >
                <span>Book an appointment</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7M17 7H8M17 7v9" />
                  </svg>
                </span>
              </BookTrigger>
              <a
                href="tel:+15058912280"
                className="text-sm font-semibold text-white/85 hover:text-brand-gold transition-colors"
              >
                Need help? Call (505) 891-2280
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
