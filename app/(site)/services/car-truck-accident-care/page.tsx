import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import BookTrigger from "@/components/booking/BookTrigger";

const CANONICAL =
  "https://synergyspineandnerve.com/services/car-truck-accident-care/";
const PHONE_DISPLAY = "(505) 891-2280";
const PHONE_HREF = "tel:+15058912280";
const HERO_IMAGE = "/services/car-truck-accident-care.jpg";

const cmsFallbackMetadata: Metadata = {
  title:
    "Car & Truck Accident Care in Rio Rancho | Synergy Spine & Nerve Center",
  description:
    "Chiropractic care after a car or truck accident in Rio Rancho, NM. Whiplash, back and neck pain, and post-collision recovery. We document your care and coordinate with your insurance.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Car & Truck Accident Care | Synergy Spine & Nerve Center",
    description:
      "Post-collision chiropractic care and rehab in Rio Rancho, NM. We treat and document your recovery.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const SYMPTOMS = [
  "Neck pain and stiffness",
  "Headaches after the collision",
  "Mid- and low-back pain",
  "Shoulder, arm, or hand pain and tingling",
  "Dizziness or brain fog",
  "Jaw tightness or TMJ pain",
  "Trouble sleeping or driving comfortably",
];

const PROCESS = [
  {
    title: "Thorough exam and history",
    body: "We document the mechanism of the accident, take a full history, and run the neurological and orthopedic tests needed to build an accurate picture.",
  },
  {
    title: "Imaging and referrals when needed",
    body: "If imaging or a medical referral is warranted, we say so and coordinate the next step, no guessing, no wasted visits.",
  },
  {
    title: "Focused treatment",
    body: "Adjustments, soft-tissue work, and rehab tailored to your injury pattern. We track objective progress so we know when to progress or refer.",
  },
  {
    title: "Documentation and coordination",
    body: "Detailed notes for your insurance or attorney and clear communication with anyone else on your care team.",
  },
];

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
      name: "Services",
      item: "https://synergyspineandnerve.com/services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Car/Truck Accident Care",
      item: CANONICAL,
    },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/services/car-truck-accident-care", cmsFallbackMetadata);
}

export default function CarTruckAccidentCarePage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: "Car/Truck Accident Care" },
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

          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    Services
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <h1 className="section-title mt-3 text-3xl md:text-5xl font-semibold leading-[1.1] uppercase">
                    Car &amp; Truck{" "}
                    <span className="italic normal-case text-brand-gold">
                      accident care
                    </span>
                  </h1>
                </Reveal>
                <Reveal delay={220}>
                  <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl">
                    Even a low-speed collision can leave you sore, stiff, and
                    dealing with symptoms that take weeks to show up. We
                    assess, treat, and document your recovery, and
                    we&apos;ll tell you honestly whether chiropractic care is
                    the right first step.
                  </p>
                </Reveal>
                <Reveal delay={320}>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <BookTrigger className="group/cta inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition-colors">
                      Book Appointment
                    </BookTrigger>
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-brand-navyDark transition-colors"
                    >
                      Call {PHONE_DISPLAY}
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <Reveal delay={200} variant="fade">
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-brand-gold/25 blur-2xl"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-brand-blue/25 blur-2xl"
                    />
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] ring-1 ring-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
                      <Image
                        src={HERO_IMAGE}
                        alt="Car and truck accident chiropractic care in Rio Rancho"
                        fill
                        priority
                        sizes="(min-width: 1024px) 460px, 80vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* SYMPTOMS */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Common symptoms
                  </p>
                </div>
                <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  Feeling different since{" "}
                  <span className="italic text-brand-blue">the accident</span>?
                </h2>
                <p className="mt-4 text-brand-text leading-relaxed">
                  Whiplash and soft-tissue injuries don&apos;t always show up
                  right away. If any of these sound familiar, it&apos;s worth
                  getting checked.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ul className="space-y-3">
                {SYMPTOMS.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="leading-relaxed text-brand-text">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-gold" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    Our process
                  </p>
                  <span className="h-px w-10 bg-brand-gold" />
                </div>
                <h2 className="section-title mt-4 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  A clear plan{" "}
                  <span className="italic text-brand-blue">from day one</span>.
                </h2>
              </div>
            </Reveal>
            <ol className="mt-12 grid gap-5 sm:grid-cols-2">
              {PROCESS.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 80}>
                  <article className="h-full rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-white text-sm font-bold">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-brand-navyDark">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-text leading-relaxed">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* CROSS-LINKS */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                Related care
              </p>
              <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                Post-collision{" "}
                <span className="italic text-brand-blue">recovery</span> often
                needs more than one tool.
              </h2>
              <p className="mt-4 text-brand-text">
                Depending on your injuries, your plan may combine chiropractic,
                medical massage, and targeted rehab.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/services/chiropractic/"
                  className="rounded-full bg-brand-navyDark text-white px-6 py-2.5 text-sm font-semibold hover:bg-brand-blue transition"
                >
                  Chiropractic Services
                </Link>
                <Link
                  href="/services/massage/"
                  className="rounded-full border border-brand-navyDark/20 px-6 py-2.5 text-sm font-semibold text-brand-navyDark hover:bg-brand-navyDark hover:text-white transition"
                >
                  Massage Services
                </Link>
              </div>
            </Reveal>
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
                Recently in a{" "}
                <span className="italic text-brand-gold">collision</span>?
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 text-white/80">
                The sooner we can assess and start care, the smoother the
                recovery, even if symptoms feel minor right now.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <BookTrigger className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition">
                  Book Appointment
                </BookTrigger>
                <a
                  href={PHONE_HREF}
                  className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:bg-white hover:text-brand-navyDark transition"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </Reveal>
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
