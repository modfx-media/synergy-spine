import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import LocalSeoPage, { buildLocalSeoMetadata } from "@/components/LocalSeoPage";

const CITY = "Jarales";
const STATE = "New Mexico";
const SLUG = "chiropractic-jarales-nm";
const META_TITLE = "Chiropractor in Jarales, NM | Synergy Spine & Nerve Center";
const META_DESCRIPTION = "Looking for a chiropractor in Jarales, NM? Synergy Spine and Nerve Center serves Jarales and surrounding areas. Call (505) 891-2280 to schedule.";
const HERO_HEADING = "TRUSTED CHIROPRACTOR IN JARALES, NM";
const INTRO = "At Synergy Spine and Nerve, we offer personalized chiropractic care designed to support your body's natural ability to heal and function at its best. Serving the Jarales, NM community, our team is committed to providing gentle, effective treatments that address the root causes of pain and discomfort without relying on medications or surgery.";
const NEARBY: string[] = ["Jemez Pueblo", "Golden", "Los Lunas", "El Llanito", "Los Ranchos de Albuquerque", "El Cerro Mission"];

const cmsFallbackMetadata: Metadata = buildLocalSeoMetadata({
  cityName: CITY,
  slug: SLUG,
  metaTitle: META_TITLE,
  metaDescription: META_DESCRIPTION,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/chiropractic-jarales-nm", cmsFallbackMetadata);
}

export default function Page() {
  return (
    <LocalSeoPage
      cityName={CITY}
      stateName={STATE}
      slug={SLUG}
      metaTitle={META_TITLE}
      metaDescription={META_DESCRIPTION}
      heroHeading={HERO_HEADING}
      introParagraph={INTRO}
      nearbyAreas={NEARBY}
    />
  );
}
