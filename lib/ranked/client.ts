import { SITE_ORIGIN } from './config'
import {
  RANKED_CACHE_TAG,
  type RankedContentDetail,
  type RankedContentListItem,
  type RankedDetailResponse,
  type RankedListResponse,
  type RankedProject,
  type RankedProjectsResponse,
} from './types'

const RANKED_BASE = 'https://app.ranked.ai/api/v1'

function rankedConfig() {
  return {
    apiKey: process.env.RANKED_API_KEY,
    projectId: process.env.RANKED_PROJECT_ID,
  }
}

export function isRankedConfigured(): boolean {
  const { apiKey, projectId } = rankedConfig()
  return Boolean(apiKey && projectId)
}

export function hasRankedApiKey(): boolean {
  return Boolean(rankedConfig().apiKey)
}

function thisProjectId(projectId?: string): string | undefined {
  return projectId || rankedConfig().projectId
}

function hostFromUrl(url: string | null | undefined): string | null {
  if (!url) return null
  try {
    const href = /^https?:\/\//i.test(url) ? url : `https://${url}`
    return new URL(href).host.replace(/^www\./, '').toLowerCase()
  } catch {
    return null
  }
}

/**
 * One Ranked project per domain. Never publish another client's calendar
 * onto this site, even if RANKED_PROJECT_ID is pointed at the wrong UUID.
 */
export async function getThisSiteProjectId(projectId?: string): Promise<string | null> {
  const configured = thisProjectId(projectId)
  if (!hasRankedApiKey()) return configured ?? null

  const siteHost = hostFromUrl(SITE_ORIGIN)
  const projects = await listRankedProjects().catch(() => [])
  const byWebsite = siteHost
    ? projects.find((p) => hostFromUrl(p.websiteUrl || p.website_url) === siteHost)
    : undefined

  if (byWebsite) {
    if (configured && configured !== byWebsite.id) {
      console.error(
        `[ranked] RANKED_PROJECT_ID does not match ${SITE_ORIGIN}. Using ${byWebsite.name} only.`,
      )
    }
    return byWebsite.id
  }

  if (configured) {
    const match = projects.find((p) => p.id === configured)
    const matchHost = hostFromUrl(match?.websiteUrl || match?.website_url)
    if (match && matchHost && siteHost && matchHost !== siteHost) {
      console.error(`[ranked] refusing to publish ${match.name} onto ${SITE_ORIGIN}`)
      return null
    }
    return configured
  }

  return null
}

async function rankedGet<T>(path: string): Promise<T> {
  const { apiKey } = rankedConfig()
  if (!apiKey) throw new Error('RANKED_API_KEY is not set')

  const res = await fetch(`${RANKED_BASE}${path}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    next: { revalidate: 300, tags: [RANKED_CACHE_TAG] },
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Ranked API ${res.status} ${path}: ${text.slice(0, 200)}`)
  }

  return res.json() as Promise<T>
}

export async function listRankedProjects(): Promise<RankedProject[]> {
  if (!hasRankedApiKey()) return []

  const items: RankedProject[] = []
  for (let offset = 0; offset < 500; offset += 50) {
    const json = await rankedGet<RankedProjectsResponse>(`/projects?limit=50&offset=${offset}`)
    const page = Array.isArray(json.data) ? json.data : []
    items.push(...page)
    if (page.length < 50) break
  }
  return items
}

export async function listRankedContent(projectId?: string, limit = 50): Promise<RankedContentListItem[]> {
  const id = projectId || (await getThisSiteProjectId())
  if (!id) return []

  const items: RankedContentListItem[] = []
  const pageSize = Math.min(limit, 50)
  for (let offset = 0; offset < 1000; offset += pageSize) {
    const json = await rankedGet<RankedListResponse>(
      `/projects/${id}/content?limit=${pageSize}&offset=${offset}`,
    )
    const page = Array.isArray(json.data) ? json.data : []
    items.push(...page)
    if (page.length < pageSize) break
  }
  return items
}

export async function getRankedContentDetail(
  contentId: string,
  projectId?: string,
): Promise<RankedContentDetail | null> {
  const id = projectId || (await getThisSiteProjectId())
  if (!id) return null

  const json = await rankedGet<RankedDetailResponse>(`/projects/${id}/content/${contentId}`)
  return json.data ?? null
}
