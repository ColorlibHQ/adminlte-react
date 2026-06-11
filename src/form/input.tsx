import { forwardRef } from 'react'
import type { ComponentSize } from '../types/theme'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  igroupSize?: ComponentSize
  fgroupClass?: string
  error?: string
  hint?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { name, label, igroupSize, fgroupClass, error, hint, className, ...props },
  ref
) {
  const sizeClass = igroupSize ? `form-control-${igroupSize}` : ''

  return (
    <div className={`mb-3 ${fgroupClass || ''}`}>
      {label && (
        <label htmlFor={props.id || name} className="form-label">
          {label}
        </label>
      )}
      <input
        ref={ref}
        name={name}
        id={props.id || name}
        className={`form-control ${sizeClass} ${error ? 'is-invalid' : ''} ${className || ''}`.trim()}
        {...props}
      />
      {error && <div className="invalid-feedback">{error}</div>}
      {hint && <small className="form-text text-muted">{hint}</small>}
    </div>
  )
})
