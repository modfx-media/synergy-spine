import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

const CANONICAL = "https://synergyspineandnerve.com/about-us/meet-jess/";

const cmsFallbackMetadata: Metadata = {
  title: "Meet Jess Synergy Spine and Nerve Center",
  description:
    "Meet Jess Biggs, MS, Exercise Physiologist at Synergy Spine and Nerve Center, 25+ years of experience guiding people toward a healthier, pain-free life.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Meet Jess Biggs, MS Exercise Physiologist",
    description:
      "Exercise Physiologist with 25+ years of experience helping people heal through quality food and quality movement.",
    url: CANONICAL,
    type: "profile",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jess Biggs",
  jobTitle: "Exercise Physiologist, MS",
  url: CANONICAL,
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Synergy Spine and Nerve Center",
    url: "https://synergyspineandnerve.com",
    telephone: "+1-505-891-2280",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/about-us/meet-jess", cmsFallbackMetadata);
}

export default function MeetJessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us/" },
          { label: "Meet Jess" },
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
                href="/about-us/"
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 hover:text-brand-gold transition-colors"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>About Us</span>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-5 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Meet{" "}
                <span className="italic normal-case text-brand-gold">
                  Jess
                </span>{" "}
                Biggs
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-4 text-white/80 text-lg md:text-xl font-medium uppercase tracking-wide">
                MS, Exercise Physiologist
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                25+ years of experience guiding people toward a healthier,
                pain-free life, through quality food and quality movement.
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
            <div className="prose prose-lg max-w-none text-brand-text">
              <Reveal>
                <p className="text-lg leading-relaxed">
                  Hi, I am Jess Biggs. I have over 25 years of experience and am
                  deeply passionate about guiding people toward a healthier,
                  pain-free life.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 text-lg leading-relaxed">
                  In my youth, my father was seriously burned twice in a 3-year
                  period that necessitated that I, along with my mother and 2
                  sisters, became his intimate caretakers. This experience put me
                  on a path and a career of wanting to care for and relieve the
                  suffering of those in pain.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 text-lg leading-relaxed">
                  I have a wide variety of experience in the field of health from
                  teaching anatomy and physiology at San Juan College, helping
                  people as a strength and conditioning coach, track coach, and
                  as a personal trainer.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 text-lg leading-relaxed">
                  I am a business entrepreneur, and spent 7 years as the Customer
                  Education Director for Polar Electro (heart rate monitors) and
                  am a founding partner of Nuvita, a corporate wellness business
                  serving over 200 small to large companies providing service to
                  improve employee health and wellbeing (clients include City of
                  Albuquerque, Jaynes Construction, NUSENDA Credit Union, General
                  Electric, Pfizer, Orrick, and others).
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 text-lg leading-relaxed">
                  I am most proud of my work as a health coach where I have
                  coached thousands of people with a focus on quality food and
                  quality movement as the least expensive, yet most effective
                  means for correcting many of the conditions that create a less
                  than optimal lifestyle for so many of us.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-5 text-lg leading-relaxed">
                  In 2019, I joined the team at Synergy concentrating on
                  solutions to help those working toward better spinal health
                  and everyday wellness. I practice what I preach by being an
                  avid mountain biker and outdoorsman, often lifting heavy
                  objects called barbells and dumbbells, and being a foodie at
                  heart trying to cook delicious, healthy food.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative bg-brand-navyDark text-white py-20 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" aria-hidden="true" />
          <span className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-gold/12 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Synergy Spine and Nerve Center is the premier{" "}
                <span className="italic text-brand-gold">
                  family chiropractic center
                </span>{" "}
                in Rio Rancho, New Mexico.
              </p>
              <p className="mt-4 text-white/80">We look forward to serving you.</p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
