import { BlobNotFoundError, head, put } from '@vercel/blob'
import { COMMITTED_COVER_BY_SLUG, COMMITTED_COVER_SLUGS, coverPrompt } from './config'

type CoverTheme = {
  keys: string[]
  photos: readonly string[]
}

const THEME_COVERS: CoverTheme[] = [
  {
    keys: ['ergonomic', 'desk', 'office', 'work', 'sitting', 'keyboard', 'monitor'],
    photos: [
      'photo-1497215728101-856f4ea42174',
      'photo-1486312338219-ce68d2c6f44d',
      'photo-1524758631624-e2822e304c36',
      'photo-1593062096033-9a26b09da705',
      'photo-1497366216548-37526070297c',
      'photo-1521791136064-7986c2920216',
    ],
  },
  {
    keys: ['migraine', 'headache', 'head pain', 'vertigo'],
    photos: [
      'photo-1559757175-0eb30cd8c063',
      'photo-1576091160399-112ba8d25d1d',
      'photo-1559757148-5c350d0d3c56',
      'photo-1582719478250-c89cae4dc85b',
      'photo-1579684385127-1ef15d508118',
    ],
  },
  {
    keys: ['car', 'accident', 'crash', 'whiplash', 'driver', 'driving', 'collision', 'auto'],
    photos: [
      'photo-1449965408869-eaa3f722e40d',
      'photo-1486262715619-67b85e0b08d3',
      'photo-1492144534655-ae79c964c9d7',
      'photo-1549317661-bd32c8ce0db2',
      'photo-1503376780353-7e6692767b70',
    ],
  },
  {
    keys: ['neuropathy', 'numb', 'tingling', 'nerve pain', 'sciatica', 'pinched'],
    photos: [
      'photo-1576091160550-2173dba999ef',
      'photo-1559757148-5c350d0d3c56',
      'photo-1579684385127-1ef15d508118',
      'photo-1581595220892-b0739db3ba8c',
      'photo-1584982751601-97dcc096659c',
    ],
  },
  {
    keys: ['sport', 'athlete', 'injury', 'summer', 'running', 'workout'],
    photos: [
      'photo-1476480862126-209bfaa8edc8',
      'photo-1517836357463-d25dfeac3438',
      'photo-1571019614242-c5c5dee9f50b',
      'photo-1571019613454-1cb2f99b2d8b',
      'photo-1534438327276-14e5300c3a48',
    ],
  },
  {
    keys: ['massage', 'spa', 'soft tissue'],
    photos: [
      'photo-1600334129128-685c5582fd35',
      'photo-1544161515-4ab6ce6db874',
      'photo-1540555700478-4be289fbecef',
      'photo-1515377905703-c4788e51af15',
    ],
  },
  {
    keys: ['spine', 'back', 'chiropractic', 'adjustment', 'posture', 'disc', 'lumbar'],
    photos: [
      'photo-1576091160399-112ba8d25d1d',
      'photo-1559757148-5c350d0d3c56',
      'photo-1579684385127-1ef15d508118',
      'photo-1544367567-0f2fcb009e0b',
      'photo-1519823551278-64ac92734fb1',
      'photo-1506126613408-eca07ce68773',
    ],
  },
]

const FALLBACK_UNSPLASH = [
  'photo-1576091160399-112ba8d25d1d',
  'photo-1559757148-5c350d0d3c56',
  'photo-1579684385127-1ef15d508118',
  'photo-1544367567-0f2fcb009e0b',
  'photo-1506126613408-eca07ce68773',
  'photo-1519823551278-64ac92734fb1',
  'photo-1571019613454-1cb2f99b2d8b',
  'photo-1486312338219-ce68d2c6f44d',
  'photo-1497366216548-37526070297c',
  'photo-1449965408869-eaa3f722e40d',
  'photo-1600334129128-685c5582fd35',
  'photo-1517836357463-d25dfeac3438',
  'photo-1559757175-0eb30cd8c063',
  'photo-1582719478250-c89cae4dc85b',
  'photo-1584982751601-97dcc096659c',
  'photo-1524758631624-e2822e304c36',
  'photo-1497215728101-856f4ea42174',
  'photo-1571019614242-c5c5dee9f50b',
  'photo-1534438327276-14e5300c3a48',
  'photo-1544161515-4ab6ce6db874',
  'photo-1515377905703-c4788e51af15',
  'photo-1521791136064-7986c2920216',
  'photo-1549317661-bd32c8ce0db2',
  'photo-1503376780353-7e6692767b70',
  'photo-1593062096033-9a26b09da705',
] as const

function coverPngPath(contentId: string): string {
  return `blog-covers/${contentId}.png`
}

function coverJpgPath(contentId: string): string {
  return `blog-covers/${contentId}.jpg`
}

function committedCoverUrl(slug?: string): string | null {
  if (!slug) return null
  if (COMMITTED_COVER_BY_SLUG[slug]) return COMMITTED_COVER_BY_SLUG[slug]
  return COMMITTED_COVER_SLUGS.includes(slug) ? `/images/blog/covers/${slug}.png` : null
}

