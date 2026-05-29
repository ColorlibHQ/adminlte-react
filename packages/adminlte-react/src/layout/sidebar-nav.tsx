'use client'

import { usePathname } from 'next/navigation'
import { SidebarNavItem } from './sidebar-nav-item'
import type { MenuNode } from '../types/menu'

export interface SidebarNavProps {
  items: MenuNode[]
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className="mt-2" aria-label="Main navigation">
      <ul
        className="nav sidebar-menu flex-column"
        data-lte-toggle="treeview"
        data-accordion="false"
        id="navigation"
      >
        {items.map((item, idx) => (
          <SidebarNavItem
            key={idx}
            item={item}
            currentPath={pathname}
            depth={0}
          />
        ))}
      </ul>

      <div className="p-3 mt-3 border-top border-secondary border-opacity-25">
        <a
          href="https://adminlte.io/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2"
        >
          <i className="bi bi-book" aria-hidden="true"></i>
          View documentation
        </a>
      </div>
    </nav>
  )
}
