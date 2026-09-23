import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL =
  "https://synergyspineandnerve.com/common-conditions/amyotrophic-lateral-sclerosis-als/";

const cmsFallbackMetadata: Metadata = {
  title:
    "Amyotrophic Lateral Sclerosis (ALS) Synergy Spine and Nerve Center",
  description:
    "Overview of Amyotrophic Lateral Sclerosis (ALS), symptoms, diagnosis, and supportive treatment options. Educational resource from Synergy Spine and Nerve Center.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Amyotrophic Lateral Sclerosis (ALS) An Overview",
    description:
      "ALS symptoms, diagnosis, and supportive treatment, an educational overview.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Amyotrophic Lateral Sclerosis (ALS)",
  url: CANONICAL,
  about: {
    "@type": "MedicalCondition",
    name: "Amyotrophic Lateral Sclerosis",
    alternateName: "ALS",
    code: {
      "@type": "MedicalCode",
      codingSystem: "ICD-10",
      codeValue: "G12.21",
    },
    signOrSymptom: [
      "Weakness in arms or legs",
      "Muscle atrophy",
      "Fasciculations",
      "Difficulty swallowing",
      "Difficulty speaking",
      "Respiratory difficulty",
    ],
  },
  publisher: {
    "@type": "MedicalBusiness",
    name: "Synergy Spine and Nerve Center",
    url: "https://synergyspineandnerve.com",
  },
};

const QUICK_FACTS = [
  { label: "Typical onset", value: "50s60s" },
  { label: "Risk peak", value: "Age 74" },
  { label: "M:F ratio", value: "1.51.7×" },
  { label: "US prevalence", value: "38 / 100k" },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/common-conditions/amyotrophic-lateral-sclerosis-als", cmsFallbackMetadata);
}

export default function ALSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Conditions", href: "/common-conditions/" },
          { label: "ALS" },
        ]}
      />

      <main>
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <Reveal>
              <Link
                href="/common-conditions/"
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 hover:text-brand-gold transition-colors"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>Common Conditions</span>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-5 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Amyotrophic Lateral Sclerosis{" "}
                <span className="italic normal-case text-brand-gold">
                  (ALS)
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                ALS is a progressive disease that destroys the motor neurons in
                the nervous system. The vast majority of cases occur
                sporadically. Below is an overview of symptoms, diagnosis, and
                supportive treatment.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="bg-white pt-6 lg:pt-8 pb-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {QUICK_FACTS.map((f, i) => (
                <Reveal key={f.label} delay={i * 80}>
                  <div className="rounded-2xl bg-gradient-to-br from-white to-brand-bg ring-1 ring-black/5 px-5 py-6 text-center">
                    <p className="section-title text-2xl md:text-3xl font-semibold text-brand-navyDark">
                      {f.value}
                    </p>
                    <p className="mt-1.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-brand-textLight">
                      {f.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-12">
            <Reveal>
              <article>
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Overview
                </p>
                <h2 className="section-title mt-2 text-2xl md:text-3xl text-brand-navyDark font-semibold">
                  What ALS does
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-brand-text">
                  Amyotrophic Lateral Sclerosis (ALS) is a progressive disease
                  that destroys the motor neurons in the nervous system. The
                  vast majority of cases occur sporadically. The mean onset of
                  ALS occurs in the patients&apos; 50&apos;s and 60&apos;s with
                  increasing risk until the age of 74. Males are affected
                  1.51.7 times as often as females. The prevalence in the
                  United States is 38 cases per 100,000 people.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Symptoms
                </p>
                <h2 className="section-title mt-2 text-2xl md:text-3xl text-brand-navyDark font-semibold">
                  How it presents
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-brand-text">
                  ALS usually begins with weakness in the arms and/or legs with
                  progression in the affected area first, followed by more
                  generalized weakness, atrophy, and twitching (fasciculations)
                  of the muscles. When the motor neurons die, the associated
                  muscles become weak, atrophied, and eventually die. Some
                  patients develop cramping of the affected muscles.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-brand-text">
                  Eventually, most muscular function is affected so patients
                  can lose their ability to talk, swallow, and eventually to
                  breathe. Some individuals with ALS will develop problems with
                  processing information and memory, but in general patients
                  will remain fully alert and aware. The sensations are also
                  not involved.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-brand-text">
                  The mean survival rate is 34 years, but about 410% of
                  patients survive more than ten years. ALS is responsible for
                  about 1 in 700 deaths in the United States. Death is usually
                  peaceful with the patient dying in their sleep of respiratory
                  failure.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Diagnosis
                </p>
                <h2 className="section-title mt-2 text-2xl md:text-3xl text-brand-navyDark font-semibold">
                  How it is identified
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-brand-text">
                  The diagnosis is a clinical one, usually with signs of
                  involvement of the central and peripheral nervous system. The
                  most accurate diagnostic test is an EMG and nerve conduction
                  study. Muscle enzymes are frequently elevated in the serum,
                  but they are less specific.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Treatment
                </p>
                <h2 className="section-title mt-2 text-2xl md:text-3xl text-brand-navyDark font-semibold">
                  Supportive care
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-brand-text">
                  There is no cure for ALS, but Riluzole may increase survival
                  for a few months. It tends to be more effective in patients
                  with bulbar onset (problems swallowing, speaking and/or
                  breathing), in older patients, and when given early in the
                  course of the disease.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-brand-text">
                  On the whole, treatment is supportive, with physical
                  therapy, assistive devices, respiratory support, and special
                  feeding tools being helpful as the disease progresses.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl bg-brand-bg ring-1 ring-black/5 p-6 text-sm text-brand-textLight leading-relaxed">
                This page is an educational summary and is not a substitute
                for professional medical advice. If you suspect ALS or have
                concerns about a loved one, please consult a neurologist for a
                proper evaluation.
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative bg-brand-navyDark text-white py-20 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" aria-hidden="true" />
          <span className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-gold/12 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Have questions about{" "}
                <span className="italic text-brand-gold">supportive care</span>?
              </p>
              <p className="mt-4 text-white/80">
                Reach out, we&apos;ll point you in the right direction.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <BookTrigger
                className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold text-brand-navyDark uppercase tracking-wide hover:bg-brand-goldSoft transition"
              >
                Contact Us
              </BookTrigger>
              <Link
                href="/common-conditions/"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-brand-navyDark transition"
              >
                All Conditions
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
