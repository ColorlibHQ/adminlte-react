'use client'

import { useEffect } from 'react'

/**
 * Sets the document direction (`<html dir>`) for RTL layouts.
 * AdminLTE 4 / Bootstrap 5.3 use CSS logical properties, so `dir="rtl"`
 * mirrors the entire layout without a separate stylesheet.
 */
export function HtmlDir({ dir }: { dir: 'ltr' | 'rtl' }) {
  useEffect(() => {
    const root = document.documentElement
    const previous = root.getAttribute('dir')
    root.setAttribute('dir', dir)
    return () => {
      if (previous) root.setAttribute('dir', previous)
      else root.removeAttribute('dir')
    }
  }, [dir])

  return null
}
