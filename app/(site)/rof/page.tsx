import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/rof/";

const cmsFallbackMetadata: Metadata = {
  title: "Report of Findings (ROF) Synergy Spine and Nerve Center",
  description:
    "What to expect at your Report of Findings visit at Synergy Spine and Nerve Center, your exam results explained, plus a clear plan forward.",
  alternates: { canonical: CANONICAL },
  // Live page is unindexed/empty, keep ours discoverable but low-priority.
  robots: { index: false, follow: true },
  openGraph: {
    title: "Report of Findings (ROF) Visit",
    description:
      "Your exam results explained, plus a clear plan forward.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/rof", cmsFallbackMetadata);
}

export default function ROFPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "ROF" },
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
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                New patient · Visit two
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Report of{" "}
                <span className="italic normal-case text-brand-gold">
                  findings
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Your second visit is where everything comes together, the
                exam results, the imaging, what we found, and the clearest path
                forward for your spine and your health.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                What to expect
              </p>
              <h2 className="section-title mt-2 text-2xl md:text-3xl text-brand-navyDark font-semibold">
                Your results, explained in plain English
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-text">
                The Report of Findings (ROF) is a focused, low-pressure
                conversation with Dr. Brad. We sit down and walk through your
                exam together, what we found, what it means, and what
                happens next.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-4">
              {[
                {
                  title: "Your exam results",
                  body: "Posture, range of motion, neurological tests, and what each one is telling us about your nerve system.",
                },
                {
                  title: "Imaging review",
                  body: "If x-rays were taken, we go through them screen-by-screen so you can see what we see.",
                },
                {
                  title: "A clear plan",
                  body: "Specific recommendations, frequency of care, and the milestones you should expect along the way.",
                },
                {
                  title: "Your questions answered",
                  body: "No rush. Bring every question, including the ones you weren't sure how to ask.",
                },
              ].map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 80}>
                  <article className="rounded-2xl bg-gradient-to-br from-white to-brand-bg ring-1 ring-black/5 p-6 flex gap-5 items-start">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="section-title text-lg font-semibold text-brand-navyDark">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-brand-text leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-brand-bg py-16">
          <div className="mx-auto max-w-4xl px-6 grid sm:grid-cols-2 gap-4">
            <Link
              href="/new-folks/first-visit/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Visit one
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">
                What to Expect
              </p>
            </Link>
            <BookTrigger
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Get started
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">
                Book Appointment
              </p>
            </BookTrigger>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
