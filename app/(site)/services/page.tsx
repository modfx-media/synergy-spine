import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import BookTrigger from "@/components/booking/BookTrigger";
import { SERVICE_CATEGORIES } from "@/lib/services-catalog";

const CANONICAL = "https://synergyspineandnerve.com/services/";

const cmsFallbackMetadata: Metadata = {
  title: "Services | Synergy Spine & Nerve Center",
  description:
    "Chiropractic, massage, and car/truck accident care in Rio Rancho, NM. Explore every service offered at Synergy Spine and Nerve Center.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Services | Synergy Spine & Nerve Center",
    description:
      "Chiropractic, massage, and post-collision care in Rio Rancho, NM.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const TOP_LEVEL = [
  {
    slug: "chiropractic",
    name: "Chiropractic",
    tagline: "Care for pain, mobility, and long-term wellness.",
    href: "/services/chiropractic/",
  },
  {
    slug: "massage",
    name: "Massage",
    tagline: "Medical and sports massage that supports your care plan.",
    href: "/services/massage/",
  },
  {
    slug: "car-truck-accident-care",
    name: "Car/Truck Accident Care",
    tagline: "Post-collision assessment, treatment, and documentation.",
    href: "/services/car-truck-accident-care/",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/services", cmsFallbackMetadata);
}

export default function ServicesIndexPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services" },
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

          <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-24">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Our services
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl font-semibold leading-[1.1] uppercase">
                Care that gets you{" "}
                <span className="italic normal-case text-brand-gold">
                  back to living
                </span>
                .
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl">
                Every service at Synergy is built around a specific plan for
                your body. Explore chiropractic, massage, and car/truck
                accident care below.
              </p>
            </Reveal>
          </div>
        </section>

        {/* TOP-LEVEL SERVICES */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <ul className="grid gap-6 md:grid-cols-3">
              {TOP_LEVEL.map((s, i) => (
                <Reveal as="li" key={s.slug} delay={i * 80}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col rounded-2xl bg-white p-7 ring-1 ring-black/5 hover:ring-brand-blue/40 hover:-translate-y-0.5 transition shadow-sm hover:shadow-md"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                      Service
                    </p>
                    <h2 className="mt-2 text-xl md:text-2xl font-semibold text-brand-navyDark leading-snug">
                      {s.name}
                    </h2>
                    <p className="mt-3 text-sm text-brand-text leading-relaxed">
                      {s.tagline}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                      Learn more
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CATEGORY SUB-LISTS */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-12">
            {SERVICE_CATEGORIES.map((cat) => (
              <Reveal key={cat.slug}>
                <div>
                  <div className="inline-flex items-center gap-3">
                    <span className="h-px w-10 bg-brand-blue" />
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                      {cat.name}
                    </p>
                  </div>
                  <h3 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                    <Link
                      href={`/services/${cat.slug}/`}
                      className="hover:text-brand-blue transition"
                    >
                      Explore {cat.name.toLowerCase()} services →
                    </Link>
                  </h3>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {cat.items.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/services/${cat.slug}/${item.slug}/`}
                          className="group flex items-center justify-between gap-3 rounded-xl bg-brand-bg px-4 py-3 ring-1 ring-black/5 hover:ring-brand-blue/40 transition"
                        >
                          <span className="text-brand-navyDark font-medium">
                            {item.name}
                          </span>
                          <span
                            aria-hidden="true"
                            className="text-brand-blue transition-transform group-hover:translate-x-0.5"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-brand-navyDark text-white py-16 lg:py-20 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl animate-drift pointer-events-none" aria-hidden="true" />
          <span
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-gold/12 blur-3xl animate-drift pointer-events-none"
            style={{ animationDelay: "-7s" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Not sure where to{" "}
                <span className="italic text-brand-gold">start</span>?
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 text-white/80">
                Book a visit and we&apos;ll help you figure out the right first
                step for your body.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <BookTrigger className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition">
                  Book Appointment
                </BookTrigger>
                <a
                  href="tel:+15058912280"
                  className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:bg-white hover:text-brand-navyDark transition"
                >
                  (505) 891-2280
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
