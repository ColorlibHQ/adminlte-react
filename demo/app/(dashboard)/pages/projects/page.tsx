import { AppContent } from 'adminlte-react'

const avatarBase: React.CSSProperties = {
  width: '1.75rem',
  height: '1.75rem',
  fontSize: '0.7rem',
  border: '2px solid var(--bs-body-bg)',
}

export default function Page() {
  return (
    <AppContent
      title="Projects"
      breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'Projects' }]}
    >
      {/* Summary cards */}
      <div className="row g-3 mb-3">
        <div className="col-md-3 col-6">
          <div className="card h-100">
            <div className="card-body">
              <p className="text-secondary small mb-1">Active projects</p>
              <h3 className="mb-0 fw-bold">6</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card h-100">
            <div className="card-body">
              <p className="text-secondary small mb-1">On track</p>
              <h3 className="mb-0 fw-bold text-success">3</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card h-100">
            <div className="card-body">
              <p className="text-secondary small mb-1">At risk / delayed</p>
              <h3 className="mb-0 fw-bold text-warning">2</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card h-100">
            <div className="card-body">
              <p className="text-secondary small mb-1">Completed</p>
              <h3 className="mb-0 fw-bold text-secondary">1</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="card">
        <div className="card-header d-flex flex-wrap gap-2 align-items-center">
          <h3 className="card-title mb-0 me-auto">All projects</h3>
          <div className="input-group input-group-sm" style={{ width: '16rem' }}>
            <span className="input-group-text">
              <i className="bi bi-search" aria-hidden="true"></i>
            </span>
            <input
              type="search"
              className="form-control"
              placeholder="Search projects…"
              aria-label="Search projects"
            />
          </div>
          <select
            className="form-select form-select-sm"
            style={{ width: '10rem' }}
            aria-label="Filter by status"
          >
            <option value="">All statuses</option>
            <option>On track</option>
            <option>At risk</option>
            <option>Delayed</option>
            <option>Completed</option>
          </select>
          <button className="btn btn-primary btn-sm" type="button">
            <i className="bi bi-plus-lg me-1" aria-hidden="true"></i>
            New project
          </button>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Team</th>
                  <th>Budget</th>
                  <th>Due</th>
                  <th>Priority</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="#" className="fw-semibold text-decoration-none">
                      AdminLTE 4 Release
                    </a>
                    <div className="small text-secondary">Internal</div>
                  </td>
                  <td>
                    <span className="badge text-bg-success"> On track </span>
                  </td>
                  <td style={{ minWidth: '8rem' }}>
                    <div className="d-flex align-items-center gap-2">
                      <div className="progress flex-grow-1" style={{ height: '6px' }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: '78%' }}
                          aria-valuenow={78}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <small className="text-secondary" style={{ minWidth: '2.25rem' }}>
                        {' '}
                        78%{' '}
                      </small>
                    </div>
                  </td>
                  <td>
                    <div className="d-inline-flex">
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary fw-semibold"
                        style={{ ...avatarBase, marginLeft: 0 }}
                        title="JD"
                      >
                        JD
                      </span>
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-info-subtle text-info fw-semibold"
                        style={{ ...avatarBase, marginLeft: '-0.5rem' }}
                        title="OB"
                      >
                        OB
                      </span>
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-success-subtle text-success fw-semibold"
                        style={{ ...avatarBase, marginLeft: '-0.5rem' }}
                        title="DM"
                      >
                        DM
                      </span>
                    </div>
                  </td>
                  <td className="text-nowrap">$24,500</td>
                  <td className="text-nowrap">Jun 14, 2026</td>
                  <td>
                    <span className="badge text-bg-danger"> High </span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-secondary" type="button" title="View">
                        <i className="bi bi-eye" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-outline-secondary" type="button" title="Edit">
                        <i className="bi bi-pencil" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-outline-secondary" type="button" title="More">
                        <i className="bi bi-three-dots-vertical" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#" className="fw-semibold text-decoration-none">
                      Marketing Site Redesign
                    </a>
                    <div className="small text-secondary">Acme Corp</div>
                  </td>
                  <td>
                    <span className="badge text-bg-warning"> At risk </span>
                  </td>
                  <td style={{ minWidth: '8rem' }}>
                    <div className="d-flex align-items-center gap-2">
                      <div className="progress flex-grow-1" style={{ height: '6px' }}>
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: '42%' }}
                          aria-valuenow={42}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <small className="text-secondary" style={{ minWidth: '2.25rem' }}>
                        {' '}
                        42%{' '}
                      </small>
                    </div>
                  </td>
                  <td>
                    <div className="d-inline-flex">
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-info-subtle text-info fw-semibold"
                        style={{ ...avatarBase, marginLeft: 0 }}
                        title="OB"
                      >
                        OB
                      </span>
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-warning-subtle text-warning fw-semibold"
                        style={{ ...avatarBase, marginLeft: '-0.5rem' }}
                        title="MR"
                      >
                        MR
                      </span>
                    </div>
                  </td>
                  <td className="text-nowrap">$48,000</td>
                  <td className="text-nowrap">Jul 02, 2026</td>
                  <td>
                    <span className="badge text-bg-danger"> High </span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-secondary" type="button" title="View">
                        <i className="bi bi-eye" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-outline-secondary" type="button" title="Edit">
                        <i className="bi bi-pencil" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-outline-secondary" type="button" title="More">
                        <i className="bi bi-three-dots-vertical" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#" className="fw-semibold text-decoration-none">
                      Mobile App v2
                    </a>
                    <div className="small text-secondary">Nimbus Labs</div>
                  </td>
                  <td>
                    <span className="badge text-bg-success"> On track </span>
                  </td>
                  <td style={{ minWidth: '8rem' }}>
                    <div className="d-flex align-items-center gap-2">
                      <div className="progress flex-grow-1" style={{ height: '6px' }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: '61%' }}
                          aria-valuenow={61}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <small className="text-secondary" style={{ minWidth: '2.25rem' }}>
                        {' '}
                        61%{' '}
                      </small>
                    </div>
                  </td>
                  <td>
                    <div className="d-inline-flex">
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary fw-semibold"
                        style={{ ...avatarBase, marginLeft: 0 }}
                        title="LC"
                      >
                        LC
                      </span>
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-danger-subtle text-danger fw-semibold"
                        style={{ ...avatarBase, marginLeft: '-0.5rem' }}
                        title="ED"
                      >
                        ED
                      </span>
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-secondary-subtle text-secondary fw-semibold"
                        style={{ ...avatarBase, marginLeft: '-0.5rem' }}
                        title="AF"
                      >
                        AF
                      </span>
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-info-subtle text-info fw-semibold"
                        style={{ ...avatarBase, marginLeft: '-0.5rem' }}
                        title="SK"
                      >
                        SK
                      </span>
                    </div>
                  </td>
                  <td className="text-nowrap">$92,500</td>
                  <td className="text-nowrap">Aug 18, 2026</td>
                  <td>
                    <span className="badge text-bg-info"> Medium </span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-secondary" type="button" title="View">
                        <i className="bi bi-eye" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-outline-secondary" type="button" title="Edit">
                        <i className="bi bi-pencil" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-outline-secondary" type="button" title="More">
                        <i className="bi bi-three-dots-vertical" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#" className="fw-semibold text-decoration-none">
                      Analytics Pipeline
                    </a>
                    <div className="small text-secondary">Internal</div>
                  </td>
                  <td>
                    <span className="badge text-bg-danger"> Delayed </span>
                  </td>
                  <td style={{ minWidth: '8rem' }}>
                    <div className="d-flex align-items-center gap-2">
                      <div className="progress flex-grow-1" style={{ height: '6px' }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: '22%' }}
                          aria-valuenow={22}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <small className="text-secondary" style={{ minWidth: '2.25rem' }}>
                        {' '}
                        22%{' '}
                      </small>
                    </div>
                  </td>
                  <td>
                    <div className="d-inline-flex">
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-success-subtle text-success fw-semibold"
                        style={{ ...avatarBase, marginLeft: 0 }}
                        title="DM"
                      >
                        DM
                      </span>
                    </div>
                  </td>
                  <td className="text-nowrap">$12,000</td>
                  <td className="text-nowrap">May 30, 2026</td>
                  <td>
                    <span className="badge text-bg-info"> Medium </span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-secondary" type="button" title="View">
                        <i className="bi bi-eye" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-outline-secondary" type="button" title="Edit">
                        <i className="bi bi-pencil" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-outline-secondary" type="button" title="More">
                        <i className="bi bi-three-dots-vertical" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#" className="fw-semibold text-decoration-none">
                      Brand Style Guide
                    </a>
                    <div className="small text-secondary">Riverhaus</div>
                  </td>
                  <td>
                    <span className="badge text-bg-secondary"> Completed </span>
                  </td>
                  <td style={{ minWidth: '8rem' }}>
                    <div className="d-flex align-items-center gap-2">
                      <div className="progress flex-grow-1" style={{ height: '6px' }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: '100%' }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <small className="text-secondary" style={{ minWidth: '2.25rem' }}>
                        {' '}
                        100%{' '}
                      </small>
                    </div>
                  </td>
                  <td>
                    <div className="d-inline-flex">
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-info-subtle text-info fw-semibold"
                        style={{ ...avatarBase, marginLeft: 0 }}
                        title="OB"
                      >
                        OB
                      </span>
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-danger-subtle text-danger fw-semibold"
                        style={{ ...avatarBase, marginLeft: '-0.5rem' }}
                        title="ED"
                      >
                        ED
                      </span>
                    </div>
                  </td>
                  <td className="text-nowrap">$8,200</td>
                  <td className="text-nowrap">May 09, 2026</td>
                  <td>
                    <span className="badge text-bg-secondary"> Low </span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-secondary" type="button" title="View">
                        <i className="bi bi-eye" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-outline-secondary" type="button" title="Edit">
                        <i className="bi bi-pencil" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-outline-secondary" type="button" title="More">
                        <i className="bi bi-three-dots-vertical" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#" className="fw-semibold text-decoration-none">
                      Onboarding Email Flow
                    </a>
                    <div className="small text-secondary">Acme Corp</div>
                  </td>
                  <td>
                    <span className="badge text-bg-success"> On track </span>
                  </td>
                  <td style={{ minWidth: '8rem' }}>
                    <div className="d-flex align-items-center gap-2">
                      <div className="progress flex-grow-1" style={{ height: '6px' }}>
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: '55%' }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <small className="text-secondary" style={{ minWidth: '2.25rem' }}>
                        {' '}
                        55%{' '}
                      </small>
                    </div>
                  </td>
                  <td>
                    <div className="d-inline-flex">
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-warning-subtle text-warning fw-semibold"
                        style={{ ...avatarBase, marginLeft: 0 }}
                        title="MR"
                      >
                        MR
                      </span>
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary fw-semibold"
                        style={{ ...avatarBase, marginLeft: '-0.5rem' }}
                        title="JD"
                      >
                        JD
                      </span>
                    </div>
                  </td>
                  <td className="text-nowrap">$6,800</td>
                  <td className="text-nowrap">Jun 22, 2026</td>
                  <td>
                    <span className="badge text-bg-secondary"> Low </span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-secondary" type="button" title="View">
                        <i className="bi bi-eye" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-outline-secondary" type="button" title="Edit">
                        <i className="bi bi-pencil" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-outline-secondary" type="button" title="More">
                        <i className="bi bi-three-dots-vertical" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small className="text-secondary"> Showing 6 of 6 </small>
          <nav aria-label="Pagination">
            <ul className="pagination pagination-sm mb-0">
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </AppContent>
  )
}
