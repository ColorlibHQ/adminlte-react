'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

/**
 * When the demo is exported under a subpath (EXPORT=true → /themes/next-react),
 * rewrites internal absolute links and /assets image sources to include the base
 * path. Idempotent and a no-op at the domain root (local dev), so individual pages
 * can keep using plain "/..." paths. Centralizes the long tail of breadcrumb/page
 * links + assets that aren't already prefixed at the data layer.
 */
export function SubpathLinks() {
  const pathname = usePathname()

  useEffect(() => {
    if (!BASE) return
    document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach(el => {
      const href = el.getAttribute('href') || ''
      if (href.startsWith('//') || href === BASE || href.startsWith(BASE + '/')) return
      el.setAttribute('href', BASE + href)
    })
    document.querySelectorAll<HTMLImageElement>('img[src^="/assets"]').forEach(el => {
      const src = el.getAttribute('src') || ''
      if (src.startsWith(BASE + '/')) return
      el.setAttribute('src', BASE + src)
    })
  }, [pathname])

  return null
}
