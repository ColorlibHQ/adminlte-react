export interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  fgroupClass?: string
  error?: string
  multiple?: boolean
}

export function InputFile({
  name,
  label,
  fgroupClass,
  error,
  multiple,
  className,
  ...props
}: InputFileProps) {
  return (
    <div className={`mb-3 ${fgroupClass || ''}`}>
      {label && (
        <label htmlFor={props.id || name} className="form-label">
          {label}
        </label>
      )}
      <input
        type="file"
        name={multiple ? `${name}[]` : name}
        id={props.id || name}
        className={`form-control ${error ? 'is-invalid' : ''} ${className || ''}`.trim()}
        multiple={multiple}
        {...props}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
