import { AppContent } from 'adminlte-react'

export const metadata = { title: "404 Not Found" }

export default function Page() {
  return (
    <AppContent
      title="404 Error Page"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: '404 Error Page' }]}
    >
      <div className="row justify-content-center py-5">
        <div className="col-md-8 col-lg-6 text-center">
          <div className="display-1 fw-bold text-primary lh-1 mb-3">404</div>
          <h1 className="h3 mb-3">Oops! Page not found.</h1>
          <p className="text-secondary mb-4">
            We could not find the page you were looking for. Meanwhile, you may return to the
            dashboard or try searching for what you need.
          </p>
          <form className="row g-2 justify-content-center mb-4" role="search">
            <div className="col-sm-8">
              <div className="input-group">
                <span className="input-group-text bg-body">
                  <i className="bi bi-search" aria-hidden="true" />
                </span>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search…"
                  aria-label="Search"
                />
              </div>
            </div>
            <div className="col-sm-auto">
              <button className="btn btn-primary w-100" type="submit">
                Search
              </button>
            </div>
          </form>
          <a href="/" className="btn btn-outline-secondary">
            <i className="bi bi-arrow-left me-1" aria-hidden="true" />
            Back to dashboard
          </a>
        </div>
      </div>
    </AppContent>
  )
}
