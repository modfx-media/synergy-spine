import { POSTS } from '@/lib/blog-posts'
import { DEFAULT_COVER, DEFAULT_CTA } from './config'
import type { BlogPostData } from './types'

/** Return existing compiled/MDX posts, or []. Local slugs always win over Ranked. */
export function getLocalBlogPosts(): BlogPostData[] {
  return POSTS.map((post) => ({
    slug: post.slug,
    title: post.title,
    metaDescription: post.excerpt,
    h1: post.title,
    publishDate: post.isoDate,
    intro: post.excerpt,
    coverImage: post.featureImage || DEFAULT_COVER,
    coverAlt: post.title,
    sections: [{ heading: post.title, body: [post.excerpt] }],
    cta: DEFAULT_CTA,
  }))
}
