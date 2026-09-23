import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL =
  "https://synergyspineandnerve.com/resources/all-about-spinal-hygiene/";

const cmsFallbackMetadata: Metadata = {
  title: "All About Spinal Hygiene Synergy Spine and Nerve Center",
  description:
    "Spinal hygiene videos, stretches, traction tools, and 30-second self-tests. Every joint must move through its full range every 24 hours or arthritis is developing.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "All About Spinal Hygiene Synergy Spine and Nerve Center",
    description:
      "Daily movement matters. Watch the spinal hygiene video library and learn the tools we use with every patient.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const HYGIENE_VIDEOS: {
  videoId?: string;
  href: string;
  title: string;
  desc: string;
}[] = [
  {
    videoId: "z_iICcjcmjs",
    href: "/backpack-analogy/",
    title: "The Backpack Analogy",
    desc:
      "It's important to understand that as long as your backpack is filled with the heaviness of stress, it'll always alter your posture. Your spine and nerve system depend on it being lightened.",
  },
  {
    videoId: "9wPYA3RWAwI",
    href: "/spinal-hygiene-video/",
    title: "Spinal Hygiene Video",
    desc:
      "All about spinal hygiene, what it is, why it matters, and the daily routine that keeps your spine healthy.",
  },
  {
    videoId: "uEtdfzxle2c",
    href: "/use-your-head-video/",
    title: "Use Your Head Video",
    desc:
      "There is so much wisdom in the simple phrase use your head, see why posture and head position drive your overall health.",
  },
  {
    videoId: "UAuYYnLuh6U",
    href: "/30-second-spinal-hygiene-report-card/",
    title: "30-Second Spinal Hygiene Report Card",
    desc:
      "A quick self-test you can run at home to grade the current condition of your spinal hygiene.",
  },
  {
    href: "/helpful-stretches/",
    title: "Helpful Stretches",
    desc:
      "Targeted stretches we recommend for the most common areas where motion gets locked up.",
  },
  {
    videoId: "RsgxFYDSmJs",
    href: "/6-way-strap/",
    title: "6-Way Strap",
    desc:
      "How to use the 6-way strap to restore range of motion you may not be able to access on your own.",
  },
  {
    videoId: "sR1DmFFsQsQ",
    href: "/thoracic-roller/",
    title: "Thoracic Roller",
    desc:
      "The thoracic roller is one of our favorite tools for restoring extension to the mid-back.",
  },
  {
    videoId: "TbbI9zyWeKE",
    href: "/over-the-door-traction/",
    title: "Over-The-Door Traction",
    desc:
      "Simple home traction setup to decompress and rehydrate the cervical spine while you relax.",
  },
  {
    videoId: "qQ2S4UZTR_s",
    href: "/mobility-disk-for-lower-back/",
    title: "Mobility Disk for Lower Back",
    desc:
      "Add gentle motion to the lumbar spine in a way that's safe to do every day.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources/all-about-spinal-hygiene", cmsFallbackMetadata);
}

