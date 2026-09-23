import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import {
  SERVICE_BY_SLUG,
  SERVICES,
  type ServiceCopy,
} from "@/lib/programmatic/services";
import {
  CITIES,
  CITY_BY_SLUG,
  getNearbyCities,
  type CityCopy,
} from "@/lib/programmatic/cities";
import { buildEnrichedCopy } from "@/lib/programmatic/enrich";

import BookTrigger from "@/components/booking/BookTrigger";
import PhoneLeadLink from "@/components/analytics/PhoneLeadLink";
import { withCMSMetadata } from "@/lib/cms/metadata";
import {
  GEO,
  OPENING_HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_ORIGIN,
  STREET_ADDRESS,
} from "@/lib/site";
const PHONE_HREF = `tel:${PHONE_TEL}`;

// Slugs that already exist as static folders, skip these to avoid route collisions.
const RESERVED_SLUGS = new Set<string>([
  "chiropractor-albuquerque-nm",
  "chiropractor-bernalillo-nm",
  "chiropractor-casa-colorada-nm",
  "chiropractor-chilili-nm",
  "chiropractor-corrales-nm",
  "chiropractor-ponderosa-nm",
]);

function buildSlug(serviceSlug: string, citySlug: string): string {
  return `${serviceSlug}-${citySlug}-nm`;
}

// Parse a programmatic slug back into its (service, city) pair.
// Strategy: greedy-match the longest service slug prefix, then the rest must end with -nm and match a city slug.
function parseSlug(
  slug: string
): { service: ServiceCopy; city: CityCopy } | null {
  if (!slug.endsWith("-nm")) return null;
  const stripped = slug.slice(0, -"-nm".length);

  // Try each service slug, longest first to avoid partial matches.
  const sortedServices = [...SERVICES].sort(
    (a, b) => b.slug.length - a.slug.length
  );
  for (const service of sortedServices) {
    const prefix = `${service.slug}-`;
    if (stripped.startsWith(prefix)) {
      const citySlug = stripped.slice(prefix.length);
      const city = CITY_BY_SLUG[citySlug];
      if (city) return { service, city };
    }
  }
  return null;
}

// All valid programmatic slugs (~1,002 routes after skipping collisions).
function getAllProgrammaticSlugs(): string[] {
  const all: string[] = [];
  for (const service of SERVICES) {
    for (const city of CITIES) {
      const slug = buildSlug(service.slug, city.slug);
      if (RESERVED_SLUGS.has(slug)) continue;
      all.push(slug);
    }
  }
  return all;
}

export const dynamicParams = false;

export async function generateStaticParams(): Promise<
  { programmaticSlug: string }[]
> {
  return getAllProgrammaticSlugs().map((s) => ({ programmaticSlug: s }));
}

type RouteProps = {
  params: Promise<{ programmaticSlug: string }>;
};

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { programmaticSlug } = await params;
  const parsed = parseSlug(programmaticSlug);
  if (!parsed) return withCMSMetadata(`/${programmaticSlug}`, {});

  const { service, city } = parsed;
  const url = `${SITE_ORIGIN}/${programmaticSlug}/`;
  const title = service.titleTemplate.replace(/\{city\}/g, city.name);
  const driveBit =
    city.driveMin === 0
      ? "Rio Rancho office."
      : `About ${city.driveMin} min from ${city.name}.`;
  const baseDescription = service.descriptionTemplate
    .replace(/\{city\}/g, city.name)
    .replace(/\s*Call \(505\) 891-2280\.?\s*$/, "");
  const description = `${baseDescription} ${driveBit} Call (505) 891-2280.`;

  return withCMSMetadata(`/${programmaticSlug}`, {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Synergy Spine and Nerve Center",
      locale: "en_US",
    },
    other: {
      "geo.region": "US-NM",
      "geo.placename": city.name,
    },
  });
}

function fillCity(text: string, cityName: string): string {
  return text.replace(/\{city\}/g, cityName);
}

