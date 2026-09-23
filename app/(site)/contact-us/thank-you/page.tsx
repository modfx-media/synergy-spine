import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import { SITE_ORIGIN } from "@/lib/site";

const CANONICAL = `${SITE_ORIGIN}/contact-us/thank-you/`;

const cmsFallbackMetadata: Metadata = {
  title: "Message received",
  description: "We received your message at Synergy Spine and Nerve Center.",
  alternates: { canonical: CANONICAL },
  robots: { index: false, follow: false },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/contact-us/thank-you", cmsFallbackMetadata);
}

export default function ContactThankYouPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact-us/" },
          { label: "Thank you" },
        ]}
      />
      <main className="bg-brand-bg py-24">
        <div className="mx-auto max-w-xl px-6 text-center">
          <Reveal>
            <h1 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold">
              We got your message.
            </h1>
            <p className="mt-4 text-brand-textLight leading-relaxed">
              The team at Synergy Spine and Nerve Center will reply shortly. If
              you need us today, call (505) 891-2280.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white"
            >
              Back to home
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
