import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/motion/AnimatedCounter";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/chiropractic-research/";
const CRACKER_JACK_IMAGE =
  "https://synergyspineandnerve.com/wp-content/uploads/2020/03/cracker-jack-1-145x300.png";

const cmsFallbackMetadata: Metadata = {
  title: "Chiropractic Research Synergy Spine and Nerve Center",
  description:
    "Explore the growing body of research behind chiropractic care. Chiropractic doesn't directly treat conditions, it helps restore homeostasis through nerve system health.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Chiropractic Research Synergy Spine and Nerve Center",
    description:
      "More evidence supports chiropractic for back pain than any medical procedure, and the body of research is growing fast.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Chiropractic Research",
  description:
    "An overview of research and evidence supporting chiropractic care for back pain, neck pain, headaches, and overall nervous system health.",
  url: CANONICAL,
  publisher: {
    "@type": "Organization",
    name: "Synergy Spine and Nerve Center",
    url: "https://synergyspineandnerve.com/",
  },
};

const STUDIES = [
  {
    area: "Low back pain",
    finding:
      "Spinal manipulation is recommended as a first-line, non-pharmacologic treatment for chronic low back pain by multiple national clinical guidelines.",
    citation: "American College of Physicians (Ann Intern Med, 2017)",
  },
  {
    area: "Neck pain",
    finding:
      "Cervical spinal manipulation combined with exercise produced superior outcomes compared to medication alone for chronic neck pain over 12 weeks of care.",
    citation: "Bronfort et al. (Ann Intern Med, 2012)",
  },
  {
    area: "Headaches & migraines",
    finding:
      "Patients receiving chiropractic spinal manipulation for migraine headaches reported significant reductions in frequency, duration, and disability scores.",
    citation: "Tuchin et al. (J Manipulative Physiol Ther, 2000)",
  },
  {
    area: "Cost-effectiveness",
    finding:
      "Chiropractic care was found to be more effective, safer, and more cost-effective than medical management for low back pain.",
    citation: "Manga Report, Government of Ontario (1993)",
  },
  {
    area: "Patient satisfaction",
    finding:
      "Chiropractic patients consistently report higher satisfaction with care than patients of family practitioners for the same complaint.",
    citation: "Cherkin & MacCornack (West J Med, 1989)",
  },
  {
    area: "Opioid reduction",
    finding:
      "Adults receiving chiropractic care for low back pain were 49% less likely to fill an opioid prescription than those who saw a medical provider only.",
    citation: "Corcoran et al. (Pain Medicine, 2020)",
  },
];

const KEY_POINTS = [
  {
    title: "More evidence than you might think",
    body:
      "There is more evidence for the utilization of chiropractic for back pain than any medical procedure, and the body of research is still growing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12 9 6l4 4 8-8" />
        <path d="M14 4h7v7" />
      </svg>
    ),
  },
  {
    title: "Beyond just pain",
    body:
      "Mounting evidence and case studies support chiropractic for headaches, asthma symptoms, ear infections in children, and more.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Whole-system perspective",
    body:
      "Chiropractic doesn't directly treat conditions, it improves the health of the nervous system, which controls or influences every other system in the body.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/chiropractic-research", cmsFallbackMetadata);
}

