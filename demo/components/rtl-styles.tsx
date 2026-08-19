'use client'

import { useEffect } from 'react'
import { withBase } from '@/lib/base'

// Resolved against the deploy base path: files under public/ are served from the
// base, not the domain root, so a hardcoded "/css/..." 404s in the subpath export
// (EXPORT=true -> /themes/next-react). withBase is a no-op at the root (dev).
const RTL_HREF = withBase('/css/adminlte.rtl.css')

/**
 * Loads AdminLTE's dedicated RTL stylesheet for the RTL demo page (the same
 * build the original dist uses). Appended after the bundled LTR CSS so its
 * rules win the cascade; removed on unmount.
 */
export function RtlStyles() {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>(`link[href="${RTL_HREF}"]`)
    const created = !link
    if (!link) {
      link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = RTL_HREF
      document.head.append(link)
    }
    return () => {
      if (created) link?.remove()
    }
  }, [])

  return null
}
