'use client'

import { useState } from 'react'

export interface TabItem {
  label: React.ReactNode
  children: React.ReactNode
}

export interface TabsProps {
  items: TabItem[]
  defaultIndex?: number
  variant?: 'tabs' | 'pills'
  fill?: boolean
  justified?: boolean
  className?: string
}

/**
 * Bootstrap tabs/pills driven by React state (no Bootstrap JS).
 */
export function Tabs({
  items,
  defaultIndex = 0,
  variant = 'tabs',
  fill,
  justified,
  className,
}: TabsProps) {
  const [active, setActive] = useState(defaultIndex)

  return (
    <div className={className}>
      <ul
        className={`nav nav-${variant}${fill ? ' nav-fill' : ''}${justified ? ' nav-justified' : ''}`}
        role="tablist"
      >
        {items.map((item, i) => (
          <li className="nav-item" role="presentation" key={i}>
            <button
              type="button"
              className={`nav-link${i === active ? ' active' : ''}`}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content pt-3">
        {items.map((item, i) => (
          <div
            key={i}
            role="tabpanel"
            className={`tab-pane fade${i === active ? ' show active' : ''}`}
            hidden={i !== active}
          >
            {item.children}
          </div>
        ))}
      </div>
    </div>
  )
}
