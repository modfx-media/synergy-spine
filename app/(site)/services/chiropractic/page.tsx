import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import ServiceHub from "@/components/services/ServiceHub";
import { CATEGORY_BY_SLUG } from "@/lib/services-catalog";

const CANONICAL = "https://synergyspineandnerve.com/services/chiropractic/";
const category = CATEGORY_BY_SLUG["chiropractic"];

const cmsFallbackMetadata: Metadata = {
  title: "Chiropractic Services in Rio Rancho | Synergy Spine & Nerve Center",
  description:
    "Modern, evidence-based chiropractic care for back pain, neck pain, headaches, sciatica, and more. Explore every chiropractic service offered at Synergy Spine and Nerve Center.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Chiropractic Services | Synergy Spine & Nerve Center",
    description:
      "Chiropractic care for pain, mobility, and long-term wellness in Rio Rancho, NM.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/services/chiropractic", cmsFallbackMetadata);
}

export default function ChiropracticHubPage() {
  return <ServiceHub category={category} />;
}
