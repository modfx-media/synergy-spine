import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

const CANONICAL = "https://synergyspineandnerve.com/purchase-supplements-2/";
const ORDER_URL =
  "https://eatwellmovewellthinkwell.com/?rfsn=7505789.b507e0&utm_source=refersion&utm_medium=affiliate&utm_campaign=7505789.b507e0";

const cmsFallbackMetadata: Metadata = {
  title: "Purchase Supplements | Synergy Spine & Nerve Center",
  description:
    "Order Innate Choice supplements direct to your door, recommended by Synergy Spine and Nerve Center in Rio Rancho, NM.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Purchase Supplements | Synergy Spine & Nerve Center",
    description:
      "Order Innate Choice supplements direct to your door, recommended by Synergy Spine and Nerve Center.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const FEATURES = [
  {
    title: "Whole-food sourced",
    desc: "Real food, not synthetic isolates. Your body recognizes, and uses, the difference.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2c4 4 4 9 0 13M12 22c-4-4-4-9 0-13" />
        <path d="M5 8c4 4 9 4 13 0M5 16c4-4 9-4 13 0" />
      </svg>
    ),
  },
  {
    title: "Third-party tested",
    desc: "Verified for purity, potency, and the absence of heavy metals, every batch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "Direct to your door",
    desc: "Order from home and skip the trip, supplements arrive shipped right to you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M3 11h18M8 7V4h8v3" />
      </svg>
    ),
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://synergyspineandnerve.com/" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://synergyspineandnerve.com/resources/" },
    { "@type": "ListItem", position: 3, name: "Purchase Supplements", item: CANONICAL },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/purchase-supplements-2", cmsFallbackMetadata);
}

export default function PurchaseSupplementsPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Purchase Supplements" },
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
                Recommended supplements
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Purchase{" "}
                <span className="italic normal-case text-brand-gold">
                  supplements
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Order your supplements right here and have them shipped direct
                to your door. Click the button below and you will be redirected
                to the Innate Choice store to place your order.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition"
                >
                  Order Now
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </a>
                <Link
                  href="/resources/essential-nutrients-supplements/"
                  className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-brand-navyDark transition"
                >
                  Learn About Nutrients
                </Link>
              </div>
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

        {/* WHY INNATE CHOICE */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Why Innate Choice
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Discover Innate Choice supplements for{" "}
                  <span className="italic text-brand-blue">
                    superior quality and wellness
                  </span>
                  .
                </h2>
                <p className="mt-5 text-brand-text leading-relaxed">
                  These are the supplements Dr. Brad recommends every day in
                  the office. Real food, real standards, real results, at the
                  doses needed for the body to actually use them.
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} as="li" delay={i * 80}>
                  <article className="h-full rounded-2xl bg-brand-bg p-6 ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white shadow">
                      <span className="block h-6 w-6">{f.icon}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-brand-navyDark">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-text">
                      {f.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-brand-navyDark text-white py-20">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl animate-drift" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl animate-drift" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="section-title text-3xl md:text-4xl font-semibold leading-tight">
              Ready to{" "}
              <span className="italic text-brand-goldSoft">order?</span>
            </h2>
            <p className="mt-4 text-white/80">
              Click below to head over to the Innate Choice store. Our
              affiliate link is preserved automatically.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition"
              >
                Visit the Store
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
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
