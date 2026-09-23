import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/services/ServiceDetail";
import { withCMSMetadata } from "@/lib/cms/metadata";
import {
  CATEGORY_BY_SLUG,
  MASSAGE_SERVICES,
} from "@/lib/services-catalog";

const CATEGORY_SLUG = "massage";
const CANONICAL_BASE = "https://synergyspineandnerve.com/services/massage";

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return MASSAGE_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const item = MASSAGE_SERVICES.find((s) => s.slug === slug);
  if (!item) return withCMSMetadata(`/services/massage/${slug}`, {});
  const url = `${CANONICAL_BASE}/${item.slug}/`;
  const title = `${item.name} in Rio Rancho | Synergy Spine & Nerve Center`;
  const description = item.intro.length > 155 ? `${item.intro.slice(0, 152)}...` : item.intro;
  return withCMSMetadata(`/services/massage/${item.slug}`, {
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

export default async function MassageServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const item = MASSAGE_SERVICES.find((s) => s.slug === slug);
  if (!item) notFound();
  const category = CATEGORY_BY_SLUG[CATEGORY_SLUG];
  return <ServiceDetail category={category} item={item} />;
}
