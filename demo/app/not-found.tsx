import { withBase } from '@/lib/base'

export const metadata = { title: '404 — Page not found' }

export default function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-body-tertiary p-3">
      <div className="text-center" style={{ maxWidth: '30rem' }}>
        <div className="display-1 fw-bold text-primary lh-1 mb-3">404</div>
        <h1 className="h3 mb-2">Page not found</h1>
        <p className="text-secondary mb-4">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <a href={withBase('/')} className="btn btn-primary">
          <i className="bi bi-arrow-left me-1" aria-hidden="true" />
          Back to dashboard
        </a>
      </div>
    </div>
  )
}
