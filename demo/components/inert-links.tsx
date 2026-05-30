'use client'

import { useEffect } from 'react'

/**
 * AdminLTE ships placeholder navigation links as `href="#"`. On click those jump
 * the page to the top, which feels broken. This island intercepts clicks on exactly
 * `a[href="#"]` and prevents that jump — without touching Bootstrap toggles
 * (`href="#tab"`, which Bootstrap handles itself) or real links.
 */
export function InertLinks() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null
      const link = target?.closest('a[href="#"]')
      if (link) e.preventDefault()
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
