'use client'

import { AppContent } from 'adminlte-react'

export default function Page() {
  return (
    <AppContent
      title="Invoice"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Invoice' }]}
    >
      {/* Action bar (hidden on print) */}
      <div className="d-flex justify-content-end gap-2 mb-3 d-print-none">
        <button
          className="btn btn-outline-secondary"
          onClick={() => window.print()}
          type="button"
        >
          <i className="bi bi-printer me-1" aria-hidden="true"></i>Print
        </button>
        <a href="#" className="btn btn-outline-secondary">
          <i className="bi bi-download me-1" aria-hidden="true"></i>PDF
        </a>
        <a href="#" className="btn btn-primary">
          <i className="bi bi-send me-1" aria-hidden="true"></i>Send invoice
        </a>
      </div>

      <div className="card">
        <div className="card-body p-4 p-md-5">
          {/* Header */}
          <div className="row mb-4">
            <div className="col-sm-6">
              <h2 className="h4 mb-0 text-primary fw-semibold">AdminLTE, Inc.</h2>
              <p className="text-secondary mb-0 small">
                795 Folsom Ave, Suite 600
                <br />
                San Francisco, CA 94107
                <br />
                billing@example.com
              </p>
            </div>
            <div className="col-sm-6 text-sm-end">
              <h1 className="h2 mb-1">Invoice</h1>
              <p className="text-secondary mb-0">
                <span className="fw-semibold">#</span>INV-2026-00428
              </p>
              <span className="badge text-bg-success mt-1">Paid</span>
            </div>
          </div>

          {/* Billing details */}
          <div className="row mb-4">
            <div className="col-sm-6">
              <p className="text-secondary small mb-1">Billed to</p>
              <p className="mb-0 fw-semibold">Acme Corporation</p>
              <p className="text-secondary small mb-0">
                Attn: Jane Doe
                <br />
                1234 Market Street
                <br />
                San Francisco, CA 94103
              </p>
            </div>
            <div className="col-sm-6 text-sm-end">
              <p className="text-secondary small mb-1">Issue date</p>
              <p className="mb-2">May 18, 2026</p>
              <p className="text-secondary small mb-1">Due date</p>
              <p className="mb-0">June 1, 2026</p>
            </div>
          </div>

          {/* Items */}
          <div className="table-responsive mb-3">
            <table className="table align-middle mb-0">
              <thead>
                <tr>
                  <th className="border-top-0">Description</th>
                  <th className="border-top-0 text-end" style={{ width: '6rem' }}>
                    Qty
                  </th>
                  <th className="border-top-0 text-end" style={{ width: '9rem' }}>
                    Unit price
                  </th>
                  <th className="border-top-0 text-end" style={{ width: '9rem' }}>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="mb-0 fw-semibold">Pro plan subscription</p>
                    <small className="text-secondary">May 18 - Jun 18, 2026</small>
                  </td>
                  <td className="text-end">1</td>
                  <td className="text-end">$29.00</td>
                  <td className="text-end">$29.00</td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-0 fw-semibold">Additional seats</p>
                    <small className="text-secondary">Pro-rated for current period</small>
                  </td>
                  <td className="text-end">3</td>
                  <td className="text-end">$12.50</td>
                  <td className="text-end">$37.50</td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-0 fw-semibold">SMS notifications add-on</p>
                    <small className="text-secondary">1,000 messages</small>
                  </td>
                  <td className="text-end">1</td>
                  <td className="text-end">$5.00</td>
                  <td className="text-end">$5.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="row justify-content-end">
            <div className="col-md-5 col-lg-4">
              <dl className="row mb-0">
                <dt className="col-7 text-secondary fw-normal">Subtotal</dt>
                <dd className="col-5 text-end mb-2">$71.50</dd>
                <dt className="col-7 text-secondary fw-normal">Tax (8.25%)</dt>
                <dd className="col-5 text-end mb-2">$5.90</dd>
                <dt className="col-7 fw-semibold border-top pt-2">Total due</dt>
                <dd className="col-5 text-end fw-semibold border-top pt-2 mb-0">$77.40 USD</dd>
              </dl>
            </div>
          </div>

          {/* Footer note */}
          <hr className="my-4" />
          <p className="text-secondary small mb-0">
            Thanks for your business. Payment is due within 14 days. If you have any questions
            about this invoice, please contact{' '}
            <a href="mailto:billing@example.com">billing@example.com</a>.
          </p>
        </div>
      </div>
    </AppContent>
  )
}
