'use client'

import { useState } from 'react'
import { useTreeviewAnimation } from '../hooks/use-treeview-animation'
import type { MenuGroup, MenuNode } from '../types/menu'
import { cn } from '../lib/class-name'

export interface SidebarNavItemProps {
  item: MenuNode
  currentPath: string
  depth?: number
}

/** Collapsible group — isolated so its hooks are always called unconditionally. */
function SidebarNavGroup({
  item,
  currentPath,
  depth,
}: {
  item: MenuGroup
  currentPath: string
  depth: number
}) {
  const hasActiveChild = item.children.some(
    child =>
      child.type === 'item' &&
      (currentPath === child.href || currentPath.startsWith(child.href + '/'))
  )
  const [isOpen, setIsOpen] = useState(hasActiveChild)
  const { ref, style } = useTreeviewAnimation(isOpen, 300)

  return (
    <li className={cn('nav-item', isOpen && 'menu-open')}>
      <button type="button" className="nav-link" onClick={() => setIsOpen(!isOpen)}>
        {item.icon && <i className={`nav-icon bi ${item.icon}`}></i>}
        <p>
          {item.text}
          <i className="nav-arrow bi bi-chevron-right"></i>
        </p>
        {item.badge && (
          <span className={`nav-badge badge text-bg-${item.badgeColor || 'secondary'} ms-auto me-3`}>
            {item.badge}
          </span>
        )}
      </button>

      <ul ref={ref} style={style} className="nav nav-treeview">
        {item.children.map((child, idx) => (
          <SidebarNavItem key={idx} item={child} currentPath={currentPath} depth={depth + 1} />
        ))}
      </ul>
    </li>
  )
}

export function SidebarNavItem({ item, currentPath, depth = 0 }: SidebarNavItemProps) {
  if (item.type === 'header') {
    return <li className="nav-header">{item.text}</li>
  }

  if (item.type === 'item') {
    const isActive = currentPath === item.href || currentPath.startsWith(item.href + '/')
    return (
      <li className={cn('nav-item', isActive && 'active')}>
        <a href={item.href} className={cn('nav-link', isActive && 'active')} target={item.target}>
          {item.icon && (
            <i className={cn('nav-icon bi', item.icon, item.iconColor && `text-${item.iconColor}`)}></i>
          )}
          <p>{item.text}</p>
          {item.badge && (
            <span className={`nav-badge badge text-bg-${item.badgeColor || 'secondary'} ms-auto`}>
              {item.badge}
            </span>
          )}
        </a>
      </li>
    )
  }

  return <SidebarNavGroup item={item} currentPath={currentPath} depth={depth} />
}
