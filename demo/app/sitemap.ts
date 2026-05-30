import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE = 'https://adminlte.io/themes/next-react'

// Primary public routes (trailing slash to match next.config trailingSlash: true)
const paths = [
  '/',
  '/index2',
  '/index3',
  '/generate/theme',
  '/widgets/small-box',
  '/widgets/info-box',
  '/widgets/cards',
  '/UI/general',
  '/UI/icons',
  '/UI/timeline',
  '/forms/elements',
  '/forms/layout',
  '/forms/validation',
  '/forms/wizard',
  '/tables/simple',
  '/tables/data',
  '/mailbox/inbox',
  '/mailbox/compose',
  '/mailbox/read',
  '/pages/profile',
  '/pages/settings',
  '/pages/invoice',
  '/pages/calendar',
  '/pages/kanban',
  '/pages/chat',
  '/pages/file-manager',
  '/pages/projects',
  '/pages/pricing',
  '/pages/faq',
  '/docs/introduction',
  '/docs/installation',
  '/docs/quick-start',
  '/docs/layout',
  '/docs/theming',
  '/docs/plugins',
  '/docs/command-palette',
  '/docs/accessibility',
  '/docs/components/widgets',
  '/docs/components/forms',
  '/docs/components/tools',
  '/docs/hooks',
  '/examples/login',
  '/examples/register',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map(p => ({
    url: SITE + (p === '/' ? '/' : p + '/'),
    changeFrequency: 'weekly',
    priority: p === '/' ? 1 : 0.7,
  }))
}
