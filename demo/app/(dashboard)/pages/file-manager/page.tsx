'use client'

import { useState } from 'react'
import { AppContent } from 'adminlte-react'

interface FileRow {
  name: string
  icon: string
  iconColor: string
  size: string
  modified: string
  shared?: boolean
}

const files: FileRow[] = [
  { name: 'Customer interviews', icon: 'bi-folder-fill', iconColor: 'text-warning', size: '—', modified: 'Today' },
  { name: 'Q2 planning', icon: 'bi-folder-fill', iconColor: 'text-warning', size: '—', modified: 'Yesterday', shared: true },
  { name: 'design-review.pdf', icon: 'bi-file-earmark-pdf-fill', iconColor: 'text-danger', size: '1.4 MB', modified: '10:42 AM' },
  { name: 'focus-ring-dark.png', icon: 'bi-file-earmark-image-fill', iconColor: 'text-primary', size: '320 KB', modified: '10:38 AM' },
  { name: 'INV-2026-00428.pdf', icon: 'bi-file-earmark-pdf-fill', iconColor: 'text-danger', size: '184 KB', modified: 'Yesterday' },
  { name: 'roadmap.docx', icon: 'bi-file-earmark-word-fill', iconColor: 'text-info', size: '47 KB', modified: 'Yesterday', shared: true },
  { name: 'analytics-may.xlsx', icon: 'bi-file-earmark-spreadsheet-fill', iconColor: 'text-success', size: '92 KB', modified: 'May 16' },
  { name: 'site-export-2026-05.zip', icon: 'bi-file-earmark-zip-fill', iconColor: 'text-secondary', size: '12.3 MB', modified: 'May 14' },
  { name: 'main.tsx', icon: 'bi-file-earmark-code-fill', iconColor: 'text-primary', size: '8 KB', modified: 'May 12' },
]

