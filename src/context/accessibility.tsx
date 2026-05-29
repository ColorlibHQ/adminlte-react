'use client'

import { useEffect } from 'react'

/**
 * Client-side accessibility behaviors ported from AdminLTE's accessibility.ts
 * (WCAG 2.1 AA): skip links, ARIA live region, focus management, reduced-motion,
 * landmark roles, and table/form enhancements. Mounted once by DashboardLayout.
 *
 * The skip-link / live-region styles already ship in adminlte.css.
 */
export function Accessibility() {
  useEffect(() => {
    if (typeof document === 'undefined') return

    const created: Element[] = []
    const cleanups: Array<() => void> = []

    // --- WCAG 4.1.3: live region for status announcements ---
    let liveRegion = document.getElementById('live-region')
    if (!liveRegion) {
      liveRegion = document.createElement('div')
      liveRegion.id = 'live-region'
      liveRegion.className = 'live-region'
      liveRegion.setAttribute('aria-live', 'polite')
      liveRegion.setAttribute('aria-atomic', 'true')
      liveRegion.setAttribute('role', 'status')
      document.body.append(liveRegion)
      created.push(liveRegion)
    }
    const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
      if (!liveRegion) return
      liveRegion.setAttribute('aria-live', priority)
      liveRegion.textContent = message
      window.setTimeout(() => {
        if (liveRegion) liveRegion.textContent = ''
      }, 1000)
    }

    // --- WCAG 2.4.1: skip links ---
    if (!document.querySelector('.skip-links')) {
      const container = document.createElement('div')
      container.className = 'skip-links'
      const mk = (href: string, text: string) => {
        const a = document.createElement('a')
        a.href = href
        a.className = 'skip-link'
        a.textContent = text
        return a
      }
      container.append(mk('#main', 'Skip to main content'))
      container.append(mk('#navigation', 'Skip to navigation'))
      document.body.insertBefore(container, document.body.firstChild)
      created.push(container)

      const main = document.querySelector('#main, main, [role="main"]')
      if (main) {
        if (!main.id) main.id = 'main'
        if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1')
      }
      const nav = document.querySelector('#navigation, nav, [role="navigation"]')
      if (nav) {
        if (!nav.id) nav.id = 'navigation'
        if (!nav.hasAttribute('tabindex')) nav.setAttribute('tabindex', '-1')
      }
    }

    // --- WCAG 2.4.3: Escape closes open dropdowns (modals handled by Bootstrap) ---
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      if (document.querySelector('.modal.show')) return
      if (document.querySelector('.dropdown-menu.show')) {
        const toggleButton = document.querySelector<HTMLElement>(
          '[data-bs-toggle="dropdown"][aria-expanded="true"]'
        )
        toggleButton?.click()
        event.preventDefault()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    cleanups.push(() => document.removeEventListener('keydown', onKeyDown))

    // --- WCAG 2.3.3: reduced motion ---
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduce-motion')
      document.documentElement.style.scrollBehavior = 'auto'
      const style = document.createElement('style')
      style.textContent =
        '*, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }'
      document.head.append(style)
      created.push(style)
      cleanups.push(() => document.body.classList.remove('reduce-motion'))
    }

    // --- Landmarks (skip <ul>/<ol> per #6038) ---
    const appMain = document.querySelector('.app-main')
    if (appMain) {
      if (!appMain.getAttribute('role')) appMain.setAttribute('role', 'main')
      if (!appMain.id) appMain.id = 'main'
    }
    document.querySelectorAll('.navbar-nav, .nav').forEach((nav, index) => {
      if (nav.tagName === 'UL' || nav.tagName === 'OL') return
      if (!nav.hasAttribute('role')) nav.setAttribute('role', 'navigation')
      if (!nav.hasAttribute('aria-label')) nav.setAttribute('aria-label', `Navigation ${index + 1}`)
    })

    // --- WCAG 1.3.1: table semantics ---
    document.querySelectorAll('table').forEach((table) => {
      if (!table.hasAttribute('role')) table.setAttribute('role', 'table')
      table.querySelectorAll('th').forEach((th) => {
        if (!th.hasAttribute('scope')) {
          if (th.closest('thead')) th.setAttribute('scope', 'col')
          else if ((th as HTMLTableCellElement).cellIndex === 0) th.setAttribute('scope', 'row')
        }
      })
    })

    // --- WCAG 3.3.2: form labels + invalid announcements ---
    document.querySelectorAll<HTMLInputElement>('input, select, textarea').forEach((input) => {
      if (
        !input.labels?.length &&
        !input.hasAttribute('aria-label') &&
        !input.hasAttribute('aria-labelledby')
      ) {
        const placeholder = input.getAttribute('placeholder')
        if (placeholder) input.setAttribute('aria-label', placeholder)
      }
      if (!input.classList.contains('disable-adminlte-validations')) {
        const onInvalid = () => {
          input.classList.add('is-invalid')
          announce(
            `Error in ${input.labels?.[0]?.textContent || input.name}: ${input.validationMessage}`,
            'assertive'
          )
        }
        input.addEventListener('invalid', onInvalid)
        cleanups.push(() => input.removeEventListener('invalid', onInvalid))
      }
    })

    // --- Modal & dropdown focus management (Bootstrap events) ---
    const focusHistory: HTMLElement[] = []
    const onModalShown = (e: Event) => {
      const modal = e.target as HTMLElement
      const focusable = modal.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      focusHistory.push(document.activeElement as HTMLElement)
      focusable?.focus()
    }
    const onModalHidden = () => focusHistory.pop()?.focus()
    const onDropdownShown = (e: Event) => {
      const dropdown = e.target as HTMLElement
      dropdown.querySelector<HTMLElement>('.dropdown-menu a, .dropdown-menu button')?.focus()
    }
    document.addEventListener('shown.bs.modal', onModalShown)
    document.addEventListener('hidden.bs.modal', onModalHidden)
    document.addEventListener('shown.bs.dropdown', onDropdownShown)
    cleanups.push(() => {
      document.removeEventListener('shown.bs.modal', onModalShown)
      document.removeEventListener('hidden.bs.modal', onModalHidden)
      document.removeEventListener('shown.bs.dropdown', onDropdownShown)
    })

    return () => {
      cleanups.forEach((fn) => fn())
      created.forEach((el) => el.remove())
    }
  }, [])

  return null
}
