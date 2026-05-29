import { useState, useEffect } from 'react'

export interface UsePushMenuOptions {
  sidebarBreakpoint?: number
  enablePersistence?: boolean
  isMiniMode?: boolean
}

export interface UsePushMenuResult {
  isCollapsed: boolean
  isMobileOpen: boolean
  toggle: () => void
  collapse: () => void
  expand: () => void
}

/**
 * Hook that manages sidebar open/collapse state with responsive behavior.
 * Ports the logic from push-menu.ts.
 */
export function usePushMenu(options: UsePushMenuOptions = {}): UsePushMenuResult {
  const { sidebarBreakpoint = 992, enablePersistence = false, isMiniMode = false } = options

  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)

  // Load persisted state on mount
  useEffect(() => {
    if (typeof window === 'undefined') return

    setWindowWidth(window.innerWidth)

    if (enablePersistence) {
      const saved = localStorage.getItem('lte.sidebar.state')
      if (saved) {
        try {
          const { collapsed } = JSON.parse(saved)
          setIsCollapsed(collapsed)
        } catch {
          // ignore parse errors
        }
      }
    }
  }, [enablePersistence])

  // Save state to localStorage
  useEffect(() => {
    if (typeof window === 'undefined' || !enablePersistence) return

    localStorage.setItem('lte.sidebar.state', JSON.stringify({ collapsed: isCollapsed }))
  }, [isCollapsed, enablePersistence])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Apply responsive collapse logic
  useEffect(() => {
    if (windowWidth === null) return

    const isMobileSize = windowWidth <= sidebarBreakpoint

    if (isMobileSize && !isMobileOpen && !isCollapsed) {
      setIsCollapsed(true)
    } else if (!isMobileSize && isCollapsed && !isMiniMode) {
      setIsCollapsed(false)
    }
  }, [windowWidth, sidebarBreakpoint, isMobileOpen, isCollapsed, isMiniMode])

  const toggle = () => setIsCollapsed(v => !v)
  const collapse = () => {
    setIsCollapsed(true)
    setIsMobileOpen(false)
  }
  const expand = () => {
    setIsCollapsed(false)
    setIsMobileOpen(false)
  }

  return { isCollapsed, isMobileOpen, toggle, collapse, expand }
}
