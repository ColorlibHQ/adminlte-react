'use client'

import { useMemo, useState } from 'react'
import type { Project } from '@/lib/projects-data'

const avatarBase: React.CSSProperties = {
  width: '1.75rem',
  height: '1.75rem',
  fontSize: '0.7rem',
  border: '2px solid var(--bs-body-bg)',
}
const PAGE_SIZE = 5
const PRIORITY_ORDER: Record<string, number> = { High: 3, Medium: 2, Low: 1 }

type SortKey = 'name' | 'status' | 'progress' | 'budget' | 'due' | 'priority'

function compare(a: Project, b: Project, key: SortKey): number {
  switch (key) {
    case 'name':
      return a.name.localeCompare(b.name)
    case 'status':
      return a.status.localeCompare(b.status)
    case 'progress':
      return a.progress - b.progress
    case 'budget':
      return parseFloat(a.budget.replace(/[^0-9.]/g, '')) - parseFloat(b.budget.replace(/[^0-9.]/g, ''))
    case 'due':
      return new Date(a.due).getTime() - new Date(b.due).getTime()
    case 'priority':
      return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
  }
}

/** Client-side searchable / sortable / paginated projects table (data fetched by the RSC page). */
export function ProjectsTable({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('name')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const rows = projects.filter(
      p =>
        (!q || p.name.toLowerCase().includes(q) || p.client.toLowerCase().includes(q)) &&
        (!status || p.status === status)
    )
    return [...rows].sort((a, b) => {
      const c = compare(a, b, sortKey)
      return sortDir === 'asc' ? c : -c
    })
  }, [projects, query, status, sortKey, sortDir])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const current = Math.min(page, pageCount)
  const rows = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE)

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => (d === 'asc' ? 'desc' : 'asc'))
    else {
      setSortKey(key)
      setSortDir('asc')
    }
    setPage(1)
  }

  const Th = ({ label, col, className }: { label: string; col: SortKey; className?: string }) => (
    <th
      className={className}
      aria-sort={sortKey === col ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
    >
      <button
        type="button"
        className="btn btn-link p-0 text-reset text-decoration-none fw-bold"
        onClick={() => toggleSort(col)}
        style={{ userSelect: 'none' }}
      >
        {label}{' '}
        <i
          className={`bi small text-secondary ${
            sortKey === col ? (sortDir === 'asc' ? 'bi-caret-up-fill' : 'bi-caret-down-fill') : 'bi-arrow-down-up'
          }`}
          aria-hidden="true"
        ></i>
      </button>
    </th>
  )

  return (
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
            value={query}
            onChange={e => {
              setQuery(e.target.value)
              setPage(1)
            }}
          />
        </div>
        <select
          className="form-select form-select-sm"
          style={{ width: '10rem' }}
          aria-label="Filter by status"
          value={status}
          onChange={e => {
            setStatus(e.target.value)
            setPage(1)
          }}
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
                <Th label="Project" col="name" />
                <Th label="Status" col="status" />
                <Th label="Progress" col="progress" />
                <th>Team</th>
                <Th label="Budget" col="budget" />
                <Th label="Due" col="due" />
                <Th label="Priority" col="priority" />
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(p => (
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
                          className={`rounded-circle d-inline-flex align-items-center justify-content-center bg-${m.theme}-subtle text-${m.theme}-emphasis fw-semibold`}
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
              {rows.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center text-secondary py-4">
                    No projects match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <small className="text-secondary">
          {filtered.length === 0
            ? 'No results'
            : `Showing ${(current - 1) * PAGE_SIZE + 1}–${Math.min(current * PAGE_SIZE, filtered.length)} of ${filtered.length}`}
        </small>
        <nav aria-label="Pagination">
          <ul className="pagination pagination-sm mb-0">
            <li className={`page-item ${current === 1 ? 'disabled' : ''}`}>
              <button className="page-link" type="button" onClick={() => setPage(current - 1)} disabled={current === 1}>
                Previous
              </button>
            </li>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map(n => (
              <li key={n} className={`page-item ${n === current ? 'active' : ''}`}>
                <button className="page-link" type="button" onClick={() => setPage(n)}>
                  {n}
                </button>
              </li>
            ))}
            <li className={`page-item ${current === pageCount ? 'disabled' : ''}`}>
              <button className="page-link" type="button" onClick={() => setPage(current + 1)} disabled={current === pageCount}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
