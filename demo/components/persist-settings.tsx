'use client'

import { useEffect } from 'react'

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

/**
 * Persists every form control with an `id` inside `#${rootId}` to localStorage,
 * restoring values on mount and saving on change. A small demonstration of
 * client-side state persistence on top of the otherwise-static settings markup.
 */
export function PersistSettings({
  rootId,
  storageKey = 'adminlte.settings',
}: {
  rootId: string
  storageKey?: string
}) {
  useEffect(() => {
    const root = document.getElementById(rootId)
    if (!root) return

    const fields = () =>
      Array.from(root.querySelectorAll<Field>('input[id], select[id], textarea[id]'))
    const isToggle = (el: Field) =>
      el instanceof HTMLInputElement && (el.type === 'checkbox' || el.type === 'radio')

    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}')
      fields().forEach(el => {
        if (!(el.id in saved)) return
        if (isToggle(el)) (el as HTMLInputElement).checked = Boolean(saved[el.id])
        else el.value = String(saved[el.id])
      })
    } catch {
      /* ignore corrupt storage */
    }

    const save = () => {
      const data: Record<string, unknown> = {}
      fields().forEach(el => {
        data[el.id] = isToggle(el) ? (el as HTMLInputElement).checked : el.value
      })
      localStorage.setItem(storageKey, JSON.stringify(data))
    }

    root.addEventListener('change', save)
    return () => root.removeEventListener('change', save)
  }, [rootId, storageKey])

  return null
}
