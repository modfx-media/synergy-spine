import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL =
  "https://synergyspineandnerve.com/resources/all-about-nutrition/";

const cmsFallbackMetadata: Metadata = {
  title: "Essential Nutrition for Optimal Health Synergy Spine and Nerve Center",
  description:
    "Are you eating a diet that is congruent with your genetic requirements? Learn how nutrition fuels your cells, controls inflammation, and supports chiropractic care.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Essential Nutrition for Optimal Health Synergy Spine and Nerve Center",
    description:
      "What you eat creates either sufficiency or deficiency at the cellular level. Learn the basics that fuel real healing.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const QUESTIONS = [
  "Do you know what the right foods are that will create a healthy you?",
  "Do you know what foods will create sickness and disease for you?",
];

const PRINCIPLES = [
  {
    title: "Eat for your genes",
    body:
      "If we eat foods that are congruent with our genes we will be creating health. Whole, unprocessed foods your ancestors would recognize are the cleanest fuel for your cells.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3c4 4 4 14 0 18M12 3c-4 4-4 14 0 18M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Avoid the toxic load",
    body:
      "If we eat foods that are toxic to our cells, even if they taste good, we will never be healthy. Identifying inflammatory foods is step one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 22h18L12 4z" />
        <path d="M12 10v5M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Take the HRA",
    body:
      "We encourage every patient to complete a Health Risk Assessment (HRA) so we can determine how urgently we need to address nutrition.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    ),
  },
];

