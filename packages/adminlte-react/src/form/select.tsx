export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  fgroupClass?: string
  error?: string
  options?: Array<{ value: string | number; label: string }>
  children?: React.ReactNode
}

export function Select({
  name,
  label,
  fgroupClass,
  error,
  options,
  children,
  className,
  ...props
}: SelectProps) {
  return (
    <div className={`mb-3 ${fgroupClass || ''}`}>
      {label && (
        <label htmlFor={props.id || name} className="form-label">
          {label}
        </label>
      )}
      <select
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
}
