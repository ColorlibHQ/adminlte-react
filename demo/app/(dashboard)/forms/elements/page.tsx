import { AppContent, Card, Callout, InputFlatpickr, InputTomSelect } from '@colorlib/adminlte-react'

export const metadata = { title: "Form Elements" }

export default function FormElementsPage() {
  return (
    <AppContent
      title="Form Elements"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Forms', href: '#' },
        { label: 'Elements' },
      ]}
    >
      <div className="row g-4">
        <div className="col-12">
          <Callout theme="info">
            For detailed documentation visit{' '}
            <a
              href="https://getbootstrap.com/docs/5.3/forms/overview/"
              target="_blank"
              rel="noopener noreferrer"
              className="callout-link"
            >
              Bootstrap Forms
            </a>
            .
          </Callout>
        </div>

        {/* Quick Example */}
        <div className="col-md-6">
          <div className="card card-primary card-outline mb-4">
            <div className="card-header">
              <div className="card-title">Quick Example</div>
            </div>
            <form>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We&apos;ll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="input-group mb-3">
                  <input type="file" className="form-control" id="inputGroupFile02" />
                  <label className="input-group-text" htmlFor="inputGroupFile02">
                    Upload
                  </label>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Input Group */}
        <div className="col-md-6">
          <Card title="Input Group" theme="success" variant="outline" className="mb-4">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                @example.com
              </span>
            </div>
            <div className="mb-3">
              <label htmlFor="basic-url" className="form-label">
                Your vanity URL
              </label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon3">
                  https://example.com/users/
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3 basic-addon4"
                />
              </div>
              <div className="form-text" id="basic-addon4">
                Example help text goes outside the input group.
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <span className="input-group-text">.00</span>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
              />
              <span className="input-group-text">@</span>
              <input
                type="text"
                className="form-control"
                placeholder="Server"
                aria-label="Server"
              />
            </div>
            <div className="input-group">
              <span className="input-group-text">With textarea</span>
              <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>
          </Card>
        </div>

        {/* Checks & Radios */}
        <div className="col-md-6">
          <Card title="Checks & Radios" theme="info" variant="outline" className="mb-4">
            <h6 className="text-secondary small text-uppercase mb-2">Checkboxes</h6>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="check-default" />
              <label className="form-check-label" htmlFor="check-default">
                Default
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-checked"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="check-checked">
                Pre-checked
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="check-disabled" disabled />
              <label className="form-check-label" htmlFor="check-disabled">
                Disabled
              </label>
            </div>

            <h6 className="text-secondary small text-uppercase mb-2 mt-3">Radios</h6>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="radioGroup"
                id="radio-1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="radio-1">
                Option one
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="radio" name="radioGroup" id="radio-2" />
              <label className="form-check-label" htmlFor="radio-2">
                Option two
              </label>
            </div>

            <h6 className="text-secondary small text-uppercase mb-2 mt-3">Switches</h6>
            <div className="form-check form-switch mb-2">
              <input className="form-check-input" type="checkbox" role="switch" id="switch-1" />
              <label className="form-check-label" htmlFor="switch-1">
                Notifications
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switch-2"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="switch-2">
                Auto-save
              </label>
            </div>
          </Card>
        </div>

        {/* Select / Range / File */}
        <div className="col-md-6">
          <Card title="Selects, Ranges & File" theme="warning" variant="outline" className="mb-4">
            <div className="mb-3">
              <label className="form-label" htmlFor="select-default">
                Select
              </label>
              <select className="form-select" id="select-default" defaultValue="Open this select menu">
                <option>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="select-multiple">
                Multi-select
              </label>
              <select
                className="form-select"
                id="select-multiple"
                multiple
                size={3}
                defaultValue={['Orange']}
              >
                <option>Apple</option>
                <option>Orange</option>
                <option>Pear</option>
                <option>Mango</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="range-1">
                Range
              </label>
              <input
                type="range"
                className="form-range"
                id="range-1"
                min="0"
                max="100"
                defaultValue="35"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="form-file-multi">
                Multiple files
              </label>
              <input className="form-control" type="file" id="form-file-multi" multiple />
            </div>
            <div>
              <label className="form-label" htmlFor="form-color">
                Color
              </label>
              <input
                type="color"
                className="form-control form-control-color"
                id="form-color"
                defaultValue="#0d6efd"
                title="Choose your color"
              />
            </div>
          </Card>
        </div>

        {/* Floating labels */}
        <div className="col-md-6">
          <Card title="Floating Labels" theme="secondary" variant="outline" className="mb-4">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPwd"
                placeholder="Password"
              />
              <label htmlFor="floatingPwd">Password</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                id="floatingTextarea"
                placeholder="Leave a comment here"
                style={{ height: '6rem' }}
              ></textarea>
              <label htmlFor="floatingTextarea">Comments</label>
            </div>
          </Card>
        </div>

        {/* Disabled / Readonly */}
        <div className="col-md-6">
          <Card title="Disabled & Readonly" theme="danger" variant="outline" className="mb-4">
            <div className="mb-3">
              <label className="form-label" htmlFor="dis-text">
                Disabled text
              </label>
              <input
                type="text"
                className="form-control"
                id="dis-text"
                defaultValue="Can't touch this"
                disabled
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="ro-text">
                Readonly text
              </label>
              <input
                type="text"
                className="form-control"
                id="ro-text"
                defaultValue="Read me, but don't write me"
                readOnly
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="dis-select">
                Disabled select
              </label>
              <select id="dis-select" className="form-select" disabled>
                <option>Locked option</option>
              </select>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="dis-check" disabled />
              <label className="form-check-label" htmlFor="dis-check">
                Can&apos;t check this
              </label>
            </div>
          </Card>
        </div>
      </div>

      {/* Plugin-backed inputs (library components — lazy-loaded) */}
      <div className="row g-4">
        <div className="col-md-6">
          <Card title="Date & time pickers" theme="primary" variant="outline">
            <InputFlatpickr label="Date" dateType="date" placeholder="Select a date" />
            <InputFlatpickr
              label="Date & time"
              dateType="datetime"
              placeholder="Select date & time"
              options={{ enableTime: true, dateFormat: 'Y-m-d H:i' }}
            />
          </Card>
        </div>
        <div className="col-md-6">
          <Card title="Advanced select (Tom Select)" theme="success" variant="outline">
            <InputTomSelect
              label="Skills — multi-select, type to create"
              multiple
              tomSelectOptions={{ create: true }}
              options={[
                { value: 'react', label: 'React' },
                { value: 'next', label: 'Next.js' },
                { value: 'ts', label: 'TypeScript' },
                { value: 'css', label: 'CSS' },
                { value: 'node', label: 'Node.js' },
              ]}
            />
            <InputTomSelect
              label="Country — searchable"
              options={[
                { value: 'us', label: 'United States' },
                { value: 'lv', label: 'Latvia' },
                { value: 'de', label: 'Germany' },
                { value: 'jp', label: 'Japan' },
              ]}
            />
          </Card>
        </div>
      </div>
    </AppContent>
  )
}
