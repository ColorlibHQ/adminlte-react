'use client'

import { usePathname } from 'next/navigation'
import { docsSections } from './sections'

export function DocsNav() {
  const pathname = usePathname()

  return (
    <nav className="docs-nav" aria-label="Documentation sections">
      {docsSections.map(section => (
        <div key={section.heading}>
          <p className="docs-nav-heading">{section.heading}</p>
          <ul className="nav flex-column mb-2">
            {section.links.map(link => {
              const active = pathname === link.href
              return (
                <li key={link.href} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link${active ? ' active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
