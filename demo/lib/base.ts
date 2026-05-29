/**
 * Deploy base path. Empty at the domain root (local dev / subdomain), set to the
 * subpath when the demo is exported for adminlte.io/themes/next-react (EXPORT=true).
 * Baked in at build time via next.config's `env`.
 */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** Prefix an absolute app path (e.g. "/docs", "/assets/x.png") with BASE. No-op at root. */
export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path // relative / external
  if (!BASE) return path
  if (path === BASE || path.startsWith(BASE + '/')) return path // already prefixed
  return BASE + path
}
