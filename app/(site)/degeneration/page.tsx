import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import PulseWave from "@/components/motion/PulseWave";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/degeneration/";
const HERO_IMAGE =
  "https://synergyspineandnerve.com/wp-content/uploads/2020/03/degeneration-model-1024x735-1.jpg";

const cmsFallbackMetadata: Metadata = {
  title: "Understanding Degeneration: Symptoms, Causes & Treatment Synergy Spine and Nerve Center",
  description:
    "Degenerative disc disease is caused by a lack of motion to the joints over years. Learn the four stages, symptoms, and chiropractic treatment options.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Understanding Degeneration Synergy Spine and Nerve Center",
    description:
      "Expert chiropractic care for lasting relief from spinal degeneration.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
    images: [{ url: HERO_IMAGE }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Understanding Degeneration: Symptoms, Causes & Treatment Options",
  description:
    "Educational resource on spinal degenerative disc disease, its progression, symptoms, and how chiropractic care helps.",
  url: CANONICAL,
  about: {
    "@type": "MedicalCondition",
    name: "Degenerative Disc Disease",
    alternateName: ["DDD", "Degenerative Disc Disorder", "Spinal Osteoarthritis"],
    associatedAnatomy: { "@type": "AnatomicalStructure", name: "Intervertebral Discs" },
    signOrSymptom: [
      { "@type": "MedicalSignOrSymptom", name: "Chronic back pain" },
      { "@type": "MedicalSignOrSymptom", name: "Pain radiating to hips or legs" },
      { "@type": "MedicalSignOrSymptom", name: "Chronic neck pain" },
      { "@type": "MedicalSignOrSymptom", name: "Headaches" },
    ],
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Chiropractic Adjustment",
    },
  },
};

const STAGES = [
  {
    phase: "Phase 1",
    range: "Years 110",
    title: "Subtle subluxation",
    body:
      "Joint motion is slightly restricted. Most people feel little to no pain. The body adapts, but scar tissue is already starting to form.",
    accent: "from-brand-blueLight to-brand-blue",
  },
  {
    phase: "Phase 2",
    range: "Years 1020",
    title: "Disc narrowing",
    body:
      "Discs lose hydration and height. Bone spurs begin to develop, and posture starts to shift. Pain may come and go.",
    accent: "from-brand-blue to-brand-navy",
  },
  {
    phase: "Phase 3",
    range: "Years 2030",
    title: "Advanced osteoarthritis",
    body:
      "Significant disc degeneration with visible bone spurs on imaging. Range of motion is clearly limited. Pain becomes chronic.",
    accent: "from-brand-navy to-brand-navyDark",
  },
  {
    phase: "Phase 4",
    range: "Years 30+",
    title: "Joint fusion",
    body:
      "Joints essentially fuse from years of immobility. Nerve compromise can be severe. This stage is irreversible, but progression can still be slowed.",
    accent: "from-brand-navyDark to-brand-navy",
  },
];

const SYMPTOMS = [
  "Chronic back pain that may radiate to hips or legs",
  "Pain that worsens with sitting, bending, lifting or twisting",
  "Chronic neck pain",
  "Pain radiating to the head, shoulders, arms and hands",
  "Stiffness, especially after periods of inactivity",
  "Reduced range of motion in the spine",
];

const TREATMENT = [
  {
    title: "Restore motion",
    body:
      "Targeted chiropractic adjustments restore joint motion, the single most important factor in preventing further degeneration.",
  },
  {
    title: "Reduce nerve interference",
    body:
      "Correcting subluxation removes pressure on the nerves and lets your body coordinate healing the way it was designed to.",
  },
  {
    title: "Strengthen support",
    body:
      "Posture work, ergonomic guidance, and at-home exercises keep what we restore in the office holding between visits.",
  },
  {
    title: "Track progress",
    body:
      "Periodic reassessments, and follow-up imaging when indicated, show real, measurable change over the course of care.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/degeneration", cmsFallbackMetadata);
}

