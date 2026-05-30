import type { Metadata } from 'next'
import { DocsPage } from '@/components/docs/docs-page'
import { docsSections } from '@/components/docs/sections'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Guides and API reference for the adminlte-react component library.',
}

export default function DocsOverviewPage() {
  return (
    <DocsPage
      title="Documentation"
      lead="adminlte-react is an AdminLTE 4 / Bootstrap 5.3 component library built for the Next.js App Router and React Server Components."
    >
      <p>
        These docs cover installation, the layout shell, theming, the dynamic-import
        plugin system, and a full API reference for every exported component, hook, and
        context. New here? Start with the <a href="/docs/introduction">Introduction</a>,
        then follow <a href="/docs/installation">Installation</a> and the{' '}
        <a href="/docs/quick-start">Quick Start</a>.
      </p>

      {docsSections.map(section => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <div className="row g-3">
            {section.links.map(link => (
              <div key={link.href} className="col-sm-6 col-lg-4">
                <a href={link.href} className="card h-100 text-decoration-none">
                  <div className="card-body">
                    <h3 className="h6 mb-1 text-body">{link.label}</h3>
                    <p className="text-secondary small mb-0">{link.href}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}
    </DocsPage>
  )
}
