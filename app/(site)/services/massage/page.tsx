import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import ServiceHub from "@/components/services/ServiceHub";
import { CATEGORY_BY_SLUG } from "@/lib/services-catalog";

const CANONICAL = "https://synergyspineandnerve.com/services/massage/";
const category = CATEGORY_BY_SLUG["massage"];

const cmsFallbackMetadata: Metadata = {
  title: "Massage Services in Rio Rancho | Synergy Spine & Nerve Center",
  description:
    "Medical and sports massage in Rio Rancho, NM. Focused, condition-driven bodywork that complements your chiropractic care.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Massage Services | Synergy Spine & Nerve Center",
    description:
      "Medical and sports massage designed to work alongside your chiropractic care in Rio Rancho, NM.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/services/massage", cmsFallbackMetadata);
}

export default function MassageHubPage() {
  return <ServiceHub category={category} />;
}
