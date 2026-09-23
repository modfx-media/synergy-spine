import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL =
  "https://synergyspineandnerve.com/resources/get-notified/";

const cmsFallbackMetadata: Metadata = {
  title: "Get Notified Synergy Spine and Nerve Center",
  description:
    "Stay in touch with text notifications. Get important schedule updates and event news from Synergy Spine and Nerve Center directly to your phone.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Get Notified | Synergy Spine and Nerve Center",
    description:
      "Stay in touch with text notifications about schedule changes and events.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/resources/get-notified", cmsFallbackMetadata);
}

export default function GetNotifiedPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/" },
          { label: "Get Notified" },
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
                Get{" "}
                <span className="italic normal-case text-brand-gold">
                  notified
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Occasionally, our office runs special events or closes for
                vacation. Stay in the know with quick text updates, straight
                to your phone, only when it matters.
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
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <p className="text-center text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                Three quick steps
              </p>
              <h2 className="section-title text-center mt-2 text-3xl md:text-4xl text-brand-navyDark font-semibold">
                Sign up by{" "}
                <span className="italic text-brand-blue">text message</span>
              </h2>
            </Reveal>

            <ol className="mt-12 space-y-6">
              <Reveal as="li" delay={0}>
                <div className="rounded-2xl bg-gradient-to-br from-white to-brand-bg ring-1 ring-black/5 p-6 flex gap-5 items-start">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white font-bold text-lg">
                    1
                  </span>
                  <div>
                    <h3 className="section-title text-lg text-brand-navyDark font-semibold">
                      Open your text messages
                    </h3>
                    <p className="mt-2 text-brand-text leading-relaxed">
                      From your phone, start a new text conversation.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal as="li" delay={80}>
                <div className="rounded-2xl bg-gradient-to-br from-white to-brand-bg ring-1 ring-black/5 p-6 flex gap-5 items-start">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white font-bold text-lg">
                    2
                  </span>
                  <div>
                    <h3 className="section-title text-lg text-brand-navyDark font-semibold">
                      Send to{" "}
                      <span className="font-mono text-brand-gold">41242</span>
                    </h3>
                    <p className="mt-2 text-brand-text leading-relaxed">
                      In the recipient field, type{" "}
                      <span className="font-mono font-bold">41242</span>.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal as="li" delay={160}>
                <div className="rounded-2xl bg-gradient-to-br from-white to-brand-bg ring-1 ring-black/5 p-6 flex gap-5 items-start">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white font-bold text-lg">
                    3
                  </span>
                  <div>
                    <h3 className="section-title text-lg text-brand-navyDark font-semibold">
                      Type{" "}
                      <span className="font-mono text-brand-gold">STRAIGHT</span>
                    </h3>
                    <p className="mt-2 text-brand-text leading-relaxed">
                      In the message body, send{" "}
                      <span className="font-mono font-bold">STRAIGHT</span>.
                      You&apos;ll get a welcome text right away, and after that,
                      messages only when there&apos;s an important schedule
                      update.
                    </p>
                  </div>
                </div>
              </Reveal>
            </ol>

            <Reveal delay={200}>
              <p className="mt-10 text-center text-sm text-brand-textLight">
                Standard message and data rates may apply. You can opt out at
                any time by replying STOP.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative bg-brand-navyDark text-white py-20 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" aria-hidden="true" />
          <span className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-gold/12 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Need to{" "}
                <span className="italic text-brand-gold">reach us</span> right
                now?
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <BookTrigger
                className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold text-brand-navyDark uppercase tracking-wide hover:bg-brand-goldSoft transition"
              >
                Contact Us
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
    </>
  );
}