export default function Page() {
  const [view, setView] = useState<'grid' | 'list'>('grid')

  return (
    <AppContent
      title="File Manager"
      breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'Files' }]}
    >
      <div className="row g-3">
        {/* Folder tree */}
        <div className="col-lg-3">
          <div className="d-grid gap-2 mb-3">
            <button className="btn btn-primary" type="button">
              <i className="bi bi-cloud-upload me-1" aria-hidden="true"></i>
              Upload files
            </button>
            <button className="btn btn-outline-secondary" type="button">
              <i className="bi bi-folder-plus me-1" aria-hidden="true"></i>
              New folder
            </button>
          </div>
          <div className="card">
            <div className="list-group list-group-flush">
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center active"
              >
                <span>
                  <i className="bi bi-house me-2" aria-hidden="true"></i>
                  My Drive
                </span>
                <small className="opacity-75">24</small>
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center ps-4"
              >
                <span>
                  <i className="bi bi-folder me-2" aria-hidden="true"></i>
                  Documents
                </span>
                <small className="opacity-75">12</small>
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center ps-4 active"
              >
                <span>
                  <i className="bi bi-folder me-2" aria-hidden="true"></i>
                  Design
                </span>
                <small className="opacity-75">8</small>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center ps-5"
              >
                <span>
                  <i className="bi bi-folder me-2" aria-hidden="true"></i>
                  v2.4 candidates
                </span>
                <small className="opacity-75">4</small>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center ps-5"
              >
                <span>
                  <i className="bi bi-folder me-2" aria-hidden="true"></i>
                  Archive
                </span>
                <small className="opacity-75">28</small>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center ps-4"
              >
                <span>
                  <i className="bi bi-folder me-2" aria-hidden="true"></i>
                  Invoices
                </span>
                <small className="opacity-75">41</small>
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <span>
                  <i className="bi bi-people me-2" aria-hidden="true"></i>
                  Shared with me
                </span>
                <small className="opacity-75">9</small>
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <span>
                  <i className="bi bi-star me-2" aria-hidden="true"></i>
                  Starred
                </span>
                <small className="opacity-75">6</small>
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <span>
                  <i className="bi bi-clock-history me-2" aria-hidden="true"></i>
                  Recent
                </span>
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <span>
                  <i className="bi bi-trash me-2" aria-hidden="true"></i>
                  Trash
                </span>
                <small className="opacity-75">3</small>
              </a>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <p className="fw-semibold mb-2 small">
                <i className="bi bi-cloud me-1" aria-hidden="true"></i>
                Storage
              </p>
              <div className="progress mb-2" style={{ height: '8px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '62%' }}
                  aria-valuenow={62}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <small className="text-secondary"> 6.2 GB of 10 GB used </small>
            </div>
          </div>
        </div>

        {/* File browser */}
        <div className="col-lg-9">
          <div className="card">
            <div className="card-header d-flex flex-wrap gap-2 align-items-center">
              <nav aria-label="breadcrumb" className="flex-grow-1">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="#">
                      <i className="bi bi-house" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">My Drive</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Design
                  </li>
                </ol>
              </nav>
              <div className="input-group input-group-sm" style={{ width: '14rem' }}>
                <span className="input-group-text">
                  <i className="bi bi-search" aria-hidden="true"></i>
                </span>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search files…"
                  aria-label="Search files"
                />
              </div>
              <div className="btn-group btn-group-sm" role="group" aria-label="View">
                <input
                  type="radio"
                  className="btn-check"
                  name="view"
                  id="view-grid"
                  checked={view === 'grid'}
                  onChange={() => setView('grid')}
                />
                <label className="btn btn-outline-secondary" htmlFor="view-grid">
                  <i className="bi bi-grid-3x3-gap" aria-hidden="true"></i>
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="view"
                  id="view-list"
                  checked={view === 'list'}
                  onChange={() => setView('list')}
                />
                <label className="btn btn-outline-secondary" htmlFor="view-list">
                  <i className="bi bi-list-ul" aria-hidden="true"></i>
                </label>
              </div>
            </div>
            <div className="card-body">
              {/* Grid view */}
              <div
                id="grid-view"
                className={`row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3${view === 'grid' ? '' : ' d-none'}`}
              >
                {files.map((file) => (
                  <div className="col" key={file.name}>
                    <a
                      href="#"
                      className="card text-center text-decoration-none text-body h-100 position-relative"
                    >
                      {file.shared && (
                        <span className="badge text-bg-info position-absolute top-0 end-0 m-2">
                          <i className="bi bi-people-fill me-1" aria-hidden="true"></i>
                          Shared
                        </span>
                      )}
                      <div className="card-body d-flex flex-column justify-content-center pb-2">
                        <i className={`bi ${file.icon} ${file.iconColor} display-5 mb-3`} aria-hidden="true"></i>
                        <p className="card-title fw-medium small text-break mb-0">{file.name}</p>
                      </div>
                      <div className="card-footer bg-transparent small text-secondary py-2">
                        <div className="d-flex justify-content-between align-items-center gap-2">
                          <span className="text-truncate" title={file.size}>
                            {file.icon === 'bi-folder-fill' ? (
                              <>
                                <i className="bi bi-folder me-1" aria-hidden="true"></i>
                                Folder
                              </>
                            ) : (
                              file.size
                            )}
                          </span>
                          <span className="text-truncate" title={file.modified}>
                            {' '}
                            {file.modified}{' '}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              {/* List view */}
              <div id="list-view" className={view === 'list' ? '' : 'd-none'}>
                <div className="table-responsive">
                  <table className="table align-middle mb-0">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Modified</th>
                        <th className="text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {files.map((file) => (
                        <tr key={file.name}>
                          <td>
                            <i className={`bi ${file.icon} ${file.iconColor} me-2`} aria-hidden="true"></i>
                            {file.name}
                            {file.shared && <span className="badge text-bg-info ms-2"> Shared </span>}
                          </td>
                          <td>{file.size}</td>
                          <td>{file.modified}</td>
                          <td className="text-end">
                            <div className="btn-group btn-group-sm">
                              <button className="btn btn-outline-secondary" type="button" title="Download">
                                <i className="bi bi-download" aria-hidden="true"></i>
                              </button>
                              <button className="btn btn-outline-secondary" type="button" title="Share">
                                <i className="bi bi-share" aria-hidden="true"></i>
                              </button>
                              <button className="btn btn-outline-danger" type="button" title="Delete">
                                <i className="bi bi-trash" aria-hidden="true"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card-footer text-secondary small">9 items</div>
          </div>
        </div>
      </div>
    </AppContent>
  )
}
