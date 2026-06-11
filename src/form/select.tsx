import { forwardRef } from 'react'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  fgroupClass?: string
  error?: string
  options?: Array<{ value: string | number; label: string }>
  children?: React.ReactNode
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { name, label, fgroupClass, error, options, children, className, ...props },
  ref
) {
  return (
    <div className={`mb-3 ${fgroupClass || ''}`}>
      {label && (
        <label htmlFor={props.id || name} className="form-label">
          {label}
        </label>
      )}
      <select
        ref={ref}
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
        {children}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
})
