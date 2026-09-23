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
const HERO_IMAGE = "/resources/spinal-health-assessment.jpeg";
const CANONICAL =
  "https://synergyspineandnerve.com/resources/improve-your-sha-score/";

const cmsFallbackMetadata: Metadata = {
  title: "Improve Your SHA Score Synergy Spine and Nerve Center",
  description:
    "Spinal Health Assessment (SHA) is your spine's report card. 90+ means homeostasis; below 90 your body is in allostasis. Learn how to improve your score.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Spinal Health Assessment Synergy Spine and Nerve Center",
    description:
      "Pain doesn't tell the whole story, your SHA score does. Learn what your assessment really means.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources/improve-your-sha-score", cmsFallbackMetadata);
}

export default function ImproveSHAScorePage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Spinal Health Assessment" },
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
                    Spinal Health{" "}
                    <span className="italic normal-case text-brand-gold">
                      Assessment
                    </span>
                  </h1>
                </Reveal>
                <Reveal delay={220}>
                  <p className="mt-5 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed">
                    Many folks believe spinal health is proportional to pain.
                    It is not. Your Spinal Health Assessment (SHA) is the
                    report card that finally shows you what&apos;s really
                    going on.
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
                        alt="Spinal Health Assessment at Synergy Spine and Nerve Center"
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

        {/* PAIN ANALOGIES */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Pain ≠ Health
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Pain is a{" "}
                  <span className="italic text-brand-blue">late warning</span>
, not a status update.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Reveal>
                <article className="h-full rounded-3xl bg-brand-bg ring-1 ring-black/5 p-7">
                  <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                    The teeth analogy
                  </p>
                  <h3 className="section-title mt-2 text-xl text-brand-navyDark font-semibold">
                    A cavity doesn&apos;t hurt until it&apos;s deep.
                  </h3>
                  <p className="mt-3 text-brand-text leading-relaxed">
                    By the time a tooth hurts, decay has already done
                    significant damage. The exact same thing happens in the
                    spine, and that&apos;s why we don&apos;t wait for pain to measure
                    spinal health.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={120}>
                <article className="h-full rounded-3xl bg-brand-bg ring-1 ring-black/5 p-7">
                  <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                    The heart artery analogy
                  </p>
                  <h3 className="section-title mt-2 text-xl text-brand-navyDark font-semibold">
                    The first symptom is often a heart attack.
                  </h3>
                  <p className="mt-3 text-brand-text leading-relaxed">
                    Arteries can be 70-90% blocked before any symptom shows.
                    Pain is a poor measurement tool. The SHA gives you the
                    objective data that pain can&apos;t.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WHAT IS SHA */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white p-8 lg:p-10 shadow-[0_30px_60px_-20px_rgba(1,112,185,0.45)] relative overflow-hidden">
                <span className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 animate-drift pointer-events-none" aria-hidden="true" />
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white/80">
                  What is SHA?
                </p>
                <p className="mt-3 section-title text-2xl md:text-3xl font-semibold leading-snug">
                  Your Spinal Health Assessment is a 17-page printed report
                  scored 0100.
                </p>
                <p className="mt-4 text-white/90 leading-relaxed">
                  We measure posture, range of motion, balance, strength, and
                  nervous-system function. Then we compile every finding into
                  a single, easy-to-track score so you know exactly where you
                  stand, and exactly where you&apos;re heading.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* GAUGE 0-100 */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <h2 className="section-title text-center text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                Reading your{" "}
                <span className="italic text-brand-blue">score</span>.
              </h2>
            </Reveal>

            {/* Bar gauge */}
            <Reveal delay={120}>
              <div className="mt-12 mx-auto max-w-3xl">
                <div className="relative h-6 rounded-full bg-brand-bg overflow-hidden ring-1 ring-black/5">
                  <div className="absolute inset-y-0 left-0 right-[10%] bg-gradient-to-r from-red-400 via-brand-gold to-emerald-400" />
                  <div className="absolute top-0 bottom-0 left-[90%] w-px bg-brand-navyDark" />
                </div>
                <div className="mt-2 flex justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-navyDark/70">
                  <span>0</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75</span>
                  <span className="text-brand-blue">90</span>
                  <span>100</span>
                </div>
              </div>
            </Reveal>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Reveal>
                <article className="h-full rounded-3xl bg-white ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)] border-t-4 border-emerald-400">
                  <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-emerald-600">
                    90 100
                  </p>
                  <h3 className="section-title mt-2 text-xl text-brand-navyDark font-semibold">
                    Homeostasis
                  </h3>
                  <p className="mt-3 text-brand-text leading-relaxed">
                    Your body is balanced and self-regulating. The spine and
                    nerve system are doing what they were designed to do, 
                    and you have the resources to handle daily stress without
                    breaking down.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={120}>
                <article className="h-full rounded-3xl bg-white ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)] border-t-4 border-brand-gold">
                  <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-navyDark">
                    Below 90
                  </p>
                  <h3 className="section-title mt-2 text-xl text-brand-navyDark font-semibold">
                    Allostasis
                  </h3>
                  <p className="mt-3 text-brand-text leading-relaxed">
                    Your body is using extra resources just to maintain
                    function, borrowing energy from healing, recovery, and
                    immunity to keep up with daily demands. Pain often shows
                    up well after this point.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 8 WAYS TEASER */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    8 ways to improve
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Eight habits that move the{" "}
                  <span className="italic text-brand-blue">needle</span>.
                </h2>
                <p className="mt-4 text-brand-text">
                  Small, consistent inputs compound into a meaningfully
                  better score. Here are the eight we coach with every
                  patient.
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                "Daily spinal hygiene",
                "Stay hydrated",
                "Sleep on your back or side",
                "Take movement breaks",
                "Get the right nutrients",
                "Exercise daily",
                "Manage stress intentionally",
                "Follow your adjustment plan",
              ].map((item, i) => (
                <Reveal as="li" key={item} delay={(i % 4) * 80}>
                  <article className="h-full bg-white rounded-3xl ring-1 ring-black/5 p-5 hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] hover:-translate-y-1 transition-all duration-500">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blueLight text-white text-xs font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 section-title text-base text-brand-navyDark font-semibold leading-snug">
                      {item}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* RELATED */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <Link
                href="/resources/all-about-spinal-hygiene/"
                className="group block rounded-3xl bg-gradient-to-r from-brand-navyDark via-brand-navy to-brand-navyDark p-8 lg:p-10 ring-1 ring-black/5 text-white hover:from-brand-blue hover:via-brand-blueLight hover:to-brand-blue transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                      Daily habit · Highest impact
                    </p>
                    <h3 className="section-title mt-2 text-2xl md:text-3xl font-semibold leading-snug">
                      Master your{" "}
                      <span className="italic text-brand-gold">spinal hygiene</span>{" "}
                      and watch your SHA score climb.
                    </h3>
                  </div>
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark group-hover:bg-white transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* VIDEO: Exercise saves money */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Watch · The economics of exercise
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  How exercise will{" "}
                  <span className="italic text-brand-blue">save you money</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10">
                <YouTubeEmbed
                  id="qhWTYDfn4A4"
                  title="How exercise will help you save money"
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
                Ready to know your{" "}
                <span className="italic text-brand-gold">number</span>?
              </p>
              <p className="mt-4 text-white/80">
                The $37 New Patient Special includes the full SHA, your
                17-page printed report and an honest plan.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-white transition-colors"
              >
                <span>Get Your SHA Score</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <BookTrigger
                className="text-sm font-semibold text-white/90 hover:text-brand-gold transition-colors"
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
