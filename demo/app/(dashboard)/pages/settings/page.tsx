import { AppContent } from '@adminlte/react'
import { PersistSettings } from '@/components/persist-settings'
import { DemoForm } from '@/components/demo-form'

export const metadata = { title: 'Settings' }

export default function Page() {
  return (
    <AppContent
      title="Settings"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Settings' }]}
    >
      <PersistSettings rootId="settings-form-root" />
      <div id="settings-form-root" className="row g-3">
        {/* Left rail */}
        <div className="col-md-3">
          <div
            className="list-group list-group-flush nav nav-pills flex-column"
            id="settings-nav"
            role="tablist"
          >
            <a
              href="#account"
              className="list-group-item list-group-item-action active"
              data-bs-toggle="pill"
              role="tab"
              aria-selected="true"
            >
              <i className="bi bi-person me-2" aria-hidden="true"></i>Account
            </a>
            <a
              href="#notifications"
              className="list-group-item list-group-item-action"
              data-bs-toggle="pill"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              <i className="bi bi-bell me-2" aria-hidden="true"></i>Notifications
            </a>
            <a
              href="#security"
              className="list-group-item list-group-item-action"
              data-bs-toggle="pill"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              <i className="bi bi-shield-lock me-2" aria-hidden="true"></i>Security
            </a>
            <a
              href="#billing"
              className="list-group-item list-group-item-action"
              data-bs-toggle="pill"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              <i className="bi bi-credit-card me-2" aria-hidden="true"></i>Billing
            </a>
            <a
              href="#danger"
              className="list-group-item list-group-item-action text-danger"
              data-bs-toggle="pill"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              <i className="bi bi-exclamation-triangle me-2" aria-hidden="true"></i>
              Danger zone
            </a>
          </div>
        </div>

        {/* Tab content */}
        <div className="col-md-9">
          <div className="tab-content">
            {/* Account */}
            <div className="tab-pane fade show active" id="account" role="tabpanel">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Account</h3>
                </div>
                <div className="card-body">
                  <DemoForm
                    className="row g-3"
                    resetOnSubmit={false}
                    successMessage="Account settings saved. (demo)"
                  >
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="settings-name">
                        Full name
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        id="settings-name"
                        defaultValue="Jane Doe"
                      />
                      <div className="invalid-feedback">Full name is required.</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="settings-email">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        id="settings-email"
                        defaultValue="jane@example.com"
                      />
                      <div className="invalid-feedback">Enter a valid email address.</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="settings-tz">
                        Time zone
                      </label>
                      <select
                        className="form-select"
                        id="settings-tz"
                        defaultValue="America/Los_Angeles"
                      >
                        <option>UTC</option>
                        <option>America/Los_Angeles</option>
                        <option>Europe/London</option>
                        <option>Asia/Tokyo</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="settings-lang">
                        Language
                      </label>
                      <select className="form-select" id="settings-lang" defaultValue="English">
                        <option>English</option>
                        <option>Español</option>
                        <option>Français</option>
                        <option>Deutsch</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </DemoForm>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="tab-pane fade" id="notifications" role="tabpanel">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Notifications</h3>
                </div>
                <div className="card-body">
                  <DemoForm
                    resetOnSubmit={false}
                    successMessage="Notification preferences saved. (demo)"
                  >
                    <p className="text-secondary">Choose what to be notified about.</p>
                    <div className="d-flex justify-content-between align-items-start py-2 border-bottom">
                      <div>
                        <p className="mb-0 fw-semibold">Product updates</p>
                        <small className="text-secondary">Major releases and changelogs</small>
                      </div>
                      <div className="form-check form-switch mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="notif-0"
                          defaultChecked
                        />
                        <label className="visually-hidden" htmlFor="notif-0">
                          Toggle Product updates
                        </label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-start py-2 border-bottom">
                      <div>
                        <p className="mb-0 fw-semibold">Security alerts</p>
                        <small className="text-secondary">
                          Sign-in attempts and account changes
                        </small>
                      </div>
                      <div className="form-check form-switch mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="notif-1"
                          defaultChecked
                        />
                        <label className="visually-hidden" htmlFor="notif-1">
                          Toggle Security alerts
                        </label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-start py-2 border-bottom">
                      <div>
                        <p className="mb-0 fw-semibold">Weekly digest</p>
                        <small className="text-secondary">
                          A summary of activity in your workspace
                        </small>
                      </div>
                      <div className="form-check form-switch mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="notif-2"
                        />
                        <label className="visually-hidden" htmlFor="notif-2">
                          Toggle Weekly digest
                        </label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-start py-2 border-bottom">
                      <div>
                        <p className="mb-0 fw-semibold">Mentions</p>
                        <small className="text-secondary">When a teammate @mentions you</small>
                      </div>
                      <div className="form-check form-switch mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="notif-3"
                        />
                        <label className="visually-hidden" htmlFor="notif-3">
                          Toggle Mentions
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                      Save preferences
                    </button>
                  </DemoForm>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="tab-pane fade" id="security" role="tabpanel">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Password</h3>
                </div>
                <div className="card-body">
                  <DemoForm className="row g-3" successMessage="Password updated. (demo)">
                    <div className="col-md-12">
                      <label className="form-label" htmlFor="pwd-current">
                        Current password
                      </label>
                      <input type="password" required className="form-control" id="pwd-current" />
                      <div className="invalid-feedback">Enter your current password.</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="pwd-new">
                        New password
                      </label>
                      <input
                        type="password"
                        required
                        minLength={8}
                        className="form-control"
                        id="pwd-new"
                      />
                      <div className="invalid-feedback">Use at least 8 characters.</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="pwd-confirm">
                        Confirm new password
                      </label>
                      <input
                        type="password"
                        required
                        minLength={8}
                        className="form-control"
                        id="pwd-confirm"
                      />
                      <div className="invalid-feedback">Re-enter the new password.</div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Update password
                      </button>
                    </div>
                  </DemoForm>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header">
                  <h3 className="card-title">Two-factor authentication</h3>
                </div>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fw-semibold">Authenticator app</p>
                    <small className="text-secondary">
                      Use an authenticator app such as 1Password or Authy.
                    </small>
                  </div>
                  <button className="btn btn-outline-primary">Enable</button>
                </div>
              </div>
            </div>

            {/* Billing */}
            <div className="tab-pane fade" id="billing" role="tabpanel">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Current plan</h3>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <p className="mb-0 fw-semibold">Pro plan</p>
                      <small className="text-secondary">
                        $29 / month &middot; Renews June 18, 2026
                      </small>
                    </div>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Change plan
                    </a>
                  </div>
                  <hr />
                  <p className="fw-semibold mb-2">Payment method</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="bi bi-credit-card-2-front me-2" aria-hidden="true"></i>
                      Visa ending in 4242
                    </div>
                    <a href="#" className="btn btn-link btn-sm">
                      Update
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Danger zone */}
            <div className="tab-pane fade" id="danger" role="tabpanel">
              <div className="card border-danger">
                <div className="card-header bg-danger-subtle">
                  <h3 className="card-title text-danger">Danger zone</h3>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <p className="mb-0 fw-semibold">Export account data</p>
                      <small className="text-secondary">
                        Download a copy of all your data as a ZIP archive.
                      </small>
                    </div>
                    <button className="btn btn-outline-secondary">Export</button>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <p className="mb-0 fw-semibold text-danger">Delete account</p>
                      <small className="text-secondary">
                        This will permanently delete your account and all associated data. This
                        cannot be undone.
                      </small>
                    </div>
                    <button className="btn btn-danger">Delete account</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContent>
  )
}
