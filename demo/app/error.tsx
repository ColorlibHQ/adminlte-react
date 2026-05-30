'use client'

import { useEffect } from 'react'
import { withBase } from '@/lib/base'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to an error reporting service in a real app
    console.error(error)
  }, [error])

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-body-tertiary p-3">
      <div className="text-center" style={{ maxWidth: '32rem' }}>
        <div className="display-1 fw-bold text-danger lh-1 mb-3">500</div>
        <h1 className="h3 mb-2">Something went wrong</h1>
        <p className="text-secondary mb-4">
          An unexpected error occurred. You can try again, or head back to the dashboard.
        </p>
        <div className="d-flex gap-2 justify-content-center">
          <button type="button" className="btn btn-primary" onClick={reset}>
            <i className="bi bi-arrow-clockwise me-1" aria-hidden="true" />
            Try again
          </button>
          <a href={withBase('/')} className="btn btn-outline-secondary">
            Back to dashboard
          </a>
        </div>
      </div>
    </div>
  )
}
