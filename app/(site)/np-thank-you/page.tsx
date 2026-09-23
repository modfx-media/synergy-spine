import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/np-thank-you/";

const cmsFallbackMetadata: Metadata = {
  title: "Thank You | Synergy Spine & Nerve Center",
  description:
    "Thank you for completing your new patient intake form with Synergy Spine and Nerve Center.",
  alternates: { canonical: CANONICAL },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://synergyspineandnerve.com/" },
    { "@type": "ListItem", position: 2, name: "New Folks", item: "https://synergyspineandnerve.com/new-folks/" },
    { "@type": "ListItem", position: 3, name: "Thank You", item: CANONICAL },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/np-thank-you", cmsFallbackMetadata);
}

export default function NpThankYouPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "New Folks", href: "/new-folks/" },
          { label: "Thank You" },
        ]}
      />

      <main>
        {/* HERO */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl animate-drift" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl animate-drift" />

          <div className="relative mx-auto max-w-4xl px-6 py-24 lg:py-32 text-center">
            <Reveal>
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Form received
              </p>
            </Reveal>
            <Reveal delay={200}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl font-semibold leading-[1.1] uppercase">
                Thank you for completing your{" "}
                <span className="italic normal-case text-brand-gold">
                  new patient intake form
                </span>
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Thank you for sending us your new patient intake form. We look
                forward to working with you soon.
              </p>
            </Reveal>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    What happens next
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  A few quick{" "}
                  <span className="italic text-brand-blue">next steps</span>.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              <Reveal as="li">
                <article className="h-full rounded-2xl bg-brand-bg p-6 ring-1 ring-black/5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white text-sm font-bold">
                    1
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-navyDark">
                    Schedule your visit
                  </h3>
                  <p className="mt-2 text-sm text-brand-text">
                    If you haven&apos;t already done so, please schedule your
                    new patient appointment at one of our New Patient
                    Appointment Times.
                  </p>
                  <BookTrigger
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-navy transition"
                  >
                    Pick a time →
                  </BookTrigger>
                </article>
              </Reveal>
              <Reveal as="li" delay={100}>
                <article className="h-full rounded-2xl bg-brand-bg p-6 ring-1 ring-black/5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white text-sm font-bold">
                    2
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-navyDark">
                    See real results
                  </h3>
                  <p className="mt-2 text-sm text-brand-text">
                    Visit our testimonials page to see how we have helped
                    others find relief.
                  </p>
                  <Link
                    href="/testimonials/"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-navy transition"
                  >
                    Read testimonials →
                  </Link>
                </article>
              </Reveal>
              <Reveal as="li" delay={200}>
                <article className="h-full rounded-2xl bg-brand-bg p-6 ring-1 ring-black/5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white text-sm font-bold">
                    3
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-navyDark">
                    Need help right away?
                  </h3>
                  <p className="mt-2 text-sm text-brand-text">
                    Give us a call. We&apos;re happy to answer any questions
                    before your first visit.
                  </p>
                  <a
                    href="tel:+15058912280"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-navy transition"
                  >
                    (505) 891-2280 →
                  </a>
                </article>
              </Reveal>
            </ul>

            <Reveal>
              <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
                <BookTrigger
                  className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition"
                >
                  Schedule My Appointment
                </BookTrigger>
                <Link
                  href="/"
                  className="rounded-full border border-brand-navyDark/30 px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-navyDark hover:text-white transition"
                >
                  Back to Home
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