export default async function ProgrammaticPage({ params }: RouteProps) {
  const { programmaticSlug } = await params;
  const parsed = parseSlug(programmaticSlug);
  if (!parsed) notFound();

  const { service, city } = parsed;
  const enriched = buildEnrichedCopy(service, city);
  const h1 = fillCity(service.h1Template, city.name);
  const intro = enriched.intro;
  const faqs = [...service.faqs, ...enriched.extraFaqs];

  const nearbyCities = getNearbyCities(city.slug, 6);
  const relatedServices = service.related
    .map((slug) => SERVICE_BY_SLUG[slug])
    .filter((s): s is ServiceCopy => Boolean(s));

  const url = `${SITE_ORIGIN}/${programmaticSlug}/`;

  // Schema.org structured data
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${url}#business`,
        name: "Synergy Spine and Nerve Center",
        url: SITE_ORIGIN,
        telephone: "+15058912280",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: STREET_ADDRESS,
          addressLocality: "Rio Rancho",
          addressRegion: "NM",
          postalCode: "87124",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        openingHoursSpecification: OPENING_HOURS.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.dayOfWeek,
          opens: h.opens,
          closes: h.closes,
        })),
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: { "@type": "State", name: "New Mexico" },
        },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `${service.name} in ${city.name}, NM`,
        serviceType: service.name,
        provider: { "@id": `${url}#business` },
        areaServed: { "@type": "City", name: city.name },
        description: fillCity(service.descriptionTemplate, city.name),
        url,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: fillCity(f.q, city.name),
          acceptedAnswer: {
            "@type": "Answer",
            text: fillCity(f.a, city.name),
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_ORIGIN}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas We Serve",
            item: `${SITE_ORIGIN}/area-we-serve/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${service.name} in ${city.name}`,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Area We Serve", href: "/area-we-serve/" },
          { label: `${service.name} in ${city.name}` },
        ]}
      />

      <main>
        {/* HERO */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                {service.category === "service"
                  ? "Service area"
                  : "Condition we treat"}{" "}
                · {city.county}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                {h1}
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/85 text-base md:text-lg leading-relaxed">
                {intro}
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <BookTrigger
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navyDark hover:bg-brand-goldSoft transition-colors"
                >
                  Schedule a visit
                </BookTrigger>
                <PhoneLeadLink
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/30 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Call {PHONE_DISPLAY}
                </PhoneLeadLink>
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

        {/* QUICK FACTS STRIP */}
        <section className="bg-white border-b border-black/5">
          <div className="mx-auto max-w-6xl px-6 py-6 md:py-7">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-center md:text-left">
              <li className="md:flex md:items-center md:gap-3">
                <span
                  className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-textLight">
                    From our office
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-brand-navyDark">
                    {city.driveMin === 0
                      ? "Same city"
                      : `~${city.driveMin} min drive`}
                  </p>
                </div>
              </li>
              <li className="md:flex md:items-center md:gap-3">
                <span
                  className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s-7-7.58-7-12a7 7 0 0 1 14 0c0 4.42-7 12-7 12z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-textLight">
                    Serving
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-brand-navyDark">
                    {city.name}, {city.zip}
                  </p>
                </div>
              </li>
              <li className="md:flex md:items-center md:gap-3">
                <span
                  className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-textLight">
                    Experience
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-brand-navyDark">
                    20+ years
                  </p>
                </div>
              </li>
              <li className="md:flex md:items-center md:gap-3">
                <span
                  className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 21 12 16.5 5.79 21l2.39-7.15L2 9.36h7.61L12 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-textLight">
                    Patient rating
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-brand-navyDark">
                    4.9 ★ Google reviews
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                The basics
              </p>
              <h2 className="section-title mt-3 text-2xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                What is {service.name.toLowerCase()}?
              </h2>
              <p className="mt-5 text-base md:text-lg text-brand-textLight leading-relaxed">
                {service.whatItIs}
              </p>
              <p className="mt-4 text-base md:text-lg text-brand-text leading-relaxed">
                {enriched.whyHere}
              </p>
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                Our process
              </p>
              <h2 className="section-title mt-3 text-2xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                How {service.name.toLowerCase()} works at Synergy Spine
              </h2>
            </Reveal>
            <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.howItWorks.map((step, i) => (
                <Reveal as="li" key={i} delay={i * 80}>
                  <div className="flex gap-4 rounded-2xl bg-white ring-1 ring-black/5 p-5 h-full">
                    <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue font-semibold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm md:text-base text-brand-textLight leading-relaxed">
                      {fillCity(step, city.name)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* WHAT IT HELPS WITH */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Who we help
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Common reasons {city.name} patients come in
                </h2>
                <p className="mt-5 text-base text-brand-textLight leading-relaxed">
                  {service.whoItsFor.replace(/\{city\}/g, city.name)}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.helpsWith.map((item, i) => (
                  <Reveal as="li" key={i} delay={i * 60}>
                    <div className="flex items-start gap-3 rounded-xl bg-brand-bg ring-1 ring-black/5 p-4">
                      <span
                        className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-blue shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-brand-text leading-relaxed">
                        {item}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                What to expect
              </p>
              <h2 className="section-title mt-3 text-2xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                Your visit, end to end
              </h2>
            </Reveal>
            <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.expect.map((point, i) => (
                <Reveal as="li" key={i} delay={i * 80}>
                  <div className="flex items-start gap-3 rounded-2xl bg-white ring-1 ring-black/5 p-5">
                    <span
                      className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold font-semibold text-xs shrink-0"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <p className="text-sm md:text-base text-brand-text leading-relaxed">
                      {point}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* LOCAL ANGLE — unique per city × service */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                Getting here from {city.name}
              </p>
              <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold">
                The drive, the roads, the hours
              </h2>
              <p className="mt-4 text-brand-textLight leading-relaxed">
                {enriched.commute}
              </p>
              <p className="mt-3 text-brand-text leading-relaxed">
                {enriched.lifestyle}
              </p>
              <p className="mt-3 text-sm text-brand-textLight leading-relaxed">
                {enriched.directions}
              </p>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                When to come in
              </p>
              <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold">
                Do not wait on these
              </h2>
              <ul className="mt-5 space-y-3">
                {enriched.whenToSeek.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl bg-brand-bg ring-1 ring-black/5 p-4 text-sm text-brand-text leading-relaxed"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EXAM + WHY NOT A CHAIN — unique per city × service */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                First visit from {city.name}
              </p>
              <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold">
                What the exam actually includes
              </h2>
              <p className="mt-4 text-brand-text leading-relaxed">
                {enriched.examStory}
              </p>
              <ul className="mt-5 space-y-2">
                {enriched.localSymptoms.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-brand-textLight leading-relaxed"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                Local searches
              </p>
              <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold">
                Why {city.name} patients skip the walk-in mill
              </h2>
              <p className="mt-4 text-brand-text leading-relaxed">
                {enriched.vsChain}
              </p>
              <p className="mt-4 text-sm text-brand-textLight leading-relaxed">
                {enriched.searchIntent}
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT THE CITY */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                Local to {city.name}
              </p>
              <h2 className="section-title mt-3 text-2xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                About our {city.name}, NM patients
              </h2>
              <p className="mt-5 text-base md:text-lg text-brand-textLight leading-relaxed">
                {city.blurb} We see {city.name} families from across the
                community, including residents near{" "}
                {city.neighborhoods.slice(0, 3).join(", ")}. Patients tell us
                they appreciate that we explain the why before the what, and
                that we&apos;re upfront if chiropractic care isn&apos;t the right tool
                for what they&apos;re dealing with.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              <Reveal>
                <div className="rounded-2xl ring-1 ring-black/5 bg-brand-bg p-6 h-full">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                    County
                  </p>
                  <p className="mt-2 text-lg font-semibold text-brand-navyDark">
                    {city.county}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="rounded-2xl ring-1 ring-black/5 bg-brand-bg p-6 h-full">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                    From our Rio Rancho office
                  </p>
                  <p className="mt-2 text-lg font-semibold text-brand-navyDark">
                    {city.driveMin === 0
                      ? "0 min, same city"
                      : `~${city.driveMin} min drive`}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="rounded-2xl ring-1 ring-black/5 bg-brand-bg p-6 h-full">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                    ZIP
                  </p>
                  <p className="mt-2 text-lg font-semibold text-brand-navyDark">
                    {city.zip}
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="mt-8 rounded-2xl bg-brand-bg ring-1 ring-black/5 p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Nearby landmarks
                </p>
                <p className="mt-3 text-base text-brand-text leading-relaxed">
                  {city.landmarks.join(" · ")}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                FAQ
              </p>
              <h2 className="section-title mt-3 text-2xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                Common questions about {service.name.toLowerCase()} in{" "}
                {city.name}
              </h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {faqs.map((f, i) => (
                <Reveal key={i} delay={i * 60}>
                  <details className="group rounded-2xl bg-white ring-1 ring-black/5 p-5 open:ring-brand-blue/30 transition">
                    <summary className="cursor-pointer list-none flex items-start gap-4">
                      <span className="shrink-0 mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold">
                        Q
                      </span>
                      <span className="text-base md:text-lg font-semibold text-brand-navyDark leading-snug">
                        {fillCity(f.q, city.name)}
                      </span>
                      <span
                        className="ml-auto shrink-0 mt-1 text-brand-blue transition group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 ml-10 text-sm md:text-base text-brand-textLight leading-relaxed">
                      {fillCity(f.a, city.name)}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES + NEARBY CITIES */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {relatedServices.length > 0 && (
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Other services in {city.name}
                </p>
                <h3 className="section-title mt-3 text-xl md:text-2xl text-brand-navyDark font-semibold leading-snug">
                  Related care for {city.name} patients
                </h3>
                <ul className="mt-6 space-y-2">
                  {relatedServices.map((rel) => {
                    const relSlug = buildSlug(rel.slug, city.slug);
                    if (RESERVED_SLUGS.has(relSlug)) return null;
                    return (
                      <li key={rel.slug}>
                        <Link
                          href={`/${relSlug}/`}
                          className="group flex items-center justify-between gap-3 rounded-xl bg-brand-bg ring-1 ring-black/5 hover:ring-brand-blue/30 px-4 py-3 transition"
                        >
                          <span className="text-sm md:text-base font-semibold text-brand-navyDark">
                            {rel.name} in {city.name}
                          </span>
                          <span
                            className="text-brand-blue group-hover:translate-x-1 transition"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                {service.name} near {city.name}
              </p>
              <h3 className="section-title mt-3 text-xl md:text-2xl text-brand-navyDark font-semibold leading-snug">
                {service.name} in surrounding communities
              </h3>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {nearbyCities.map((nc) => {
                  const nearSlug = buildSlug(service.slug, nc.slug);
                  if (RESERVED_SLUGS.has(nearSlug)) return null;
                  return (
                    <li key={nc.slug}>
                      <Link
                        href={`/${nearSlug}/`}
                        className="block rounded-xl bg-brand-bg ring-1 ring-black/5 hover:ring-brand-blue/30 px-4 py-3 transition"
                      >
                        <span className="text-sm font-semibold text-brand-navyDark">
                          {service.name} in {nc.name}
                        </span>
                        <span className="block text-xs text-brand-textLight mt-0.5">
                          ~{nc.driveMin} min from Rio Rancho
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 text-sm text-brand-textLight">
                Or browse all{" "}
                <Link
                  href="/area-we-serve/"
                  className="font-semibold text-brand-blue hover:underline"
                >
                  service areas across New Mexico
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* PEOPLE ALSO SEARCH */}
        <section className="bg-brand-bg py-12">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
              People also search
            </p>
            <h2 className="section-title mt-2 text-xl md:text-2xl text-brand-navyDark font-semibold">
              Related {city.name} searches
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {enriched.alsoSearch.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full bg-white ring-1 ring-black/5 px-4 py-2 text-xs font-semibold text-brand-navyDark hover:ring-brand-blue/40"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-6 py-16 lg:py-20 text-center">
            <Reveal>
              <h2 className="section-title text-2xl md:text-4xl font-semibold leading-tight">
                Ready to feel like yourself again?
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Synergy Spine and Nerve Center has served {city.name} and the
                Rio Rancho metro for over 20 years. Schedule your first visit
                online, or call us, we&apos;ll tell you straight whether we&apos;re the
                right fit for what you&apos;re going through.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <BookTrigger
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navyDark hover:bg-brand-goldSoft transition-colors"
                >
                  Schedule a visit
                </BookTrigger>
                <PhoneLeadLink
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/30 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Call {PHONE_DISPLAY}
                </PhoneLeadLink>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
    </>
  );
}
