'use client'

import { useEffect } from 'react'

/**
 * Filters a server-rendered list (`#listId`) by the text typed into `#inputId`.
 *
 * By default every direct-child row is shown/hidden by whether its `textContent`
 * contains the query. Pass `headerClass` to opt into group-header mode: rows with
 * that class are treated as section headers and hidden when their group has no
 * visible items. Works on static server-rendered rows (React doesn't re-render them).
 */
export function ListSearch({
  inputId,
  listId,
  headerClass,
}: {
  inputId: string
  listId: string
  headerClass?: string
}) {
  useEffect(() => {
    const input = document.getElementById(inputId) as HTMLInputElement | null
    const list = document.getElementById(listId)
    if (!input || !list) return

    const onInput = () => {
      const q = input.value.trim().toLowerCase()
      const rows = Array.from(list.children) as HTMLElement[]

      // Flat mode: filter every row by its text.
      if (!headerClass) {
        for (const li of rows) {
          li.hidden = !!q && !(li.textContent || '').toLowerCase().includes(q)
        }
        return
      }

      // Group-header mode: hide a header when its group has no visible items.
      let header: HTMLElement | null = null
      let headerVisible = false
      const flush = () => {
        if (header) header.hidden = !headerVisible
      }
      for (const li of rows) {
        if (li.classList.contains(headerClass)) {
          flush()
          header = li
          headerVisible = false
          continue
        }
        const match = !q || (li.textContent || '').toLowerCase().includes(q)
        li.hidden = !match
        if (match) headerVisible = true
      }
      flush()
    }

    input.addEventListener('input', onInput)
    return () => input.removeEventListener('input', onInput)
  }, [inputId, listId, headerClass])

  return null
}
