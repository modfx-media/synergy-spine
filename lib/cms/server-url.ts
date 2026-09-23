const APEX = "https://synergyspineandnerve.com"
const WWW = "https://www.synergyspineandnerve.com"

function clean(value: string | undefined): string | undefined {
  if (!value) return undefined
  return value.replace(/\/$/, "")
}

function isLocal(value: string | undefined): boolean {
  if (!value) return true
  return value.includes("localhost") || value.includes("127.0.0.1")
}

/** Public origin Payload should advertise. Never prefer localhost on Vercel. */
export function serverURL(): string {
  const configured = clean(process.env.NEXT_PUBLIC_SERVER_URL)
  const site =
    clean(process.env.NEXT_PUBLIC_SITE_URL) ||
    clean(process.env.NEXT_PUBLIC_SITE_ORIGIN)

  if (process.env.VERCEL) {
    if (configured && !isLocal(configured)) return configured
    if (site && !isLocal(site)) return site
    if (process.env.VERCEL_ENV === "production") return APEX
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  }

  if (configured) return configured
  if (site) return site
  return "http://localhost:3000"
}

export function allowedOrigins(): string[] {
  const origins = new Set<string>([APEX, WWW])
  const add = (value: string | undefined) => {
    const next = clean(value)
    if (next) origins.add(next)
  }
  add(process.env.NEXT_PUBLIC_SERVER_URL)
  add(process.env.NEXT_PUBLIC_SITE_URL)
  add(process.env.NEXT_PUBLIC_SITE_ORIGIN)
  add(serverURL())
  if (process.env.VERCEL_URL) add(`https://${process.env.VERCEL_URL}`)
  if (!process.env.VERCEL) add("http://localhost:3000")
  return [...origins]
}
