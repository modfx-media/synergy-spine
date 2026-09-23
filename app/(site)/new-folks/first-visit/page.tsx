import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import PulseWave from "@/components/motion/PulseWave";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/new-folks/first-visit/";

const cmsFallbackMetadata: Metadata = {
  title: "What to Expect on Your First Visit Synergy Spine and Nerve Center",
  description:
    "Wondering what to expect on your first chiropractic visit? Walk through every step, intake forms, consultation, examination, digital X-rays, and your report of findings.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "What to Expect on Your First Visit Synergy Spine and Nerve Center",
    description:
      "From intake to report of findings, here is exactly what to expect on your first visit at Synergy Spine.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

type Step = {
  num: string;
  title: string;
  body: string;
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Consultation",
    body:
      "Sit down with us for a clear, honest conversation about your health goals and concerns. We listen first, understanding your story comes before any plan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Examination",
    body:
      "A one-on-one consultation paired with a complete spinal health assessment. Our targeted neurological and structural exam pinpoints how spinal stress is affecting your nervous system, the master controller of every cell in your body.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Digital X-Ray Studies",
    body:
      "If clinically indicated, low-dose digital X-rays let us see exactly what is happening in your spine, no guesswork, just precise structural insight.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 7v10M15 7v10M3 12h18" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "First Treatment",
    body:
      "When it is safe and appropriate, we start care on the same visit with a gentle, specific treatment tailored to your findings, so you can begin feeling relief right away.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Report of Findings",
    body:
      "We walk you through your results so you know exactly what is going on with your spine, what we recommend, and why it matters for your health.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11h6M9 7h6M9 15h4" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "What's Next",
    body:
      "Together we choose a care path that fits your goals, your schedule, and your budget. No pressure, no surprises, just clear next steps toward feeling better.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "How long should I plan to be there?",
    a: "Plan for around 75-90 minutes for the first visit. That covers your consultation, exam, X-rays if needed, a clear conversation about what we found and your first treatment if safe and appropriate.",
  },
  {
    q: "Do I need a referral?",
    a: "Not at all. You can book directly with us. Chiropractors are considered primary care physicians.",
  },
  {
    q: "What should I wear?",
    a: "Comfortable, athletic type or loose-fitting clothing is best. We want to be able to evaluate posture and movement easily. Also, please avoid clothing with zippers and buttons. If we take x-rays, we want to see your spine, not your zipper.",
  },
  {
    q: "Do you take my insurance?",
    a: "Our office does not directly bill your health insurance. This allows us to keep our cost down for the majority of people in New Mexico. We offer affordable care plans that will be discussed after your exam and we determine if we can help you.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/new-folks/first-visit", cmsFallbackMetadata);
}

