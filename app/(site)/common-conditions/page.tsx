import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/common-conditions/";

const cmsFallbackMetadata: Metadata = {
  title:
    "Common Chiropractic Conditions Synergy Spine and Nerve Center",
  description:
    "From back pain and sciatica to ALS, see the common conditions we evaluate at Synergy Spine and Nerve Center in Rio Rancho, NM.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "Common Chiropractic Conditions Synergy Spine and Nerve Center",
    description:
      "Conditions we evaluate every week, and how a clear plan often changes the trajectory.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

type Cond = {
  title: string;
  desc: string;
  href?: string;
  external?: boolean;
};

const CONDITIONS: Cond[] = [
  {
    title: "Back Pain",
    desc:
      "Acute or chronic, lower or upper, back pain is the most common reason new folks find us. We start with a real exam and a real plan.",
  },
  {
    title: "Neck Pain",
    desc:
      "Posture, screen time, and old injuries pile up in the cervical spine. Adjustments plus targeted spinal hygiene change the picture.",
  },
  {
    title: "Headaches & Migraines",
    desc:
      "Tension headaches and many migraines have a cervical-spine component. Restore motion, reduce frequency.",
  },
  {
    title: "Sciatica",
    desc:
      "Pain radiating down the leg from a pinched nerve in the lower back. Identify the cause, decompress the nerve, restore function.",
  },
  {
    title: "Scoliosis",
    desc:
      "Lateral curvature of the spine. We evaluate, monitor, and coach the daily habits that keep curves from progressing.",
  },
  {
    title: "Fibromyalgia",
    desc:
      "Widespread pain and fatigue. Many fibromyalgia patients respond well to a multi-pillar plan that includes adjustments, nutrition, and sleep work.",
  },
  {
    title: "Amyotrophic Lateral Sclerosis (ALS)",
    desc:
      "We've had the privilege of supporting ALS patients with chiropractic care alongside their medical team. Read more about our experience.",
    href: "/common-conditions/amyotrophic-lateral-sclerosis-als/",
  },
  {
    title: "Carpal Tunnel",
    desc:
      "Often misdiagnosed as a wrist problem when the real issue is in the cervical spine or shoulder. We help you tell the difference.",
  },
  {
    title: "Disc Herniation",
    desc:
      "A bulging or herniated disc can compress nerves and create pain that radiates. Conservative care first, surgery as a last resort.",
  },
  {
    title: "Pinched Nerve",
    desc:
      "Sharp, shooting, or burning pain along a nerve path. We locate the compression and remove it.",
  },
  {
    title: "Whiplash",
    desc:
      "Auto accidents leave lasting damage long after the bruises fade. Early evaluation prevents long-term issues.",
  },
  {
    title: "Pregnancy & Postpartum Pain",
    desc:
      "Gentle, pregnancy-safe adjustments support a comfortable pregnancy and faster recovery, for mom and baby.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/common-conditions", cmsFallbackMetadata);
}

export default function CommonConditionsPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Conditions" },
        ]}
      />

      <main>
        {/* HERO (clean) */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                What we evaluate
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Common chiropractic{" "}
                <span className="italic normal-case text-brand-gold">
                  conditions
                </span>{" "}
                at Synergy Spine &amp; Nerve Center
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                A short list of what we see most often in Rio Rancho. If
                what you&apos;re dealing with isn&apos;t here, ask us, we&apos;ve likely
                seen it before.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Our philosophy
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                We don&apos;t{" "}
                <span className="italic text-brand-blue">treat conditions</span>
, we restore the body&apos;s ability to heal them.
              </h2>
              <p className="mt-6 text-brand-text leading-relaxed">
                Every condition below has one thing in common: when the
                spine and nerve system aren&apos;t working well, the body has a
                much harder time managing it. Our job is to remove the
                interference. Your body does the rest. The list is long
                because the underlying solution is consistent.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CONDITIONS GRID */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Conditions we{" "}
                  <span className="italic text-brand-blue">see often</span>.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CONDITIONS.map((c, i) => {
                const card = (
                  <article className="relative h-full bg-white rounded-3xl ring-1 ring-black/5 p-6 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.25)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                    <span
                      className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-brand-blue to-brand-blueLight rounded-b scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                      aria-hidden="true"
                    />
                    <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="section-title mt-2 text-lg text-brand-navyDark font-semibold leading-snug">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {c.desc}
                    </p>
                    {c.href && (
                      <div className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-blue group-hover:text-brand-navyDark transition-colors">
                        <span>Learn more</span>
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          {c.external ? (
                            <path d="M7 17 17 7M17 7H8M17 7v9" />
                          ) : (
                            <>
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </>
                          )}
                        </svg>
                      </div>
                    )}
                  </article>
                );

                return (
                  <Reveal as="li" key={c.title} delay={(i % 3) * 80}>
                    {c.href ? (
                      c.external ? (
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block h-full"
                        >
                          {card}
                        </a>
                      ) : (
                        <Link href={c.href} className="group block h-full">
                          {card}
                        </Link>
                      )
                    ) : (
                      <div className="group h-full">{card}</div>
                    )}
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>

        {/* NOT SURE BLOCK */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white p-8 lg:p-10 shadow-[0_30px_60px_-20px_rgba(1,112,185,0.45)] relative overflow-hidden">
                <span className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 animate-drift pointer-events-none" aria-hidden="true" />
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white/80">
                  Don&apos;t see your condition?
                </p>
                <p className="mt-3 section-title text-2xl md:text-3xl font-semibold leading-snug">
                  Ask us. We&apos;ve likely{" "}
                  <span className="italic text-brand-gold">seen it before</span>
                  .
                </p>
                <p className="mt-4 text-white/90 leading-relaxed">
                  We help people every week whose conditions don&apos;t show up on
                  any short list. If you&apos;re dealing with something and aren&apos;t
                  sure where to start, send us a message, we&apos;ll be honest
                  about whether we&apos;re the right fit and refer if we&apos;re not.
                </p>
                <div className="mt-6">
                  <BookTrigger
                    className="inline-flex items-center gap-2 rounded-full bg-brand-gold text-brand-navyDark px-5 py-2 text-sm font-semibold hover:bg-white transition-colors"
                  >
                    <span>Send us a message</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </BookTrigger>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* VIDEOS: Auto injuries */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Watch · Auto-injury essentials
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  Whiplash &amp; low-speed{" "}
                  <span className="italic text-brand-blue">collisions</span>
                </h2>
                <p className="mt-3 text-brand-text">
                  The injuries you can&apos;t see often cause the biggest
                  long-term issues. Here&apos;s what Dr. Brad wants every
                  patient to know.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Reveal delay={120}>
                <article>
                  <YouTubeEmbed id="1UxU4FRdkWc" title="Don't ignore whiplash" />
                  <h3 className="section-title mt-4 text-lg text-brand-navyDark font-semibold">
                    Don&apos;t ignore whiplash
                  </h3>
                </article>
              </Reveal>
              <Reveal delay={200}>
                <article>
                  <YouTubeEmbed
                    id="bX-W5wbO-KQ"
                    title="Are you having pain after a low-speed car accident?"
                  />
                  <h3 className="section-title mt-4 text-lg text-brand-navyDark font-semibold">
                    Pain after a low-speed accident?
                  </h3>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-brand-navyDark text-white py-20 lg:py-24 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl animate-drift pointer-events-none" aria-hidden="true" />
          <span className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-gold/12 blur-3xl animate-drift pointer-events-none" style={{ animationDelay: "-7s" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Real evaluation.{" "}
                <span className="italic text-brand-gold">Real plan</span>.
              </p>
              <p className="mt-4 text-white/80">
                The $37 New Patient Special includes a thorough exam, the
                full SHA, and an honest conversation about whether
                chiropractic care is right for you.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-white transition-colors"
              >
                <span>Book $37 New Patient Visit</span>
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
                Or call (505) 891-2280 →
              </BookTrigger>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
