import type { CSSProperties } from 'react'
import { AppContent } from 'adminlte-react'
import { ReactWidgetsDemo } from '@/components/react-widgets-demo'

export const metadata = { title: "General UI" }

export default function Page() {
  return (
    <AppContent
      title="General UI Elements"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'General UI Elements' },
      ]}
    >
      <h4 className="mb-1">AdminLTE React components</h4>
      <p className="text-secondary">Typed, state-driven components from the <code>adminlte-react</code> library — no jQuery, no Bootstrap JS required.</p>
      <ReactWidgetsDemo />

      <hr className="my-4" />

      <h4 className="mb-3">Bootstrap components</h4>
      <div className="row g-4">

                    <div className="col-12">
                      <div className="callout callout-info">
                        For detailed documentation of Components visit
                        <a
                          href="https://getbootstrap.com/docs/5.3/components/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="callout-link"
                        >
                          Bootstrap Components
                        </a>
                      </div>
                    </div>
                    
                    
                    <div className="col-md-6">
                      
                      <div className="card card-primary card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Accordion</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  Accordion Item #1
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <strong>This is the first item's accordion body.</strong> It is shown by
                                  default, until the collapse plugin adds the appropriate classes that we
                                  use to style each element. These classes control the overall appearance,
                                  as well as the showing and hiding via CSS transitions. You can modify
                                  any of this with custom CSS or overriding our default variables. It's
                                  also worth noting that just about any HTML can go within the
                                  <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  Accordion Item #2
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <strong>This is the second item's accordion body.</strong> It is hidden
                                  by default, until the collapse plugin adds the appropriate classes that
                                  we use to style each element. These classes control the overall
                                  appearance, as well as the showing and hiding via CSS transitions. You
                                  can modify any of this with custom CSS or overriding our default
                                  variables. It's also worth noting that just about any HTML can go within
                                  the <code>.accordion-body</code>, though the transition does limit
                                  overflow.
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  Accordion Item #3
                                </button>
                              </h2>
                              <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <strong>This is the third item's accordion body.</strong> It is hidden
                                  by default, until the collapse plugin adds the appropriate classes that
                                  we use to style each element. These classes control the overall
                                  appearance, as well as the showing and hiding via CSS transitions. You
                                  can modify any of this with custom CSS or overriding our default
                                  variables. It's also worth noting that just about any HTML can go within
                                  the <code>.accordion-body</code>, though the transition does limit
                                  overflow.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      
                      
                      <div className="card card-success card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Alert</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <div className="alert alert-primary" role="alert">
                            A simple primary alert with
                            <a href="#" className="alert-link">an example link</a>. Give it a click if you
                            like.
                          </div>
                          <div className="alert alert-secondary" role="alert">
                            A simple secondary alert with
                            <a href="#" className="alert-link">an example link</a>. Give it a click if you
                            like.
                          </div>
                          <div className="alert alert-success" role="alert">
                            A simple success alert with
                            <a href="#" className="alert-link">an example link</a>. Give it a click if you
                            like.
                          </div>
                          <div className="alert alert-danger" role="alert">
                            A simple danger alert with <a href="#" className="alert-link">an example link</a>.
                            Give it a click if you like.
                          </div>
                          <div className="alert alert-warning" role="alert">
                            A simple warning alert with
                            <a href="#" className="alert-link">an example link</a>. Give it a click if you
                            like.
                          </div>
                          <div className="alert alert-info" role="alert">
                            A simple info alert with <a href="#" className="alert-link">an example link</a>.
                            Give it a click if you like.
                          </div>
                          <div className="alert alert-light" role="alert">
                            A simple light alert with <a href="#" className="alert-link">an example link</a>.
                            Give it a click if you like.
                          </div>
                          <div className="alert alert-dark" role="alert">
                            A simple dark alert with <a href="#" className="alert-link">an example link</a>.
                            Give it a click if you like.
                          </div>
                        </div>
                        
                      </div>
                      
                      
                      <div className="card card-warning card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Badge</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <h1>Example heading <span className="badge bg-secondary">New</span></h1>
                          <h2>Example heading <span className="badge bg-secondary">New</span></h2>
                          <h3>Example heading <span className="badge bg-secondary">New</span></h3>
                          <h4>Example heading <span className="badge bg-secondary">New</span></h4>
                          <h5>Example heading <span className="badge bg-secondary">New</span></h5>
                          <h6>Example heading <span className="badge bg-secondary">New</span></h6>
                          <hr />
                          <button type="button" className="btn btn-primary">
                            Notifications <span className="badge text-bg-secondary">4</span>
                          </button>
                          <hr />
                          <button type="button" className="btn btn-primary position-relative">
                            Inbox
                            <span
                              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                            >
                              99+
                              <span className="visually-hidden">unread messages</span>
                            </span>
                          </button>
                          <hr />
                          <button type="button" className="btn btn-primary position-relative">
                            Profile
                            <span
                              className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
                            >
                              <span className="visually-hidden">New alerts</span>
                            </span>
                          </button>
                          <hr />
                          <span className="badge text-bg-primary">Primary</span>
                          <span className="badge text-bg-secondary">Secondary</span>
                          <span className="badge text-bg-success">Success</span>
                          <span className="badge text-bg-danger">Danger</span>
                          <span className="badge text-bg-warning">Warning</span>
                          <span className="badge text-bg-info">Info</span>
                          <span className="badge text-bg-light">Light</span>
                          <span className="badge text-bg-dark">Dark</span>
                          <hr />
                          <span className="badge rounded-pill text-bg-primary">Primary</span>
                          <span className="badge rounded-pill text-bg-secondary">Secondary</span>
                          <span className="badge rounded-pill text-bg-success">Success</span>
                          <span className="badge rounded-pill text-bg-danger">Danger</span>
                          <span className="badge rounded-pill text-bg-warning">Warning</span>
                          <span className="badge rounded-pill text-bg-info">Info</span>
                          <span className="badge rounded-pill text-bg-light">Light</span>
                          <span className="badge rounded-pill text-bg-dark">Dark</span>
                        </div>
                        
                      </div>
                      
                      
                      <div className="card card-danger card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Button</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <button type="button" className="btn btn-primary mb-2">Primary</button>
                          <button type="button" className="btn btn-secondary mb-2">Secondary</button>
                          <button type="button" className="btn btn-success mb-2">Success</button>
                          <button type="button" className="btn btn-danger mb-2">Danger</button>
                          <button type="button" className="btn btn-warning mb-2">Warning</button>
                          <button type="button" className="btn btn-info mb-2">Info</button>
                          <button type="button" className="btn btn-light mb-2">Light</button>
                          <button type="button" className="btn btn-dark mb-2">Dark</button>
                          <button type="button" className="btn btn-link mb-2">Link</button>
                          <hr />
                          <button type="button" className="btn btn-primary mb-2" disabled>
                            Primary (disabled)
                          </button>
                          <button type="button" className="btn btn-secondary mb-2" disabled>
                            Secondary (disabled)
                          </button>
                          <button type="button" className="btn btn-success mb-2" disabled>
                            Success (disabled)
                          </button>
                          <button type="button" className="btn btn-danger mb-2" disabled>
                            Danger (disabled)
                          </button>
                          <button type="button" className="btn btn-warning mb-2" disabled>
                            Warning (disabled)
                          </button>
                          <button type="button" className="btn btn-info mb-2" disabled>
                            Info (disabled)
                          </button>
                          <hr />
                          <button type="button" className="btn btn-outline-primary mb-2">Primary</button>
                          <button type="button" className="btn btn-outline-secondary mb-2">Secondary</button>
                          <button type="button" className="btn btn-outline-success mb-2">Success</button>
                          <button type="button" className="btn btn-outline-danger mb-2">Danger</button>
                          <button type="button" className="btn btn-outline-warning mb-2">Warning</button>
                          <button type="button" className="btn btn-outline-info mb-2">Info</button>
                          <button type="button" className="btn btn-outline-light mb-2">Light</button>
                          <button type="button" className="btn btn-outline-dark mb-2">Dark</button>
                          <hr />
                          <button type="button" className="btn btn-primary btn-lg">Large button</button>
                          <button type="button" className="btn btn-warning btn-sm">Small button</button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            style={{ '--bs-btn-padding-y': '0.25rem', '--bs-btn-padding-x': '0.5rem', '--bs-btn-font-size': '0.75rem' } as CSSProperties}
                          >
                            Custom button
                          </button>
                        </div>
                        
                      </div>
                      
                    </div>
                    
                    
                    <div className="col-md-6">
                      
                      <div className="card card-info card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Button Group</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <div className="btn-group mb-2" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary">Left</button>
                            <button type="button" className="btn btn-primary">Middle</button>
                            <button type="button" className="btn btn-primary">Right</button>
                          </div>
                          <div
                            className="btn-group mb-2"
                            role="group"
                            aria-label="Basic mixed styles example"
                          >
                            <button type="button" className="btn btn-danger">Left</button>
                            <button type="button" className="btn btn-warning">Middle</button>
                            <button type="button" className="btn btn-success">Right</button>
                          </div>
                          <div className="btn-group mb-2" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary">Left</button>
                            <button type="button" className="btn btn-outline-primary">Middle</button>
                            <button type="button" className="btn btn-outline-primary">Right</button>
                          </div>
                          <hr />
                          <div
                            className="btn-group mb-2"
                            role="group"
                            aria-label="Basic checkbox toggle button group"
                          >
                            <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

                            <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

                            <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
                          </div>
                          <div
                            className="btn-group mb-2"
                            role="group"
                            aria-label="Basic radio toggle button group"
                          >
                            <input
                              type="radio"
                              className="btn-check"
                              name="btnradio"
                              id="btnradio1"
                              autoComplete="off"
                              defaultChecked
                            />
                            <label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

                            <input
                              type="radio"
                              className="btn-check"
                              name="btnradio"
                              id="btnradio2"
                              autoComplete="off"
                            />
                            <label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

                            <input
                              type="radio"
                              className="btn-check"
                              name="btnradio"
                              id="btnradio3"
                              autoComplete="off"
                            />
                            <label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
                          </div>
                          <hr />
                          <div
                            className="btn-group mb-2"
                            role="group"
                            aria-label="Button group with nested dropdown"
                          >
                            <button type="button" className="btn btn-primary">1</button>
                            <button type="button" className="btn btn-primary">2</button>
                            <div className="btn-group" role="group">
                              <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Dropdown
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="#">Dropdown link</a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">Dropdown link</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      
                      
                      <div className="card card-primary card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Collapse</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <p className="d-inline-flex gap-1">
                            <a
                              className="btn btn-primary"
                              data-bs-toggle="collapse"
                              href="#collapseExample"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              Link with href
                            </a>
                            <button
                              className="btn btn-success"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseExample"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              Button with data-bs-target
                            </button>
                          </p>
                          <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                              Some placeholder content for the collapse component. This panel is hidden by
                              default but revealed when the user activates the relevant trigger.
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      
                      
                      <div className="card card-success card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Dropdowns</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-primary dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Primary
                            </button>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Action</a></li>
                              <li>
                                <a className="dropdown-item" href="#">Another action</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">Separated link</a>
                              </li>
                            </ul>
                          </div>
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-secondary dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Secondary
                            </button>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Action</a></li>
                              <li>
                                <a className="dropdown-item" href="#">Another action</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">Separated link</a>
                              </li>
                            </ul>
                          </div>
                          <hr />
                          <div className="btn-group">
                            <button type="button" className="btn btn-danger">Danger Split</button>
                            <button
                              type="button"
                              className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Action</a></li>
                              <li>
                                <a className="dropdown-item" href="#">Another action</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">Separated link</a>
                              </li>
                            </ul>
                          </div>
                          <div className="btn-group">
                            <button type="button" className="btn btn-warning">Warning Split</button>
                            <button
                              type="button"
                              className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Action</a></li>
                              <li>
                                <a className="dropdown-item" href="#">Another action</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">Separated link</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                      </div>
                      
                      
                      <div className="card card-warning card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">List Group</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <div className="list-group">
                            <a
                              href="#"
                              className="list-group-item list-group-item-action active"
                              aria-current="true"
                            >
                              The current link item
                            </a>
                            <a href="#" className="list-group-item list-group-item-action"
                              >A second link item</a
                            >
                            <a href="#" className="list-group-item list-group-item-action"
                              >A third link item</a
                            >
                            <a href="#" className="list-group-item list-group-item-action"
                              >A fourth link item</a
                            >
                            <a
                              className="list-group-item list-group-item-action disabled"
                              aria-disabled="true"
                              >A disabled link item</a
                            >
                          </div>
                        </div>
                        
                      </div>
                      
                      
                      <div className="card card-danger card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Navbar</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                              <a className="navbar-brand" href="#">Navbar</a>
                              <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                              >
                                <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                  <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                  </li>
                                  <li className="nav-item dropdown">
                                    <a
                                      className="nav-link dropdown-toggle"
                                      href="#"
                                      role="button"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                      <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                      </li>
                                      <li>
                                        <a className="dropdown-item" href="#">Another action</a>
                                      </li>
                                      <li>
                                        <hr className="dropdown-divider" />
                                      </li>
                                      <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                  </li>
                                </ul>
                                <form className="d-flex" role="search">
                                  <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                  />
                                  <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                              </div>
                            </div>
                          </nav>
                        </div>
                        
                      </div>
                      
                      
                      <div className="card card-info card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Pagination</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className="page-item">
                                <a className="page-link" href="#">Previous</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">1</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">2</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">3</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                              </li>
                            </ul>
                          </nav>
                          <hr />
                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                  <span aria-hidden="true">&laquo;</span>
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">1</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">2</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">3</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                  <span aria-hidden="true">&raquo;</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                          <hr />
                          <nav aria-label="...">
                            <ul className="pagination">
                              <li className="page-item disabled">
                                <a className="page-link">Previous</a>
                              </li>
                              <li className="page-item active" aria-current="page">
                                <a className="page-link" href="#">1</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">2</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">3</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        
                      </div>
                      
                      
                      <div className="card card-secondary card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Placeholder</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <div className="card" aria-hidden="true">
                            <div className="card-body">
                              <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                              </h5>
                              <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                              </p>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      
                      
                      <div className="card card-primary card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Progress</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <div
                            className="progress mb-2"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: '25%', borderRadius: '0.375rem' }}
                            ></div>
                          </div>
                          <div
                            className="progress mb-2"
                            role="progressbar"
                            aria-label="Default striped example"
                            aria-valuenow={10}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div className="progress-bar" style={{ width: '10%', borderRadius: '0.375rem' }}></div>
                          </div>
                          <div
                            className="progress mb-2"
                            role="progressbar"
                            aria-label="Info striped example"
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar progress-bar-striped bg-info"
                              style={{ width: '50%', borderRadius: '0.375rem' }}
                            ></div>
                          </div>
                          <div
                            className="progress mb-2"
                            role="progressbar"
                            aria-label="Warning striped example"
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                              style={{ width: '75%', borderRadius: '0.375rem' }}
                            ></div>
                          </div>
                          <div
                            className="progress mb-2"
                            role="progressbar"
                            aria-label="Danger striped example"
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                              style={{ width: '100%', borderRadius: '0.375rem' }}
                            ></div>
                          </div>
                        </div>
                        
                      </div>
                      
                      
                      <div className="card card-primary card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Toast</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <button
                            type="button"
                            className="btn btn-primary mb-2"
                            data-bs-toggle="toast"
                            data-bs-target="toastDefault"
                          >
                            Show default toast
                          </button>
                          <hr />
                          <button
                            type="button"
                            className="btn btn-primary mb-2"
                            data-bs-toggle="toast"
                            data-bs-target="toastPrimary"
                          >
                            Show primary toast
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary mb-2"
                            data-bs-toggle="toast"
                            data-bs-target="toastSecondary"
                          >
                            Show secondary toast
                          </button>
                          <button
                            type="button"
                            className="btn btn-success mb-2"
                            data-bs-toggle="toast"
                            data-bs-target="toastSuccess"
                          >
                            Show success toast
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger mb-2"
                            data-bs-toggle="toast"
                            data-bs-target="toastDanger"
                          >
                            Show danger toast
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning mb-2"
                            data-bs-toggle="toast"
                            data-bs-target="toastWarning"
                          >
                            Show warning toast
                          </button>
                          <button
                            type="button"
                            className="btn btn-info mb-2"
                            data-bs-toggle="toast"
                            data-bs-target="toastInfo"
                          >
                            Show info toast
                          </button>
                          <button
                            type="button"
                            className="btn btn-light mb-2"
                            data-bs-toggle="toast"
                            data-bs-target="toastLight"
                          >
                            Show light toast
                          </button>
                          <button
                            type="button"
                            className="btn btn-dark mb-2"
                            data-bs-toggle="toast"
                            data-bs-target="toastDark"
                          >
                            Show dark toast
                          </button>
                          <div className="toast-container position-fixed bottom-0 end-0 p-3">
                            <div
                              id="toastDefault"
                              className="toast"
                              role="alert"
                              aria-live="assertive"
                              aria-atomic="true"
                            >
                              <div className="toast-header">
                                <i className="bi bi-circle me-2"></i>
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="toast"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="toast-body">Hello, world! This is a toast message.</div>
                            </div>
                            <div
                              id="toastPrimary"
                              className="toast toast-primary"
                              role="alert"
                              aria-live="assertive"
                              aria-atomic="true"
                            >
                              <div className="toast-header">
                                <i className="bi bi-circle me-2"></i>
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="toast"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="toast-body">Hello, world! This is a toast message.</div>
                            </div>
                            <div
                              id="toastSecondary"
                              className="toast toast-secondary"
                              role="alert"
                              aria-live="assertive"
                              aria-atomic="true"
                            >
                              <div className="toast-header">
                                <i className="bi bi-circle me-2"></i>
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="toast"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="toast-body">Hello, world! This is a toast message.</div>
                            </div>
                            <div
                              id="toastSuccess"
                              className="toast toast-success"
                              role="alert"
                              aria-live="assertive"
                              aria-atomic="true"
                            >
                              <div className="toast-header">
                                <i className="bi bi-circle me-2"></i>
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="toast"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="toast-body">Hello, world! This is a toast message.</div>
                            </div>
                            <div
                              id="toastDanger"
                              className="toast toast-danger"
                              role="alert"
                              aria-live="assertive"
                              aria-atomic="true"
                            >
                              <div className="toast-header">
                                <i className="bi bi-circle me-2"></i>
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="toast"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="toast-body">Hello, world! This is a toast message.</div>
                            </div>
                            <div
                              id="toastWarning"
                              className="toast toast-warning"
                              role="alert"
                              aria-live="assertive"
                              aria-atomic="true"
                            >
                              <div className="toast-header">
                                <i className="bi bi-circle me-2"></i>
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="toast"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="toast-body">Hello, world! This is a toast message.</div>
                            </div>
                            <div
                              id="toastInfo"
                              className="toast toast-info"
                              role="alert"
                              aria-live="assertive"
                              aria-atomic="true"
                            >
                              <div className="toast-header">
                                <i className="bi bi-circle me-2"></i>
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="toast"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="toast-body">Hello, world! This is a toast message.</div>
                            </div>
                            <div
                              id="toastLight"
                              className="toast toast-light"
                              role="alert"
                              aria-live="assertive"
                              aria-atomic="true"
                            >
                              <div className="toast-header">
                                <i className="bi bi-circle me-2"></i>
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="toast"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="toast-body">Hello, world! This is a toast message.</div>
                            </div>
                            <div
                              id="toastDark"
                              className="toast toast-dark"
                              role="alert"
                              aria-live="assertive"
                              aria-atomic="true"
                            >
                              <div className="toast-header">
                                <i className="bi bi-circle me-2"></i>
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="toast"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="toast-body">Hello, world! This is a toast message.</div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      
                      
                      <div className="card card-primary card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Tooltip</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <p className="muted">
                            Placeholder text to demonstrate some
                            <a href="#" data-bs-toggle="tooltip" data-bs-title="Default tooltip"
                              >inline links</a
                            >
                            with tooltips. This is now just filler, no killer. Content placed here just to
                            mimic the presence of
                            <a href="#" data-bs-toggle="tooltip" data-bs-title="Another tooltip"
                              >real text</a
                            >. And all that just to give you an idea of how tooltips would look when used
                            in real-world situations. So hopefully you've now seen how
                            <a href="#" data-bs-toggle="tooltip" data-bs-title="Another one here too"
                              >these tooltips on links</a
                            >
                            can work in practice, once you use them on
                            <a href="#" data-bs-toggle="tooltip" data-bs-title="The last tip!"
                              >your own</a
                            >
                            site or project.
                          </p>
                        </div>
                        
                      </div>
                      
                      
                      <div className="card card-success card-outline mb-4">
                        
                        <div className="card-header">
                          <div className="card-title">Spinner</div>
                        </div>
                        
                        
                        <div className="card-body">
                          <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="spinner-border text-dark" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  </div>
    </AppContent>
  )
}
