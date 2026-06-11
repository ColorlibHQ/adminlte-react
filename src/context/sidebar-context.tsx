'use client'

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export interface SidebarContextValue {
  isCollapsed: boolean
  isMobileOpen: boolean
  isMiniMode: boolean
  toggle: () => void
  collapse: () => void
  expand: () => void
  sidebarBreakpoint: number
}

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined)

export interface SidebarProviderProps {
  sidebarMini?: boolean
  enablePersistence?: boolean
  sidebarBreakpoint?: number
  children: React.ReactNode
}

export function SidebarProvider({
  sidebarMini = false,
  enablePersistence = false,
  sidebarBreakpoint = 992,
  children,
}: SidebarProviderProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMiniMode] = useState(sidebarMini)
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

  // When growing back to desktop, close the mobile off-canvas overlay.
  // (Desktop collapse state is controlled solely by the user toggle.)
  useEffect(() => {
    if (windowWidth === null) return
    const isMobileSize = windowWidth <= sidebarBreakpoint
    if (!isMobileSize && isMobileOpen) {
      setIsMobileOpen(false)
    }
  }, [windowWidth, sidebarBreakpoint, isMobileOpen])

  // On mobile the toggle controls the off-canvas overlay (sidebar-open);
  // on desktop it controls the collapsed state (sidebar-collapse).
  const toggle = useCallback(() => {
    const w = windowWidth ?? (typeof window !== 'undefined' ? window.innerWidth : 9999)
    if (w <= sidebarBreakpoint) {
      setIsMobileOpen(v => !v)
    } else {
      setIsCollapsed(v => !v)
    }
  }, [windowWidth, sidebarBreakpoint])
  const collapse = useCallback(() => {
    setIsCollapsed(true)
    setIsMobileOpen(false)
  }, [])
  const expand = useCallback(() => {
    setIsCollapsed(false)
    setIsMobileOpen(false)
  }, [])

  const value: SidebarContextValue = useMemo(
    () => ({
      isCollapsed,
      isMobileOpen,
      isMiniMode,
      toggle,
      collapse,
      expand,
      sidebarBreakpoint,
    }),
    [isCollapsed, isMobileOpen, isMiniMode, toggle, collapse, expand, sidebarBreakpoint]
  )

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}

export function useSidebarContext(): SidebarContextValue {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebarContext must be used within SidebarProvider')
  }
  return context
}
