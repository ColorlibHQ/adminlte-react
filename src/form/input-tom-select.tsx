'use client'

import { useEffect, useRef } from 'react'

export interface InputTomSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  fgroupClass?: string
  error?: string
  options?: Array<{ value: string | number; label: string }>
  tomSelectOptions?: Record<string, unknown>
}

export function InputTomSelect({
  name,
  label,
  fgroupClass,
  error,
  options,
  tomSelectOptions,
  className,
  ...props
}: InputTomSelectProps) {
  const selectRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    const element = selectRef.current
    if (!element) return

    // Dynamically import tom-select only when component mounts
    // @ts-ignore - Dynamic import
    import('tom-select').then(({ default: TomSelect }) => {
      new TomSelect(element, {
        create: false,
        allowEmptyOption: true,
        ...tomSelectOptions,
      })
    })
  }, [tomSelectOptions])

  return (
    <div className={`mb-3 ${fgroupClass || ''}`}>
      {label && (
        <label htmlFor={props.id || name} className="form-label">
          {label}
        </label>
      )}
      <select
        ref={selectRef}
        name={name}
        id={props.id || name}
        className={`form-select ${error ? 'is-invalid' : ''} ${className || ''}`.trim()}
        {...props}
      >
        {options?.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
