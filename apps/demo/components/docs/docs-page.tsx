import { AppContent } from 'adminlte-react'
import { DocsNav } from './docs-nav'

interface DocsPageProps {
  title: string
  lead?: string
  children: React.ReactNode
}

/**
 * Shared shell for every /docs page: AppContent header + breadcrumbs, a sticky
 * docs nav sidebar, and the content column. Pages only supply their content.
 */
export function DocsPage({ title, lead, children }: DocsPageProps) {
  return (
    <AppContent
      title={title}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Documentation', href: '/docs' },
        { label: title },
      ]}
    >
      <div className="row g-4">
        <aside className="col-lg-3 col-xl-2 order-2 order-lg-1">
          <DocsNav />
        </aside>
        <div className="col-lg-9 col-xl-10 order-1 order-lg-2">
          <article className="docs-content">
            {lead && <p className="docs-lead">{lead}</p>}
            {children}
          </article>
        </div>
      </div>
    </AppContent>
  )
}
