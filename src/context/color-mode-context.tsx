'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ColorMode } from '../types/theme'

export interface ColorModeContextValue {
  colorMode: ColorMode
  setColorMode: (mode: ColorMode) => void
  resolvedMode: 'light' | 'dark'
}

const ColorModeContext = createContext<ColorModeContextValue | undefined>(undefined)

export interface ColorModeProviderProps {
  initialMode?: ColorMode
  children: React.ReactNode
}

export function ColorModeProvider({
  initialMode = 'auto',
  children,
}: ColorModeProviderProps) {
  const [colorMode, setColorMode] = useState<ColorMode>(initialMode)
  const [resolvedMode, setResolvedMode] = useState<'light' | 'dark'>('light')
  // Don't apply/persist the default mode until the saved one has been read,
  // otherwise a stored 'dark' is briefly replaced by the default and overwritten.
  const [loaded, setLoaded] = useState(false)

  // Load persisted mode on mount
  useEffect(() => {
    if (typeof window === 'undefined') return

    const saved = localStorage.getItem('lte-theme') as ColorMode | null
    if (saved && ['light', 'dark', 'auto'].includes(saved)) {
      setColorMode(saved)
    }
    setLoaded(true)
  }, [])

  // Apply color mode to <html> and resolve auto mode
  useEffect(() => {
    if (typeof window === 'undefined' || !loaded) return

    let resolved: 'light' | 'dark'

    if (colorMode === 'auto') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } else {
      resolved = colorMode
    }

    setResolvedMode(resolved)
    document.documentElement.setAttribute('data-bs-theme', resolved)

    // Persist to localStorage
    localStorage.setItem('lte-theme', colorMode)
  }, [colorMode, loaded])

  // Listen for system theme changes when in auto mode
  useEffect(() => {
    if (colorMode !== 'auto' || typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const resolved = mediaQuery.matches ? 'dark' : 'light'
      setResolvedMode(resolved)
      document.documentElement.setAttribute('data-bs-theme', resolved)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [colorMode])

  const value: ColorModeContextValue = useMemo(
    () => ({
      colorMode,
      setColorMode,
      resolvedMode,
    }),
    [colorMode, resolvedMode]
  )

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>
}

export function useColorModeContext(): ColorModeContextValue {
  const context = useContext(ColorModeContext)
  if (!context) {
    throw new Error('useColorModeContext must be used within ColorModeProvider')
  }
  return context
}
