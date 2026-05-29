'use client'

import { useSidebarContext } from '../context/sidebar-context'

export function SidebarOverlay() {
  const { collapse } = useSidebarContext()

  return (
    <div
      className="sidebar-overlay"
      onClick={collapse}
      onTouchEnd={collapse}
      role="presentation"
    ></div>
  )
}
