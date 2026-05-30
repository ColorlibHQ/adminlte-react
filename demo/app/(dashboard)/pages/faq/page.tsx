import { AppContent } from 'adminlte-react'

export const metadata = { title: "FAQ" }

export default function Page() {
  return (
    <AppContent title="FAQ" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}>
      {/* Headline + search */}
      <div className="text-center mb-4">
        <h2 className="mb-2">How can we help?</h2>
        <p className="text-secondary mb-3">Search our knowledge base, or browse the topics below.</p>
        <form className="row g-2 justify-content-center" role="search">
          <div className="col-md-8 col-lg-6">
            <div className="input-group input-group-lg">
              <span className="input-group-text bg-body">
                <i className="bi bi-search" aria-hidden="true"></i>
              </span>
              <input
                type="search"
                className="form-control"
                placeholder="Search the FAQ…"
                aria-label="Search the FAQ"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="row g-4">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header d-flex align-items-center">
              <i className="bi bi-rocket-takeoff fs-4 text-primary me-2" aria-hidden="true"></i>
              <h3 className="card-title mb-0">Getting started</h3>
            </div>
            <div className="card-body">
              <div className="accordion accordion-flush" id="faq-0">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-0-0"
                      aria-expanded="false"
                      aria-controls="faq-0-0"
                    >
                      How do I create an account?
                    </button>
                  </h2>
                  <div id="faq-0-0" className="accordion-collapse collapse" data-bs-parent="#faq-0">
                    <div className="accordion-body text-secondary">
                      Click <strong>Sign up</strong> in the top-right corner, enter your email and a
                      strong password, then verify your email to activate your workspace.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-0-1"
                      aria-expanded="false"
                      aria-controls="faq-0-1"
                    >
                      Can I try the product before paying?
                    </button>
                  </h2>
                  <div id="faq-0-1" className="accordion-collapse collapse" data-bs-parent="#faq-0">
                    <div className="accordion-body text-secondary">
                      Yes. Every paid plan includes a 14-day free trial. No credit card is required to
                      start.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-0-2"
                      aria-expanded="false"
                      aria-controls="faq-0-2"
                    >
                      How do I invite teammates?
                    </button>
                  </h2>
                  <div id="faq-0-2" className="accordion-collapse collapse" data-bs-parent="#faq-0">
                    <div className="accordion-body text-secondary">
                      From <strong>Settings &rarr; Team</strong>, click <strong>Invite member</strong>{' '}
                      and enter their email. They&rsquo;ll receive an invitation link valid for seven
                      days.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header d-flex align-items-center">
              <i className="bi bi-credit-card fs-4 text-primary me-2" aria-hidden="true"></i>
              <h3 className="card-title mb-0">Billing &amp; plans</h3>
            </div>
            <div className="card-body">
              <div className="accordion accordion-flush" id="faq-1">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-1-0"
                      aria-expanded="false"
                      aria-controls="faq-1-0"
                    >
                      Which payment methods do you accept?
                    </button>
                  </h2>
                  <div id="faq-1-0" className="accordion-collapse collapse" data-bs-parent="#faq-1">
                    <div className="accordion-body text-secondary">
                      We accept all major credit and debit cards. Annual Enterprise plans can be paid
                      by invoice.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-1-1"
                      aria-expanded="false"
                      aria-controls="faq-1-1"
                    >
                      Can I change my plan later?
                    </button>
                  </h2>
                  <div id="faq-1-1" className="accordion-collapse collapse" data-bs-parent="#faq-1">
                    <div className="accordion-body text-secondary">
                      Yes. Upgrades take effect immediately and are pro-rated. Downgrades take effect
                      at the end of the current billing cycle.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-1-2"
                      aria-expanded="false"
                      aria-controls="faq-1-2"
                    >
                      Do you offer refunds?
                    </button>
                  </h2>
                  <div id="faq-1-2" className="accordion-collapse collapse" data-bs-parent="#faq-1">
                    <div className="accordion-body text-secondary">
                      We offer a full refund within 30 days of your first paid invoice, no questions
                      asked.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header d-flex align-items-center">
              <i className="bi bi-shield-lock fs-4 text-primary me-2" aria-hidden="true"></i>
              <h3 className="card-title mb-0">Security &amp; privacy</h3>
            </div>
            <div className="card-body">
              <div className="accordion accordion-flush" id="faq-2">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-2-0"
                      aria-expanded="false"
                      aria-controls="faq-2-0"
                    >
                      Where is my data stored?
                    </button>
                  </h2>
                  <div id="faq-2-0" className="accordion-collapse collapse" data-bs-parent="#faq-2">
                    <div className="accordion-body text-secondary">
                      Data is stored in encrypted form in SOC 2-certified data centers. You can choose
                      your region (US or EU) when you set up your workspace.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-2-1"
                      aria-expanded="false"
                      aria-controls="faq-2-1"
                    >
                      Do you support SSO?
                    </button>
                  </h2>
                  <div id="faq-2-1" className="accordion-collapse collapse" data-bs-parent="#faq-2">
                    <div className="accordion-body text-secondary">
                      Yes, on the Enterprise plan. We support SAML 2.0 and OIDC with providers
                      including Okta, Azure AD, and Google Workspace.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-2-2"
                      aria-expanded="false"
                      aria-controls="faq-2-2"
                    >
                      How can I export or delete my data?
                    </button>
                  </h2>
                  <div id="faq-2-2" className="accordion-collapse collapse" data-bs-parent="#faq-2">
                    <div className="accordion-body text-secondary">
                      You can export your data at any time from <strong>Settings &rarr; Data</strong>.
                      Deletion requests are honored within 30 days per our DPA.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Still need help? */}
      <div className="card mt-4">
        <div className="card-body text-center py-4">
          <i className="bi bi-chat-dots text-primary" style={{ fontSize: '2.5rem' }} aria-hidden="true"></i>
          <h3 className="h5 mt-3 mb-2">Still need help?</h3>
          <p className="text-secondary mb-3">
            Can&rsquo;t find what you&rsquo;re looking for? Our support team is happy to help.
          </p>
          <a href="mailto:support@example.com" className="btn btn-primary">
            <i className="bi bi-envelope me-1" aria-hidden="true"></i>
            Contact support
          </a>
        </div>
      </div>
    </AppContent>
  )
}
