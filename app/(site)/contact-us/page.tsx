import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
import TrackedForm from "@/components/forms/TrackedForm";
import FormSubmitFields from "@/components/forms/FormSubmitFields";
import PhoneLeadLink from "@/components/analytics/PhoneLeadLink";
const CANONICAL = "https://synergyspineandnerve.com/contact-us/";
const PHONE = "(505) 891-2280";
const PHONE_HREF = "tel:+15058912280";
const ADDRESS_LINE1 = "1453 Rio Rancho Blvd, Suite 2";
const ADDRESS_LINE2 = "Rio Rancho, NM 87124";

const cmsFallbackMetadata: Metadata = {
  title: {
    absolute: "Contact a Rio Rancho Chiropractor | Synergy Spine & Nerve",
  },
  description:
    "Call (505) 891-2280 or message Synergy Spine and Nerve Center at 1453 Rio Rancho Blvd, Suite 2. Chiropractor in Rio Rancho serving Albuquerque, Corrales, and Bernalillo.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Contact a Rio Rancho Chiropractor | Synergy Spine & Nerve",
    description:
      "Call (505) 891-2280 or message the Rio Rancho clinic at 1453 Rio Rancho Blvd, Suite 2. Serving Albuquerque, Corrales, and Bernalillo.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const HOURS = [
  { day: "Mon", hours: "8:00 AM \u2013 5:30 PM" },
  { day: "Tues", hours: "1:00 \u2013 5:00 PM" },
  { day: "Wed", hours: "10:00 AM \u2013 5:30 PM" },
  { day: "Thurs", hours: "1:00 \u2013 5:30 PM" },
  { day: "Fri Sun", hours: "Closed" },
];

const OFFICE_GALLERY = [
  { src: "/office-images/1.jpg", alt: "Synergy Spine and Nerve Center office view 1" },
  { src: "/office-images/2.jpg", alt: "Synergy Spine and Nerve Center office view 2" },
  { src: "/office-images/3.jpg", alt: "Synergy Spine and Nerve Center office view 3" },
  { src: "/office-images/4.jpg", alt: "Synergy Spine and Nerve Center office view 4" },
  { src: "/office-images/5.jpg", alt: "Synergy Spine and Nerve Center office view 5" },
  { src: "/office-images/6.jpg", alt: "Synergy Spine and Nerve Center office view 6" },
  { src: "/office-images/7.jpg", alt: "Synergy Spine and Nerve Center office view 7" },
  { src: "/office-images/8.jpg", alt: "Synergy Spine and Nerve Center office view 8" },
];

