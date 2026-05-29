import { AppContent } from 'adminlte-react'

export default function Page() {
  return (
    <AppContent
      title="Pricing"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
    >
      {/* Headline */}
      <div className="text-center mb-4">
        <h2 className="mb-2">Pick the plan that fits your team</h2>
        <p className="text-secondary mb-0">
          Simple, transparent pricing. No hidden fees. Cancel any time.
        </p>
      </div>

      {/* Billing toggle */}
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group" role="group" aria-label="Billing period">
          <input type="radio" className="btn-check" name="billing" id="billing-monthly" defaultChecked />
          <label className="btn btn-outline-primary" htmlFor="billing-monthly">
            Monthly
          </label>
          <input type="radio" className="btn-check" name="billing" id="billing-yearly" />
          <label className="btn btn-outline-primary" htmlFor="billing-yearly">
            Yearly <span className="badge text-bg-success ms-1">Save 20%</span>
          </label>
        </div>
      </div>

      {/* Plans */}
      <div className="row g-4 row-cols-1 row-cols-md-3 mb-4">
        {/* Starter */}
        <div className="col">
          <div className="card h-100">
            <div className="card-body p-4">
              <h5 className="fw-semibold">Starter</h5>
              <p className="text-secondary small mb-3">For individuals getting started.</p>
              <div className="mb-3">
                <span className="display-5 fw-bold">$0</span>
                <span className="text-secondary">/mo</span>
              </div>
              <a href="#" className="btn btn-outline-primary w-100 mb-3">
                Get started
              </a>
              <ul className="list-unstyled small mb-0">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>
                  Up to 3 projects
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>
                  Community support
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>
                  1 GB storage
                </li>
                <li className="text-secondary">
                  <i className="bi bi-dash-circle me-2" aria-hidden="true"></i>
                  Advanced analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Pro (highlighted) */}
        <div className="col">
          <div className="card h-100 border-primary shadow-sm position-relative">
            <span className="badge text-bg-primary position-absolute top-0 start-50 translate-middle">
              Most popular
            </span>
            <div className="card-body p-4">
              <h5 className="fw-semibold">Pro</h5>
              <p className="text-secondary small mb-3">For growing teams that need more.</p>
              <div className="mb-3">
                <span className="display-5 fw-bold">$29</span>
                <span className="text-secondary">/mo</span>
              </div>
              <a href="#" className="btn btn-primary w-100 mb-3">
                Start free trial
              </a>
              <ul className="list-unstyled small mb-0">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>
                  Unlimited projects
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>
                  Priority email support
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>
                  100 GB storage
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>
                  Advanced analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Enterprise */}
        <div className="col">
          <div className="card h-100">
            <div className="card-body p-4">
              <h5 className="fw-semibold">Enterprise</h5>
              <p className="text-secondary small mb-3">For organizations with custom needs.</p>
              <div className="mb-3">
                <span className="display-5 fw-bold">Custom</span>
              </div>
              <a href="#" className="btn btn-outline-primary w-100 mb-3">
                Contact sales
              </a>
              <ul className="list-unstyled small mb-0">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>
                  Everything in Pro
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>
                  SSO &amp; SCIM
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>
                  Dedicated account manager
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>
                  Custom SLA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Feature comparison table */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Compare features</h3>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table mb-0 align-middle">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="text-center">Starter</th>
                  <th className="text-center">Pro</th>
                  <th className="text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Projects</td>
                  <td className="text-center">3</td>
                  <td className="text-center">Unlimited</td>
                  <td className="text-center">Unlimited</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td className="text-center">1 GB</td>
                  <td className="text-center">100 GB</td>
                  <td className="text-center">Custom</td>
                </tr>
                <tr>
                  <td>Team members</td>
                  <td className="text-center">1</td>
                  <td className="text-center">Up to 20</td>
                  <td className="text-center">Unlimited</td>
                </tr>
                <tr>
                  <td>Advanced analytics</td>
                  <td className="text-center">
                    <i className="bi bi-x-lg text-secondary" aria-hidden="true"></i>
                    <span className="visually-hidden">No</span>
                  </td>
                  <td className="text-center">
                    <i className="bi bi-check-lg text-success" aria-hidden="true"></i>
                    <span className="visually-hidden">Yes</span>
                  </td>
                  <td className="text-center">
                    <i className="bi bi-check-lg text-success" aria-hidden="true"></i>
                    <span className="visually-hidden">Yes</span>
                  </td>
                </tr>
                <tr>
                  <td>SSO &amp; SCIM</td>
                  <td className="text-center">
                    <i className="bi bi-x-lg text-secondary" aria-hidden="true"></i>
                    <span className="visually-hidden">No</span>
                  </td>
                  <td className="text-center">
                    <i className="bi bi-x-lg text-secondary" aria-hidden="true"></i>
                    <span className="visually-hidden">No</span>
                  </td>
                  <td className="text-center">
                    <i className="bi bi-check-lg text-success" aria-hidden="true"></i>
                    <span className="visually-hidden">Yes</span>
                  </td>
                </tr>
                <tr>
                  <td>Support</td>
                  <td className="text-center">Community</td>
                  <td className="text-center">Priority email</td>
                  <td className="text-center">Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppContent>
  )
}