export default function ChiropracticResearchPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Chiropractic" },
          { label: "Chiropractic Research" },
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
                Evidence-based care
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Chiropractic{" "}
                <span className="italic normal-case text-brand-gold">
                  research
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Chiropractic doesn&apos;t directly treat health conditions, 
                it aims to resolve issues with homeostasis by improving the
                health of your nervous system, which can indirectly influence
                the health of other systems.
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

        {/* INTRO + CRACKER JACK STORY */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-10 items-start">
            <Reveal className="lg:col-span-7">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  A note from Dr. Brad
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                Some people think chiropractors are{" "}
                <span className="italic text-brand-blue">just quacks</span>.
              </h2>

              <p className="mt-6 text-brand-text text-lg leading-relaxed">
                I even had one guy tell me I probably got my degree from a
                Cracker Jack box. Another tried to convince me that he could
                get a chiropractic degree and license online. I guess my best
                response is, verify the qualifications of the chiropractor
                before they ever work on you. Cracker Jack boxes should only
                be used for an insulin spike and worthless prizes.
              </p>

              <p className="mt-5 text-brand-text text-lg leading-relaxed">
                The fact is that there is{" "}
                <span className="text-brand-blue font-semibold">
                  more evidence for the utilization of chiropractic
                </span>{" "}
                for back pain than any medical procedure. There is also
                mounting evidence and case studies showing the efficacy of
                chiropractic for other health maladies.
              </p>

              <p className="mt-5 text-brand-text text-lg leading-relaxed">
                I was inspired to become a chiropractor because of the help
                that I received with{" "}
                <Link
                  href="/about-us/meet-dr-brad/"
                  className="text-brand-blue underline-offset-4 hover:underline font-semibold"
                >
                  my history with asthma
                </Link>
                . Back then, there was very little good research that showed
                the positive relationship between chiropractic and other
                health conditions. I began chiropractic care because a
                chiropractor gave me hope, and I simply acted on faith. That
                may work for some people. Others want solid evidence, and
                the good news is, every year we are getting more.
              </p>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={150} variant="fade">
              <figure className="relative rounded-[28px] overflow-hidden bg-brand-bg ring-1 ring-black/5 shadow-[0_25px_60px_-25px_rgba(13,35,64,0.25)] p-8 flex items-center justify-center">
                <Image
                  src={CRACKER_JACK_IMAGE}
                  alt="Chiropractic care at Synergy Spine and Nerve Center promoting nervous system health for overall well-being."
                  width={290}
                  height={600}
                  unoptimized
                  className="w-auto max-h-[420px]"
                />
              </figure>
            </Reveal>
          </div>
        </section>

        {/* HOMEOSTASIS CALLOUT */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-white ring-1 ring-black/5 p-7 lg:p-9 border-l-4 border-brand-gold shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                  Important framing
                </p>
                <p className="section-title mt-3 text-xl md:text-2xl text-brand-navyDark font-semibold leading-snug">
                  Chiropractic does not treat health conditions like high
                  blood pressure, ear infections, bed-wetting, asthma,
                  diabetes, ulcers, or anything else.
                </p>
                <p className="mt-4 text-brand-text leading-relaxed">
                  Chiropractic works at restoring a more homeostatic
                  environment in your body through improving the health of
                  your nerve system. Because your nerve system directly or
                  indirectly controls or influences all of your other
                  systems, the health of those systems can improve when the
                  health of your nerve system improves.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* KEY POINTS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  What the{" "}
                  <span className="italic text-brand-blue">research shows</span>
                  .
                </h2>
              </div>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-3 gap-6">
              {KEY_POINTS.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 100}>
                  <article className="h-full bg-brand-bg/60 rounded-3xl ring-1 ring-black/5 p-7 hover:bg-white hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] hover:-translate-y-1 transition-all duration-500">
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

        {/* COUNTERS */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  By the{" "}
                  <span className="italic text-brand-blue">numbers</span>.
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <Reveal>
                <article className="bg-white rounded-3xl ring-1 ring-black/5 p-8 text-center shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                  <p className="section-title text-5xl md:text-6xl text-brand-navyDark font-semibold leading-none">
                    <AnimatedCounter end={130} suffix="+" />
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                    Years of clinical practice
                  </p>
                  <p className="mt-2 text-sm text-brand-textLight">
                    Since the first adjustment in 1895.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={100}>
                <article className="bg-white rounded-3xl ring-1 ring-black/5 p-8 text-center shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                  <p className="section-title text-5xl md:text-6xl text-brand-navyDark font-semibold leading-none">
                    <AnimatedCounter end={49} suffix="%" />
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                    Lower opioid use
                  </p>
                  <p className="mt-2 text-sm text-brand-textLight">
                    Among adults receiving chiropractic care for low back pain.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={200}>
                <article className="bg-white rounded-3xl ring-1 ring-black/5 p-8 text-center shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                  <p className="section-title text-5xl md:text-6xl text-brand-navyDark font-semibold leading-none">
                    #<AnimatedCounter end={1} suffix="" />
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                    Most evidence for back pain
                  </p>
                  <p className="mt-2 text-sm text-brand-textLight">
                    More than any medical procedure available today.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* STUDIES LIST */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Selected studies
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Highlights from the{" "}
                  <span className="italic text-brand-blue">literature</span>.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 space-y-4">
              {STUDIES.map((s, i) => (
                <Reveal as="li" key={s.area} delay={i * 60}>
                  <article className="flex gap-5 items-start rounded-3xl bg-brand-bg/60 ring-1 ring-black/5 p-6 hover:bg-white hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] transition-all duration-500">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blueLight text-white text-xs font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                        {s.area}
                      </p>
                      <p className="section-title mt-1 text-base md:text-lg text-brand-navyDark font-semibold leading-snug">
                        {s.finding}
                      </p>
                      <p className="mt-2 text-xs text-brand-textLight italic">
                        {s.citation}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={400}>
              <p className="mt-8 text-center text-sm text-brand-textLight italic">
                Citations summarized for general education. Visit your local
                medical library or PubMed for the full text of any study.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CLOSING NOTE */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-white ring-1 ring-black/5 p-7 lg:p-9 shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                <p className="text-brand-text text-lg leading-relaxed">
                  If you are the type of person that wants some research,
                  this page is a good starting point for you. We&apos;ll
                  continue to add links and summaries, and if you have
                  specific questions about a study or a condition, please
                  ask. We love this stuff.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/testimonials/"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-blue text-white px-5 py-2.5 text-sm font-bold hover:bg-brand-navyDark transition-colors"
                  >
                    <span>Real-life results</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                  <BookTrigger
                    className="inline-flex items-center gap-2 rounded-full bg-white text-brand-navyDark ring-1 ring-brand-navyDark/15 px-5 py-2.5 text-sm font-bold hover:bg-brand-bg transition-colors"
                  >
                    <span>Ask a question</span>
                  </BookTrigger>
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
                Evidence is great.{" "}
                <span className="italic text-brand-gold">Experiencing it</span>{" "}
                is better.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors"
              >
                <span>$37 New Patient Special</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <Link
                href="/chiropractic-history/"
                className="text-sm font-semibold text-white/85 hover:text-brand-gold transition-colors"
              >
                Read about chiropractic history →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
