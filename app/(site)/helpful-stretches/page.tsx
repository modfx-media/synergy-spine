import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/helpful-stretches/";

const cmsFallbackMetadata: Metadata = {
  title:
    "Helpful Stretches for Neck and Lower Back Pain | Synergy Spine & Nerve Center",
  description:
    "Effective stretches to relieve neck pain, lower back pain, sciatic nerve pain, and forward head posture, taught by Synergy Spine and Nerve Center in Rio Rancho, NM.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "Helpful Stretches for Neck and Lower Back Pain | Synergy Spine & Nerve Center",
    description:
      "Effective stretches to relieve neck pain, lower back pain, sciatic nerve pain, and forward head posture.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

type Stretch = {
  title: string;
  desc: string;
  videoId?: string;
};

type StretchGroup = {
  heading: string;
  eyebrow: string;
  accent: "blue" | "gold" | "navy";
  stretches: Stretch[];
};

const GROUPS: StretchGroup[] = [
  {
    heading: "Neck Stretches",
    eyebrow: "Cervical mobility",
    accent: "blue",
    stretches: [
      {
        title: "Stretching the Sternocleidomastoid Muscle for Neck Pain",
        desc: "A focused stretch for the SCM, a common source of neck pain and tension headaches.",
        videoId: "q_Wdobp3DdQ",
      },
      {
        title: "Stretches to Improve Forward Head Posture",
        desc: "Reverse the rounded-shoulder, head-forward pattern that comes from desk work and screens.",
        videoId: "Th42qqU_RDc",
      },
      {
        title: "Lateral Neck Stretch to Prevent Headaches and Neck Pain",
        desc: "A gentle side-to-side stretch that releases the upper trapezius and levator scapulae.",
        videoId: "OJuakKPXc_s",
      },
    ],
  },
  {
    heading: "Lower Back Stretches",
    eyebrow: "Lumbar &amp; sciatic relief",
    accent: "navy",
    stretches: [
      {
        title: "Stretches on the Floor for Generalized Lower Back Pain",
        desc: "Foundational floor-based stretches to loosen up the lumbar spine.",
        videoId: "q_Wdobp3DdQ",
      },
      {
        title: "Twist Stretch for Generalized Lower Back Pain",
        desc: "A spinal rotation that relieves tension along the entire lower back.",
        videoId: "Th42qqU_RDc",
      },
      {
        title: "Stretching Hamstrings for Lower Back Pain",
        desc: "Tight hamstrings pull on the pelvis, open them up to give your lower back room to move.",
        videoId: "OJuakKPXc_s",
      },
      {
        title: "Stretches to Prevent Sciatic Nerve Pain (On the Floor)",
        desc: "Targeted lying-down stretches that calm sciatic nerve irritation.",
        videoId: "rS8JTPQ84A",
      },
      {
        title: "Stretches to Prevent Sciatic Nerve Pain (Seated)",
        desc: "Office-friendly versions you can do at your desk during the workday.",
        videoId: "_B2dclAUVzg",
      },
      {
        title: "Stretching Hip Flexors for Lower Back Pain",
        desc: "Hip flexor tightness is a hidden driver of low-back pain. Here&apos;s how to address it.",
        videoId: "m98QsR62OlM",
      },
      {
        title: "Stretching Pecs to Prevent Forward Head Posture",
        desc: "Open the chest to take the load off your neck and upper back.",
        videoId: "PAXcPHm0Ce4",
      },
    ],
  },
  {
    heading: "Other Stretches",
    eyebrow: "Whole-body support",
    accent: "gold",
    stretches: [
      {
        title: "Stretching the Iliotibial Tract Band for Knee Pain",
        desc: "A simple stretch for IT band tightness, a common cause of lateral knee pain.",
        videoId: "elgTTuQJYYY",
      },
      {
        title: "Stretching that Improves Calf Pain",
        desc: "Calf flexibility supports your ankles, knees, and lower back.",
        videoId: "fulAuFkhTeA",
      },
      {
        title: "Stretching the Quad to Prevent Knee Pain",
        desc: "Tight quads pull on the kneecap. This stretch keeps your patellar tracking healthy.",
        videoId: "rVvY0Ns0Hr4",
      },
      {
        title: "Stretching the Iliotibial Band with a Foam Roller",
        desc: "Foam-roller progression for the IT band, once a basic stretch isn&apos;t enough.",
        videoId: "zQpq6AvNnd4",
      },
    ],
  },
];

const ACCENT_BG: Record<StretchGroup["accent"], string> = {
  blue: "from-brand-blue to-brand-blueLight",
  navy: "from-brand-navy to-brand-navyDark",
  gold: "from-brand-gold to-brand-goldSoft",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://synergyspineandnerve.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Helpful Stretches",
      item: CANONICAL,
    },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/helpful-stretches", cmsFallbackMetadata);
}

export default function HelpfulStretchesPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Helpful Stretches" },
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
                Free at-home routines
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Effective stretches to relieve neck and{" "}
                <span className="italic normal-case text-brand-gold">
                  lower back pain
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                A growing video library of stretches Dr. Brad recommends every
                day in the office, for neck pain, lower back pain, sciatica,
                forward head posture, and more. Bookmark this page and revisit
                often.
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

        {/* GROUPS */}
        {GROUPS.map((group) => (
          <section
            key={group.heading}
            className="bg-white py-16 lg:py-20 odd:bg-brand-bg"
          >
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-3">
                    <span className="h-px w-10 bg-brand-blue" />
                    <p
                      className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue"
                      dangerouslySetInnerHTML={{ __html: group.eyebrow }}
                    />
                    <span className="h-px w-10 bg-brand-blue" />
                  </div>
                  <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                    {group.heading}
                  </h2>
                </div>
              </Reveal>

              <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.stretches.map((s, i) => (
                  <Reveal key={s.title} as="li" delay={i * 60}>
                    <article className="group relative h-full overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                      <div
                        className={`absolute top-0 left-6 right-6 h-[3px] rounded-b bg-gradient-to-r ${ACCENT_BG[group.accent]} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-10`}
                        aria-hidden="true"
                      />
                      {s.videoId ? (
                        <YouTubeEmbed
                          id={s.videoId}
                          title={s.title.replace(/&apos;/g, "'")}
                          aspect="aspect-video rounded-none rounded-t-2xl"
                        />
                      ) : (
                        <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navyDark to-brand-blue">
                          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand-gold/40 blur-2xl animate-drift" />
                            <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white/30 blur-2xl animate-drift" />
                          </div>
                          <div className="relative z-10 flex h-full items-center justify-center">
                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-brand-navyDark shadow-lg group-hover:bg-brand-gold transition">
                              <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6 ml-1"
                                aria-hidden="true"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="p-5">
                        <h3
                          className="text-base font-semibold leading-snug text-brand-navyDark"
                          dangerouslySetInnerHTML={{ __html: s.title }}
                        />
                        <p
                          className="mt-2 text-sm leading-relaxed text-brand-text"
                          dangerouslySetInnerHTML={{ __html: s.desc }}
                        />
                      </div>
                    </article>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="relative overflow-hidden bg-brand-navyDark text-white py-20">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl animate-drift" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl animate-drift" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="section-title text-3xl md:text-4xl font-semibold leading-tight">
              Stretches help, but they aren&apos;t the{" "}
              <span className="italic text-brand-goldSoft">whole story</span>.
            </h2>
            <p className="mt-4 text-white/80">
              If pain keeps coming back, let&apos;s find out why. Schedule a
              no-pressure consultation with Dr. Brad.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
