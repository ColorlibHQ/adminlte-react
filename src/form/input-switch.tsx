'use client'

import { forwardRef } from 'react'

export interface InputSwitchProps {
  name: string
  label?: string
  id?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  fgroupClass?: string
  error?: string
}

export const InputSwitch = forwardRef<HTMLInputElement, InputSwitchProps>(function InputSwitch(
  { name, label, id, checked, defaultChecked, onChange, fgroupClass, error },
  ref
) {
  const inputId = id || name

  return (
    <div className={`form-check form-switch ${fgroupClass || ''}`}>
      <input
        ref={ref}
        type="checkbox"
        className={`form-check-input ${error ? 'is-invalid' : ''}`}
        id={inputId}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={e => onChange?.(e.target.checked)}
      />
      {label && (
        <label className="form-check-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
})
