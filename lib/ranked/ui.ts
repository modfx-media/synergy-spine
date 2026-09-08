import { POSTS, type BlogCategory, type BlogPost } from '@/lib/blog-posts'
import type { BlogPostData } from './types'

export function formatBlogDate(isoDate: string): string {
  const [year, month, day] = isoDate.slice(0, 10).split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function inferCategory(title: string, slug: string): BlogCategory {
  const t = `${title} ${slug}`.toLowerCase()
  if (/(accident|crash|whiplash|injury|sports|massage|treatment|recovery)/.test(t)) {
    return 'Chiropractic Treatment'
  }
  if (/(approach|sitting|movement|hygiene|ergonomic|habit|desk)/.test(t)) {
    return 'Chiropractic Approach'
  }
  if (/(educat|history|research|what is|nerve chart)/.test(t)) {
    return 'Chiropractic Education'
  }
  return 'Chiropractic Care'
}

function wordCount(post: BlogPostData): number {
  return [post.intro, ...post.sections.flatMap((s) => s.body)]
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
}

export function toBlogPost(post: BlogPostData): BlogPost {
  const local = POSTS.find((p) => p.slug === post.slug)
  if (local) {
    return {
      ...local,
      isoDate: post.publishDate.slice(0, 10),
      date: formatBlogDate(post.publishDate),
      featureImage: post.coverImage || local.featureImage,
      source: 'local',
    }
  }

  const words = wordCount(post)
  const mins = Math.max(3, Math.round(words / 200) || 3)
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.metaDescription || post.intro,
    category: inferCategory(post.title, post.slug),
    date: formatBlogDate(post.publishDate),
    isoDate: post.publishDate.slice(0, 10),
    readTime: `${mins} min read`,
    featureImage: post.coverImage,
    intro: post.intro,
    sections: post.sections,
    coverAlt: post.coverAlt,
    cta: post.cta,
    source: 'ranked',
  }
}

export function toBlogPosts(posts: BlogPostData[]): BlogPost[] {
  return [...posts]
    .map(toBlogPost)
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate) || a.slug.localeCompare(b.slug))
}

export function relatedFromPosts(posts: BlogPost[], slug: string, limit = 3): BlogPost[] {
  const cur = posts.find((p) => p.slug === slug)
  if (!cur) return posts.filter((p) => p.slug !== slug).slice(0, limit)
  const sameCat = posts.filter((p) => p.slug !== slug && p.category === cur.category)
  if (sameCat.length >= limit) return sameCat.slice(0, limit)
  const others = posts.filter((p) => p.slug !== slug && p.category !== cur.category)
  return [...sameCat, ...others].slice(0, limit)
}
