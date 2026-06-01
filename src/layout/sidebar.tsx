'use client'

import { useEffect, useRef } from 'react'
import { SidebarBrand } from './sidebar-brand'
import { SidebarNav } from './sidebar-nav'
import { SidebarOverlay } from './sidebar-overlay'
import type { MenuNode } from '../types/menu'

export interface SidebarProps {
  items: MenuNode[]
  logo?: React.ReactNode
  logoHref?: string
  theme?: 'light' | 'dark'
  sidebarClass?: string
  docsHref?: string
  docsLabel?: string
}

export function Sidebar({
  items,
  logo,
  logoHref = '/',
  theme = 'dark',
  sidebarClass,
  docsHref,
  docsLabel,
}: SidebarProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Initialize OverlayScrollbars on the sidebar wrapper (themed, auto-hiding),
  // matching the original AdminLTE config. Uses the OverlayScrollbars global the
  // consumer loads (same as the dist HTML); disabled on mobile.
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth <= 992) return
    let instance: { destroy?: () => void } | undefined
    let tries = 0
    const id = window.setInterval(() => {
      const osg = (window as unknown as { OverlayScrollbarsGlobal?: any }).OverlayScrollbarsGlobal
      if (osg?.OverlayScrollbars && wrapperRef.current) {
        instance = osg.OverlayScrollbars(wrapperRef.current, {
          scrollbars: { theme: 'os-theme-light', autoHide: 'leave', clickScroll: true },
        })
        window.clearInterval(id)
      } else if (++tries > 30) {
        window.clearInterval(id)
      }
    }, 100)
    return () => {
      window.clearInterval(id)
      instance?.destroy?.()
    }
  }, [])

  return (
    <>
      <aside className={`app-sidebar ${sidebarClass || ''}`} data-bs-theme={theme}>
        <SidebarBrand logo={logo} href={logoHref} />

        <div className="sidebar-wrapper" ref={wrapperRef}>
          <SidebarNav items={items} docsHref={docsHref} docsLabel={docsLabel} />
        </div>
      </aside>

      <SidebarOverlay />
    </>
  )
}