export default function AllAboutSpinalHygienePage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Spinal Hygiene" },
        ]}
      />

      <main>
        {/* HERO (clean) */}
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
                All about{" "}
                <span className="italic normal-case text-brand-gold">
                  spinal hygiene
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Just like brushing your teeth keeps your mouth healthy and
                exercise keeps your heart healthy, daily spinal hygiene keeps
                your spine and nerve system healthy. Below is the same video
                library we share with every patient.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* RULE OF 24 HOURS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white p-8 lg:p-10 shadow-[0_30px_60px_-20px_rgba(1,112,185,0.45)] relative overflow-hidden">
                <span
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 animate-drift pointer-events-none"
                  aria-hidden="true"
                />
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white/80">
                  The single most important rule
                </p>
                <p className="mt-3 section-title text-2xl md:text-3xl font-semibold leading-snug">
                  Every joint in your body must go through its full range of
                  motion every 24 hours, or arthritis is developing.
                </p>
                <p className="mt-4 text-white/90 leading-relaxed">
                  That&apos;s the foundational principle of spinal hygiene. Daily
                  movement keeps cartilage healthy, discs hydrated, and nerves
                  free of interference.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TWO PARTS */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Two parts of a healthy{" "}
                  <span className="italic text-brand-blue">spine plan</span>.
                </h2>
                <p className="mt-4 text-brand-text">
                  Spinal hygiene exercises create movement in the joints that{" "}
                  <em>can</em> move. Chiropractic adjustments unlock the
                  joints that <em>can&apos;t</em>.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Reveal delay={0}>
                <article className="h-full rounded-3xl bg-white ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 12c4-8 12-8 16 0" />
                      <path d="M4 12c4 8 12 8 16 0" />
                    </svg>
                  </div>
                  <h3 className="section-title mt-5 text-xl text-brand-navyDark font-semibold">
                    Daily spinal hygiene
                  </h3>
                  <p className="mt-2 text-brand-textLight leading-relaxed">
                    Stretches, range-of-motion drills, and the home tools
                    below keep movement in joints that you can already move.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={120}>
                <article className="h-full rounded-3xl bg-white ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navyDark text-white shadow-lg">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3v18" />
                      <path d="M9 6c0 1 1 2 3 2s3-1 3-2M9 12c0 1 1 2 3 2s3-1 3-2M9 18c0 1 1 2 3 2s3-1 3-2" />
                    </svg>
                  </div>
                  <h3 className="section-title mt-5 text-xl text-brand-navyDark font-semibold">
                    Chiropractic adjustments
                  </h3>
                  <p className="mt-2 text-brand-textLight leading-relaxed">
                    For the joints that have lost the ability to move on
                    their own, a precise adjustment restores motion and
                    relieves nerve interference.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* VIDEO GRID */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Video library
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Watch &amp;{" "}
                  <span className="italic text-brand-blue">apply</span> at
                  home.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {HYGIENE_VIDEOS.map((v, i) => (
                <Reveal as="li" key={v.href} delay={(i % 3) * 80}>
                  <article className="flex h-full flex-col bg-white rounded-3xl ring-1 ring-black/5 overflow-hidden shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] transition-shadow duration-500">
                    {v.videoId ? (
                      <YouTubeEmbed id={v.videoId} title={v.title} />
                    ) : (
                      <Link
                        href={v.href}
                        className="group relative block aspect-video bg-gradient-to-br from-brand-navy to-brand-navyDark overflow-hidden"
                      >
                        <span
                          className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-brand-blue/30 blur-2xl group-hover:bg-brand-gold/30 transition-colors"
                          aria-hidden="true"
                        />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-navyDark shadow-xl group-hover:scale-110 transition-transform">
                            <svg
                              className="w-7 h-7"
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
                            <span className="absolute inset-0 rounded-full ring-2 ring-white/40 animate-pulseRing" />
                          </span>
                        </span>
                      </Link>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                        {v.videoId ? `Watch · ${String(i + 1).padStart(2, "0")}` : "Guide"}
                      </p>
                      <h3 className="section-title mt-2 text-lg text-brand-navyDark font-semibold">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                        {v.desc}
                      </p>
                      <Link
                        href={v.href}
                        className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-brand-blue hover:text-brand-navyDark transition-colors"
                      >
                        <span>Open page</span>
                        <svg
                          className="w-3.5 h-3.5"
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
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* RELATED */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <Link
                href="/resources/improve-your-sha-score/"
                className="group block rounded-3xl bg-gradient-to-r from-brand-navyDark via-brand-navy to-brand-navyDark p-8 lg:p-10 ring-1 ring-black/5 text-white hover:from-brand-blue hover:via-brand-blueLight hover:to-brand-blue transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-gold">
                      Want to measure your progress?
                    </p>
                    <h3 className="section-title mt-2 text-2xl md:text-3xl font-semibold leading-snug">
                      Track your{" "}
                      <span className="italic text-brand-gold">SHA score</span>{" "}
                      and watch spinal hygiene pay off.
                    </h3>
                  </div>
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark group-hover:bg-white transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* VIDEOS: Why hygiene matters */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Why daily hygiene matters
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  The two things{" "}
                  <span className="italic text-brand-blue">wrecking your spine</span>
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Reveal delay={120}>
                <article>
                  <YouTubeEmbed id="bjJphC9lwU0" title="How Stress is Killing You" />
                  <h3 className="section-title mt-4 text-lg text-brand-navyDark font-semibold">
                    How stress is killing you
                  </h3>
                </article>
              </Reveal>
              <Reveal delay={200}>
                <article>
                  <YouTubeEmbed id="d1Pyq28ld30" title="How bad is sitting for me?" />
                  <h3 className="section-title mt-4 text-lg text-brand-navyDark font-semibold">
                    How bad is sitting for me?
                  </h3>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl text-brand-navyDark font-semibold leading-snug">
                Move daily.{" "}
                <span className="italic text-brand-blue">Move well</span>.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-navyDark text-white rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-brand-blue transition-colors"
              >
                <span>Book $37 New Patient Visit</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark group-hover/cta:bg-white group-hover/cta:text-brand-blue transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <BookTrigger
                className="text-sm font-semibold text-brand-navyDark hover:text-brand-blue transition-colors"
              >
                Or contact us with a question →
              </BookTrigger>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
