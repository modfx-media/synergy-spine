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

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/what-is-a-subluxation/";
const HERO_IMAGE =
  "https://synergyspineandnerve.com/wp-content/uploads/2020/04/AdobeStock_170696498.jpg";

const cmsFallbackMetadata: Metadata = {
  title: "What is a Subluxation? Synergy Spine and Nerve Center",
  description:
    "Subluxation is a joint that is out of position or unable to move through full range of motion. Learn how chiropractic care reduces or removes subluxation to restore proper nerve function.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "What is a Subluxation? Synergy Spine and Nerve Center",
    description:
      "Understand chiropractic care: its role in health and wellness, what subluxation is, how it affects the nervous system, and how it is corrected.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
    images: [{ url: HERO_IMAGE }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "What is a Subluxation?",
  description:
    "Educational resource on vertebral subluxation, its effects on the nervous system, and how chiropractic adjustments help reduce or remove subluxation.",
  url: CANONICAL,
  about: {
    "@type": "MedicalCondition",
    name: "Vertebral Subluxation",
    associatedAnatomy: { "@type": "AnatomicalStructure", name: "Spine" },
    signOrSymptom: [
      { "@type": "MedicalSignOrSymptom", name: "Restricted joint motion" },
      { "@type": "MedicalSignOrSymptom", name: "Nerve interference" },
      { "@type": "MedicalSignOrSymptom", name: "Scar tissue formation" },
      { "@type": "MedicalSignOrSymptom", name: "Spinal degeneration" },
    ],
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Chiropractic Adjustment",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Synergy Spine and Nerve Center",
    url: "https://synergyspineandnerve.com/",
  },
};

const CAUSES = [
  {
    title: "Physical trauma",
    body:
      "Falls, sports impacts, car accidents, or sustained poor posture, even the birth process itself can introduce subluxation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m13 2-3 7h5l-3 7" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Repetitive stress",
    body:
      "Hours hunched over a desk, phone, or steering wheel slowly lock joints out of their natural range of motion.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M2 12h20M6 18v2M18 18v2" />
      </svg>
    ),
  },
  {
    title: "Emotional stress",
    body:
      "Chronic stress contracts muscles around the spine, over time those tensions translate into joint restriction.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12s2-7 9-7 9 7 9 7-2 7-9 7-9-7-9-7z" />
        <path d="M12 9v3M12 15h.01" />
      </svg>
    ),
  },
  {
    title: "Chemical stress",
    body:
      "Poor nutrition, dehydration, and inflammation reduce the body&rsquo;s ability to maintain joint health and recover from strain.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 2v6L4 22h16L15 8V2z" />
        <path d="M9 2h6" />
      </svg>
    ),
  },
];

const EFFECTS = [
  {
    title: "Restricted motion",
    body:
      "The joint loses its natural glide and range. Tissues stiffen and surrounding muscles compensate.",
  },
  {
    title: "Scar tissue & arthritis",
    body:
      "Without movement, scar tissue accumulates. Over time this is exactly what leads to spinal arthritis.",
  },
  {
    title: "Disturbed nerve signals",
    body:
      "Nociception (negative input) replaces proprioception (positive input). Cerebellar function suffers.",
  },
  {
    title: "Organ-level effects",
    body:
      "When subluxation is present at certain spinal levels it can interfere with the function of organs at the end of those nerves.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/what-is-a-subluxation", cmsFallbackMetadata);
}

