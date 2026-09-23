import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/about-us/meet-kathryn/";

const cmsFallbackMetadata: Metadata = {
  title: "Meet Kathryn Synergy Spine and Nerve Center",
  description:
    "Meet Kathryn, Chiropractic Assistant at Synergy Spine and Nerve Center in Rio Rancho, NM since 2018.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Meet Kathryn Chiropractic Assistant",
    description:
      "Chiropractic Assistant at Synergy Spine and Nerve Center in Rio Rancho, NM since 2018.",
    url: CANONICAL,
    type: "profile",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kathryn",
  jobTitle: "Chiropractic Assistant",
  url: CANONICAL,
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Synergy Spine and Nerve Center",
    url: "https://synergyspineandnerve.com",
    telephone: "+1-505-891-2280",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/about-us/meet-kathryn", cmsFallbackMetadata);
}

export default function MeetKathrynPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us/" },
          { label: "Meet Kathryn" },
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
              <Link
                href="/about-us/"
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 hover:text-brand-gold transition-colors"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>About Us</span>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-5 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Meet{" "}
                <span className="italic normal-case text-brand-gold">
                  Kathryn
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-4 text-white/80 text-lg md:text-xl font-medium uppercase tracking-wide">
                Chiropractic Assistant since 2018
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
            <div className="prose prose-lg max-w-none text-brand-text">
              <Reveal>
                <p className="text-lg leading-relaxed">
                  I began working with Dr. Brad in April 2018. I have to tell you
                  how much I have enjoyed working with Dr. Brad and the staff.
                  They are incredible! Meeting all the patients has been a
                  blessing and a joy to me.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 text-lg leading-relaxed">
                  Let me tell you a little about myself. I retired from the State
                  as a Deputy Treasurer. I wanted to invest more of my talents in
                  the community. Health is really a passion for me.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 text-lg leading-relaxed">
                  When I began working here, I had a Spinal Health exam. Before
                  this exam I had been to specialists for my thyroid problem.
                  After my first adjustment, for the first time in a long time, I
                  slept all through the night. I can go to the gym now and I have
                  more energy than I did before. My adjustments have made a
                  difference in my life and I have felt so refreshed.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 text-lg leading-relaxed">
                  Dr. Brad has a passion for what he does and it shows. I only
                  wish I would have found chiropractic care sooner, adjustments
                  have improved my health.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative bg-brand-navyDark text-white py-20 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" aria-hidden="true" />
          <span className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-gold/12 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Synergy Spine and Nerve Center is the premier family
                chiropractic{" "}
                <span className="italic text-brand-gold">
                  corrective &amp; wellness care
                </span>{" "}
                provider in Rio Rancho, New Mexico.
              </p>
              <p className="mt-4 text-white/80">We look forward to serving you.</p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <BookTrigger
                className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold text-brand-navyDark uppercase tracking-wide hover:bg-brand-goldSoft transition"
              >
                Book Appointment
              </BookTrigger>
              <a
                href="tel:+15058912280"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-brand-navyDark transition"
              >
                (505) 891-2280
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
