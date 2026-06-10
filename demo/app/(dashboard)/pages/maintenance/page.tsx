import { AppContent } from '@colorlib/adminlte-react'

export const metadata = { title: "Maintenance" }

export default function Page() {
  return (
    <AppContent
      title="Maintenance"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Maintenance' }]}
    >
      <div className="row justify-content-center py-5">
        <div className="col-md-8 col-lg-6 text-center">
          <i className="bi bi-tools text-warning" style={{ fontSize: '4rem' }} aria-hidden="true" />
          <h1 className="h3 mt-3 mb-2">We&rsquo;ll be right back.</h1>
          <p className="text-secondary mb-4">
            The application is undergoing scheduled maintenance. We expect to be back online shortly.
            Thanks for your patience.
          </p>
          <div className="card mx-auto" style={{ maxWidth: '24rem' }}>
            <div className="card-body text-start">
              <p className="text-secondary small mb-2">Estimated completion</p>
              <p className="fw-semibold mb-0">
                <i className="bi bi-clock me-1" aria-hidden="true" />
                In approximately 30 minutes
              </p>
            </div>
          </div>
          <p className="text-secondary small mt-4 mb-0">
            For urgent issues, reach us at{' '}
            <a href="mailto:support@example.com">support@example.com</a>
          </p>
        </div>
      </div>
    </AppContent>
  )
}
