import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing, POSTS_PER_PAGE } from "@/components/BlogListing";
import { getPublishedBlogPosts } from "@/lib/ranked/posts";
import { toBlogPosts } from "@/lib/ranked/ui";
import { SITE_ORIGIN } from "@/lib/site";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = toBlogPosts(await getPublishedBlogPosts().catch(() => []));
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const params: { n: string }[] = [];
  for (let i = 2; i <= totalPages; i++) {
    params.push({ n: String(i) });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ n: string }>;
}): Promise<Metadata> {
  const { n } = await params;
  const page = Number.parseInt(n, 10);
  const title =
    Number.isFinite(page) && page > 1
      ? `Blog Page ${page} | Synergy Spine & Nerve Center`
      : "Chiropractic Health Blog | Synergy Spine & Nerve Center";

  return {
    title,
    description:
      "Educational articles on chiropractic care, spinal health, nutrition, and natural wellness from the team at Synergy Spine and Nerve Center in Rio Rancho, NM.",
    alternates: { canonical: `${SITE_ORIGIN}/blog/page/${page}/` },
    openGraph: {
      title,
      description:
        "Educational articles on chiropractic care, spinal health, nutrition, and natural wellness.",
      url: `${SITE_ORIGIN}/blog/page/${page}/`,
      type: "website",
    },
  };
}

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const page = Number.parseInt(n, 10);
  const posts = toBlogPosts(await getPublishedBlogPosts());
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  if (!Number.isFinite(page) || page < 2 || page > totalPages) {
    notFound();
  }
  return <BlogListing page={page} posts={posts} />;
}
