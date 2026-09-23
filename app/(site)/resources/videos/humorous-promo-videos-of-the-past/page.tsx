import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

import BookTrigger from "@/components/booking/BookTrigger";
const SLUG = "humorous-promo-videos-of-the-past";
const CANONICAL = `https://synergyspineandnerve.com/resources/videos/${SLUG}/`;

const cmsFallbackMetadata: Metadata = {
  title:
    "Humorous Promo Videos of the Past Family Workshop Promos | Synergy Spine and Nerve Center",
  description:
    "Short, funny family-made videos we used to shoot to promote our upcoming workshops, Eating Raw, Subluxation, Boy Likes Girl, Captain Chiro and more.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Humorous Promo Videos of the Past | Synergy Spine and Nerve Center",
    description:
      "Family-made promo videos that used to advertise our workshops, fun, light, and educational.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const VIDEOS: { id: string; title: string }[] = [
  { id: "DmyGPDNkPpQ", title: "Eating Raw Can Taste Good" },
  { id: "5r_lTN9URqc", title: "Is Subluxation Breaking Your Heart" },
  { id: "e4uK-3NQWwg", title: "Boy Likes Girl" },
  { id: "53rIdKs4j-k", title: "Captain Chiro and Backpack Safety" },
  { id: "PnjutEZ9a54", title: "Banish the Pancreas Blues" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://synergyspineandnerve.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Resources",
      item: "https://synergyspineandnerve.com/resources/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Videos",
      item: "https://synergyspineandnerve.com/resources/videos/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Humorous Promo Videos of the Past",
      item: CANONICAL,
    },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Humorous Promo Videos of the Past",
  itemListElement: VIDEOS.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: v.title,
    url: `https://www.youtube.com/watch?v=${v.id}`,
  })),
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources/videos/humorous-promo-videos-of-the-past", cmsFallbackMetadata);
}

export default function HumorousPromoVideosOfThePastPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Videos", href: "/resources/videos/" },
          { label: "Humorous Promo Videos of the Past" },
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
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Family fun · Workshop promos
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Humorous promo videos{" "}
                <span className="italic normal-case text-brand-gold">of the past</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                We have a creative and funny family. Back in the day we used to shoot
                short videos to promote our upcoming{" "}
                <Link
                  href="/resources/videos/workshop-videos/"
                  className="text-brand-gold underline-offset-4 hover:underline"
                >
                  workshops
                </Link>
                . We had a lot of fun doing it and sometimes we even go back and watch
                them for a family fun night. We hope you enjoy them too.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 max-w-3xl text-white/70 text-base leading-relaxed">
                Looking for something more serious? Check out the{" "}
                <Link
                  href="/resources/videos/workshop-videos-of-the-past/"
                  className="text-brand-gold underline-offset-4 hover:underline"
                >
                  Workshop Videos of the Past
                </Link>{" "}
                or our most recent{" "}
                <Link
                  href="/resources/videos/promo-videos/"
                  className="text-brand-gold underline-offset-4 hover:underline"
                >
                  Promo Videos
                </Link>
                .
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

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                {VIDEOS.length} short videos
              </p>
              <h2 className="section-title mt-3 text-center text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                Tap any thumbnail to{" "}
                <span className="italic text-brand-blue">watch right here</span>.
              </h2>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {VIDEOS.map((v, i) => (
                <Reveal as="li" key={v.id} delay={(i % 3) * 60}>
                  <article className="flex flex-col gap-4">
                    <YouTubeEmbed id={v.id} title={v.title} />
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] font-bold text-brand-blue tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="section-title text-lg text-brand-navyDark font-semibold leading-snug">
                        {v.title}
                      </h3>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-brand-bg py-16">
          <div className="mx-auto max-w-5xl px-6 grid sm:grid-cols-3 gap-4">
            <Link
              href="/resources/videos/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Back to
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">All Videos</p>
            </Link>
            <Link
              href="/resources/videos/promo-videos/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Most recent
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">Promo Videos</p>
            </Link>
            <Link
              href="/resources/videos/workshop-videos-of-the-past/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                From the archive
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">
                Workshop Videos of the Past
              </p>
            </Link>
          </div>
        </section>

        <section className="relative bg-brand-navyDark text-white py-20 overflow-hidden">
          <span
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-drift pointer-events-none"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-gold/12 blur-3xl animate-drift pointer-events-none"
            style={{ animationDelay: "-7s" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Want more like{" "}
                <span className="italic text-brand-gold">this</span>?
              </p>
              <p className="mt-4 text-white/80">
                Come visit us in the office, and bring your sense of humor.
              </p>
            </Reveal>
            <Reveal
              delay={150}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </>
  );
}
