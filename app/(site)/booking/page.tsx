import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

const CANONICAL = "https://synergyspineandnerve.com/booking/";
const CALENDAR_ID = "c0c77xzpjOmrZyDLzTTk";
const CALENDAR_SRC = `https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`;
const FORM_EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

const cmsFallbackMetadata: Metadata = {
  title: "Book an Appointment | Synergy Spine & Nerve Center",
  description:
    "Book your chiropractic appointment with Synergy Spine and Nerve Center in Rio Rancho, NM. Pick a time that works best for you.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Book an Appointment | Synergy Spine & Nerve Center",
    description:
      "Schedule your visit with Dr. Brad or Austin at Synergy Spine and Nerve Center in Rio Rancho, NM.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://synergyspineandnerve.com/" },
    { "@type": "ListItem", position: 2, name: "Booking", item: CANONICAL },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/booking", cmsFallbackMetadata);
}

export default function BookingPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Booking" },
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
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl animate-drift" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl animate-drift" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <Reveal>
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                  Final step
                </p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="section-title mt-3 text-3xl md:text-5xl font-semibold leading-[1.1] uppercase">
                  Book your slot with{" "}
                  <span className="italic normal-case text-brand-gold">
                    Dr. Brad
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  You&apos;re one click away. Pick the time that works best and
                  we&apos;ll take care of the rest. If nothing on the calendar
                  fits your schedule, give us a call at{" "}
                  <a
                    href="tel:+15058912280"
                    className="font-semibold text-brand-gold underline underline-offset-4 hover:text-white"
                  >
                    (505) 891-2280
                  </a>
                  .
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  Watch this before your visit
                </p>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-5" delay={200} variant="fade">
              <div className="relative mx-auto w-full max-w-sm">
                <div
                  className="absolute -inset-3 rounded-[28px] bg-brand-gold/15 -rotate-2 pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute -inset-1.5 rounded-[24px] bg-brand-blue/25 rotate-1 pointer-events-none"
                  aria-hidden="true"
                />
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
        </section>

        {/* CALENDAR EMBED */}
        <section className="bg-brand-bg py-14 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal>
              <div className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(13,35,64,0.25)] ring-1 ring-black/5">
                <iframe
                  src={CALENDAR_SRC}
                  id={`${CALENDAR_ID}_1783362583132`}
                  title="Synergy Spine and Nerve Center Booking Calendar"
                  scrolling="no"
                  style={{
                    width: "100%",
                    border: "none",
                    overflow: "hidden",
                    minHeight: "780px",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />

      <Script src={FORM_EMBED_SCRIPT} strategy="afterInteractive" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
