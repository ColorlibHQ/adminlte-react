import type { BootstrapTheme, ComponentSize } from '../types/theme'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: BootstrapTheme
  outline?: boolean
  size?: ComponentSize
  icon?: string
  label?: string
}

export function Button({
  theme = 'primary',
  outline,
  size,
  icon,
  label,
  children,
  className,
  ...props
}: ButtonProps) {
  const btnClass = outline ? `btn btn-outline-${theme}` : `btn btn-${theme}`
  const sizeClass = size ? `btn-${size}` : ''

  return (
    <button className={`${btnClass} ${sizeClass} ${className || ''}`.trim()} {...props}>
      {icon && <i className={`bi ${icon} ${label ? 'me-2' : ''}`}></i>}
      {label || children}
    </button>
  )
}
