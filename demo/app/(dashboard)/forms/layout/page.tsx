import { AppContent, Callout } from '@adminlte/react'

export const metadata = { title: "Form Layout" }

export default function Page() {
  return (
    <AppContent
      title="Form Layout"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Forms', href: '#' },
        { label: 'Layout' },
      ]}
    >
      <div className="row g-4">
        <div className="col-12">
          <Callout theme="info">
            Layout patterns built on Bootstrap&apos;s grid +{' '}
            <a
              href="https://getbootstrap.com/docs/5.3/forms/layout/"
              target="_blank"
              rel="noopener noreferrer"
              className="callout-link"
            >
              form layout
            </a>{' '}
            utilities.
          </Callout>
        </div>

        {/* Horizontal Form */}
        <div className="col-md-6">
          <div className="card card-warning card-outline mb-4">
            <div className="card-header">
              <div className="card-title">Horizontal Form</div>
            </div>
            <form>
              <div className="card-body">
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" />
                  </div>
                </div>
                <fieldset className="row mb-3">
                  <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="option1"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        First radio
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="option2"
                      />
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Second radio
                      </label>
                    </div>
                    <div className="form-check disabled">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios3"
                        value="option3"
                        disabled
                      />
                      <label className="form-check-label" htmlFor="gridRadios3">
                        Third disabled radio
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="row mb-3">
                  <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck1" />
                      <label className="form-check-label" htmlFor="gridCheck1">
                        Example checkbox
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-warning">
                  Sign in
                </button>
                <button type="submit" className="btn float-end">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Inline Form */}
        <div className="col-md-6">
          <div className="card card-primary card-outline mb-4">
            <div className="card-header">
              <div className="card-title">Inline Form</div>
            </div>
            <div className="card-body">
              <form className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                  <label className="visually-hidden" htmlFor="inlineUser">
                    Username
                  </label>
                  <div className="input-group">
                    <div className="input-group-text">@</div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineUser"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label className="visually-hidden" htmlFor="inlineSelect">
                    Preference
                  </label>
                  <select className="form-select" id="inlineSelect" defaultValue="Choose…">
                    <option>Choose&hellip;</option>
                    <option>One</option>
                    <option>Two</option>
                  </select>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="inlineCheck" />
                    <label className="form-check-label" htmlFor="inlineCheck">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Different Height */}
        <div className="col-md-6">
          <div className="card card-secondary card-outline mb-4">
            <div className="card-header">
              <div className="card-title">Different Height</div>
            </div>
            <div className="card-body">
              <input
                className="form-control form-control-lg mb-3"
                type="text"
                placeholder=".form-control-lg"
                aria-label=".form-control-lg example"
              />
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Default input"
                aria-label="default input example"
              />
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder=".form-control-sm"
                aria-label=".form-control-sm example"
              />
            </div>
          </div>
        </div>

        {/* Different Width */}
        <div className="col-md-6">
          <div className="card card-danger card-outline mb-4">
            <div className="card-header">
              <div className="card-title">Different Width</div>
            </div>
            <div className="card-body">
              <div className="row g-2">
                <div className="col-3">
                  <input type="text" className="form-control" placeholder=".col-3" />
                </div>
                <div className="col-4">
                  <input type="text" className="form-control" placeholder=".col-4" />
                </div>
                <div className="col-5">
                  <input type="text" className="form-control" placeholder=".col-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContent>
  )
}
