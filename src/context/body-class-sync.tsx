'use client'

import { useEffect } from 'react'
import { useSidebarContext } from './sidebar-context'

export interface BodyClassSyncProps {
  staticClasses: string
}

/**
 * Synchronizes React state to document.body classes.
 * This component has no visual output; it only manages CSS classes.
 */
export function BodyClassSync({ staticClasses }: BodyClassSyncProps) {
  const { isCollapsed, isMobileOpen, isMiniMode } = useSidebarContext()

  useEffect(() => {
    const body = document.body

    // Apply static classes once
    const staticList = staticClasses.split(' ').filter(Boolean)
    staticList.forEach(cls => body.classList.add(cls))

    // Apply dynamic classes
    body.classList.toggle('sidebar-collapse', isCollapsed)
    body.classList.toggle('sidebar-open', isMobileOpen)
    body.classList.toggle('sidebar-mini', isMiniMode)

    // Cleanup on unmount
    return () => {
      staticList.forEach(cls => body.classList.remove(cls))
      body.classList.remove('sidebar-collapse', 'sidebar-open', 'sidebar-mini')
    }
  }, [isCollapsed, isMobileOpen, isMiniMode, staticClasses])

  return null
}
