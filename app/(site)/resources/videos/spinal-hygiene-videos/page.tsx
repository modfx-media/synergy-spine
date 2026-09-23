import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

import BookTrigger from "@/components/booking/BookTrigger";
const SLUG = "spinal-hygiene-videos";
const CANONICAL = `https://synergyspineandnerve.com/resources/videos/${SLUG}/`;

const cmsFallbackMetadata: Metadata = {
  title:
    "Spinal Hygiene Videos What You Can Do at Home | Synergy Spine and Nerve Center",
  description:
    "Daily things you can do to take better care of your spine and nerve system, from the Spinal Hygiene Video to Use Your Head, 6-Way Strap, Thoracic Roller, and more.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Spinal Hygiene Videos | Synergy Spine and Nerve Center",
    description:
      "Daily things you can do at home to take better care of your spine and nerve system.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const VIDEOS: { id: string; title: string }[] = [
  { id: "BtIRyXk9iZc", title: "Intro to Straight Chiropractic" },
  { id: "z_iICcjcmjs", title: "Backpack Analogy" },
  { id: "9wPYA3RWAwI", title: "Spinal Hygiene Video" },
  { id: "BEBtnLXhpiQ", title: "Fish Oil Evidence Omega 3" },
  { id: "uEtdfzxle2c", title: "Use Your Head" },
  { id: "RsgxFYDSmJs", title: "6-Way Strap Demonstration" },
  { id: "TbbI9zyWeKE", title: "Over the Door Traction Demonstration" },
  { id: "sR1DmFFsQsQ", title: "Thoracic Roller Demonstration" },
  { id: "qQ2S4UZTR_s", title: "Lumbar Mobility Disc Demonstration" },
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
    { "@type": "ListItem", position: 4, name: "Spinal Hygiene Videos", item: CANONICAL },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Spinal Hygiene Videos",
  itemListElement: VIDEOS.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: v.title,
    url: `https://www.youtube.com/watch?v=${v.id}`,
  })),
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources/videos/spinal-hygiene-videos", cmsFallbackMetadata);
}

export default function SpinalHygieneVideosPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Videos", href: "/resources/videos/" },
          { label: "Spinal Hygiene Videos" },
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
                Daily care · Home practice
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Spinal hygiene{" "}
                <span className="italic normal-case text-brand-gold">videos</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                The research is clear that the joints of your spine and the rest of the
                body must move freely. If they don&apos;t, there are negative effects
                that can become permanent. The first step is to understand what
                happens in your brain when motion is restricted by watching the{" "}
                <Link
                  href="/spinal-hygiene-video/"
                  className="text-brand-gold underline-offset-4 hover:underline"
                >
                  Spinal Hygiene Video
                </Link>
                .
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Then it would be a good idea to see some examples of things you can do
                to improve your spinal motion by watching the{" "}
                <Link
                  href="/use-your-head-video/"
                  className="text-brand-gold underline-offset-4 hover:underline"
                >
                  Use Your Head video
                </Link>
                , the{" "}
                <Link
                  href="/6-way-strap/"
                  className="text-brand-gold underline-offset-4 hover:underline"
                >
                  6-Way Strap video
                </Link>
                , the{" "}
                <Link
                  href="/thoracic-roller/"
                  className="text-brand-gold underline-offset-4 hover:underline"
                >
                  Thoracic Roller video
                </Link>{" "}
                or the{" "}
                <Link
                  href="/over-the-door-traction/"
                  className="text-brand-gold underline-offset-4 hover:underline"
                >
                  Over-the-Door video
                </Link>
                . You also may want to check out the{" "}
                <Link
                  href="/helpful-stretches/"
                  className="text-brand-gold underline-offset-4 hover:underline"
                >
                  Helpful Stretches
                </Link>{" "}
                page in our resources section, as well as the{" "}
                <Link
                  href="/mobility-disk-for-lower-back/"
                  className="text-brand-gold underline-offset-4 hover:underline"
                >
                  Lumbar Mobility Disc
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

        {/* VIDEO GRID */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                {VIDEOS.length} videos
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

        {/* CROSS-LINKS */}
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
              href="/helpful-stretches/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Companion guide
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">Helpful Stretches</p>
            </Link>
            <Link
              href="/resources/all-about-spinal-hygiene/"
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                Read more
              </p>
              <p className="mt-2 font-semibold text-brand-navyDark">
                All About Spinal Hygiene
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
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
                Need help applying these to{" "}
                <span className="italic text-brand-gold">your spine</span>?
              </p>
              <p className="mt-4 text-white/80">
                Schedule a no-pressure consultation and we&apos;ll walk through the
                routine that fits you.
              </p>
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
