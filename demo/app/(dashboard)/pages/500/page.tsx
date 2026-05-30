import { AppContent } from 'adminlte-react'

export const metadata = { title: "500 Server Error" }

export default function Page() {
  return (
    <AppContent
      title="500 Error Page"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: '500 Error Page' }]}
    >
      <div className="row justify-content-center py-5">
        <div className="col-md-8 col-lg-6 text-center">
          <div className="display-1 fw-bold text-danger lh-1 mb-3">500</div>
          <h1 className="h3 mb-3">Something went wrong on our end.</h1>
          <p className="text-secondary mb-4">
            The server encountered an unexpected condition. Our team has been notified. Please try
            again in a moment, or contact support if the issue persists.
          </p>
          <div className="d-flex gap-2 justify-content-center">
            <a href="/" className="btn btn-primary">
              <i className="bi bi-arrow-left me-1" aria-hidden="true" />
              Back to dashboard
            </a>
            <a href="mailto:support@example.com" className="btn btn-outline-secondary">
              <i className="bi bi-life-preserver me-1" aria-hidden="true" />
              Contact support
            </a>
          </div>
        </div>
      </div>
    </AppContent>
  )
}
