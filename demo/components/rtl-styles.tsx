'use client'

import { useEffect } from 'react'

const RTL_HREF = '/css/adminlte.rtl.css'

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
