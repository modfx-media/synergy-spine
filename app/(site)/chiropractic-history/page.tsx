import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/chiropractic-history/";

const cmsFallbackMetadata: Metadata = {
  title: "Chiropractic History Synergy Spine and Nerve Center",
  description:
    "Ever wonder how chiropractic started and evolved over time? Walk through the key milestones from D.D. Palmer's first adjustment in 1895 to modern evidence-based care.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Chiropractic History Synergy Spine and Nerve Center",
    description:
      "Key milestones in the history of chiropractic, from 1895 to today.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Chiropractic History",
  description:
    "An overview of the history of chiropractic care, from D.D. Palmer's first adjustment in 1895 to modern evidence-based practice.",
  url: CANONICAL,
  publisher: {
    "@type": "Organization",
    name: "Synergy Spine and Nerve Center",
    url: "https://synergyspineandnerve.com/",
  },
};

const MILESTONES: { year: string; title: string; body: string }[] = [
  {
    year: "1895",
    title: "The very first adjustment",
    body:
      "On September 18, 1895, Daniel David (D.D.) Palmer performed the first chiropractic adjustment in Davenport, Iowa. His patient, Harvey Lillard, reported that his hearing, which he had lost 17 years earlier, was restored after the adjustment.",
  },
  {
    year: "1897",
    title: "The first chiropractic school",
    body:
      "D.D. Palmer founded the Palmer School of Chiropractic in Davenport, Iowa, still operating today as Palmer College of Chiropractic, the &ldquo;Fountainhead&rdquo; of the profession.",
  },
  {
    year: "1906",
    title: "The first textbook",
    body:
      "D.D. Palmer published &ldquo;The Science of Chiropractic,&rdquo; one of the earliest comprehensive texts describing the philosophy, science, and art of chiropractic adjustment.",
  },
  {
    year: "1910s",
    title: "B.J. Palmer takes the lead",
    body:
      "Bartlett Joshua (B.J.) Palmer, D.D.&apos;s son, took the reins and is widely credited with developing chiropractic into a recognized profession, fighting court battles to defend chiropractors&apos; right to practice.",
  },
  {
    year: "1913",
    title: "First state licensing",
    body:
      "Kansas became the first state to formally license chiropractors. Other states quickly followed, building the professional and legal framework that protects patients today.",
  },
  {
    year: "1924",
    title: "X-ray analysis introduced",
    body:
      "B.J. Palmer introduced the use of X-ray (which he called the &ldquo;Spinograph&rdquo;) to analyze the spine, a technological leap that still informs how chiropractors work today.",
  },
  {
    year: "1963",
    title: "AMA opposition",
    body:
      "The American Medical Association formed a Committee on Quackery aimed at &ldquo;containing and eliminating&rdquo; chiropractic. This sparked a long, hard-fought battle for legitimacy.",
  },
  {
    year: "1987",
    title: "Wilk v. AMA decision",
    body:
      "Federal court found the AMA guilty of an illegal conspiracy to destroy the chiropractic profession. The ruling opened the door for chiropractic to be recognized within mainstream healthcare.",
  },
  {
    year: "1993",
    title: "Manga Report",
    body:
      "A landmark Canadian government-commissioned study concluded that chiropractic care was more effective, safer, and more cost-effective than medical management for low back pain.",
  },
  {
    year: "2000s",
    title: "Evidence-based era",
    body:
      "An explosion of peer-reviewed research validates spinal manipulation for back pain, neck pain, headaches, and more. Chiropractic enters hospital systems and integrative health programs.",
  },
  {
    year: "Today",
    title: "Family-centered, full-spectrum care",
    body:
      "Modern chiropractic blends time-tested adjusting techniques with research-driven assessment, neurology, and lifestyle care, serving infants, kids, athletes, and grandparents alike.",
  },
];

const FOUNDERS = [
  {
    name: "D.D. Palmer",
    role: "Founder of Chiropractic",
    body:
      "A self-taught healer and magnetic therapist who, on a hunch about a misaligned vertebra, performed the first chiropractic adjustment in 1895, and changed healthcare forever.",
  },
  {
    name: "B.J. Palmer",
    role: "Developer of Chiropractic",
    body:
      "D.D.&apos;s son. Took the profession from a single technique into a fully-developed body of knowledge, defended it in court, and built the institutions that taught generations of chiropractors.",
  },
  {
    name: "Harvey Lillard",
    role: "First Chiropractic Patient",
    body:
      "Janitor in the building where D.D. Palmer worked. After receiving the first adjustment, his hearing, lost for 17 years, improved dramatically. His story sparked an entire profession.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/chiropractic-history", cmsFallbackMetadata);
}