export default function DegenerationPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Chiropractic" },
          { label: "Degeneration" },
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
                Expert Chiropractic Care for Lasting Relief
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Understanding{" "}
                <span className="italic normal-case text-brand-gold">
                  degeneration
                </span>
                : symptoms, causes &amp; treatment options
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Degenerative disc disease is caused by a lack of motion in
                the joints over years or decades. The good news? It can be
                slowed, and in earlier stages, dramatically improved.
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

        {/* INTRO + LEAD IMAGE */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-10 items-start">
            <Reveal className="lg:col-span-7">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  What is it?
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                Quietly developing,{" "}
                <span className="italic text-brand-blue">often unnoticed</span>.
              </h2>

              <p className="mt-6 text-brand-text text-lg leading-relaxed">
                Degeneration of one or more intervertebral discs of the spine
, often called{" "}
                <strong className="text-brand-navyDark">
                  &ldquo;degenerative disc disease&rdquo; (DDD)
                </strong>{" "}
                or &ldquo;degenerative disc disorder&rdquo;, is a condition
                that can be painful and can greatly affect the quality of
                one&apos;s life. Disc degeneration is caused by lack of
                motion to the joints over an extended period of time, usually
                years or decades. Many people have degenerative disc disease
                and don&apos;t know it.
              </p>

              <p className="mt-5 text-brand-text text-lg leading-relaxed">
                <a
                  href="https://www.webmd.com/back-pain/degenerative-disk-disease-overview#1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue underline-offset-4 hover:underline font-semibold"
                >
                  Degenerative disc disease
                </a>{" "}
                can be present without pain in the early stages. This is one
                reason that{" "}
                <BookTrigger
                  className="text-brand-blue underline-offset-4 hover:underline font-semibold"
                >
                  our office
                </BookTrigger>{" "}
                recommends every person be checked periodically in order to
                prevent it from happening.
              </p>

              <p className="mt-5 text-brand-text text-lg leading-relaxed">
                With symptomatic degenerative disc disease, chronic back pain
                sometimes radiates to the hips or down the legs. Similar
                pain may be felt or may increase while sitting, bending,
                lifting, and twisting. Chronic neck pain can also come from
                the cervical spine, with{" "}
                <strong className="text-brand-navyDark">
                  pain radiating to the head
                </strong>
                , shoulders, arms and hands.
              </p>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={150} variant="fade">
              <figure className="relative rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-[0_25px_60px_-25px_rgba(13,35,64,0.35)]">
                <Image
                  src={HERO_IMAGE}
                  alt="Chiropractor evaluating patient with degenerative disc disease at Synergy Spine and Nerve Center for spinal health."
                  width={1024}
                  height={735}
                  unoptimized
                  className="w-full h-auto"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navyDark/85 to-transparent p-5 text-white">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                    Degeneration model
                  </p>
                  <p className="section-title text-base font-semibold">
                    Seeing what years of restriction can do
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* STAGES */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    The 4 phases
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  How spinal degeneration{" "}
                  <span className="italic text-brand-blue">progresses</span>.
                </h2>
              </div>
            </Reveal>

            <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {STAGES.map((s, i) => (
                <Reveal as="li" key={s.phase} delay={i * 100}>
                  <article className="relative h-full bg-white rounded-3xl ring-1 ring-black/5 p-6 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.2)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                    <div
                      className={`absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r ${s.accent}`}
                      aria-hidden="true"
                    />
                    <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                      {s.phase}
                    </p>
                    <p className="text-xs text-brand-textLight">{s.range}</p>
                    <h3 className="section-title mt-3 text-lg text-brand-navyDark font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {s.body}
                    </p>
                    <div
                      className={`mt-5 h-1.5 rounded-full bg-gradient-to-r ${s.accent}`}
                      style={{ width: `${(i + 1) * 25}%` }}
                      aria-hidden="true"
                    />
                  </article>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* SYMPTOMS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Symptoms
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                Signs to{" "}
                <span className="italic text-brand-blue">watch for</span>.
              </h2>
              <p className="mt-6 text-brand-text text-lg leading-relaxed">
                Symptoms vary widely from one person to the next. Some folks
                feel constant aching pain. Others have flare-ups triggered by
                certain movements. The earlier we catch it, the more we can
                do.
              </p>

              <div className="mt-8 rounded-3xl bg-brand-bg/70 ring-1 ring-black/5 p-6 border-l-4 border-brand-gold">
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                  Bottom line
                </p>
                <p className="section-title mt-2 text-lg md:text-xl text-brand-navyDark font-semibold leading-snug">
                  If you are experiencing pain you may also have some degree
                  of degeneration, and it&apos;s a good idea to do whatever
                  it takes to keep it from advancing.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={120}>
              <ul className="grid sm:grid-cols-2 gap-4">
                {SYMPTOMS.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 rounded-2xl bg-brand-bg/60 ring-1 ring-black/5 px-5 py-4 hover:bg-white hover:shadow-[0_15px_40px_-15px_rgba(13,35,64,0.18)] transition-all duration-500"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-brand-text leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* TREATMENT APPROACH */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Our approach
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  How chiropractic care helps{" "}
                  <span className="italic text-brand-blue">slow it down</span>.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 gap-5">
              {TREATMENT.map((t, i) => (
                <Reveal as="li" key={t.title} delay={i * 100}>
                  <article className="h-full bg-white rounded-3xl ring-1 ring-black/5 p-7 hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] hover:-translate-y-1 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blueLight text-white text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="section-title text-lg text-brand-navyDark font-semibold">
                          {t.title}
                        </h3>
                        <p className="mt-2 text-brand-text leading-relaxed">
                          {t.body}
                        </p>
                      </div>
                    </div>
                  </article>
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
                      Catch it early
                    </p>
                    <h3 className="section-title mt-2 text-2xl md:text-3xl font-semibold leading-snug">
                      The best time was{" "}
                      <span className="italic text-brand-gold">10 years ago</span>
                      . The next best time is now.
                    </h3>
                    <p className="mt-3 text-white/75">
                      A periodic spinal check is the simplest way to keep
                      degeneration from quietly advancing.
                    </p>
                    <BookTrigger
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-gold text-brand-navyDark px-6 py-2.5 text-sm font-bold hover:bg-white transition-colors"
                    >
                      <span>$37 Spinal Health Assessment</span>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </BookTrigger>
                  </div>
                  <PulseWave className="w-full max-w-md justify-self-end" accent="#FFE066" />
                </div>
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
                Don&apos;t wait until it&apos;s{" "}
                <span className="italic text-brand-gold">irreversible</span>.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/testimonials/"
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors"
              >
                <span>Read Testimonials</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
              <BookTrigger
                className="text-sm font-semibold text-white/85 hover:text-brand-gold transition-colors"
              >
                Or reach out with a question →
              </BookTrigger>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
