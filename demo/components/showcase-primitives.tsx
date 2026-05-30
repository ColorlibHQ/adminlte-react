'use client'

import { useState } from 'react'
import { Pagination, Stepper } from 'adminlte-react'

const steps = [
  { label: 'Account', description: 'Your details', icon: 'bi-person' },
  { label: 'Profile', description: 'Set up profile', icon: 'bi-card-text' },
  { label: 'Billing', description: 'Payment method', icon: 'bi-credit-card' },
  { label: 'Done', description: 'All set', icon: 'bi-check2' },
]

/** Stateful Pagination + Stepper for the components showcase (client island). */
export function ShowcasePrimitives() {
  const [page, setPage] = useState(3)
  const [step, setStep] = useState(1)

  return (
    <div className="row g-4">
      <div className="col-12">
        <Pagination page={page} totalPages={12} onPageChange={setPage} align="center" />
        <p className="text-center small text-secondary mt-2 mb-0">Page {page} of 12</p>
      </div>
      <div className="col-12">
        <Stepper steps={steps} active={step} onStepClick={setStep} />
        <div className="d-flex justify-content-center gap-2 mt-3">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            Back
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))}
            disabled={step === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
