import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import PulseWave from "@/components/motion/PulseWave";
import WaveBars from "@/components/motion/WaveBars";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/new-folks/np-schedule/";

const cmsFallbackMetadata: Metadata = {
  title: "$37 Online New Patient Special Synergy Spine and Nerve Center",
  description:
    "Get our $37 online New Patient Special, a one-on-one consultation, complete Spinal Health Assessment, any necessary X-rays, your first treatment, and a care plan with Dr. Brad and Austin (normally $450) at Synergy Spine and Nerve Center.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "$37 Online New Patient Special Synergy Spine and Nerve Center",
    description:
      "New Patient Special normally $450, yours for just $37 when you book online.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const INCLUDED = [
  {
    title: "One-on-one consultation",
    body: "Sit down with Dr. Brad or Austin and walk through your story, your goals, and exactly what you're hoping to fix.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Complete Spinal Health Assessment",
    body: "A thorough neuro-spinal evaluation that objectively scores how spinal stress is affecting your nervous system, the master controller of every cell in your body.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    title: "Any necessary X-rays",
    body: "Low-dose, high-detail digital imaging when indicated, so we can see exactly what is happening in your spine, no guesswork.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 7v10M15 7v10M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Your first treatment",
    body: "We don't just assess, we get to work. Your first adjustment is included so you can start feeling the difference right away.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    ),
  },
  {
    title: "A personalized care plan",
    body: "We sit down and explain everything we found, what's going on, what we recommend, and a clear, plain-English plan to move forward.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11h6M9 7h6M9 15h4" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/new-folks/np-schedule", cmsFallbackMetadata);
}

export default function NPSchedulePage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "New Folks", href: "/new-folks/" },
          { label: "Book Appointment" },
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
                "radial-gradient(at 20% 20%, rgba(245,197,24,0.22), transparent 55%), radial-gradient(at 80% 30%, rgba(1,112,185,0.32), transparent 55%), radial-gradient(at 50% 90%, rgba(59,155,219,0.22), transparent 60%)",
              backgroundSize: "200% 200%",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-gold/20 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-brand-blue/20 blur-3xl pointer-events-none animate-drift"
            style={{ animationDelay: "-9s" }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 opacity-50 pointer-events-none">
            <WaveBars />
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

              <Reveal delay={100}>
                <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-brand-gold/10 ring-1 ring-brand-gold/30 backdrop-blur pl-2 pr-4 py-1.5">
                  <span className="inline-flex h-6 px-2 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark text-[10px] font-extrabold uppercase tracking-[0.18em]">
                    Save $413
                  </span>
                  <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/85">
                    Limited online offer
                  </span>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <h1 className="section-title mt-5 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase">
                  Our{" "}
                  <span className="italic normal-case text-brand-gold">
                    $37 online
                  </span>{" "}
                  new patient special
                </h1>
              </Reveal>

              <Reveal delay={260}>
                <p className="mt-6 max-w-xl text-white/75 text-base md:text-lg leading-relaxed">
                  A one-on-one consultation, complete Spinal Health Assessment,
                  any necessary X-rays, your first treatment, and a care plan
                  with Dr. Brad or Austin, normally{" "}
                  <span className="line-through text-white/55">$450</span>{" "}
                  <span className="text-brand-gold font-semibold">
                    just $37
                  </span>{" "}
                  when you book online.
                </p>
              </Reveal>

              <Reveal delay={340} className="mt-8 flex flex-wrap items-center gap-4">
                <BookTrigger
                  className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-6 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors shadow-[0_10px_30px_-10px_rgba(245,197,24,0.6)]"
                >
                  <span>Claim My $37 Visit</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17 17 7M17 7H8M17 7v9" />
                    </svg>
                  </span>
                </BookTrigger>
                <a
                  href="tel:+15058912280"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-brand-gold transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
                  </svg>
                  <span>(505) 891-2280</span>
                </a>
              </Reveal>
            </div>

            {/* Price card */}
            <Reveal className="lg:col-span-5" delay={150} variant="fade">
              <div className="relative mx-auto w-full max-w-sm">
                <div
                  className="absolute -inset-4 rounded-[44px] bg-gradient-to-br from-brand-gold/35 to-brand-blue/30 blur-2xl -z-10 animate-drift"
                  aria-hidden="true"
                />
                <article className="relative rounded-[32px] bg-white text-brand-navyDark p-8 ring-1 ring-black/5 shadow-[0_30px_60px_-20px_rgba(13,35,64,0.6)]">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                      New Patient Special
                    </p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-bg px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-navyDark">
                      Online only
                    </span>
                  </div>

                  <div className="mt-6 flex items-end gap-3">
                    <span className="section-title text-6xl font-semibold leading-none">
                      $37
                    </span>
                    <span className="pb-2 text-base font-semibold text-brand-textLight line-through">
                      $450
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-brand-textLight">
                    Consult, assessment, X-rays, first treatment &amp; plan
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {[
                      "One-on-one consultation",
                      "Complete Spinal Health Assessment",
                      "Any necessary X-rays",
                      "Your first treatment",
                      "A personalized care plan",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] text-brand-text">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <BookTrigger
                    className="mt-7 group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navyDark text-white px-6 py-3 text-sm font-bold hover:bg-brand-blue transition-colors"
                  >
                    <span>Book online now</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </BookTrigger>
                </article>
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

        {/* COPY + WHAT'S INCLUDED */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Why $37?
                  </p>
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Removing every reason to{" "}
                  <span className="italic text-brand-blue">wait</span>.
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-6 text-brand-text text-lg leading-relaxed">
                  When folks are hurting, the last thing they need is a price
                  tag that gets in the way of finding answers. So we made it
                  simple: $37 gets you in the door, in front of Dr. Brad or
                  Austin, and on a clear path forward.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-5 text-brand-text text-lg leading-relaxed">
                  No insurance hassle. No pressure to commit to anything more.
                  Just a comprehensive Spinal Health Assessment so you know
                  exactly what is going on, and what we can do about it.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <h3 className="section-title text-2xl md:text-3xl text-brand-navyDark font-semibold">
                  What&apos;s included.
                </h3>
              </Reveal>
              <ul className="mt-8 grid sm:grid-cols-2 gap-5">
                {INCLUDED.map((item, i) => (
                  <Reveal as="li" key={item.title} delay={i * 100}>
                    <article className="h-full bg-brand-bg/60 rounded-3xl ring-1 ring-black/5 p-6 hover:bg-white hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] transition-all duration-500">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg">
                        <div className="w-5 h-5">{item.icon}</div>
                      </div>
                      <h4 className="section-title mt-4 text-base text-brand-navyDark font-semibold">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                        {item.body}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* MEET DRS */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  You&apos;ll be in great{" "}
                  <span className="italic text-brand-blue">hands</span>.
                </h2>
                <p className="mt-4 text-brand-text text-lg leading-relaxed">
                  Your Spinal Health Assessment is performed by Dr. Brad or
                  Austin, both are committed to the same standard of care
                  that has helped families across New Mexico thrive.
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                {
                  name: "Dr. Brad Fackrell",
                  role: "Founder · Doctor of Chiropractic",
                  href: "/about-us/meet-dr-brad/",
                },
                {
                  name: "Austin Vidonn-Huber",
                  role: "Doctor of Chiropractic",
                  href: "/about-us/meet-austin/",
                },
              ].map((d, i) => (
                <Reveal as="li" key={d.name} delay={i * 100}>
                  <Link
                    href={d.href}
                    className="group block bg-white rounded-3xl ring-1 ring-black/5 p-7 hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.2)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="section-title text-xl text-brand-navyDark font-semibold">
                          {d.name}
                        </h3>
                        <p className="text-sm text-brand-textLight">{d.role}</p>
                      </div>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-blue group-hover:text-brand-navyDark transition-colors">
                      <span>Read bio</span>
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

        {/* PULSE BANNER */}
        <section className="bg-white py-12 lg:py-16">
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
                <div className="relative grid md:grid-cols-2 items-center gap-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                      Quick · Online · Honest
                    </p>
                    <h3 className="section-title mt-2 text-2xl md:text-3xl font-semibold leading-snug">
                      Book in{" "}
                      <span className="italic text-brand-gold">two minutes</span>
                      .
                    </h3>
                    <p className="mt-3 text-white/70">
                      Pick a time that works. Fill out your forms ahead of
                      time. Show up calm.
                    </p>
                    <BookTrigger
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-gold text-brand-navyDark px-6 py-2.5 text-sm font-bold hover:bg-white transition-colors"
                    >
                      <span>Book my visit</span>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 17 17 7M17 7H8M17 7v9" />
                      </svg>
                    </BookTrigger>
                  </div>
                  <PulseWave className="w-full max-w-md justify-self-end" accent="#FFE066" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CLOSING */}
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
                Walk in hurting.{" "}
                <span className="italic text-brand-blue">
                  Walk out with a plan.
                </span>
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-navyDark text-white rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-brand-blue transition-colors"
              >
                <span>Book $37 New Patient Visit</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark group-hover/cta:bg-white group-hover/cta:text-brand-blue transition-colors">
                  <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
