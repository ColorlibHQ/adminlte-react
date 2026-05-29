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
export const docsSections: DocsSection[] = [
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
