'use client'

import { usePathname } from 'next/navigation'
import { SidebarNavItem } from './sidebar-nav-item'
import { useLinkComponent } from '../context/link-context'
import type { MenuNode } from '../types/menu'

export interface SidebarNavProps {
  items: MenuNode[]
  /** Optional footer link (e.g. to your docs). Omitted when not provided. */
  docsHref?: string
  docsLabel?: string
}

export function SidebarNav({ items, docsHref, docsLabel = 'View documentation' }: SidebarNavProps) {
  const pathname = usePathname()
  const Link = useLinkComponent()

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

      {docsHref && (
        <div className="p-3 mt-3 border-top border-secondary border-opacity-25">
          <Link
            href={docsHref}
            className="btn btn-sm btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2"
          >
            <i className="bi bi-book" aria-hidden="true"></i>
            {docsLabel}
          </Link>
        </div>
      )}
    </nav>
  )
}