const FOUNDATIONS = [
  {
    eat: "Eat more",
    items: [
      "Whole vegetables, especially leafy greens",
      "Fresh raw fruit, in season when possible",
      "Wild or pasture-raised animal proteins",
      "Healthy fats, olive oil, avocado, fish",
      "Filtered water, your cells depend on it",
    ],
    tone: "from-brand-blue to-brand-blueLight",
  },
  {
    eat: "Eat less",
    items: [
      "Refined grains and added sugar",
      "Industrial seed oils (soy, corn, canola)",
      "Ultra-processed snack and fast foods",
      "Conventional dairy &amp; processed meats",
      "Sodas, energy drinks, and excess alcohol",
    ],
    tone: "from-brand-navy to-brand-navyDark",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources/all-about-nutrition", cmsFallbackMetadata);
}

export default function AllAboutNutritionPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Nutrition" },
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
            <Reveal delay={120}>
              <h1 className="section-title mt-5 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Essential nutrition for{" "}
                <span className="italic normal-case text-brand-gold">
                  optimal health
                </span>{" "}
                &amp; chiropractic care
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Are you eating a diet that is congruent with your genetic
                requirements? Or are you creating a toxic environment that
                makes it very difficult for your cells to provide health for
                you to do the things you want to do?
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* TWO QUESTIONS */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Two questions
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                Sufficiency or{" "}
                <span className="italic text-brand-blue">deficiency</span>?
              </h2>
              <p className="mt-6 text-brand-text text-lg leading-relaxed">
                These are two important questions that cannot be ignored if
                you want to be healthy. What foods create{" "}
                <strong className="text-brand-navyDark">sufficiency</strong>{" "}
                of nutrients (help you become healthy) and what foods will
                cause a <strong className="text-brand-navyDark">deficiency</strong>{" "}
                of nutrients (sickness and disease)?
              </p>
            </Reveal>

            <ul className="mt-8 grid sm:grid-cols-2 gap-5">
              {QUESTIONS.map((q, i) => (
                <Reveal as="li" key={q} delay={i * 100}>
                  <article className="h-full rounded-3xl bg-brand-bg/60 ring-1 ring-black/5 p-6 hover:bg-white hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] transition-all duration-500">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark text-sm font-bold">
                      ?
                    </span>
                    <p className="mt-4 section-title text-lg text-brand-navyDark font-semibold leading-snug">
                      {q}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* PAIN-INFLAMMATION-NUTRITION */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-white ring-1 ring-black/5 p-8 lg:p-10 border-l-4 border-brand-gold shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                  What we see clinically
                </p>
                <p className="mt-3 section-title text-xl md:text-2xl text-brand-navyDark font-semibold leading-snug">
                  Many of our patients seek treatment because of pain, and
                  frequently we find their nutritional habits are creating
                  inflammation that leads to that pain.
                </p>
                <p className="mt-4 text-brand-text leading-relaxed">
                  This is one reason we encourage all of our patients to
                  answer a{" "}
                  <strong className="text-brand-navyDark">
                    Health Risk Assessment (HRA)
                  </strong>{" "}
                  questionnaire, so we can determine how urgent we need to
                  address their nutritional habits.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Three foundational{" "}
                  <span className="italic text-brand-blue">principles</span>.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid md:grid-cols-3 gap-6">
              {PRINCIPLES.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 100}>
                  <article className="h-full bg-white rounded-3xl ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.2)] hover:-translate-y-1 transition-all duration-500">
                    <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg">
                      <div className="w-5 h-5">{p.icon}</div>
                      <span className="absolute inset-0 rounded-2xl ring-2 ring-current opacity-30 animate-pulseRing pointer-events-none" />
                    </div>
                    <h3 className="section-title mt-5 text-lg text-brand-navyDark font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* EAT MORE / EAT LESS */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  A simple, sustainable{" "}
                  <span className="italic text-brand-blue">starting point</span>
                  .
                </h2>
                <p className="mt-4 text-brand-text">
                  No perfection required, just steady direction toward foods
                  that create health.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {FOUNDATIONS.map((f, idx) => (
                <Reveal key={f.eat} delay={idx * 120}>
                  <article className={`relative rounded-3xl overflow-hidden ring-1 ring-black/5 bg-white shadow-[0_2px_10px_rgba(13,35,64,0.04)]`}>
                    <header className={`bg-gradient-to-r ${f.tone} text-white px-6 py-4 flex items-center justify-between`}>
                      <h3 className="section-title text-xl font-semibold">{f.eat}</h3>
                      <span className="text-[10px] uppercase tracking-[0.22em] font-bold opacity-90">
                        {idx === 0 ? "Sufficiency" : "Deficiency"}
                      </span>
                    </header>
                    <ul className="p-6 space-y-3">
                      {f.items.map((it) => (
                        <li key={it} className="flex items-start gap-3">
                          <span className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${idx === 0 ? "bg-brand-blue" : "bg-brand-navyDark"} text-white`}>
                            {idx === 0 ? (
                              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            ) : (
                              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                              </svg>
                            )}
                          </span>
                          <span
                            className="text-brand-text leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: it }}
                          />
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SUCCESS STORIES INTRO */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="text-brand-text text-lg leading-relaxed">
                Check out videos of people who have successfully changed
                their eating habits and are on their way to creating health.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-6">
              <Link
                href="/testimonials/"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue text-white px-6 py-3 text-sm font-semibold hover:bg-brand-navyDark transition-colors shadow-[0_10px_30px_-10px_rgba(1,112,185,0.5)]"
              >
                <span>Watch testimonials</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* RELATED */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="section-title text-center text-2xl md:text-3xl text-brand-navyDark font-semibold">
                Keep building your{" "}
                <span className="italic text-brand-blue">foundation</span>.
              </h2>
            </Reveal>
            <ul className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                {
                  href: "/resources/essential-nutrients-supplements/",
                  title: "Essential Supplements",
                  desc: "The supplements most people are deficient in, and why we recommend them.",
                },
                {
                  href: "/resources/all-about-spinal-hygiene/",
                  title: "Spinal Hygiene",
                  desc: "Pair good nutrition with daily movement for compounded results.",
                },
                {
                  href: "/triune-of-care/",
                  title: "Triune of Care",
                  desc: "How nutrition, spinal hygiene, and chiropractic care work together.",
                },
              ].map((l, i) => (
                <Reveal as="li" key={l.href} delay={i * 100}>
                  <Link
                    href={l.href}
                    className="group block h-full bg-white rounded-3xl ring-1 ring-black/5 p-6 hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <h3 className="section-title text-lg text-brand-navyDark font-semibold">
                      {l.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">{l.desc}</p>
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

        {/* CTA */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl text-brand-navyDark font-semibold leading-snug">
                Real food.{" "}
                <span className="italic text-brand-blue">Real change</span>.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-navyDark text-white rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-brand-blue transition-colors"
              >
                <span>Ask About the HRA</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark group-hover/cta:bg-white group-hover/cta:text-brand-blue transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <BookTrigger
                className="text-sm font-semibold text-brand-navyDark hover:text-brand-blue transition-colors"
              >
                $37 New Patient Special →
              </BookTrigger>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
