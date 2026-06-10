'use client'

import { useEffect } from 'react'
import { AppContent } from '@colorlib/adminlte-react'

export default function FormValidationPage() {
  // Enable Bootstrap-style validation for forms marked with .needs-validation
  // or .needs-validation-tooltip. Prevents submission if any field is invalid.
  useEffect(() => {
    const selector = '.needs-validation, .needs-validation-tooltip'
    const forms = Array.from(document.querySelectorAll<HTMLFormElement>(selector))
    const handlers: Array<{ form: HTMLFormElement; handler: (event: Event) => void }> = []

    for (const form of forms) {
      const handler = (event: Event) => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }
      form.addEventListener('submit', handler, false)
      handlers.push({ form, handler })
    }

    return () => {
      for (const { form, handler } of handlers) {
        form.removeEventListener('submit', handler, false)
      }
    }
  }, [])

  return (
    <AppContent
      title="Form Validation"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Forms', href: '#' },
        { label: 'Validation' },
      ]}
    >
      <div className="row g-4">
        <div className="col-12">
          <div className="callout callout-info">
            Built on{' '}
            <a
              href="https://getbootstrap.com/docs/5.3/forms/validation/"
              target="_blank"
              rel="noopener noreferrer"
              className="callout-link"
            >
              Bootstrap&apos;s native form validation
            </a>{' '}
            — submit each form to see the feedback. The wiring script lives at the bottom of this
            page.
          </div>
        </div>

        {/* Custom validation */}
        <div className="col-lg-6">
          <div className="card card-info card-outline mb-4">
            <div className="card-header">
              <div className="card-title">Custom Validation</div>
            </div>
            <form className="needs-validation" noValidate>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom01"
                      defaultValue="Mark"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom02"
                      defaultValue="Otto"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustomUsername" className="form-label">
                      Username
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">
                        @
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">
                      City
                    </label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback">Please provide a valid city.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">
                      State
                    </label>
                    <select
                      className="form-select"
                      id="validationCustom04"
                      required
                      defaultValue=""
                    >
                      <option disabled value="">
                        Choose&hellip;
                      </option>
                      <option>California</option>
                      <option>Washington</option>
                      <option>Tennessee</option>
                    </select>
                    <div className="invalid-feedback">Please select a valid state.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">
                      Zip
                    </label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                    <div className="invalid-feedback">Please provide a valid zip.</div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        required
                      />
                      <label className="form-check-label" htmlFor="invalidCheck">
                        Agree to terms and conditions
                      </label>
                      <div className="invalid-feedback">You must agree before submitting.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-info" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Browser-default validation + tooltips */}
        <div className="col-lg-6">
          <div className="card card-success card-outline mb-4">
            <div className="card-header">
              <div className="card-title">Browser Defaults &amp; Tooltips</div>
            </div>
            <div className="card-body">
              <p className="text-secondary small">
                For browser-native validation feedback, omit <code>novalidate</code> and the{' '}
                <code>.needs-validation</code> class.
              </p>
              <form>
                <div className="mb-3">
                  <label className="form-label" htmlFor="defaultEmail">
                    Email
                  </label>
                  <input type="email" className="form-control" id="defaultEmail" required />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="defaultUrl">
                    URL
                  </label>
                  <input type="url" className="form-control" id="defaultUrl" required />
                </div>
                <button className="btn btn-success" type="submit">
                  Submit (browser default)
                </button>
              </form>

              <hr className="my-4" />

              <p className="text-secondary small">
                Add <code>.needs-validation-tooltip</code> in place of{' '}
                <code>.needs-validation</code> to swap inline feedback for floating tooltips.
              </p>
              <form className="needs-validation-tooltip position-relative" noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="vt-first" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="vt-first"
                      defaultValue="Jane"
                      required
                    />
                    <div className="valid-tooltip">Looks good!</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="vt-username" className="form-label">
                      Username
                    </label>
                    <input type="text" className="form-control" id="vt-username" required />
                    <div className="invalid-tooltip">Please choose a username.</div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-success" type="submit">
                      Submit (tooltip)
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AppContent>
  )
}