export default function ChiropracticHistoryPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Chiropractic" },
          { label: "Chiropractic History" },
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
                Origins of a profession
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Chiropractic{" "}
                <span className="italic normal-case text-brand-gold">
                  history
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Ever wonder about how chiropractic started and evolved over
                time? From a single adjustment in an Iowa office to a
                worldwide healthcare profession, here&apos;s the journey.
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

        {/* INTRO */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  How it began
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                The story of one{" "}
                <span className="italic text-brand-blue">
                  remarkable adjustment
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-brand-text text-lg leading-relaxed">
                On a September day in 1895, a self-taught healer named
                Daniel David Palmer noticed a misaligned vertebra in the
                upper back of a janitor named Harvey Lillard. Lillard had
                been deaf for 17 years. After a single carefully placed
                adjustment, his hearing began to return. From that moment, a
                new profession was born, one that would grow into the
                world&apos;s largest drug-free, surgery-free healthcare
                discipline.
              </p>
            </Reveal>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Timeline
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  130+ years of{" "}
                  <span className="italic text-brand-blue">milestones</span>.
                </h2>
              </div>
            </Reveal>

            <ol className="relative mt-14 ml-3 md:ml-0">
              {/* center rail (desktop) */}
              <div
                className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-brand-blue/0 via-brand-blue/50 to-brand-blue/0"
                aria-hidden="true"
              />
              {/* mobile rail */}
              <div
                className="md:hidden absolute top-0 bottom-0 left-3 w-px bg-gradient-to-b from-brand-blue/0 via-brand-blue/40 to-brand-blue/0"
                aria-hidden="true"
              />

              {MILESTONES.map((m, i) => {
                const isRight = i % 2 === 1;
                return (
                  <Reveal as="li" key={m.year} delay={i * 70}>
                    <div
                      className={`relative grid md:grid-cols-2 md:gap-10 mb-8 ${
                        isRight ? "" : ""
                      }`}
                    >
                      {/* dot */}
                      <span
                        className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-brand-blue ring-4 ring-brand-bg shadow-[0_0_0_3px_rgba(1,112,185,0.18)]"
                        aria-hidden="true"
                      />
                      <span
                        className="md:hidden absolute top-6 left-3 -translate-x-1/2 h-3 w-3 rounded-full bg-brand-blue ring-4 ring-brand-bg shadow-[0_0_0_3px_rgba(1,112,185,0.18)]"
                        aria-hidden="true"
                      />

                      <div
                        className={`pl-9 md:pl-0 ${
                          isRight ? "md:col-start-2" : "md:col-start-1 md:text-right"
                        }`}
                      >
                        <article
                          className={`bg-white rounded-2xl ring-1 ring-black/5 p-6 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] transition-all duration-500 ${
                            isRight ? "" : "md:ml-auto"
                          }`}
                        >
                          <span
                            className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-blueLight text-white text-[10px] uppercase tracking-[0.22em] font-bold px-3 py-1`}
                          >
                            {m.year}
                          </span>
                          <h3 className="section-title mt-3 text-lg text-brand-navyDark font-semibold">
                            {m.title}
                          </h3>
                          <p
                            className="mt-2 text-sm text-brand-textLight leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: m.body }}
                          />
                        </article>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </section>

        {/* FOUNDERS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  The people who{" "}
                  <span className="italic text-brand-blue">made it possible</span>
                  .
                </h2>
              </div>
            </Reveal>
            <ul className="mt-12 grid md:grid-cols-3 gap-6">
              {FOUNDERS.map((f, i) => (
                <Reveal as="li" key={f.name} delay={i * 100}>
                  <article className="h-full bg-brand-bg/60 rounded-3xl ring-1 ring-black/5 p-7 hover:bg-white hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] hover:-translate-y-1 transition-all duration-500">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <h3 className="section-title mt-5 text-xl text-brand-navyDark font-semibold">
                      {f.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-brand-blue">
                      {f.role}
                    </p>
                    <p
                      className="mt-3 text-brand-text leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: f.body }}
                    />
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* PULL-QUOTE */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <figure className="relative rounded-3xl bg-white ring-1 ring-black/5 p-8 lg:p-12 shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                <svg
                  className="absolute -top-5 left-8 w-12 h-12 text-brand-gold"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 17h3l2-4V7H4v6h2zm10 0h3l2-4V7h-4v6h2z" />
                </svg>
                <blockquote className="section-title text-xl md:text-2xl text-brand-navyDark font-semibold leading-snug">
                  &ldquo;Get the big idea, and all else follows.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-brand-textLight uppercase tracking-[0.18em] font-semibold">
                  B.J. Palmer
                </figcaption>
              </figure>
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
                Be part of the{" "}
                <span className="italic text-brand-gold">next chapter</span>{" "}
                of chiropractic.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-bold hover:bg-white transition-colors"
              >
                <span>Contact Us Today</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <Link
                href="/chiropractic-research/"
                className="text-sm font-semibold text-white/85 hover:text-brand-gold transition-colors"
              >
                See the research today →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
