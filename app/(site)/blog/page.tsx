import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import { BlogListing } from "@/components/BlogListing";
import { getPublishedBlogPosts } from "@/lib/ranked/posts";
import { toBlogPosts } from "@/lib/ranked/ui";
import { SITE_ORIGIN } from "@/lib/site";

export const revalidate = 3600;

const cmsFallbackMetadata: Metadata = {
  title: "Chiropractic Health Blog | Synergy Spine & Nerve Center",
  description:
    "Educational articles on chiropractic care, spinal health, nutrition, and natural wellness from the team at Synergy Spine and Nerve Center in Rio Rancho, NM.",
  alternates: { canonical: `${SITE_ORIGIN}/blog/` },
  openGraph: {
    title: "Chiropractic Health Blog | Synergy Spine & Nerve Center",
    description:
      "Educational articles on chiropractic care, spinal health, nutrition, and natural wellness.",
    url: `${SITE_ORIGIN}/blog/`,
    type: "website",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/blog", cmsFallbackMetadata);
}

export default async function BlogIndexPage() {
  const posts = toBlogPosts(await getPublishedBlogPosts());
  return <BlogListing page={1} posts={posts} />;
}
