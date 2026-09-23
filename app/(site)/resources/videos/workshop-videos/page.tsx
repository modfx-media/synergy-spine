import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

import BookTrigger from "@/components/booking/BookTrigger";
const SLUG = "workshop-videos";
const CANONICAL = `https://synergyspineandnerve.com/resources/videos/${SLUG}/`;

const cmsFallbackMetadata: Metadata = {
  title:
    "Educational Workshop Videos on Spinal Health and Wellness Synergy Spine and Nerve Center",
  description:
    "Watch full 30-minute workshops on Vitamin D, inflammation, paleo eating, the nervous system, the science of women, asthma, cancer, headaches and more.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Educational Workshop Videos | Synergy Spine and Nerve Center",
    description:
      "Full 30-minute workshops covering nutrition, the nervous system, immunity, drugs, asthma, cancer and more.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const VIDEOS: { id: string; title: string }[] = [
  { id: "fX2yQ5rJVi4", title: "Spinal Hygiene Workshop" },
  { id: "uKrWp84qU4c", title: "Vitamin D" },
  { id: "tzxBqXO_pnU", title: "Reducing Inflammation" },
  { id: "vg8pYG1GRYM", title: "Eating Paleo In a Modern World" },
  { id: "ABwv90ESLMA", title: "Just Say No to Drugs" },
  { id: "wYlR_ZARRaY", title: "Freedom From Medications" },
  { id: "RCbj4sLnwRQ", title: "The 4 Essentials to Life" },
  { id: "NPogexOiE7Y", title: "Eating Raw Can Taste Good" },
  { id: "dYUnTY3aU3o", title: "10 Stages Toward Optimal Health" },
  { id: "CUibqNR0x-4", title: "Autism: Just the Facts Ma\u2019am" },
  { id: "XuI23LccAac", title: "The Germ Theory" },
  {
    id: "kMXbtTPVFKM",
    title: "Pediatric Health: How to Raise a Healthy Child In Spite of Your Doctor",
  },
  { id: "N5Aiha3rJEM", title: "Trick or Treat: The pH Balance" },
  { id: "DYccXQZDwK4", title: "The Science of Women" },
  { id: "9PEQNNfqVGs", title: "Happy Birthday Straight Chiropractic!" },
  { id: "jUDIAeP2WSU", title: "Be the Captain of Your Own Ship" },
  { id: "DmyGPDNkPpQ", title: "Who Knew Eating Raw Could Taste So Good!" },
  { id: "n0sbKSNNAE8", title: "Eating Raw For Kids Too!" },
  { id: "qrCIA0ip9w0", title: "The Wonder Drug: The One That Ruled Them All" },
  { id: "SGGzuUQoc9A", title: "The Arc of Life" },
  { id: "r7dIJhqD3xs", title: "Why Asthma? Our Body Can Cure Us" },
  { id: "vE6qYe_k_z4", title: "Is Your Health In The Balance?" },
  { id: "_SFVoSdINIQ", title: "Take a Closer Look at Cancer" },
  { id: "ZmSUQMAs9Vs", title: "No More Headaches" },
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
    { "@type": "ListItem", position: 4, name: "Workshop Videos", item: CANONICAL },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Workshop Videos",
  itemListElement: VIDEOS.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: v.title,
    url: `https://www.youtube.com/watch?v=${v.id}`,
  })),
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources/videos/workshop-videos", cmsFallbackMetadata);
}

export default function WorkshopVideosPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Videos", href: "/resources/videos/" },
          { label: "Workshop Videos" },
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
                30-minute workshops
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Educational workshop{" "}
                <span className="italic normal-case text-brand-gold">videos</span> on
                spinal health and wellness
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Pick a topic that interests you and dig in. Each workshop is roughly
                30 minutes, informative, evidence-based, and grounded in 20+ years of
                practice. Folks usually find them very valuable.
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
                {VIDEOS.length} workshops
              </p>
              <h2 className="section-title mt-3 text-center text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                Pick a topic and{" "}
                <span className="italic text-brand-blue">start watching</span>.
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
            <Link
              href="/resources/videos/spinal-hygiene-videos/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Daily care
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">
                Spinal Hygiene Videos
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
                Want to talk about what you{" "}
                <span className="italic text-brand-gold">watched</span>?
              </p>
              <p className="mt-4 text-white/80">
                Bring it up at your next visit, we love the conversation.
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
