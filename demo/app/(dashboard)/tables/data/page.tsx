import { AppContent } from 'adminlte-react'
import { UsersTable } from '@/components/users-table'

export const metadata = { title: "Data Tables" }

export default function DataTablePage() {
  return (
    <AppContent
      title="Data"
      breadcrumbs={[
        { label: 'Home', href: '#' },
        { label: 'Tables', href: '#' },
        { label: 'Data' },
      ]}
    >
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Users</h3>
          <div className="card-tools">
            <div className="input-group input-group-sm" style={{ width: '16rem' }}>
              <span className="input-group-text">
                <i className="bi bi-search" aria-hidden="true"></i>
              </span>
              <input
                id="table-filter"
                type="search"
                className="form-control"
                placeholder="Filter rows…"
                aria-label="Filter rows"
              />
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex gap-2 mb-3">
            <button id="export-csv" type="button" className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-filetype-csv me-1" aria-hidden="true"></i>
              Export CSV
            </button>
            <button id="export-json" type="button" className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-filetype-json me-1" aria-hidden="true"></i>
              Export JSON
            </button>
            <button id="print-table" type="button" className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-printer me-1" aria-hidden="true"></i>
              Print
            </button>
          </div>
          <UsersTable />
        </div>
        <div className="card-footer text-secondary small">
          Powered by{' '}
          <a href="https://tabulator.info/" target="_blank" rel="noopener">
            Tabulator
          </a>{' '}
          &mdash; vanilla JS, no jQuery required.
        </div>
      </div>
    </AppContent>
  )
}
