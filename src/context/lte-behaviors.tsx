'use client'

import { useEffect } from 'react'

/**
 * Powers AdminLTE's `data-lte-toggle` card/chat behaviors for raw markup
 * (collapse, maximize, remove, chat-pane) without loading adminlte.js.
 * Uses event delegation, so it works for any page content rendered once by
 * React. Toggles the same classes adminlte.css already styles.
 *
 * Note: the React `Card`/`DirectChat` components use their own onClick handlers
 * (no `data-lte-toggle`), so they are unaffected by this delegated listener.
 */
export function LteBehaviors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const btn = target?.closest('[data-lte-toggle]')
      if (!btn) return
      const action = btn.getAttribute('data-lte-toggle')
      const card = btn.closest<HTMLElement>('.card')

      switch (action) {
        case 'card-collapse':
          card?.classList.toggle('collapsed-card')
          break
        case 'card-maximize':
          card?.classList.toggle('maximized-card')
          break
        case 'card-remove':
          card?.remove()
          break
        case 'chat-pane': {
          const chat = btn.closest<HTMLElement>('.direct-chat') ?? card
          chat?.classList.toggle('direct-chat-contacts-open')
          break
        }
        default:
          break
      }
    }

    // Bootstrap-style client validation for `.needs-validation[-tooltip]` forms
    const onSubmit = (e: Event) => {
      const form = (e.target as HTMLElement)?.closest<HTMLFormElement>(
        '.needs-validation, .needs-validation-tooltip'
      )
      if (!form) return
      if (!form.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
      }
      form.classList.add('was-validated')
    }

    document.addEventListener('click', onClick)
    document.addEventListener('submit', onSubmit, true)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('submit', onSubmit, true)
    }
  }, [])

  return null
}
