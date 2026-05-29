'use client'

import { useEffect, useRef } from 'react'

export interface InputFlatpickrProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  fgroupClass?: string
  error?: string
  dateType?: 'text' | 'date' | 'time' | 'datetime'
  options?: Record<string, unknown>
}

export function InputFlatpickr({
  name,
  label,
  fgroupClass,
  error,
  dateType = 'text',
  options,
  className,
  ...props
}: InputFlatpickrProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const element = inputRef.current
    if (!element) return

    // Dynamically import flatpickr only when component mounts
    // @ts-ignore - Dynamic import
    import('flatpickr').then(({ default: flatpickr }) => {
      flatpickr(element, {
        enableTime: dateType === 'time' || dateType === 'datetime',
        noCalendar: dateType === 'time',
        dateFormat: dateType === 'time' ? 'H:i' : 'Y-m-d',
        ...options,
      })
    })
  }, [dateType, options])

  return (
    <div className={`mb-3 ${fgroupClass || ''}`}>
      {label && (
        <label htmlFor={props.id || name} className="form-label">
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        type={dateType === 'time' ? 'text' : dateType}
        name={name}
        id={props.id || name}
        className={`form-control ${error ? 'is-invalid' : ''} ${className || ''}`.trim()}
        {...props}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