export default function FirstVisitPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "New Folks", href: "/new-folks/" },
          { label: "First Visit" },
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
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
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
                <h1 className="section-title mt-5 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase">
                  What to expect on your{" "}
                  <span className="italic normal-case text-brand-gold">
                    first visit
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-6 max-w-xl text-white/75 text-base md:text-lg leading-relaxed">
                  Six clear steps. No surprises. Walk in calm, walk out
                  knowing exactly what is going on with your spine and nervous
                  system.
                </p>
              </Reveal>

              <Reveal delay={320} className="mt-8 flex flex-wrap items-center gap-4">
                <BookTrigger
                  className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-6 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors shadow-[0_10px_30px_-10px_rgba(245,197,24,0.6)]"
                >
                  <span>Book an appointment</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                    <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
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

            <Reveal className="lg:col-span-5" delay={150} variant="fade">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-3 rounded-[28px] bg-brand-gold/15 -rotate-2 pointer-events-none" aria-hidden="true" />
                <div className="absolute -inset-1.5 rounded-[24px] bg-brand-blue/25 rotate-1 pointer-events-none" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[22px] ring-1 ring-white/15 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.7)] bg-black aspect-[4/5]">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/videos/first-visit-teleprompter-poster.jpg"
                    aria-label="What to expect on your first visit at Synergy Spine and Nerve Center"
                  >
                    <source
                      src="/videos/first-visit-teleprompter.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                    Watch before you visit
                  </p>
                  <p className="section-title text-sm text-white font-semibold">
                    What to expect on day one
                  </p>
                </div>
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

        {/* TIMELINE */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    The 6 step journey
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Every step,{" "}
                  <span className="italic text-brand-blue">explained</span>.
                </h2>
              </div>
            </Reveal>

            <ol className="relative mt-16 grid md:grid-cols-2 gap-x-16 gap-y-12">
              {/* Center timeline rail (desktop) */}
              <div
                className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-brand-blue/40 to-transparent"
                aria-hidden="true"
              />

              {STEPS.map((s, i) => {
                const isRight = i % 2 === 1;
                return (
                  <Reveal as="li" key={s.num} delay={i * 80} className={isRight ? "md:col-start-2" : "md:col-start-1"}>
                    <article className="relative bg-white rounded-3xl ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.2)] hover:-translate-y-1 transition-all duration-500">
                      {/* Rail dot */}
                      <span
                        className={`hidden md:block absolute top-8 ${isRight ? "-left-9" : "-right-9"} h-4 w-4 rounded-full bg-brand-blue ring-4 ring-white shadow-[0_0_0_3px_rgba(1,112,185,0.18)]`}
                        aria-hidden="true"
                      />

                      <div className="flex items-start gap-4">
                        <div className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg">
                          <div className="w-6 h-6">{s.icon}</div>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                            Step {s.num}
                          </p>
                          <h3 className="section-title mt-1 text-xl text-brand-navyDark font-semibold">
                            {s.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-4 text-[15px] text-brand-text leading-relaxed">
                        {s.body}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </section>

        {/* PULSE BANNER */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="relative rounded-3xl bg-gradient-to-r from-brand-blue to-brand-blueLight p-8 lg:p-10 overflow-hidden ring-1 ring-black/5 text-white">
                <div
                  className="absolute inset-0 opacity-[0.08] pointer-events-none"
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
                      Ready to get started
                    </p>
                    <h3 className="section-title mt-2 text-2xl md:text-3xl font-semibold leading-snug">
                      Book an{" "}
                      <span className="italic text-brand-gold">appointment</span>.
                    </h3>
                    <p className="mt-3 text-white/85">
                      It only takes a minute. Pick a time that works for you
                      and we&apos;ll see you soon.
                    </p>
                    <BookTrigger
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-brand-navyDark px-6 py-2.5 text-sm font-bold hover:bg-brand-gold transition-colors"
                    >
                      <span>Book an appointment</span>
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

        {/* FAQ */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="text-center">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Common questions
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Frequently asked{" "}
                  <span className="italic text-brand-blue">questions</span>.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 space-y-3">
              {FAQS.map((f, i) => (
                <Reveal key={f.q} delay={i * 80}>
                  <details className="group rounded-2xl bg-white ring-1 ring-black/5 hover:ring-brand-blue/30 transition-all open:ring-brand-blue/40 open:shadow-[0_20px_40px_-20px_rgba(1,112,185,0.25)]">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 list-none">
                      <h3 className="section-title text-base md:text-lg text-brand-navyDark font-semibold">
                        {f.q}
                      </h3>
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-bg text-brand-navyDark group-open:bg-brand-blue group-open:text-white transition-colors">
                        <svg className="w-4 h-4 group-open:rotate-45 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 -mt-1 text-brand-text leading-relaxed">
                      {f.a}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO: How frequently should you get adjusted */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Common question
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  How frequently should you{" "}
                  <span className="italic text-brand-blue">get adjusted</span>?
                </h2>
                <p className="mt-3 text-brand-text">
                  Spoiler: it&apos;s less about a magic number and more
                  about your specific spine. Dr. Brad explains.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10">
                <YouTubeEmbed
                  id="ZKSzbG2Wc8M"
                  title="How frequently should you get adjusted?"
                />
              </div>
            </Reveal>
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
                Ready to take the{" "}
                <span className="italic text-brand-gold">first step</span>?
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors"
              >
                <span>Book Your First Visit</span>
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
                Or grab the $37 New Patient Special →
              </BookTrigger>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
