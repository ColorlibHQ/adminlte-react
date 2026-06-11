'use client'

import { useMemo, useState } from 'react'
import { Accordion } from '@adminlte/react'
import { faqCategories } from '@/lib/faq-data'

/** Searchable FAQ — filters questions live and renders each category with the library Accordion. */
export function Faq() {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const categories = useMemo(
    () =>
      faqCategories
        .map(c => ({ ...c, items: q ? c.items.filter(i => i.q.toLowerCase().includes(q)) : c.items }))
        .filter(c => c.items.length > 0),
    [q]
  )

  return (
    <>
      <div className="row g-2 justify-content-center mb-4">
        <div className="col-md-8 col-lg-6">
          <div className="input-group input-group-lg">
            <span className="input-group-text bg-body">
              <i className="bi bi-search" aria-hidden="true"></i>
            </span>
            <input
              type="search"
              className="form-control"
              placeholder="Search the FAQ…"
              aria-label="Search the FAQ"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {categories.length === 0 ? (
        <div className="card">
          <div className="card-body text-center text-secondary py-5">
            No results for &ldquo;{query}&rdquo;. Try a different search.
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {categories.map(c => (
            <div className="col-lg-12" key={c.title}>
              <div className="card">
                <div className="card-header d-flex align-items-center">
                  <i className={`bi ${c.icon} fs-4 text-primary me-2`} aria-hidden="true"></i>
                  <h3 className="card-title mb-0">{c.title}</h3>
                </div>
                <div className="card-body">
                  <Accordion
                    key={q}
                    flush
                    defaultOpen={q ? 0 : -1}
                    items={c.items.map(i => ({ title: i.q, children: i.a }))}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
