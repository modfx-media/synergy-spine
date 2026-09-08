export const SITE_ORIGIN = (
  process.env.SITE_ORIGIN ||
  process.env.NEXT_PUBLIC_SITE_ORIGIN ||
  'https://synergyspineandnerve.com'
).replace(/\/$/, '')

export const DEFAULT_COVER = '/images/blog/default-cover.jpg'
export const DEFAULT_COVER_ALT = 'Synergy Spine and Nerve Center blog cover'

export const DEFAULT_CTA = {
  label: 'Book Appointment',
  href: '/schedule/',
}

/** Cover prompt for this brand. No patient faces / medical gore. */
export function coverPrompt(title: string): string {
  const topic = title.replace(/\s+/g, ' ').trim().slice(0, 120)
  return [
    'Editorial photograph, 16:9 landscape, premium chiropractic wellness brand photography.',
    `The scene must clearly illustrate this article topic: ${topic}.`,
    'Calm modern chiropractic clinic or healthy lifestyle setting in the American Southwest.',
    'Navy, gold, and natural wood tones, cinematic lighting, sharp focus, no grain, no watermark.',
    'No people faces, no patients, no medical gore, no x-ray overlays, no spine diagrams with labels.',
    'No text, no letters, no logos, no captions, no readable signage.',
  ].join(' ')
}

/**
 * Slugs that already have a committed file at /images/blog/covers/{slug}.png
 * List only. Do not fs.stat public/ — that packs images into the cron bundle.
 */
export const COMMITTED_COVER_SLUGS: readonly string[] = []

/** Explicit local cover paths for Ranked slugs. */
export const COMMITTED_COVER_BY_SLUG: Readonly<Record<string, string>> = {
  'everyday-driving-habits-a-car-accident-chiropractor-in-rio-rancho-flags':
    '/images/blog/jan-baborak-4STq2B24S1k-unsplash.jpg',
}