function hashSlug(slug: string): number {
  let hash = 0
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0
  return hash
}

function unsplashUrl(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=80`
}

function picsumUrl(slug: string): string {
  return `https://picsum.photos/seed/${encodeURIComponent(`synergy-${slug}`)}/1200/630`
}

function photosForTitle(title?: string): readonly string[] {
  if (!title) return FALLBACK_UNSPLASH
  const haystack = title.toLowerCase()
  for (const theme of THEME_COVERS) {
    if (theme.keys.some((key) => haystack.includes(key))) return theme.photos
  }
  return FALLBACK_UNSPLASH
}

export function uniqueWebCoverUrl(
  slug: string,
  reserved: Set<string> = new Set(),
  title?: string,
): string {
  const pool = photosForTitle(title)
  const start = hashSlug(slug) % pool.length
  for (let i = 0; i < pool.length; i++) {
    const url = unsplashUrl(pool[(start + i) % pool.length])
    if (!reserved.has(url)) return url
  }
  for (let i = 0; i < FALLBACK_UNSPLASH.length; i++) {
    const url = unsplashUrl(FALLBACK_UNSPLASH[(start + i) % FALLBACK_UNSPLASH.length])
    if (!reserved.has(url)) return url
  }
  let seed = slug
  let n = 0
  let url = picsumUrl(seed)
  while (reserved.has(url) && n < 50) {
    n += 1
    seed = `${slug}-${n}`
    url = picsumUrl(seed)
  }
  return url
}

function imageModels(): string[] {
  const preferred = process.env.OPENAI_IMAGE_MODEL?.trim()
  const models = [preferred, 'gpt-image-2', 'gpt-image-1'].filter((m): m is string => Boolean(m))
  return [...new Set(models)]
}

async function existingBlobUrl(contentId: string): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null
  for (const pathname of [coverPngPath(contentId), coverJpgPath(contentId)]) {
    try {
      const meta = await head(pathname)
      if (meta.url) return meta.url
    } catch (err) {
      if (!(err instanceof BlobNotFoundError)) return null
    }
  }
  return null
}

async function persistBuffer(pathname: string, bytes: Buffer, contentType: string): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null
  const blob = await put(pathname, bytes, {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType,
  })
  return blob.url
}

async function generatePng(title: string): Promise<Buffer | null> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) return null
  const prompt = coverPrompt(title)
  let lastError = ''
  const sizes = ['1536x1024', '1024x1024'] as const
  for (const model of imageModels()) {
    for (const size of sizes) {
      const res = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ model, prompt, size, quality: 'medium', n: 1 }),
      })
      const text = await res.text()
      if (!res.ok) {
        lastError = `${model} ${size} ${res.status}: ${text.slice(0, 240)}`
        continue
      }
      const json = JSON.parse(text) as { data?: Array<{ url?: string; b64_json?: string }> }
      const row = json.data?.[0]
      if (row?.b64_json) return Buffer.from(row.b64_json, 'base64')
      if (row?.url) {
        const img = await fetch(row.url)
        if (img.ok) return Buffer.from(await img.arrayBuffer())
      }
    }
  }
  console.error(`[ranked] OpenAI cover generation exhausted: ${lastError}`)
  return null
}

export async function getRankedCoverImage(input: {
  contentId: string
  title: string
  generate: boolean
  slug?: string
  reservedUrls?: Set<string>
}): Promise<string> {
  const slug = input.slug ?? input.contentId
  const reserved = input.reservedUrls ?? new Set<string>()

  const committed = committedCoverUrl(input.slug)
  if (committed) {
    reserved.add(committed)
    return committed
  }

  const cached = await existingBlobUrl(input.contentId)
  if (cached) {
    reserved.add(cached)
    return cached
  }

  const webUrl = uniqueWebCoverUrl(slug, reserved, input.title)
  if (!input.generate) {
    reserved.add(webUrl)
    return webUrl
  }

  try {
    const canPersist = Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.VERCEL)
    if (canPersist) {
      const png = await generatePng(input.title)
      if (png) {
        const url = await persistBuffer(coverPngPath(input.contentId), png, 'image/png')
        if (url) {
          reserved.add(url)
          return url
        }
      }
    }

    const sourceUrl = uniqueWebCoverUrl(slug, reserved, input.title)
    const img = await fetch(sourceUrl)
    if (img.ok) {
      const bytes = Buffer.from(await img.arrayBuffer())
      const persisted = await persistBuffer(coverJpgPath(input.contentId), bytes, 'image/jpeg')
      const url = persisted || sourceUrl
      reserved.add(url)
      return url
    }
  } catch (err) {
    console.error(`[ranked] cover failed for ${input.contentId}`, err)
  }

  reserved.add(webUrl)
  return webUrl
}

export function ensureUniqueCoverImages<T extends { slug: string; coverImage: string }>(posts: T[]): T[] {
  const used = new Set<string>()
  return posts.map((post) => {
    let cover = post.coverImage
    if (!cover || used.has(cover)) cover = uniqueWebCoverUrl(post.slug, used, post.slug)
    used.add(cover)
    return cover === post.coverImage ? post : { ...post, coverImage: cover }
  })
}
