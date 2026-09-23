import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import LocalSeoPage, { buildLocalSeoMetadata } from "@/components/LocalSeoPage";

const CITY = "Sandia Park";
const STATE = "New Mexico";
const SLUG = "chiropractic-sandia-park-nm";
const META_TITLE = "Chiropractor in Sandia Park, NM | Synergy Spine & Nerve Center";
const META_DESCRIPTION = "Looking for a chiropractor in Sandia Park, NM? Synergy Spine and Nerve Center serves Sandia Park and surrounding areas. Call (505) 891-2280 to schedule.";
const HERO_HEADING = "TRUSTED CHIROPRACTOR IN SANDIA PARK, NM";
const INTRO = "At Synergy Spine and Nerve, we offer personalized chiropractic care designed to support your body's natural ability to heal and function at its best. Serving the Sandia Park, NM community, our team is committed to providing gentle, effective treatments that address the root causes of pain and discomfort without relying on medications or surgery.";
const NEARBY: string[] = ["Santa Ana Pueblo", "San Ysidro", "South Valley", "San Felipe Pueblo", "Tijeras", "Peña Blanca"];

const cmsFallbackMetadata: Metadata = buildLocalSeoMetadata({
  cityName: CITY,
  slug: SLUG,
  metaTitle: META_TITLE,
  metaDescription: META_DESCRIPTION,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/chiropractic-sandia-park-nm", cmsFallbackMetadata);
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
