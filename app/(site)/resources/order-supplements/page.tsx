import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL =
  "https://synergyspineandnerve.com/resources/order-supplements/";

const cmsFallbackMetadata: Metadata = {
  title: "Order Supplements Synergy Spine and Nerve Center",
  description:
    "Order Innate Choice supplements through Synergy Spine and Nerve Center, superior quality, 100% natural, never synthetic. Free shipping in 48 states.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Order Innate Choice Supplements",
    description:
      "Innate Choice supplements, superior quality, 100% natural, free shipping in 48 states.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const PRODUCTS = [
  {
    name: "Omega A&D Liquid",
    body: "Concentrated, pharmaceutical-grade omega-3 fish oil with vitamins A and D, the way nature pairs them.",
  },
  {
    name: "Omega A&D Concentrated Capsules",
    body: "Same powerful nutrient profile as the liquid, in convenient capsule form.",
  },
  {
    name: "Probiotic Sufficiency",
    body: "A multi-strain probiotic that supports gut health, immune function, and nutrient absorption.",
  },
  {
    name: "Vita Sufficiency",
    body: "A whole-food multivitamin formulated to fill the gaps in even a clean modern diet.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources/order-supplements", cmsFallbackMetadata);
}

export default function OrderSupplementsPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Order Supplements" },
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
                href="/resources/"
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 hover:text-brand-gold transition-colors"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>Resources</span>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-5 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Order{" "}
                <span className="italic normal-case text-brand-gold">
                  supplements
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                We offer Innate Choice Supplements due to their superior quality.
                Innate Choice supplements are delivered to you just how nature
                created them, they have not been chemically altered in any way,
                there is never anything synthetic, and they are always 100%
                natural. We encourage you to{" "}
                <Link
                  href="/resources/essential-nutrients-supplements/"
                  className="text-brand-gold underline-offset-4 hover:underline"
                >
                  learn more about the Innate Choice products
                </Link>
                .
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 max-w-3xl text-white/70 text-base leading-relaxed">
                We currently do not offer online ordering. However, you can{" "}
                <BookTrigger
                  className="text-brand-gold underline-offset-4 hover:underline"
                >
                  email us here
                </BookTrigger>{" "}
                to let us know what you would like, and we can have it ready for
                you on your next visit. We can also ship direct to you almost
                anywhere in the 48 states with{" "}
                <strong className="text-white">no shipping costs</strong>.
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
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <p className="text-center text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                What we carry
              </p>
              <h2 className="section-title text-center mt-2 text-3xl md:text-4xl text-brand-navyDark font-semibold">
                Innate Choice{" "}
                <span className="italic text-brand-blue">essentials</span>
              </h2>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 gap-6">
              {PRODUCTS.map((p, i) => (
                <Reveal as="li" key={p.name} delay={i * 80}>
                  <article className="h-full rounded-2xl bg-gradient-to-br from-white to-brand-bg ring-1 ring-black/5 p-6 hover:shadow-[0_20px_40px_-20px_rgba(13,35,64,0.18)] transition">
                    <h3 className="section-title text-lg font-semibold text-brand-navyDark">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-brand-text leading-relaxed">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={200}>
              <div className="mt-12 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navyDark text-white p-8 lg:p-10">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                  How to order
                </p>
                <p className="mt-3 text-lg leading-relaxed">
                  We do not currently offer online ordering. Email us with what
                  you&apos;d like and we&apos;ll have it ready for you on your
                  next visit, or ship it directly to you anywhere in the 48
                  contiguous states with{" "}
                  <span className="text-brand-gold font-semibold">
                    no shipping costs
                  </span>
                  .
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <BookTrigger
                    className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold text-brand-navyDark uppercase tracking-wide hover:bg-brand-goldSoft transition"
                  >
                    Email an order
                  </BookTrigger>
                  <a
                    href="tel:+15058912280"
                    className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-brand-navyDark transition"
                  >
                    (505) 891-2280
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-brand-bg py-16">
          <div className="mx-auto max-w-5xl px-6 grid sm:grid-cols-3 gap-4">
            <Link
              href="/resources/essential-nutrients-supplements/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Why these matter
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">
                Essential Nutrients &amp; Supplements
              </p>
            </Link>
            <Link
              href="/resources/all-about-nutrition/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Foundation
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">
                All About Nutrition
              </p>
            </Link>
            <Link
              href="/purchase-supplements-2/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Also see
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">
                Purchase Supplements
              </p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
