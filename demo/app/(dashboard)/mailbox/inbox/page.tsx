import { AppContent } from '@adminlte/react'
import { ListSearch } from '@/components/list-search'

export const metadata = { title: "Inbox" }

export default function Page() {
  return (
    <AppContent
      title="Mailbox"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Inbox' }]}
    >
      <div className="row g-3">
        {/* Folder sidebar */}
        <div className="col-lg-3">
          <a href="/mailbox/compose" className="btn btn-primary w-100 mb-3">
            <i className="bi bi-pencil-square me-1" aria-hidden="true"></i>
            Compose
          </a>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Folders</h3>
            </div>
            <div className="card-body p-0">
              <ul className="nav nav-pills flex-column mb-0">
                <li className="nav-item">
                  <a
                    href="/mailbox/inbox"
                    className="nav-link active rounded-0 d-flex justify-content-between"
                  >
                    <span>
                      {' '}
                      <i className="bi bi-inbox me-2" aria-hidden="true"></i>Inbox{' '}
                    </span>
                    <span className="badge text-bg-primary">3</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link rounded-0">
                    <i className="bi bi-send me-2" aria-hidden="true"></i>Sent
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link rounded-0 d-flex justify-content-between">
                    <span>
                      <i className="bi bi-file-earmark me-2" aria-hidden="true"></i>
                      Drafts
                    </span>
                    <span className="badge text-bg-secondary">2</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link rounded-0">
                    <i className="bi bi-star me-2" aria-hidden="true"></i>Starred
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link rounded-0">
                    <i className="bi bi-archive me-2" aria-hidden="true"></i>Archive
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link rounded-0">
                    <i className="bi bi-exclamation-octagon me-2" aria-hidden="true"></i>
                    Spam
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link rounded-0">
                    <i className="bi bi-trash me-2" aria-hidden="true"></i>Trash
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-header">
              <h3 className="card-title">Labels</h3>
            </div>
            <div className="card-body p-0">
              <ul className="nav flex-column mb-0">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i
                      className="bi bi-circle-fill text-primary me-2"
                      style={{ fontSize: '0.6rem' }}
                      aria-hidden="true"
                    ></i>
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i
                      className="bi bi-circle-fill text-success me-2"
                      style={{ fontSize: '0.6rem' }}
                      aria-hidden="true"
                    ></i>
                    Billing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i
                      className="bi bi-circle-fill text-warning me-2"
                      style={{ fontSize: '0.6rem' }}
                      aria-hidden="true"
                    ></i>
                    Internal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Inbox list */}
        <div className="col-lg-9">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Inbox</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{ width: '16rem' }}>
                  <span className="input-group-text">
                    <i className="bi bi-search" aria-hidden="true"></i>
                  </span>
                  <input
                    id="inbox-search"
                    type="search"
                    className="form-control"
                    placeholder="Search mail…"
                    aria-label="Search mail"
                  />
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="d-flex align-items-center px-3 py-2 border-bottom">
                <div className="form-check mb-0">
                  <input className="form-check-input" type="checkbox" id="select-all" />
                  <label className="form-check-label visually-hidden" htmlFor="select-all">
                    Select all
                  </label>
                </div>
                <div className="btn-group btn-group-sm ms-3">
                  <button className="btn btn-outline-secondary" type="button" title="Refresh">
                    <i className="bi bi-arrow-clockwise" aria-hidden="true"></i>
                  </button>
                  <button className="btn btn-outline-secondary" type="button" title="Archive">
                    <i className="bi bi-archive" aria-hidden="true"></i>
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    title="Mark as spam"
                  >
                    <i className="bi bi-exclamation-octagon" aria-hidden="true"></i>
                  </button>
                  <button className="btn btn-outline-secondary" type="button" title="Delete">
                    <i className="bi bi-trash" aria-hidden="true"></i>
                  </button>
                </div>
                <span className="ms-auto text-secondary small"> 1&ndash;8 of 8 </span>
              </div>
              <ListSearch inputId="inbox-search" listId="inbox-list" />
              <ul id="inbox-list" className="list-group list-group-flush mb-0">
                <li className="list-group-item d-flex align-items-center gap-2 fw-semibold bg-body-secondary">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" id="msg-0" />
                    <label className="form-check-label visually-hidden" htmlFor="msg-0">
                      Select message from Olivia Bennett
                    </label>
                  </div>
                  <button
                    className="btn btn-link p-0 text-warning lh-1"
                    type="button"
                    title="Starred"
                    aria-label="Starred"
                  >
                    <i className="bi bi-star-fill" aria-hidden="true"></i>
                  </button>
                  <a
                    href="/mailbox/read"
                    className="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                  >
                    <span className="text-truncate" style={{ minWidth: '9rem' }}>
                      Olivia Bennett
                    </span>
                    <span className="flex-grow-1 text-truncate">
                      <span className="badge text-bg-primary me-2"> &middot; </span>
                      Re: design system v2.4 sign-off
                      <span className="fw-normal text-secondary">
                        &nbsp;&mdash; Approved — a few small notes on the success state for forms.
                      </span>
                    </span>
                    <span className="text-secondary small text-md-end" style={{ minWidth: '5rem' }}>
                      10:42 AM
                    </span>
                  </a>
                </li>
                <li className="list-group-item d-flex align-items-center gap-2 fw-semibold bg-body-secondary">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" id="msg-1" />
                    <label className="form-check-label visually-hidden" htmlFor="msg-1">
                      Select message from GitHub
                    </label>
                  </div>
                  <button
                    className="btn btn-link p-0 text-warning lh-1"
                    type="button"
                    title="Star"
                    aria-label="Star"
                  >
                    <i className="bi bi-star" aria-hidden="true"></i>
                  </button>
                  <a
                    href="/mailbox/read"
                    className="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                  >
                    <span className="text-truncate" style={{ minWidth: '9rem' }}>
                      {' '}
                      GitHub{' '}
                    </span>
                    <span className="flex-grow-1 text-truncate">
                      <span className="badge text-bg-secondary me-2"> &middot; </span>
                      [fullcalendar/fullcalendar] PR #6912 merged
                      <span className="fw-normal text-secondary">
                        &nbsp;&mdash; Allow custom render hooks for time grid axis labels.
                      </span>
                    </span>
                    <span className="text-secondary small text-md-end" style={{ minWidth: '5rem' }}>
                      9:08 AM
                    </span>
                  </a>
                </li>
                <li className="list-group-item d-flex align-items-center gap-2 fw-semibold bg-body-secondary">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" id="msg-2" />
                    <label className="form-check-label visually-hidden" htmlFor="msg-2">
                      Select message from Stripe
                    </label>
                  </div>
                  <button
                    className="btn btn-link p-0 text-warning lh-1"
                    type="button"
                    title="Star"
                    aria-label="Star"
                  >
                    <i className="bi bi-star" aria-hidden="true"></i>
                  </button>
                  <a
                    href="/mailbox/read"
                    className="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                  >
                    <span className="text-truncate" style={{ minWidth: '9rem' }}>
                      {' '}
                      Stripe{' '}
                    </span>
                    <span className="flex-grow-1 text-truncate">
                      <span className="badge text-bg-success me-2"> &middot; </span>
                      Your May invoice is ready
                      <span className="fw-normal text-secondary">
                        &nbsp;&mdash; Invoice INV-2026-00428 totaling $108.31 has been issued.
                      </span>
                    </span>
                    <span className="text-secondary small text-md-end" style={{ minWidth: '5rem' }}>
                      8:15 AM
                    </span>
                  </a>
                </li>
                <li className="list-group-item d-flex align-items-center gap-2">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" id="msg-3" />
                    <label className="form-check-label visually-hidden" htmlFor="msg-3">
                      Select message from Marcus Reyes
                    </label>
                  </div>
                  <button
                    className="btn btn-link p-0 text-warning lh-1"
                    type="button"
                    title="Starred"
                    aria-label="Starred"
                  >
                    <i className="bi bi-star-fill" aria-hidden="true"></i>
                  </button>
                  <a
                    href="/mailbox/read"
                    className="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                  >
                    <span className="text-truncate" style={{ minWidth: '9rem' }}>
                      {' '}
                      Marcus Reyes{' '}
                    </span>
                    <span className="flex-grow-1 text-truncate">
                      <span className="badge text-bg-info me-2"> &middot; </span>
                      Lunch on Thursday?
                      <span className="fw-normal text-secondary">
                        &nbsp;&mdash; Free around 1pm at the usual place. Let me know.
                      </span>
                    </span>
                    <span className="text-secondary small text-md-end" style={{ minWidth: '5rem' }}>
                      Yesterday
                    </span>
                  </a>
                </li>
                <li className="list-group-item d-flex align-items-center gap-2">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" id="msg-4" />
                    <label className="form-check-label visually-hidden" htmlFor="msg-4">
                      Select message from Linear
                    </label>
                  </div>
                  <button
                    className="btn btn-link p-0 text-warning lh-1"
                    type="button"
                    title="Star"
                    aria-label="Star"
                  >
                    <i className="bi bi-star" aria-hidden="true"></i>
                  </button>
                  <a
                    href="/mailbox/read"
                    className="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                  >
                    <span className="text-truncate" style={{ minWidth: '9rem' }}>
                      {' '}
                      Linear{' '}
                    </span>
                    <span className="flex-grow-1 text-truncate">
                      <span className="badge text-bg-warning me-2"> &middot; </span>
                      [ADM-441] Calendar drag-and-drop not working on Safari iOS
                      <span className="fw-normal text-secondary">
                        &nbsp;&mdash; Reproduces consistently on iOS 18.4 in Safari and Chrome.
                      </span>
                    </span>
                    <span className="text-secondary small text-md-end" style={{ minWidth: '5rem' }}>
                      Yesterday
                    </span>
                  </a>
                </li>
                <li className="list-group-item d-flex align-items-center gap-2">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" id="msg-5" />
                    <label className="form-check-label visually-hidden" htmlFor="msg-5">
                      Select message from Vercel
                    </label>
                  </div>
                  <button
                    className="btn btn-link p-0 text-warning lh-1"
                    type="button"
                    title="Star"
                    aria-label="Star"
                  >
                    <i className="bi bi-star" aria-hidden="true"></i>
                  </button>
                  <a
                    href="/mailbox/read"
                    className="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                  >
                    <span className="text-truncate" style={{ minWidth: '9rem' }}>
                      {' '}
                      Vercel{' '}
                    </span>
                    <span className="flex-grow-1 text-truncate">
                      <span className="badge text-bg-success me-2"> &middot; </span>
                      Deployment succeeded — production
                      <span className="fw-normal text-secondary">
                        &nbsp;&mdash; main@a3c91fb deployed to production in 47s.
                      </span>
                    </span>
                    <span className="text-secondary small text-md-end" style={{ minWidth: '5rem' }}>
                      May 16
                    </span>
                  </a>
                </li>
                <li className="list-group-item d-flex align-items-center gap-2">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" id="msg-6" />
                    <label className="form-check-label visually-hidden" htmlFor="msg-6">
                      Select message from Sara Khan
                    </label>
                  </div>
                  <button
                    className="btn btn-link p-0 text-warning lh-1"
                    type="button"
                    title="Star"
                    aria-label="Star"
                  >
                    <i className="bi bi-star" aria-hidden="true"></i>
                  </button>
                  <a
                    href="/mailbox/read"
                    className="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                  >
                    <span className="text-truncate" style={{ minWidth: '9rem' }}>
                      {' '}
                      Sara Khan{' '}
                    </span>
                    <span className="flex-grow-1 text-truncate">
                      <span className="badge text-bg-primary me-2"> &middot; </span>
                      Customer interview notes — Acme Corp
                      <span className="fw-normal text-secondary">
                        &nbsp;&mdash; Three big themes: onboarding friction, billing visibility,
                        mobile.
                      </span>
                    </span>
                    <span className="text-secondary small text-md-end" style={{ minWidth: '5rem' }}>
                      May 15
                    </span>
                  </a>
                </li>
                <li className="list-group-item d-flex align-items-center gap-2">
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" id="msg-7" />
                    <label className="form-check-label visually-hidden" htmlFor="msg-7">
                      Select message from AWS
                    </label>
                  </div>
                  <button
                    className="btn btn-link p-0 text-warning lh-1"
                    type="button"
                    title="Star"
                    aria-label="Star"
                  >
                    <i className="bi bi-star" aria-hidden="true"></i>
                  </button>
                  <a
                    href="/mailbox/read"
                    className="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                  >
                    <span className="text-truncate" style={{ minWidth: '9rem' }}>
                      {' '}
                      AWS{' '}
                    </span>
                    <span className="flex-grow-1 text-truncate">
                      <span className="badge text-bg-danger me-2"> &middot; </span>
                      Your monthly bill summary
                      <span className="fw-normal text-secondary">
                        &nbsp;&mdash; Total charges for April 2026: $312.94. View in console.
                      </span>
                    </span>
                    <span className="text-secondary small text-md-end" style={{ minWidth: '5rem' }}>
                      May 14
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AppContent>
  )
}
