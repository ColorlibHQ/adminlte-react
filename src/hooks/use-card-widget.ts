import { useState } from 'react'

export interface UseCardWidgetResult {
  isCollapsed: boolean
  isMaximized: boolean
  isRemoved: boolean
  collapse: () => void
  expand: () => void
  toggleCollapse: () => void
  maximize: () => void
  minimize: () => void
  toggleMaximize: () => void
  remove: () => void
}

/**
 * Hook that manages card widget state: collapse, maximize, and remove.
 * Ports the logic from card-widget.ts.
 */
export function useCardWidget(initialCollapsed = false): UseCardWidgetResult {
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsed)
  const [isMaximized, setIsMaximized] = useState(false)
  const [isRemoved, setIsRemoved] = useState(false)

  const collapse = () => setIsCollapsed(true)
  const expand = () => setIsCollapsed(false)
  const toggleCollapse = () => setIsCollapsed(v => !v)

  const maximize = () => {
    setIsMaximized(true)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('maximized-card')
    }
  }

  const minimize = () => {
    setIsMaximized(false)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('maximized-card')
    }
  }

  const toggleMaximize = () => {
    if (isMaximized) {
      minimize()
    } else {
      maximize()
    }
  }

  const remove = () => setIsRemoved(true)

  return {
    isCollapsed,
    isMaximized,
    isRemoved,
    collapse,
    expand,
    toggleCollapse,
    maximize,
    minimize,
    toggleMaximize,
    remove,
  }
}
