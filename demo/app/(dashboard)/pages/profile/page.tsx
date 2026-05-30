import { AppContent } from 'adminlte-react'
import { DemoForm } from '@/components/demo-form'

export const metadata = { title: "Profile" }

export default function Page() {
  return (
    <AppContent
      title="User Profile"
      breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'User', href: '#' }, { label: 'Profile' }]}
    >
      <div className="row g-3">
        {/* Profile sidebar */}
        <div className="col-md-3">
          {/* About card */}
          <div className="card">
            <div className="card-body text-center">
              <div
                className="rounded-circle bg-primary-subtle text-primary d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: '96px', height: '96px', fontSize: '2rem' }}
                aria-hidden="true"
              >
                JD
              </div>
              <h3 className="h5 mb-0">Jane Doe</h3>
              <p className="text-secondary mb-3">Product Designer</p>
              <ul className="list-group list-group-flush text-start small">
                <li className="list-group-item d-flex justify-content-between px-0">
                  <span className="text-secondary">Followers</span>
                  <span className="fw-semibold">1,322</span>
                </li>
                <li className="list-group-item d-flex justify-content-between px-0">
                  <span className="text-secondary">Following</span>
                  <span className="fw-semibold">543</span>
                </li>
                <li className="list-group-item d-flex justify-content-between px-0">
                  <span className="text-secondary">Friends</span>
                  <span className="fw-semibold">13,287</span>
                </li>
              </ul>
              <a href="#" className="btn btn-primary w-100 mt-3">
                <i className="bi bi-person-plus me-1" aria-hidden="true"></i>
                Follow
              </a>
            </div>
          </div>
          {/* About details */}
          <div className="card mt-3">
            <div className="card-header">
              <h3 className="card-title">About</h3>
            </div>
            <div className="card-body small">
              <p className="fw-semibold mb-1">
                <i className="bi bi-mortarboard me-1 text-secondary" aria-hidden="true"></i>
                Education
              </p>
              <p className="text-secondary mb-3">
                BS in Computer Science from the University of Tennessee at Knoxville
              </p>
              <p className="fw-semibold mb-1">
                <i className="bi bi-geo-alt me-1 text-secondary" aria-hidden="true"></i>
                Location
              </p>
              <p className="text-secondary mb-3">Malibu, California</p>
              <p className="fw-semibold mb-1">
                <i className="bi bi-tags me-1 text-secondary" aria-hidden="true"></i>
                Skills
              </p>
              <p className="mb-3">
                <span className="badge text-bg-secondary me-1">UI/UX</span>
                <span className="badge text-bg-secondary me-1">Figma</span>
                <span className="badge text-bg-secondary me-1">Design Systems</span>
                <span className="badge text-bg-secondary">Research</span>
              </p>
              <p className="fw-semibold mb-1">
                <i className="bi bi-pencil-square me-1 text-secondary" aria-hidden="true"></i>
                Notes
              </p>
              <p className="text-secondary mb-0">
                Lorem ipsum represents a long-held tradition for designers, typographers and the
                like.
              </p>
            </div>
          </div>
        </div>

        {/* Tabbed content */}
        <div className="col-md-9">
          <div className="card">
            <div className="card-header p-0 border-bottom-0">
              <ul className="nav nav-tabs" id="profile-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="activity-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#activity"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Activity
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="timeline-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#timeline"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Timeline
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="settings-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#settings"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Settings
                  </button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content">
                {/* Activity tab */}
                <div
                  className="tab-pane fade show active"
                  id="activity"
                  role="tabpanel"
                  aria-labelledby="activity-tab"
                >
                  <article className="d-flex gap-3 mb-4">
                    <div
                      className="flex-shrink-0 rounded-circle bg-success-subtle text-success d-flex align-items-center justify-content-center"
                      style={{ width: '40px', height: '40px' }}
                      aria-hidden="true"
                    >
                      JD
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between">
                        <h4 className="h6 mb-0">Jane Doe</h4>
                        <small className="text-secondary">2 hours ago</small>
                      </div>
                      <p className="mb-2">
                        Shipped <a href="#">design-system v2.4</a> with a refreshed color palette and
                        new motion primitives.
                      </p>
                      <a href="#" className="btn btn-sm btn-outline-secondary">
                        <i className="bi bi-hand-thumbs-up me-1" aria-hidden="true"></i>
                        Like
                      </a>
                      <a href="#" className="btn btn-sm btn-outline-secondary ms-1">
                        <i className="bi bi-chat me-1" aria-hidden="true"></i>
                        Comment
                      </a>
                    </div>
                  </article>
                  <article className="d-flex gap-3 mb-4">
                    <div
                      className="flex-shrink-0 rounded-circle bg-info-subtle text-info d-flex align-items-center justify-content-center"
                      style={{ width: '40px', height: '40px' }}
                      aria-hidden="true"
                    >
                      JD
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between">
                        <h4 className="h6 mb-0">Jane Doe</h4>
                        <small className="text-secondary">Yesterday</small>
                      </div>
                      <p className="mb-2">
                        Posted a question in <a href="#">#design-help</a>: how should we handle focus
                        rings on dark-themed CTA buttons?
                      </p>
                    </div>
                  </article>
                  <article className="d-flex gap-3">
                    <div
                      className="flex-shrink-0 rounded-circle bg-warning-subtle text-warning d-flex align-items-center justify-content-center"
                      style={{ width: '40px', height: '40px' }}
                      aria-hidden="true"
                    >
                      JD
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between">
                        <h4 className="h6 mb-0">Jane Doe</h4>
                        <small className="text-secondary">3 days ago</small>
                      </div>
                      <p className="mb-0">
                        Updated her bio and added <em>Research</em> to her skills.
                      </p>
                    </div>
                  </article>
                </div>

                {/* Timeline tab */}
                <div
                  className="tab-pane fade"
                  id="timeline"
                  role="tabpanel"
                  aria-labelledby="timeline-tab"
                >
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex gap-3 mb-3">
                      <span className="badge text-bg-success rounded-pill flex-shrink-0 align-self-start mt-1">
                        <i className="bi bi-check-lg" aria-hidden="true"></i>
                      </span>
                      <div>
                        <p className="mb-0 fw-semibold">Released v2.4 of the design system</p>
                        <small className="text-secondary">May 16, 2026</small>
                      </div>
                    </li>
                    <li className="d-flex gap-3 mb-3">
                      <span className="badge text-bg-info rounded-pill flex-shrink-0 align-self-start mt-1">
                        <i className="bi bi-mic" aria-hidden="true"></i>
                      </span>
                      <div>
                        <p className="mb-0 fw-semibold">Spoke at the local UX meetup</p>
                        <small className="text-secondary">April 22, 2026</small>
                      </div>
                    </li>
                    <li className="d-flex gap-3">
                      <span className="badge text-bg-warning rounded-pill flex-shrink-0 align-self-start mt-1">
                        <i className="bi bi-briefcase" aria-hidden="true"></i>
                      </span>
                      <div>
                        <p className="mb-0 fw-semibold">Joined the product team as Senior Designer</p>
                        <small className="text-secondary">March 1, 2026</small>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Settings tab */}
                <div
                  className="tab-pane fade"
                  id="settings"
                  role="tabpanel"
                  aria-labelledby="settings-tab"
                >
                  <DemoForm className="row g-3" resetOnSubmit={false} successMessage="Profile updated. (demo)">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="profile-first">
                        First name
                      </label>
                      <input type="text" required className="form-control" id="profile-first" defaultValue="Jane" />
                      <div className="invalid-feedback">First name is required.</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="profile-last">
                        Last name
                      </label>
                      <input type="text" required className="form-control" id="profile-last" defaultValue="Doe" />
                      <div className="invalid-feedback">Last name is required.</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="profile-email">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        id="profile-email"
                        defaultValue="jane@example.com"
                      />
                      <div className="invalid-feedback">Enter a valid email address.</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="profile-role">
                        Role
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="profile-role"
                        defaultValue="Product Designer"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="profile-bio">
                        Bio
                      </label>
                      <textarea
                        className="form-control"
                        id="profile-bio"
                        rows={4}
                        defaultValue="Designer with a soft spot for design tokens and accessibility."
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Save changes
                      </button>
                      <button type="reset" className="btn btn-outline-secondary ms-1">
                        Cancel
                      </button>
                    </div>
                  </DemoForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContent>
  )
}
