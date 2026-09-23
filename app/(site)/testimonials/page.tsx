import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import BookTrigger from "@/components/booking/BookTrigger";

const CANONICAL = "https://synergyspineandnerve.com/testimonials/";

const cmsFallbackMetadata: Metadata = {
  title:
    "Patient Testimonials & Google Reviews Synergy Spine and Nerve Center",
  description:
    "Real Google reviews from Rio Rancho, NM patients who found relief through Synergy Spine and Nerve Center.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Patient Testimonials Synergy Spine and Nerve Center",
    description:
      "Real Google reviews from patients at Synergy Spine and Nerve Center in Rio Rancho, NM.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Synergy+Spine+and+Nerve+Center+Reviews";

// Elfsight Google Reviews widget id (managed at elfsight.com).
const ELFSIGHT_APP_ID = "377d8f4a-02dd-4071-bf0a-8368c1fb8fd8";
const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Chiropractic",
  name: "Synergy Spine and Nerve Center",
  url: CANONICAL,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: 89,
    bestRating: "5",
    worstRating: "1",
  },
};

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="inline-flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-brand-gold" : "text-brand-bg"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.92 6.26 6.93.6-5.21 4.51 1.6 6.78L12 17.27l-6.24 2.88 1.6-6.78L2.15 8.86l6.93-.6L12 2z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleGIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.44c-.28 1.5-1.13 2.77-2.4 3.62v3h3.87c2.26-2.09 3.58-5.17 3.58-8.86z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3c-1.07.72-2.43 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.19 7.19 0 0 1 4.87 12c0-.79.14-1.56.4-2.29V6.62H1.29A11.96 11.96 0 0 0 0 12c0 1.94.46 3.78 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.76 0 3.34.61 4.59 1.79l3.44-3.44C17.94 1.16 15.23 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.88 8.87 4.77 12 4.77z"
      />
    </svg>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/testimonials", cmsFallbackMetadata);
}

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
        ]}
      />

      <main>
        {/* HERO with Our Promise on the first slide */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div
            className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-brand-blue/25 blur-3xl animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -right-20 h-[460px] w-[460px] rounded-full bg-brand-gold/15 blur-3xl animate-drift"
            style={{ animationDelay: "-6s" }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="inline-flex items-center gap-3">
                    <span className="h-px w-10 bg-brand-gold" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-gold">
                      Our promise
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <h1 className="section-title mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase">
                    Real stories.{" "}
                    <span className="italic normal-case text-brand-gold">
                      Real results.
                    </span>
                  </h1>
                </Reveal>
                <Reveal delay={220}>
                  <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl">
                    We believe everyone matters, and everyone can take their
                    next step toward better health. We make no claim to cure
                    pain, sickness, or disease. We simply cannot do that.
                    What we can promise is that we&apos;ll do everything in
                    our power to help your body heal.
                  </p>
                </Reveal>
                <Reveal delay={320}>
                  <p className="mt-4 text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">
                    Many folks have experienced great relief as we discovered
                    the cause of their problems, illuminated the possibilities
                    available, and used evidence-based protocols to help them
                    heal.
                  </p>
                </Reveal>
                <Reveal delay={400}>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <BookTrigger className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition shadow-[0_15px_35px_-10px_rgba(245,197,24,0.5)]">
                      Book a Visit
                    </BookTrigger>
                    <a
                      href="#reviews"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-brand-navyDark transition"
                    >
                      Read reviews
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <polyline points="19 12 12 19 5 12" />
                      </svg>
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Rating card */}
              <div className="lg:col-span-5">
                <Reveal delay={200} variant="fade">
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand-gold/25 blur-2xl"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-brand-blue/25 blur-2xl"
                    />
                    <div className="relative rounded-3xl bg-white text-brand-navyDark p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                      <div className="flex items-center gap-3">
                        <GoogleGIcon className="h-8 w-8" />
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-textLight">
                          Google Reviews
                        </p>
                      </div>
                      <p className="mt-5 text-6xl md:text-7xl font-bold leading-none text-brand-navyDark">
                        4.9
                      </p>
                      <div className="mt-3">
                        <Stars rating={5} />
                      </div>
                      <p className="mt-4 text-sm text-brand-textLight leading-relaxed">
                        Consistently 5-star rated by patients across Rio
                        Rancho and the greater Albuquerque area.
                      </p>
                      <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-navyDark transition"
                      >
                        View all reviews on Google
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
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
                fill="#F5F5F5"
              />
            </svg>
          </div>
        </section>

        {/* REVIEWS - Elfsight Google Reviews widget */}
        <section id="reviews" className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-blue">
                    What patients say
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  From our{" "}
                  <span className="italic text-brand-blue">
                    Google reviews
                  </span>
                  .
                </h2>
                <p className="mt-4 text-brand-text">
                  Real reviews from real patients, pulled straight from our
                  Google Business Profile.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div
                className={`elfsight-app-${ELFSIGHT_APP_ID} mt-10`}
                data-elfsight-app-lazy
              />
            </Reveal>
          </div>
        </section>

        {/* SUPPORTING STATS */}
        <section className="bg-white py-14">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-4xl md:text-5xl font-semibold text-brand-navyDark">
                    4.9<span className="text-brand-blue">★</span>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-textLight">
                    Average rating
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-semibold text-brand-navyDark">
                    25<span className="text-brand-blue">+</span>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-textLight">
                    Years of practice
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-semibold text-brand-navyDark">
                    15,000<span className="text-brand-blue">+</span>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-textLight">
                    Patients cared for
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-semibold text-brand-navyDark">
                    1<span className="text-brand-blue">·1</span>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-textLight">
                    Personal care
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-brand-navyDark text-white py-20 lg:py-24 overflow-hidden">
          <span
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl animate-drift pointer-events-none"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-gold/12 blur-3xl animate-drift pointer-events-none"
            style={{ animationDelay: "-7s" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Your story could be{" "}
                <span className="italic text-brand-gold">next</span>.
              </p>
              <p className="mt-4 text-white/80">
                Start with a thorough exam and a real plan. The $37 New
                Patient Special.
              </p>
            </Reveal>
            <Reveal
              delay={150}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <BookTrigger className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-white transition-colors">
                <span>Book $37 New Patient Visit</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <a
                href="tel:+15058912280"
                className="text-sm font-semibold text-white/90 hover:text-brand-gold transition-colors"
              >
                Or call (505) 891-2280 →
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />

      <Script
        src={ELFSIGHT_SCRIPT_SRC}
        strategy="afterInteractive"
        async
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
    </>
  );
}
