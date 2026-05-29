'use client'

import { AppContent } from 'adminlte-react'
import { useState, useRef } from 'react'

const STEP_LABELS = ['Account', 'Profile', 'Preferences', 'Review']

export default function WizardPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [current, setCurrent] = useState(0)
  const [summary, setSummary] = useState<[string, string][]>([])

  const validateStep = (i: number) => {
    const form = formRef.current
    if (!form) return false
    const step = form.querySelectorAll<HTMLFieldSetElement>('.wizard-step')[i]
    const fields = step.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      'input, select, textarea',
    )
    let valid = true
    fields.forEach((field) => {
      field.classList.remove('is-invalid')
      if (!field.checkValidity()) {
        field.classList.add('is-invalid')
        valid = false
      }
    })
    // Password match check on step 0
    if (i === 0) {
      const p1 = document.getElementById('wz-password') as HTMLInputElement | null
      const p2 = document.getElementById('wz-password2') as HTMLInputElement | null
      if (p1 && p2 && p1.value !== p2.value) {
        p2.classList.add('is-invalid')
        valid = false
      }
    }
    return valid
  }

  const renderSummary = () => {
    const get = (id: string) => (document.getElementById(id) as HTMLInputElement | HTMLSelectElement | null)?.value ?? ''
    const rows: [string, string][] = [
      ['Email', get('wz-email')],
      ['Username', get('wz-username')],
      ['Name', `${get('wz-first')} ${get('wz-last')}`],
      ['Company', get('wz-company') || '—'],
      ['Role', get('wz-role') || '—'],
      ['Digest', get('wz-frequency')],
    ]
    setSummary(rows)
  }

  const goNext = () => {
    if (!validateStep(current)) return
    if (current < STEP_LABELS.length - 1) {
      const next = current + 1
      setCurrent(next)
      if (next === STEP_LABELS.length - 1) renderSummary()
    }
  }

  const goPrev = () => {
    if (current > 0) setCurrent(current - 1)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateStep(current)) return
    alert('Wizard complete! Form would submit here.')
  }

  const isLast = current === STEP_LABELS.length - 1

  return (
    <AppContent
      title="Form Wizard"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Forms', href: '#' },
        { label: 'Wizard' },
      ]}
    >
      <style>{`
        .wizard-steps {
          counter-reset: step;
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: space-between;
          position: relative;
        }
        .wizard-steps::before {
          content: '';
          position: absolute;
          top: 1rem;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--bs-border-color);
          z-index: 0;
        }
        .wizard-steps li {
          position: relative;
          z-index: 1;
          background: var(--bs-body-bg);
          padding: 0 0.75rem;
          text-align: center;
          color: var(--bs-secondary-color);
          font-size: 0.875rem;
        }
        .wizard-steps li::before {
          counter-increment: step;
          content: counter(step);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          margin: 0 auto 0.5rem;
          border-radius: 50%;
          background: var(--bs-body-tertiary-bg);
          border: 2px solid var(--bs-border-color);
          color: var(--bs-secondary-color);
          font-weight: 600;
        }
        .wizard-steps li.active {
          color: var(--bs-primary);
          font-weight: 600;
        }
        .wizard-steps li.active::before {
          background: var(--bs-primary);
          border-color: var(--bs-primary);
          color: #fff;
        }
        .wizard-steps li.completed::before {
          background: var(--bs-success);
          border-color: var(--bs-success);
          color: #fff;
          content: '\\f633';
          font-family: 'bootstrap-icons';
        }
      `}</style>

      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="card">
            <div className="card-body p-4">
              {/* Step indicators */}
              <ol className="wizard-steps mb-4" id="wizard-steps">
                {STEP_LABELS.map((label, idx) => (
                  <li
                    key={label}
                    className={idx === current ? 'active' : idx < current ? 'completed' : undefined}
                    data-step={idx}
                  >
                    {label}
                  </li>
                ))}
              </ol>

              {/* Form */}
              <form id="wizard-form" ref={formRef} noValidate onSubmit={handleSubmit}>
                {/* Step 1 */}
                <fieldset className={`wizard-step${current === 0 ? '' : ' d-none'}`} data-step={0}>
                  <h2 className="h5 mb-3">Create your account</h2>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="wz-email">
                        Email
                      </label>
                      <input type="email" className="form-control" id="wz-email" required />
                      <div className="invalid-feedback">Please enter a valid email.</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="wz-username">
                        {' '}
                        Username{' '}
                      </label>
                      <input type="text" className="form-control" id="wz-username" required minLength={3} />
                      <div className="invalid-feedback">Username must be at least 3 characters.</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="wz-password">
                        {' '}
                        Password{' '}
                      </label>
                      <input type="password" className="form-control" id="wz-password" required minLength={8} />
                      <div className="invalid-feedback">Password must be at least 8 characters.</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="wz-password2">
                        {' '}
                        Confirm password{' '}
                      </label>
                      <input type="password" className="form-control" id="wz-password2" required />
                      <div className="invalid-feedback">Passwords must match.</div>
                    </div>
                  </div>
                </fieldset>

                {/* Step 2 */}
                <fieldset className={`wizard-step${current === 1 ? '' : ' d-none'}`} data-step={1}>
                  <h2 className="h5 mb-3">Tell us about yourself</h2>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="wz-first">
                        {' '}
                        First name{' '}
                      </label>
                      <input type="text" className="form-control" id="wz-first" required />
                      <div className="invalid-feedback">First name is required.</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="wz-last">
                        {' '}
                        Last name{' '}
                      </label>
                      <input type="text" className="form-control" id="wz-last" required />
                      <div className="invalid-feedback">Last name is required.</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="wz-company">
                        {' '}
                        Company{' '}
                      </label>
                      <input type="text" className="form-control" id="wz-company" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="wz-role">
                        {' '}
                        Role{' '}
                      </label>
                      <select className="form-select" id="wz-role" required defaultValue="">
                        <option value="">Choose&hellip;</option>
                        <option>Founder / CEO</option>
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>Marketing</option>
                        <option>Other</option>
                      </select>
                      <div className="invalid-feedback">Please select a role.</div>
                    </div>
                  </div>
                </fieldset>

                {/* Step 3 */}
                <fieldset className={`wizard-step${current === 2 ? '' : ' d-none'}`} data-step={2}>
                  <h2 className="h5 mb-3">Notification preferences</h2>
                  <div className="form-check form-switch mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wz-notif-product"
                      role="switch"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="wz-notif-product">
                      Product updates &amp; releases
                    </label>
                  </div>
                  <div className="form-check form-switch mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wz-notif-security"
                      role="switch"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="wz-notif-security">
                      Security alerts
                    </label>
                  </div>
                  <div className="form-check form-switch mb-3">
                    <input className="form-check-input" type="checkbox" id="wz-notif-marketing" role="switch" />
                    <label className="form-check-label" htmlFor="wz-notif-marketing">
                      Marketing &amp; tips
                    </label>
                  </div>
                  <label className="form-label" htmlFor="wz-frequency">
                    {' '}
                    Digest frequency{' '}
                  </label>
                  <select className="form-select" id="wz-frequency" defaultValue="Daily">
                    <option>Real time</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Never</option>
                  </select>
                </fieldset>

                {/* Step 4 */}
                <fieldset className={`wizard-step${current === 3 ? '' : ' d-none'}`} data-step={3}>
                  <h2 className="h5 mb-3">Review &amp; confirm</h2>
                  <dl className="row mb-3" id="wz-summary">
                    {summary.map(([k, v]) => (
                      <div className="contents" key={k} style={{ display: 'contents' }}>
                        <dt className="col-sm-4 text-secondary fw-normal">{k}</dt>
                        <dd className="col-sm-8 fw-semibold">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wz-terms" required />
                    <label className="form-check-label" htmlFor="wz-terms">
                      I agree to the <a href="#">terms of service</a>.
                    </label>
                    <div className="invalid-feedback">You must accept the terms to continue.</div>
                  </div>
                </fieldset>

                {/* Navigation */}
                <div className="d-flex justify-content-between mt-4">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    id="wz-prev"
                    disabled={current === 0}
                    onClick={goPrev}
                  >
                    <i className="bi bi-arrow-left me-1" aria-hidden="true"></i>
                    Previous
                  </button>
                  <button
                    type="button"
                    className={`btn btn-primary${isLast ? ' d-none' : ''}`}
                    id="wz-next"
                    onClick={goNext}
                  >
                    Next
                    <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
                  </button>
                  <button type="submit" className={`btn btn-success${isLast ? '' : ' d-none'}`} id="wz-submit">
                    <i className="bi bi-check-lg me-1" aria-hidden="true"></i>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AppContent>
  )
}
