import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/resources/calendar/";

const cmsFallbackMetadata: Metadata = {
  title: "Calendar | Synergy Spine & Nerve Center",
  description:
    "View the live Synergy Spine and Nerve Center calendar, office hours, workshops, and events at our Rio Rancho, NM chiropractic clinic.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Calendar | Synergy Spine & Nerve Center",
    description:
      "View the live Synergy Spine and Nerve Center calendar, office hours, workshops, and events.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources/calendar", cmsFallbackMetadata);
}

export default function CalendarPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Calendar" },
        ]}
      />

      <main>
        {/* HERO (clean, no motion) */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Office hours, workshops &amp; events
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Synergy{" "}
                <span className="italic normal-case text-brand-gold">
                  calendar
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                A live look at what&apos;s happening at Synergy Spine and Nerve
                Center. Bookmark this page to stay current on office hours,
                health workshops, and community events.
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

        {/* CALENDAR EMBED */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Live calendar
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  See what&apos;s on the{" "}
                  <span className="italic text-brand-blue">books</span>.
                </h2>
                <p className="mt-4 text-brand-text">
                  Updates in real time. Need to schedule? Use the button below
                  or call us at{" "}
                  <a
                    href="tel:+15058912280"
                    className="font-semibold text-brand-blue hover:underline"
                  >
                    (505) 891-2280
                  </a>
                  .
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-12 rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] bg-white">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=352268d08bae2a3734da6b0217f01170a7c7d07f74a812ca7aa72ce58896de87%40group.calendar.google.com"
                  title="Synergy Spine and Nerve Center calendar"
                  loading="lazy"
                  className="block w-full h-[600px] border-0"
                  scrolling="no"
                />
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                <BookTrigger
                  className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold text-brand-navyDark uppercase tracking-wide hover:bg-brand-goldSoft transition"
                >
                  Schedule an Appointment
                </BookTrigger>
                <Link
                  href="/resources/"
                  className="rounded-full border border-brand-navyDark/30 px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-navyDark hover:text-white transition"
                >
                  Back to Resources
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
