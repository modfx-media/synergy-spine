import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/schedule/";
const PHONE = "(505) 891-2280";
const PHONE_HREF = "tel:+15058912280";

const cmsFallbackMetadata: Metadata = {
  title:
    "Schedule Your Chiropractic Appointment Synergy Spine and Nerve Center",
  description:
    "Book your visit with Dr. Brad or Austin in Rio Rancho, NM. Online scheduling available, or call (505) 891-2280.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "Schedule Your Chiropractic Appointment Synergy Spine and Nerve Center",
    description:
      "Online booking with Dr. Brad and Austin at Synergy Spine and Nerve Center in Rio Rancho, NM.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const HOURS = [
  { day: "Monday", hours: "8:00 AM \u2013 5:30 PM" },
  { day: "Tuesday", hours: "1:00 \u2013 5:00 PM" },
  { day: "Wednesday", hours: "10:00 AM \u2013 5:30 PM" },
  { day: "Thursday", hours: "1:00 \u2013 5:30 PM" },
  { day: "Friday", hours: "Closed" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

const NOTES = [
  "Click the button below to schedule your visit online.",
  "If you are not able to schedule online, you may also contact us at (505) 891-2280.",
  "If you get our voicemail, please leave us a message and we will return your call as soon as we can.",
  "If you are running late, please text us by replying to the text message you received from us to let us know.",
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Chiropractic",
  name: "Synergy Spine and Nerve Center",
  url: CANONICAL,
  telephone: "+15058912280",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1453 Rio Rancho Blvd, Suite 2",
    addressLocality: "Rio Rancho",
    addressRegion: "NM",
    postalCode: "87124",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "08:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "13:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "10:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "13:00",
      closes: "17:30",
    },
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: CANONICAL,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "Chiropractic Appointment",
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/schedule", cmsFallbackMetadata);
}

export default function SchedulePage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Schedule" },
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
                Book online · Or call us
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Schedule your chiropractic{" "}
                <span className="italic normal-case text-brand-gold">
                  appointment
                </span>{" "}
                at Synergy Spine Center
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Dr. Brad and Austin are happy to serve you at 1453 Rio
                Rancho Blvd-Suite #2 in Rio Rancho. Pick a time that works
, we&apos;ll do the rest.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* BOOK CTA + NOTES */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <Reveal>
                <div>
                  <div className="inline-flex items-center gap-3">
                    <span className="h-px w-10 bg-brand-blue" />
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                      Online scheduling
                    </p>
                  </div>
                  <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                    Book a visit with{" "}
                    <span className="italic text-brand-blue">
                      Dr. Brad or Austin
                    </span>
                    .
                  </h2>
                  <p className="mt-5 text-brand-text leading-relaxed">
                    Please note the following before scheduling:
                  </p>
                  <ul className="mt-5 space-y-3">
                    {NOTES.map((n, i) => (
                      <li key={n} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="text-brand-text leading-relaxed">
                          {n}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="relative rounded-3xl bg-gradient-to-br from-brand-blue to-brand-blueLight p-8 lg:p-10 text-white shadow-[0_30px_60px_-20px_rgba(1,112,185,0.45)] overflow-hidden">
                  <span
                    className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/15 blur-3xl animate-drift pointer-events-none"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-brand-gold/20 blur-3xl animate-drift pointer-events-none"
                    style={{ animationDelay: "-6s" }}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white/80">
                      Ready when you are
                    </p>
                    <p className="section-title mt-2 text-2xl md:text-3xl font-semibold leading-snug">
                      Click below to{" "}
                      <span className="italic text-brand-gold">book</span>{" "}
                      with Dr. Brad or Austin.
                    </p>
                    <BookTrigger
                      className="group/cta mt-6 inline-flex items-center gap-2 bg-white text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-brand-gold transition-colors shadow-lg"
                    >
                      <span>Book Online!</span>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-white group-hover/cta:bg-brand-blue transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M7 17 17 7M17 7H8M17 7v9" />
                        </svg>
                      </span>
                    </BookTrigger>
                    <p className="mt-5 text-sm text-white/85">
                      Prefer to call?{" "}
                      <a
                        href={PHONE_HREF}
                        className="font-semibold underline-offset-4 hover:underline"
                      >
                        {PHONE}
                      </a>
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* HOURS */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Office{" "}
                  <span className="italic text-brand-blue">hours</span>.
                </h2>
                <p className="mt-4 text-brand-text">
                  By appointment Monday through Thursday, closed Friday
                  through Sunday so we can rest, recover, and serve you
                  better next week.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-12 grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
                {HOURS.map((h) => {
                  const closed = h.hours === "Closed";
                  return (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between gap-4 rounded-2xl px-5 py-4 ring-1 ring-black/5 ${
                        closed
                          ? "bg-white/60 text-brand-textLight"
                          : "bg-white text-brand-navyDark"
                      }`}
                    >
                      <span className="text-[12px] uppercase tracking-[0.18em] font-bold">
                        {h.day}
                      </span>
                      <span
                        className={`text-sm font-semibold text-right ${
                          closed ? "text-brand-textLight" : "text-brand-navyDark"
                        }`}
                      >
                        {h.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT STRIP */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-gradient-to-r from-brand-navyDark via-brand-navy to-brand-navyDark p-8 lg:p-10 text-white grid sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                    Phone
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="mt-2 block section-title text-xl font-semibold hover:text-brand-gold transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                    Address
                  </p>
                  <p className="mt-2 section-title text-base font-semibold leading-snug">
                    1453 Rio Rancho Blvd, Suite 2
                    <br />
                    Rio Rancho, NM 87124
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                    Questions?
                  </p>
                  <BookTrigger
                    className="mt-2 inline-flex items-center gap-2 text-base font-semibold hover:text-brand-gold transition-colors"
                  >
                    <span>Contact us</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </BookTrigger>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-brand-navyDark text-white py-20 lg:py-24 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl animate-drift pointer-events-none" aria-hidden="true" />
          <span className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-gold/12 blur-3xl animate-drift pointer-events-none" style={{ animationDelay: "-7s" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                New to our office?{" "}
                <span className="italic text-brand-gold">
                  Start with $37
                </span>
                .
              </p>
              <p className="mt-4 text-white/80">
                One-on-one consultation, complete Spinal Health Assessment, any
                necessary X-rays, your first treatment, and a care plan, all
                for $37.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-white transition-colors"
              >
                <span>Book $37 New Patient Visit</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <a
                href={PHONE_HREF}
                className="text-sm font-semibold text-white/90 hover:text-brand-gold transition-colors"
              >
                Or call {PHONE} →
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
    </>
  );
}
