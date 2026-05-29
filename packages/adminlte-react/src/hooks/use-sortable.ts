import { useEffect } from 'react'

export function useSortable(enabled = true) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return

    const initSortable = async () => {
      const { default: Sortable } = await import('sortablejs')

      // Initialize sortable on all .connectedSortable elements
      const sortableElements = document.querySelectorAll('.connectedSortable')
      sortableElements.forEach((el) => {
        new Sortable(el as HTMLElement, {
          group: 'shared',
          handle: '.card-header',
          animation: 200,
        })
      })

      // Update cursor style on card headers
      const cardHeaders = document.querySelectorAll('.connectedSortable .card-header')
      cardHeaders.forEach((header) => {
        ;(header as HTMLElement).style.cursor = 'move'
      })
    }

    initSortable().catch(console.error)
  }, [enabled])
}
