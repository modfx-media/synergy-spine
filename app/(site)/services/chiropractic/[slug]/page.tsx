import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/services/ServiceDetail";
import { withCMSMetadata } from "@/lib/cms/metadata";
import {
  CATEGORY_BY_SLUG,
  CHIROPRACTIC_SERVICES,
} from "@/lib/services-catalog";

const CATEGORY_SLUG = "chiropractic";
const CANONICAL_BASE = "https://synergyspineandnerve.com/services/chiropractic";

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return CHIROPRACTIC_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const item = CHIROPRACTIC_SERVICES.find((s) => s.slug === slug);
  if (!item) return withCMSMetadata(`/services/chiropractic/${slug}`, {});
  const url = `${CANONICAL_BASE}/${item.slug}/`;
  const title = `${item.name} Chiropractic Care | Synergy Spine & Nerve Center`;
  const description = item.intro.length > 155 ? `${item.intro.slice(0, 152)}...` : item.intro;
  return withCMSMetadata(`/services/chiropractic/${item.slug}`, {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Synergy Spine and Nerve Center",
    },
  });
}

export default async function ChiropracticServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const item = CHIROPRACTIC_SERVICES.find((s) => s.slug === slug);
  if (!item) notFound();
  const category = CATEGORY_BY_SLUG[CATEGORY_SLUG];
  return <ServiceDetail category={category} item={item} />;
}
