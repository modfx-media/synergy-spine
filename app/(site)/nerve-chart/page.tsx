import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/nerve-chart/";
const CHART_IMAGE =
  "https://synergyspineandnerve.com/wp-content/uploads/2020/03/20x30-spinal-nerve-chart.jpg";

const cmsFallbackMetadata: Metadata = {
  title: "Nerve Chart: Spinal Health & Organ Function Synergy Spine and Nerve Center",
  description:
    "Your nerve system controls every other system in your body. See how subluxation at different spinal levels can affect organs and overall health.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Nerve Chart: Spinal Health & Organ Function Synergy Spine and Nerve Center",
    description:
      "Visualize how each level of the spine connects to specific organs and bodily systems.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
    images: [{ url: CHART_IMAGE }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Nerve Chart: Exploring Spinal Health & Organ Function",
  description:
    "Educational nerve chart showing how spinal subluxations at different levels can interfere with organ function.",
  url: CANONICAL,
  about: {
    "@type": "AnatomicalStructure",
    name: "Spinal Nerve System",
  },
};

type RegionRow = {
  level: string;
  organs: string;
  conditions: string;
};

const REGIONS: { name: string; tone: "blue" | "gold" | "navy"; rows: RegionRow[] }[] = [
  {
    name: "Cervical (C1C7)",
    tone: "blue",
    rows: [
      { level: "C1", organs: "Head, brain, inner & middle ear, sympathetic nerve system", conditions: "Headaches, insomnia, brain fog, fatigue, dizziness" },
      { level: "C2", organs: "Eyes, optic nerve, sinuses, tongue", conditions: "Sinus issues, allergies, vision problems" },
      { level: "C3", organs: "Cheeks, outer ear, face bones", conditions: "Facial neuralgia, acne, eczema" },
      { level: "C4", organs: "Nose, mouth, lips, eustachian tube", conditions: "Hay fever, hearing loss, runny nose" },
      { level: "C5", organs: "Vocal cords, neck glands, pharynx", conditions: "Hoarseness, sore throats, laryngitis" },
      { level: "C6", organs: "Neck muscles, shoulders, tonsils, thyroid", conditions: "Stiff neck, chronic cough, thyroid problems" },
      { level: "C7", organs: "Thyroid gland, shoulders, elbows", conditions: "Bursitis, thyroid issues, shoulder pain" },
    ],
  },
  {
    name: "Thoracic (T1T12)",
    tone: "navy",
    rows: [
      { level: "T1", organs: "Hands, wrists, fingers, esophagus, trachea", conditions: "Asthma, cough, hand/finger pain" },
      { level: "T2", organs: "Heart (incl. valves), coronary arteries", conditions: "Functional heart conditions, chest pain" },
      { level: "T3", organs: "Lungs, bronchial tubes, pleura, chest, breast", conditions: "Bronchitis, pleurisy, pneumonia, congestion" },
      { level: "T4", organs: "Gall bladder, common duct", conditions: "Gallbladder issues, jaundice, shingles" },
      { level: "T5", organs: "Liver, solar plexus, blood", conditions: "Liver conditions, low blood pressure, fatigue" },
      { level: "T6", organs: "Stomach", conditions: "Stomach trouble, indigestion, heartburn" },
      { level: "T7", organs: "Pancreas, duodenum", conditions: "Ulcers, gastritis" },
      { level: "T8", organs: "Spleen, diaphragm", conditions: "Lowered immunity, hiccups" },
      { level: "T9", organs: "Adrenal glands", conditions: "Allergies, hives, low energy" },
      { level: "T10", organs: "Kidneys", conditions: "Kidney problems, chronic tiredness" },
      { level: "T11", organs: "Kidneys, ureters", conditions: "Skin conditions like acne, eczema, boils" },
      { level: "T12", organs: "Small intestines, lymph circulation", conditions: "Rheumatism, gas pains, infertility" },
    ],
  },
  {
    name: "Lumbar / Sacral (L1SCoccyx)",
    tone: "gold",
    rows: [
      { level: "L1", organs: "Large intestines, inguinal rings", conditions: "Constipation, colitis, diarrhea, hernias" },
      { level: "L2", organs: "Appendix, abdomen, upper leg", conditions: "Cramps, varicose veins, breathing difficulty" },
      { level: "L3", organs: "Sex organs, uterus, bladder, knee", conditions: "Bladder issues, menstrual trouble, knee pain" },
      { level: "L4", organs: "Prostate, lower back muscles, sciatic nerve", conditions: "Sciatica, low back pain, painful urination" },
      { level: "L5", organs: "Lower legs, ankles, feet", conditions: "Poor circulation, swollen ankles, weak arches" },
      { level: "Sacrum", organs: "Hip bones, buttocks", conditions: "Sacroiliac problems, spinal curvature" },
      { level: "Coccyx", organs: "Rectum, anus", conditions: "Hemorrhoids, pruritus, pain at end of spine on sitting" },
    ],
  },
];

const TONE_CLASS: Record<"blue" | "gold" | "navy", string> = {
  blue: "from-brand-blue to-brand-blueLight text-white",
  gold: "from-brand-gold to-brand-goldSoft text-brand-navyDark",
  navy: "from-brand-navy to-brand-navyDark text-white",
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/nerve-chart", cmsFallbackMetadata);
}

export default function NerveChartPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Chiropractic" },
          { label: "Nerve Chart" },
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
                Education
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Nerve chart: exploring{" "}
                <span className="italic normal-case text-brand-gold">
                  spinal health
                </span>{" "}
                &amp; organ function
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Your nerve system controls and coordinates the function of
                every other system in your body. Subluxation at different
                levels of your spine creates interference to the organs and
                areas of your body.
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

        {/* INTRO + LEAD COPY */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 prose prose-lg">
            <Reveal>
              <p className="text-brand-text leading-relaxed text-lg">
                Your nerve system controls and coordinates the function of
                every other system in your body.{" "}
                <Link
                  href="/what-is-a-subluxation/"
                  className="text-brand-blue underline-offset-4 hover:underline font-semibold"
                >
                  Subluxation
                </Link>{" "}
                at different levels of your spine will create interference to
                the organs and areas of your body. The graphic below will
                give you an idea of how something like asthma could be
                related to subluxation in the spine.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-brand-text leading-relaxed text-lg">
                This does not mean that getting adjusted is the cure for
                asthma or any other condition. It just means that correcting
                subluxation in the individual areas of your spine may
                contribute to improved health in those organs.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CHART IMAGE */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    The chart
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  How each level{" "}
                  <span className="italic text-brand-blue">connects</span>.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150} variant="fade">
              <figure className="relative rounded-[28px] overflow-hidden bg-white ring-1 ring-black/5 shadow-[0_30px_60px_-25px_rgba(13,35,64,0.3)] p-4 md:p-6">
                <Image
                  src={CHART_IMAGE}
                  alt="Illustration of a nerve chart showing spinal subluxations affecting health, by Synergy Spine and Nerve Center."
                  width={1200}
                  height={1800}
                  unoptimized
                  className="w-full h-auto rounded-[20px]"
                />
                <figcaption className="mt-4 text-center text-sm text-brand-textLight">
                  Synergy Spine and Nerve Center, Spinal Nerve Chart
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* DETAILED REGIONS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Spinal levels &amp;{" "}
                  <span className="italic text-brand-blue">related areas</span>
                  .
                </h2>
                <p className="mt-4 text-brand-text">
                  A reference guide to the regions of the spine and the
                  organs and conditions associated with each level.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 space-y-12">
              {REGIONS.map((r, i) => (
                <Reveal key={r.name} delay={i * 80}>
                  <article className="rounded-3xl bg-white ring-1 ring-black/5 overflow-hidden shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                    <header
                      className={`bg-gradient-to-r ${TONE_CLASS[r.tone]} px-6 py-4 flex items-center justify-between`}
                    >
                      <h3 className="section-title text-xl font-semibold">{r.name}</h3>
                      <span className="text-[10px] uppercase tracking-[0.22em] font-bold opacity-90">
                        {r.rows.length} levels
                      </span>
                    </header>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="bg-brand-bg/60 text-brand-navyDark">
                            <th scope="col" className="px-5 py-3 text-[10px] uppercase tracking-[0.18em] font-bold w-24">
                              Level
                            </th>
                            <th scope="col" className="px-5 py-3 text-[10px] uppercase tracking-[0.18em] font-bold">
                              Organs &amp; areas
                            </th>
                            <th scope="col" className="px-5 py-3 text-[10px] uppercase tracking-[0.18em] font-bold">
                              Common conditions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {r.rows.map((row, idx) => (
                            <tr
                              key={row.level}
                              className={`${idx % 2 === 0 ? "bg-white" : "bg-brand-bg/30"} border-t border-black/5`}
                            >
                              <td className="px-5 py-4 align-top">
                                <span className="inline-flex items-center justify-center min-w-[3rem] rounded-full bg-brand-navyDark text-white text-xs font-bold px-3 py-1">
                                  {row.level}
                                </span>
                              </td>
                              <td className="px-5 py-4 align-top text-brand-text">
                                {row.organs}
                              </td>
                              <td className="px-5 py-4 align-top text-brand-textLight">
                                {row.conditions}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DISCLAIMER + RELATED */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-white ring-1 ring-black/5 p-7 lg:p-9 border-l-4 border-brand-gold shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                  Important note
                </p>
                <p className="mt-3 text-brand-text leading-relaxed">
                  Chiropractic adjustments are not a cure for asthma, thyroid
                  problems, or any other condition. The nerve chart is a
                  visual aid to show how subluxation at a given spinal level
                  may contribute to interference with the organs supplied by
                  those nerves. Reducing or removing that interference helps
                  the body do what it is already designed to do, heal and
                  regulate itself.
                </p>
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
                What symptoms are you struggling with that you&apos;d{" "}
                <span className="italic text-brand-gold">like to relieve</span>?
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
              <Link
                href="/what-is-a-subluxation/"
                className="text-sm font-semibold text-white/85 hover:text-brand-gold transition-colors"
              >
                Learn what subluxation is →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
