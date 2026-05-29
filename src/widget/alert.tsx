import type { BootstrapTheme } from '../types/theme'

export interface AlertProps {
  theme?: BootstrapTheme
  title?: string
  icon?: string
  dismissable?: boolean
  children: React.ReactNode
}

export function Alert({
  theme = 'info',
  title,
  icon,
  dismissable,
  children,
}: AlertProps) {
  return (
    <div className={`alert alert-${theme}`} role="alert">
      {icon && <i className={`bi ${icon} me-2`}></i>}
      {title && <strong>{title}</strong>}
      {children}
      {dismissable && (
        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
      )}
    </div>
  )
}
