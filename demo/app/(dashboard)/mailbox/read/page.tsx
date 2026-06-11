import { AppContent } from '@adminlte/react'

export const metadata = { title: "Read Mail" }

export default function Page() {
  return (
    <AppContent
      title="Read Message"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Mailbox', href: '/mailbox/inbox' },
        { label: 'Read' },
      ]}
    >
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="card-title">Re: design system v2.4 sign-off</h3>
          <div className="btn-group btn-group-sm">
            <a href="/mailbox/inbox" className="btn btn-outline-secondary" title="Back to inbox">
              <i className="bi bi-arrow-left" aria-hidden="true"></i>
            </a>
            <button className="btn btn-outline-secondary" type="button" title="Previous">
              <i className="bi bi-chevron-up" aria-hidden="true"></i>
            </button>
            <button className="btn btn-outline-secondary" type="button" title="Next">
              <i className="bi bi-chevron-down" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          {/* Sender meta */}
          <div className="d-flex gap-3 align-items-start mb-4">
            <div
              className="flex-shrink-0 rounded-circle bg-primary-subtle text-primary-emphasis d-flex align-items-center justify-content-center"
              style={{ width: '48px', height: '48px' }}
              aria-hidden="true"
            >
              OB
            </div>
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="mb-0 fw-semibold">Olivia Bennett</p>
                  <small className="text-secondary"> olivia@example.com &mdash; to me </small>
                </div>
                <small className="text-secondary">10:42 AM &middot; 2 hours ago</small>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="mb-4">
            <p>Hey Jane,</p>
            <p>
              Reviewed the v2.4 candidate this morning. Overall: looks great, ready to ship pending
              two small notes:
            </p>
            <ol>
              <li>
                Success state on form inputs feels a touch light against{' '}
                <code>bg-body-tertiary</code>. Can we bump the border contrast by ~10%?
              </li>
              <li>
                The new focus ring is lovely on light theme but barely visible on dark. Worth a quick
                a11y pass before we cut the release.
              </li>
            </ol>
            <p>Otherwise, big +1. Customers are going to love the motion primitives.</p>
            <p className="mb-0">
              Olivia
              <br />
              <small className="text-secondary">Sent from my laptop</small>
            </p>
          </div>

          {/* Attachments */}
          <h6 className="fw-semibold">Attachments (2)</h6>
          <div className="row g-2 mb-3">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body py-2 px-3 d-flex align-items-center gap-2">
                  <i className="bi bi-file-earmark-pdf-fill text-danger fs-3" aria-hidden="true"></i>
                  <div className="flex-grow-1">
                    <p className="mb-0 small fw-semibold">design-review.pdf</p>
                    <small className="text-secondary">1.4 MB</small>
                  </div>
                  <a href="#" className="btn btn-sm btn-outline-secondary">
                    <i className="bi bi-download" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body py-2 px-3 d-flex align-items-center gap-2">
                  <i
                    className="bi bi-file-earmark-image-fill text-primary fs-3"
                    aria-hidden="true"
                  ></i>
                  <div className="flex-grow-1">
                    <p className="mb-0 small fw-semibold">focus-ring-dark.png</p>
                    <small className="text-secondary">320 KB</small>
                  </div>
                  <a href="#" className="btn btn-sm btn-outline-secondary">
                    <i className="bi bi-download" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex gap-2">
          <a href="/mailbox/compose" className="btn btn-primary">
            <i className="bi bi-reply me-1" aria-hidden="true"></i>Reply
          </a>
          <button className="btn btn-outline-secondary" type="button">
            <i className="bi bi-arrow-90deg-right me-1" aria-hidden="true"></i>
            Forward
          </button>
          <button className="btn btn-outline-secondary ms-auto" type="button">
            <i className="bi bi-archive me-1" aria-hidden="true"></i>Archive
          </button>
          <button className="btn btn-outline-danger" type="button">
            <i className="bi bi-trash me-1" aria-hidden="true"></i>Delete
          </button>
        </div>
      </div>
    </AppContent>
  )
}
