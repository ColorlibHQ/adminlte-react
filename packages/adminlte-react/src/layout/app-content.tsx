import type { AppContentProps } from '../types/layout'

export function AppContent({
  breadcrumbs,
  title,
  fluid = true,
  children,
}: AppContentProps) {
  return (
    <>
      {(title || breadcrumbs) && (
        <div className="app-content-header">
          <div className={`container-${fluid ? 'fluid' : 'lg'}`}>
            <div className="row">
              <div className="col-sm-6">
                {title && <h3 className="mb-0">{title}</h3>}
              </div>
              {breadcrumbs && breadcrumbs.length > 0 && (
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-end">
                    {breadcrumbs.map((crumb, idx) => (
                      <li key={idx} className={`breadcrumb-item ${idx === breadcrumbs.length - 1 ? 'active' : ''}`}>
                        {crumb.href ? (
                          <a href={crumb.href}>{crumb.label}</a>
                        ) : (
                          crumb.label
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="app-content">
        <div className={`container-${fluid ? 'fluid' : 'lg'}`}>{children}</div>
      </div>
    </>
  )
}
