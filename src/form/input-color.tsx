'use client'

export interface InputColorProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  fgroupClass?: string
  error?: string
}

export function InputColor({
  name,
  label,
  fgroupClass,
  error,
  className,
  defaultValue = '#0d6efd',
  ...props
}: InputColorProps) {
  return (
    <div className={`mb-3 ${fgroupClass || ''}`}>
      {label && (
        <label htmlFor={props.id || name} className="form-label">
          {label}
        </label>
      )}
      <input
        type="color"
        name={name}
        id={props.id || name}
        className={`form-control form-control-color ${error ? 'is-invalid' : ''} ${className || ''}`.trim()}
        defaultValue={defaultValue}
        {...props}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
