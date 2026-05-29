import { withBase } from '../../lib/base'

export interface DocsLink {
  label: string
  href: string
}

export interface DocsSection {
  heading: string
  links: DocsLink[]
}

/**
 * Single source of truth for the documentation navigation. Plain data (no
 * 'use client') so it can be imported by both Server Components (the /docs
 * overview) and the client-side DocsNav without crossing the RSC boundary.
 */
const rawSections: DocsSection[] = [
  {
    heading: 'Getting Started',
    links: [
      { label: 'Introduction', href: '/docs/introduction' },
      { label: 'Installation', href: '/docs/installation' },
      { label: 'Quick Start', href: '/docs/quick-start' },
    ],
  },
  {
    heading: 'Guides',
    links: [
      { label: 'Layout & Shell', href: '/docs/layout' },
      { label: 'Theming & Dark Mode', href: '/docs/theming' },
      { label: 'Command Palette (⌘K)', href: '/docs/command-palette' },
      { label: 'Plugins & Dynamic Imports', href: '/docs/plugins' },
      { label: 'Accessibility', href: '/docs/accessibility' },
    ],
  },
  {
    heading: 'API Reference',
    links: [
      { label: 'Widgets', href: '/docs/components/widgets' },
      { label: 'Forms', href: '/docs/components/forms' },
      { label: 'Tools', href: '/docs/components/tools' },
      { label: 'Hooks & Context', href: '/docs/hooks' },
    ],
  },
]

// Prefix hrefs with the deploy base path (no-op at root) so docs nav works and
// its active-state matches usePathname under a subpath.
export const docsSections: DocsSection[] = rawSections.map(section => ({
  ...section,
  links: section.links.map(link => ({ ...link, href: withBase(link.href) })),
}))
