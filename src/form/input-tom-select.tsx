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
  'aria-label': ariaLabelProp,
  ...props
}: InputTomSelectProps) {
  const selectRef = useRef<HTMLSelectElement>(null)
  // Tom Select hides the native <select> and renders its own combobox input, so
  // the visible label doesn't reach it. Mirror an accessible name onto both.
  const ariaLabel = ariaLabelProp ?? label

  useEffect(() => {
    const element = selectRef.current
    if (!element) return
    let instance: { destroy: () => void } | undefined
    let active = true

    // Dynamically import tom-select only when component mounts
    // @ts-ignore - Dynamic import
    import('tom-select').then(({ default: TomSelect }) => {
      if (!active || !element) return
      const ts = new TomSelect(element, {
        create: false,
        allowEmptyOption: true,
        ...tomSelectOptions,
      })
      instance = ts as unknown as { destroy: () => void }
      if (ariaLabel) {
        const control = (ts as unknown as { control_input?: HTMLElement }).control_input
        control?.setAttribute('aria-label', ariaLabel)
      }
    })

    return () => {
      active = false
      instance?.destroy()
    }
  }, [tomSelectOptions, ariaLabel])

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
        aria-label={ariaLabel}
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
