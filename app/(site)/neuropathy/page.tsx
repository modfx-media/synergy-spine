import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import BookTrigger from "@/components/booking/BookTrigger";
import {
  organizationSchema,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_ORIGIN,
} from "@/lib/site";

const CANONICAL = `${SITE_ORIGIN}/neuropathy/`;

const cmsFallbackMetadata: Metadata = {
  title: {
    absolute: "Neuropathy Treatment in Rio Rancho, NM | Synergy Spine & Nerve",
  },
  description:
    "Chiropractic neuropathy care in Rio Rancho for burning feet, numbness, and nerve pain. Serving Albuquerque, Corrales, and Bernalillo. Call (505) 891-2280.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Neuropathy Treatment in Rio Rancho | Synergy Spine & Nerve",
    description:
      "Find the driver of nerve pain before you live on gabapentin. Exam, imaging when needed, decompression and nerve-sparing care.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const DRIVERS = [
  {
    title: "Lumbar or cervical nerve root",
    body: "A disc bulge, stenosis, or stuck facet can inflame a root. Leg or arm burning often starts at the spine, not the foot.",
  },
  {
    title: "Peripheral neuropathy",
    body: "Stocking-glove numbness, night burning, and balance changes. We screen diabetes, B12, thyroid, and alcohol history and co-manage with your physician.",
  },
  {
    title: "Entrapment along the path",
    body: "Piriformis, tarsal tunnel, cubital tunnel, and thoracic outlet mimic “neuropathy” and respond to mechanical care when the spine is not the only site.",
  },
  {
    title: "Post-injury nerve",
    body: "Whiplash, falls, and surgery can leave a nerve chemically angry. Timing and documentation matter if this started after a crash.",
  },
];

const EXPECT = [
  "Neurologic exam: reflexes, sensation, strength, gait, and tension tests",
  "Honest split: spine-driven vs. medical neuropathy vs. both",
  "Imaging or lab referral when the exam says we should not guess",
  "When you are a candidate: adjustments, decompression, and home nerve-gliding / stability work",
  "A stop-rule if findings worsen — we do not chase a dying nerve with more visits",
];

const FAQS = [
  {
    q: "Can a chiropractor help neuropathy in Rio Rancho?",
    a: "When the driver is a compressed or irritated nerve root, or a mechanical entrapment, yes — that is core chiropractic and decompression work. When the driver is uncontrolled diabetes or a small-fiber medical neuropathy, we still exam the spine (it often adds to the load) and we do not pretend adjustments replace your endocrinologist.",
  },
  {
    q: "Why did Google used to show this URL as a 404?",
    a: "The old WordPress slug /neuropathy/ was dropped in the Next.js rebuild. This hub is the replacement so “neuropathy,” “neuropathy treatment near me,” and “doctors who specialize in peripheral neuropathy near me” have a real, indexed page again.",
  },
  {
    q: "Do Albuquerque patients come here for nerve pain?",
    a: "Regularly. Westside and North Valley drives are 15–25 minutes. If sitting that long lights up your legs, say so at the desk — we will not park you in a waiting-room chair for half an hour.",
  },
  {
    q: "Is this the same as sciatica?",
    a: "Sciatica is one pattern of nerve pain (usually L4–S1 into one leg). Neuropathy is broader: both feet, hands, burning at night, or glove-and-stocking change. The exam tells you which map you are on.",
  },
  {
    q: "Does insurance cover neuropathy chiropractic care?",
    a: "When the driver is a spinal nerve-root or mechanical entrapment, many plans treat it as medically necessary chiropractic. Pure small-fiber diabetic neuropathy is a medical co-manage. Call (505) 891-2280 and we will help you check benefits before the first visit.",
  },
  {
    q: "Can a chiropractor help burning feet in Albuquerque?",
    a: "Westside and North Valley patients drive 15–25 minutes. If sitting lights up your legs, say so at the desk. We exam for root vs. peripheral vs. both — we do not sell a plan that ignores diabetes or B12.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/neuropathy", cmsFallbackMetadata);
}

export default function NeuropathyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(CANONICAL),
      {
        "@type": "MedicalWebPage",
        url: CANONICAL,
        name: "Neuropathy Treatment in Rio Rancho, NM",
        about: { "@type": "MedicalCondition", name: "Peripheral neuropathy" },
        audience: { "@type": "PeopleAudience", geographicArea: "Rio Rancho, NM" },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Neuropathy Treatment" },
        ]}
      />
      <main>
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Nerve pain · Rio Rancho, NM
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Neuropathy treatment in{" "}
                <span className="italic normal-case text-brand-gold">
                  Rio Rancho
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Burning feet at night. Numb toes. A sock that will not stay
                felt. Neuropathy is a description, not a diagnosis. Synergy
                Spine and Nerve Center finds whether the nerve is angry at the
                spine, along the path, or from a medical driver — then we treat
                only the part we can actually change.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
              <BookTrigger className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-navyDark hover:bg-white transition-colors">
                Book a nerve exam
              </BookTrigger>
              <a
                href={`tel:${PHONE_TEL}`}
                className="rounded-full ring-1 ring-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Call {PHONE_DISPLAY}
              </a>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="section-title text-2xl md:text-4xl text-brand-navyDark font-semibold">
              Four drivers we separate on visit one
            </h2>
            <p className="mt-4 text-brand-textLight leading-relaxed max-w-3xl">
              Google searches “doctors who specialize in peripheral neuropathy
              near me” and “neuropathy treatment.” Those queries fail if every
              page says “we help nerves” without a decision tree. This is ours.
            </p>
            <ul className="mt-10 grid md:grid-cols-2 gap-4">
              {DRIVERS.map((d) => (
                <li
                  key={d.title}
                  className="rounded-2xl ring-1 ring-black/5 bg-brand-bg p-6"
                >
                  <h3 className="font-semibold text-brand-navyDark">{d.title}</h3>
                  <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                    {d.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-title text-2xl md:text-4xl text-brand-navyDark font-semibold">
                What to expect
              </h2>
              <ul className="mt-6 space-y-3">
                {EXPECT.map((item) => (
                  <li key={item} className="flex gap-3 text-sm md:text-base text-brand-text leading-relaxed">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-title text-2xl md:text-4xl text-brand-navyDark font-semibold">
                Related care
              </h2>
              <p className="mt-4 text-brand-textLight leading-relaxed">
                Nerve pain is rarely a one-page problem. Use these if your
                search was more specific:
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  ["Sciatica relief in Rio Rancho", "/sciatica-relief-rio-rancho-nm/"],
                  ["Herniated disc treatment", "/herniated-disc-treatment-rio-rancho-nm/"],
                  ["Spinal decompression", "/spinal-decompression-albuquerque-nm/"],
                  ["Auto accident / whiplash", "/auto-accident-chiropractor-rio-rancho-nm/"],
                  ["Chiropractor in Albuquerque", "/chiropractor-albuquerque-nm/"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block rounded-xl bg-white ring-1 ring-black/5 px-4 py-3 text-sm font-semibold text-brand-navyDark hover:ring-brand-blue/40"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="section-title text-2xl md:text-4xl text-brand-navyDark font-semibold">
              Neuropathy questions
            </h2>
            <div className="mt-8 space-y-3">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="rounded-2xl bg-brand-bg ring-1 ring-black/5 p-5"
                >
                  <summary className="cursor-pointer font-semibold text-brand-navyDark">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm text-brand-textLight leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
