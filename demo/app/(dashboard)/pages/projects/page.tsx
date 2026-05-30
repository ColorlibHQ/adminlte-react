import { AppContent } from 'adminlte-react'
import { getProjects } from '@/lib/projects-data'

const avatarBase: React.CSSProperties = {
  width: '1.75rem',
  height: '1.75rem',
  fontSize: '0.7rem',
  border: '2px solid var(--bs-body-bg)',
}

export const metadata = { title: 'Projects' }

// Async React Server Component — data is fetched on the server (at build time
// for the static export) and never ships a fetching waterfall to the client.
export default async function Page() {
  const projects = await getProjects()
  const onTrack = projects.filter(p => p.status === 'On track').length
  const atRisk = projects.filter(p => p.status === 'At risk' || p.status === 'Delayed').length
  const completed = projects.filter(p => p.status === 'Completed').length

  const summary = [
    { label: 'Active projects', value: projects.length, theme: '' },
    { label: 'On track', value: onTrack, theme: 'text-success' },
    { label: 'At risk / delayed', value: atRisk, theme: 'text-warning' },
    { label: 'Completed', value: completed, theme: 'text-secondary' },
  ]

  return (
    <AppContent title="Projects" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}>
      {/* Summary cards */}
      <div className="row g-3 mb-3">
        {summary.map(s => (
          <div className="col-md-3 col-6" key={s.label}>
            <div className="card h-100">
              <div className="card-body">
                <p className="text-secondary small mb-1">{s.label}</p>
                <h3 className={`mb-0 fw-bold ${s.theme}`}>{s.value}</h3>
              </div>
            </div>
          </div>
        ))}
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
          <select className="form-select form-select-sm" style={{ width: '10rem' }} aria-label="Filter by status">
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
                {projects.map(p => (
                  <tr key={p.name}>
                    <td>
                      <a href="#" className="fw-semibold text-decoration-none">
                        {p.name}
                      </a>
                      <div className="small text-secondary">{p.client}</div>
                    </td>
                    <td>
                      <span className={`badge text-bg-${p.statusTheme}`}>{p.status}</span>
                    </td>
                    <td style={{ minWidth: '8rem' }}>
                      <div className="d-flex align-items-center gap-2">
                        <div className="progress flex-grow-1" style={{ height: '6px' }}>
                          <div
                            className={`progress-bar bg-${p.progressTheme}`}
                            role="progressbar"
                            style={{ width: `${p.progress}%` }}
                            aria-valuenow={p.progress}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                        <small className="text-secondary" style={{ minWidth: '2.25rem' }}>
                          {p.progress}%
                        </small>
                      </div>
                    </td>
                    <td>
                      <div className="d-inline-flex">
                        {p.team.map((m, i) => (
                          <span
                            key={m.initials + i}
                            className={`rounded-circle d-inline-flex align-items-center justify-content-center bg-${m.theme}-subtle text-${m.theme} fw-semibold`}
                            style={{ ...avatarBase, marginLeft: i === 0 ? 0 : '-0.5rem' }}
                            title={m.initials}
                          >
                            {m.initials}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="text-nowrap">{p.budget}</td>
                    <td className="text-nowrap">{p.due}</td>
                    <td>
                      <span className={`badge text-bg-${p.priorityTheme}`}>{p.priority}</span>
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small className="text-secondary">Showing {projects.length} of {projects.length}</small>
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
