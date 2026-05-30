'use client'

import { useEffect } from 'react'

/**
 * Filters a server-rendered list-group (`#listId`) by the text typed into `#inputId`.
 * Date-group header rows (matching `headerClass`) are hidden when their group has no
 * visible items. Works on static server-rendered rows (React doesn't re-render them).
 */
export function ListSearch({
  inputId,
  listId,
  headerClass = 'bg-body-secondary',
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
      let header: HTMLElement | null = null
      let headerVisible = false
      const flush = () => {
        if (header) header.hidden = !headerVisible
      }
      for (const li of Array.from(list.children) as HTMLElement[]) {
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