export default function WhatIsASubluxationPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Chiropractic" },
          { label: "What Is A Subluxation?" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <main>
        {/* HERO */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Understanding Chiropractic Care
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                What is a{" "}
                <span className="italic normal-case text-brand-gold">
                  subluxation
                </span>
                ?
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Without proper care, subluxation can cause permanent nerve
                damage, but the good news is that chiropractic adjustment is
                designed to reduce or remove it.
              </p>
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

        {/* DEFINITION + LEAD IMAGE */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-10 items-start">
            <Reveal className="lg:col-span-7">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Definition
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                A joint{" "}
                <span className="italic text-brand-blue">out of position</span>
, or stuck.
              </h2>

              <p className="mt-6 text-brand-text text-lg leading-relaxed">
                Subluxation is defined as a joint that is out of proper
                position or not able to go through full range of motion. This
                can happen in any joint of the body. Chiropractors primarily
                work with subluxations of the spine. These are called{" "}
                <strong className="text-brand-navyDark">
                  vertebral subluxations
                </strong>
                .
              </p>

              <p className="mt-5 text-brand-text text-lg leading-relaxed">
                If a subluxation is left undetected and neglected, the
                restriction of motion or poor position will lead to scar
                tissue deposits which further restrict the motion.{" "}
                <Link
                  href="/degeneration/"
                  className="text-brand-blue underline-offset-4 hover:underline font-semibold"
                >
                  This will eventually lead to arthritis.
                </Link>{" "}
                Over time this process will continue to deteriorate until
                little to no motion is possible in the joint. Even in the
                advanced stages this process may not cause pain.
              </p>

              <div className="mt-8 rounded-3xl bg-brand-bg/70 ring-1 ring-black/5 p-6 lg:p-8 border-l-4 border-brand-gold">
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                  Key idea
                </p>
                <p className="section-title mt-2 text-xl md:text-2xl text-brand-navyDark font-semibold leading-snug">
                  Chiropractic adjustment attempts to reduce or remove
                  subluxation.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={150} variant="fade">
              <figure className="relative rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-[0_25px_60px_-25px_rgba(13,35,64,0.35)]">
                <Image
                  src={HERO_IMAGE}
                  alt="Chiropractic illustration of spine subluxations and their effects on nerve function at Synergy Spine Center."
                  width={1200}
                  height={800}
                  unoptimized
                  className="w-full h-auto"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navyDark/85 to-transparent p-5 text-white">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                    Spine &amp; nerve interference
                  </p>
                  <p className="section-title text-base font-semibold">
                    Subluxation in plain view
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* SILENT-PROBLEM SECTION + ANIMATED SPINE */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5 order-last lg:order-first" variant="fade">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
                <div className="absolute inset-0 rounded-[36px] bg-white ring-1 ring-black/5 shadow-[0_30px_60px_-25px_rgba(13,35,64,0.25)]" />
                <SpineGraphic className="absolute inset-0" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                    Movement = nerve health
                  </p>
                  <p className="section-title text-sm text-brand-navyDark font-semibold">
                    Restore the signal
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={120}>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Why it goes unnoticed
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                Subluxation is often{" "}
                <span className="italic text-brand-blue">silent</span>.
              </h2>

              <p className="mt-6 text-brand-text text-lg leading-relaxed">
                One of the challenges is that this process happens for most
                people without them even knowing it. Just because you have
                subluxation does not mean that you will have pain. This is one
                reason why most chiropractors recommend getting checked for
                subluxation regularly, just like most dentists recommend
                regular dental check-ups.
              </p>

              <p className="mt-5 text-brand-text text-lg leading-relaxed">
                Movement in any joint of the body stimulates a nerve response
                called <strong>proprioception</strong> (positive). Lack of
                movement stimulates a different signal called{" "}
                <strong>nociception</strong> (negative). There is a great
                video called{" "}
                <Link
                  href="/spinal-hygiene-video/"
                  className="text-brand-blue underline-offset-4 hover:underline font-semibold"
                >
                  Spinal Hygiene
                </Link>{" "}
                that discusses how movement in your spine affects the
                cerebellum of your brain. The bottom line: movement is
                necessary for your brain to work properly.
              </p>

              <p className="mt-5 text-brand-text text-lg leading-relaxed">
                When nociception becomes more advanced, a stimulus is sent to
                the cortex of your brain, which is responsible for conscious
                thought. That is when you feel the emotion of pain. By the
                time pain shows up, the problem has usually been present for
                a long time.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CAUSES */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Common causes
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  What{" "}
                  <span className="italic text-brand-blue">causes</span>{" "}
                  subluxation?
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CAUSES.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 100}>
                  <article className="h-full bg-white rounded-3xl ring-1 ring-black/5 p-6 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.2)] hover:-translate-y-1 transition-all duration-500">
                    <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg">
                      <div className="w-5 h-5">{c.icon}</div>
                      <span className="absolute inset-0 rounded-2xl ring-2 ring-current opacity-30 animate-pulseRing pointer-events-none" />
                    </div>
                    <h3 className="section-title mt-4 text-lg text-brand-navyDark font-semibold">
                      {c.title}
                    </h3>
                    <p
                      className="mt-2 text-sm text-brand-textLight leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: c.body }}
                    />
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* EFFECTS / NERVE-CHART REFERENCE */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12 items-start">
            <Reveal className="lg:col-span-6">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Effects on health
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                When the nervous system is{" "}
                <span className="italic text-brand-blue">interrupted</span>
                .
              </h2>

              <p className="mt-6 text-brand-text text-lg leading-relaxed">
                Nociceptors can fire and you may have decreased function of
                some of the vital organs and processes of your body, even
                without feeling pain. This is why many chiropractors use the{" "}
                <Link
                  href="/nerve-chart/"
                  className="text-brand-blue underline-offset-4 hover:underline font-semibold"
                >
                  autonomic nerve chart
                </Link>{" "}
                to demonstrate that if a subluxation is present at a certain
                level it could result in malfunction of the organs at the end
                of those nerves. For example, a subluxation at C6, the 6th
                vertebrae below the head, can result in thyroid problems.
              </p>

              <p className="mt-5 text-brand-text text-lg leading-relaxed">
                A more accurate explanation of the devastating effects of
                subluxation is captured in the concepts of proprioception and
                nociception above. With subluxation present, complete health
                of the body cannot be present. Adjustments are centered around
                reducing or removing it so proper nerve function can return, 
                often allowing conditions or symptoms to disappear.
              </p>
            </Reveal>

            <ul className="lg:col-span-6 grid sm:grid-cols-2 gap-5">
              {EFFECTS.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 100}>
                  <article className="h-full bg-white rounded-3xl ring-1 ring-black/5 p-6 hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.2)] hover:-translate-y-1 transition-all duration-500">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-white text-xs font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="section-title mt-4 text-lg text-brand-navyDark font-semibold">
                      {e.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {e.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* RELATED LINKS */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="section-title text-center text-2xl md:text-3xl text-brand-navyDark font-semibold">
                Keep exploring{" "}
                <span className="italic text-brand-blue">chiropractic</span>.
              </h2>
            </Reveal>
            <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  href: "/nerve-chart/",
                  title: "Nerve Chart",
                  desc: "See how each spinal level connects to specific organs and systems.",
                },
                {
                  href: "/degeneration/",
                  title: "Spinal Degeneration",
                  desc: "What happens to a joint that stays subluxated for years or decades.",
                },
                {
                  href: "/chiropractic-research/",
                  title: "Chiropractic Research",
                  desc: "The growing body of evidence behind regular chiropractic care.",
                },
              ].map((l, i) => (
                <Reveal as="li" key={l.href} delay={i * 100}>
                  <Link
                    href={l.href}
                    className="group block h-full bg-brand-bg/60 rounded-3xl ring-1 ring-black/5 p-6 hover:bg-white hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <h3 className="section-title text-lg text-brand-navyDark font-semibold">
                      {l.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {l.desc}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-blue group-hover:text-brand-navyDark transition-colors">
                      <span>Read more</span>
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

        {/* VIDEO: Why you are getting adjusted */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  In Dr. Brad&apos;s words
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  Why you are{" "}
                  <span className="italic text-brand-blue">getting adjusted</span>
                </h2>
                <p className="mt-3 text-brand-text">
                  A short explainer on what an adjustment really does, and
                  why we focus on the nerve system, not just the bones.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10">
                <YouTubeEmbed
                  id="KjVsTFgxEzg"
                  title="Why you are getting adjusted"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
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
                What symptoms do you currently struggle with that you{" "}
                <span className="italic text-brand-gold">hope will go away</span>
                ?
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors"
              >
                <span>Contact Us Today!</span>
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
                Book the $37 New Patient Special →
              </BookTrigger>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
