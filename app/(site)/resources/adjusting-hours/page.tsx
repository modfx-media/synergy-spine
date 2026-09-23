import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/resources/adjusting-hours/";

const cmsFallbackMetadata: Metadata = {
  title:
    "Adjusting Hours & Updates | Synergy Spine & Nerve Center",
  description:
    "Adjusted office hours, holiday closures, and the latest scheduling updates from Synergy Spine and Nerve Center in Rio Rancho, NM.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Adjusting Hours & Updates | Synergy Spine & Nerve Center",
    description:
      "Adjusted office hours, holiday closures, and the latest scheduling updates.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const REGULAR_HOURS = [
  { day: "Monday", hours: "8:00 AM \u2013 5:30 PM" },
  { day: "Tuesday", hours: "1:00 \u2013 5:00 PM" },
  { day: "Wednesday", hours: "10:00 AM \u2013 5:30 PM" },
  { day: "Thursday", hours: "1:00 \u2013 5:30 PM" },
  { day: "Friday", hours: "Closed" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://synergyspineandnerve.com/" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://synergyspineandnerve.com/resources/" },
    { "@type": "ListItem", position: 3, name: "Adjusting Hours", item: CANONICAL },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources/adjusting-hours", cmsFallbackMetadata);
}

export default function AdjustingHoursPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Adjusting Hours" },
        ]}
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
                Office hours &amp; updates
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Adjusted office hours &amp;{" "}
                <span className="italic normal-case text-brand-gold">
                  updates
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Stay current on our regular schedule, holiday closures, and any
                short-term changes to office hours. Sign up below to receive
                updates straight to your inbox.
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

        {/* HOURS TABLE */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Regular schedule
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  When we&apos;re{" "}
                  <span className="italic text-brand-blue">open</span>.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-sm bg-white">
                <table className="w-full text-left">
                  <thead className="bg-brand-bg">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-textLight"
                      >
                        Day
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-textLight"
                      >
                        Hours
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {REGULAR_HOURS.map((row) => {
                      const closed = row.hours === "Closed";
                      return (
                        <tr
                          key={row.day}
                          className="border-t border-black/5 odd:bg-white even:bg-brand-bg/50"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 text-base font-semibold text-brand-navyDark"
                          >
                            {row.day}
                          </th>
                          <td
                            className={
                              closed
                                ? "px-6 py-4 text-sm text-brand-textLight"
                                : "px-6 py-4 text-sm text-brand-text"
                            }
                          >
                            {row.hours}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* NOTICE / UPDATES SIGNUP */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-white p-8 lg:p-10 ring-1 ring-black/5 shadow-sm">
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Stay updated
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  Get notified about hour changes &amp; closures.
                </h2>
                <p className="mt-4 text-brand-text leading-relaxed">
                  When office hours change, for holidays, training, or any
                  short-term reason, we send a quick email so you&apos;re never
                  caught by surprise. Sign up to get those updates straight to
                  your inbox.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.straightchiro.com/rof/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition"
                  >
                    Sign Up Here
                  </a>
                  <Link
                    href="/resources/calendar/"
                    className="rounded-full border border-brand-navyDark/30 px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-navyDark hover:text-white transition"
                  >
                    View Calendar
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-brand-navyDark text-white py-20">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl animate-drift" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl animate-drift" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="section-title text-3xl md:text-4xl font-semibold leading-tight">
              Need to{" "}
              <span className="italic text-brand-goldSoft">reschedule?</span>
            </h2>
            <p className="mt-4 text-white/80">
              Give us a call, we&apos;ll find a time that works for you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <BookTrigger
                className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold text-brand-navyDark uppercase tracking-wide hover:bg-brand-goldSoft transition"
              >
                Schedule Online
              </BookTrigger>
              <a
                href="tel:+15058912280"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-brand-navyDark transition"
              >
                (505) 891-2280
              </a>
            </div>
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
