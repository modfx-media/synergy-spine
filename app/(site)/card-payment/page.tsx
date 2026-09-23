import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const CANONICAL = "https://synergyspineandnerve.com/card-payment/";
const SURVEY_ID = "ol52RaFAEVbKNKQqYoou";
const SURVEY_SRC = `https://link.synergyspineandnerve.com/widget/survey/${SURVEY_ID}`;
const FORM_EMBED_SCRIPT = "https://link.synergyspineandnerve.com/js/form_embed.js";

const cmsFallbackMetadata: Metadata = {
  title: "Card Payment | Synergy Spine & Nerve Center",
  description:
    "Securely submit your card payment to Synergy Spine and Nerve Center in Rio Rancho, NM.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Card Payment | Synergy Spine & Nerve Center",
    description:
      "Securely submit your card payment to Synergy Spine and Nerve Center in Rio Rancho, NM.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://synergyspineandnerve.com/" },
    { "@type": "ListItem", position: 2, name: "Card Payment", item: CANONICAL },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/card-payment", cmsFallbackMetadata);
}

export default function CardPaymentPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Card Payment" },
        ]}
      />

      <main>
        {/* PAYMENT FORM EMBED */}
        <section className="bg-brand-bg py-8 sm:py-10 lg:py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h1 className="sr-only">Card Payment</h1>
            <div className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(13,35,64,0.25)] ring-1 ring-black/5 p-2 sm:p-4">
              <iframe
                src={SURVEY_SRC}
                id={SURVEY_ID}
                title="Synergy Spine and Nerve Center Card Payment"
                scrolling="no"
                style={{
                  border: "none",
                  width: "100%",
                  minHeight: "780px",
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Script src={FORM_EMBED_SCRIPT} strategy="afterInteractive" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
