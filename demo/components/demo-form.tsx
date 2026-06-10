'use client'

import { useState } from 'react'
import { Toast } from '@colorlib/adminlte-react'

/**
 * Wraps form fields with HTML5 validation (Bootstrap `was-validated` styling) and a
 * success toast — so demo forms actually validate and "submit" without navigating.
 * Pass the fields + submit button as children; add `required` to inputs.
 */
export function DemoForm({
  children,
  successMessage = 'Submitted successfully.',
  successTitle = 'Success',
  className,
  id,
  resetOnSubmit = true,
}: {
  children: React.ReactNode
  successMessage?: string
  successTitle?: string
  className?: string
  /** Lets a submit button outside the form trigger it via `form={id}`. */
  id?: string
  /** Clear fields after a successful submit. Off for settings/profile forms that keep their values. */
  resetOnSubmit?: boolean
}) {
  const [show, setShow] = useState(false)

  return (
    <>
      <form
        id={id}
        className={`needs-validation${className ? ` ${className}` : ''}`}
        noValidate
        onSubmit={e => {
          e.preventDefault()
          const form = e.currentTarget
          if (!form.checkValidity()) {
            form.classList.add('was-validated')
            return
          }
          form.classList.remove('was-validated')
          if (resetOnSubmit) form.reset()
          setShow(true)
        }}
      >
        {children}
      </form>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <Toast show={show} onClose={() => setShow(false)} theme="success" title={successTitle}>
          {successMessage}
        </Toast>
      </div>
    </>
  )
}
