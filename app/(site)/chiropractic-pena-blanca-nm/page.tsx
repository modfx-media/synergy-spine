import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import LocalSeoPage, { buildLocalSeoMetadata } from "@/components/LocalSeoPage";

const CITY = "Peña Blanca";
const STATE = "New Mexico";
const SLUG = "chiropractic-pena-blanca-nm";
const META_TITLE = "Chiropractor in Peña Blanca, NM | Synergy Spine & Nerve Center";
const META_DESCRIPTION = "Looking for a chiropractor in Peña Blanca, NM? Synergy Spine and Nerve Center serves Peña Blanca and surrounding areas. Call (505) 891-2280 to schedule.";
const HERO_HEADING = "TRUSTED CHIROPRACTOR IN PEÑA BLANCA, NM";
const INTRO = "At Synergy Spine and Nerve, we offer personalized chiropractic care designed to support your body's natural ability to heal and function at its best. Serving the Peña Blanca, NM community, our team is committed to providing gentle, effective treatments that address the root causes of pain and discomfort without relying on medications or surgery.";
const NEARBY: string[] = ["San Felipe Pueblo", "Peralta", "San Ysidro", "Placitas", "Sandia Park", "North Valley"];

const cmsFallbackMetadata: Metadata = buildLocalSeoMetadata({
  cityName: CITY,
  slug: SLUG,
  metaTitle: META_TITLE,
  metaDescription: META_DESCRIPTION,
});

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/chiropractic-pena-blanca-nm", cmsFallbackMetadata);
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