const MAP_QUERY = "1453+Rio+Rancho+Blvd+Suite+2+Rio+Rancho+NM+87124";
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Chiropractic",
  name: "Synergy Spine and Nerve Center",
  url: CANONICAL,
  telephone: "+15058912280",
  email: "info@synergyspineandnerve.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1453 Rio Rancho Blvd, Suite 2",
    addressLocality: "Rio Rancho",
    addressRegion: "NM",
    postalCode: "87124",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.2347,
    longitude: -106.6605,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "08:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "13:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "13:00", closes: "17:30" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+15058912280",
    contactType: "customer service",
    areaServed: "US-NM",
    availableLanguage: "English",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/contact-us", cmsFallbackMetadata);
}

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
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
                We&apos;re here to help
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Get in touch with{" "}
                <span className="italic normal-case text-brand-gold">
                  Synergy Spine
                </span>{" "}
                and Nerve Center
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                If you have any questions, comments or concerns about our
                Rio Rancho, NM chiropractic care center, please use the
                form below, we&apos;ll be sure to get back to you as soon as
                possible. We look forward to hearing from you.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-3 max-w-3xl text-white/70 leading-relaxed">
                If you need immediate assistance, feel free to contact us
                by phone.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* SPLIT: INFO + FORM */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
              {/* Info column */}
              <Reveal>
                <div className="space-y-6">
                  <div className="rounded-3xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white p-7 shadow-[0_30px_60px_-20px_rgba(1,112,185,0.45)] relative overflow-hidden">
                    <span
                      className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/15 blur-2xl animate-drift pointer-events-none"
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white/80">
                        Phone
                      </p>
                      <a
                        href={PHONE_HREF}
                        className="mt-2 block section-title text-2xl md:text-3xl font-semibold hover:text-brand-gold transition-colors"
                      >
                        {PHONE}
                      </a>
                      <p className="mt-1 text-sm text-white/85">
                        Tap to call. If you reach voicemail, leave a
                        message and we&apos;ll call you right back.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-white ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                    <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                      Address
                    </p>
                    <p className="mt-2 section-title text-lg text-brand-navyDark font-semibold leading-snug">
                      {ADDRESS_LINE1}
                      <br />
                      {ADDRESS_LINE2}
                    </p>
                    <a
                      href={MAP_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-blue hover:text-brand-navyDark transition-colors"
                    >
                      <span>Get directions</span>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 17 17 7M17 7H8M17 7v9" />
                      </svg>
                    </a>
                  </div>

                  <div className="rounded-3xl bg-white ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                    <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                      Office hours
                    </p>
                    <ul className="mt-3 space-y-2">
                      {HOURS.map((h) => {
                        const closed = h.hours === "Closed";
                        return (
                          <li
                            key={h.day}
                            className="flex items-center justify-between gap-4 text-sm"
                          >
                            <span className="font-semibold text-brand-navyDark">
                              {h.day}
                            </span>
                            <span
                              className={
                                closed
                                  ? "text-brand-textLight"
                                  : "text-brand-text"
                              }
                            >
                              {h.hours}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </Reveal>

              {/* Form column */}
              <Reveal delay={150}>
                <TrackedForm
                  action="https://formsubmit.co/info@synergyspineandnerve.com"
                  label="contact_form"
                  className="rounded-3xl bg-white ring-1 ring-black/5 p-8 lg:p-10 shadow-[0_2px_10px_rgba(13,35,64,0.04)]"
                >
                  <div className="inline-flex items-center gap-3">
                    <span className="h-px w-10 bg-brand-blue" />
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                      Send us a message
                    </p>
                  </div>
                  <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-snug">
                    We&apos;ll be in{" "}
                    <span className="italic text-brand-blue">touch</span>{" "}
                    shortly.
                  </h2>

                  <div className="mt-7 grid sm:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="block text-[11px] uppercase tracking-[0.18em] font-bold text-brand-textLight">
                        Your name
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        className="mt-2 w-full rounded-xl bg-brand-bg px-4 py-3 text-brand-text ring-1 ring-black/5 focus:ring-2 focus:ring-brand-blue focus:bg-white outline-none transition"
                      />
                    </label>
                    <label className="block">
                      <span className="block text-[11px] uppercase tracking-[0.18em] font-bold text-brand-textLight">
                        Your email
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        className="mt-2 w-full rounded-xl bg-brand-bg px-4 py-3 text-brand-text ring-1 ring-black/5 focus:ring-2 focus:ring-brand-blue focus:bg-white outline-none transition"
                      />
                    </label>
                  </div>

                  <label className="mt-5 block">
                    <span className="block text-[11px] uppercase tracking-[0.18em] font-bold text-brand-textLight">
                      Phone number{" "}
                      <span className="font-normal text-brand-textLight/70 lowercase tracking-normal">
                        (optional)
                      </span>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      className="mt-2 w-full rounded-xl bg-brand-bg px-4 py-3 text-brand-text ring-1 ring-black/5 focus:ring-2 focus:ring-brand-blue focus:bg-white outline-none transition"
                    />
                  </label>

                  <label className="mt-5 block">
                    <span className="block text-[11px] uppercase tracking-[0.18em] font-bold text-brand-textLight">
                      Message
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="mt-2 w-full rounded-xl bg-brand-bg px-4 py-3 text-brand-text ring-1 ring-black/5 focus:ring-2 focus:ring-brand-blue focus:bg-white outline-none transition resize-y"
                    />
                  </label>

                  <FormSubmitFields
                    subject="New contact form submission Synergy Spine and Nerve Center"
                    nextPath="/contact-us/thank-you/"
                  />

                  <button
                    type="submit"
                    className="group/cta mt-7 inline-flex items-center gap-2 bg-brand-navyDark text-white rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-brand-blue transition-colors"
                  >
                    <span>Send Message</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark group-hover/cta:bg-white group-hover/cta:text-brand-blue transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </button>

                  <p className="mt-5 text-xs text-brand-textLight">
                    We&apos;ll never share your information. If you need
                    immediate help, please call{" "}
                    <PhoneLeadLink href={PHONE_HREF} className="text-brand-blue font-semibold hover:underline underline-offset-4">
                      {PHONE}
                    </PhoneLeadLink>
                    .
                  </p>
                </TrackedForm>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Find{" "}
                  <span className="italic text-brand-blue">our office</span>.
                </h2>
                <p className="mt-4 text-brand-text">
                  We&apos;re easy to reach from Rio Rancho, Albuquerque, Bernalillo,
                  Corrales, Placitas, and across the metro.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-12 rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)]">
                <iframe
                  src={MAP_EMBED_URL}
                  title="Map to Synergy Spine and Nerve Center"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[280px] md:h-[320px] border-0"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* OFFICE GALLERY */}
        <section className="relative bg-white py-20 lg:py-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #0d2340 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Inside our office
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  A peek at{" "}
                  <span className="italic text-brand-blue">where we work</span>.
                </h2>
                <p className="mt-4 text-brand-text">
                  Calm, clean, and built for healing. Take a quick tour of our
                  Rio Rancho practice.
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
              {OFFICE_GALLERY.map((img, i) => (
                <Reveal as="li" key={img.src} delay={i * 60}>
                  <div className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-black/5 bg-brand-bg shadow-[0_2px_10px_rgba(13,35,64,0.05)] hover:shadow-[0_20px_40px_-20px_rgba(13,35,64,0.25)] transition-shadow">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-brand-navyDark text-white py-20 lg:py-24 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl animate-drift pointer-events-none" aria-hidden="true" />
          <span className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-gold/12 blur-3xl animate-drift pointer-events-none" style={{ animationDelay: "-7s" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Or just{" "}
                <span className="italic text-brand-gold">book directly</span>.
              </p>
              <p className="mt-4 text-white/80">
                Skip the back-and-forth, schedule online and we&apos;ll see you
                soon.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-white transition-colors"
              >
                <span>Book Online</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <BookTrigger
                className="text-sm font-semibold text-white/90 hover:text-brand-gold transition-colors"
              >
                $37 New Patient Special →
              </BookTrigger>
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
