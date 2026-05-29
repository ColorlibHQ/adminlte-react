import type { BootstrapTheme } from '../types/theme'

export interface CalloutProps {
  theme?: BootstrapTheme
  title?: string
  icon?: string
  children: React.ReactNode
}

export function Callout({ theme = 'info', title, icon, children }: CalloutProps) {
  return (
    <div className={`callout callout-${theme}`}>
      {icon && <i className={`bi ${icon}`}></i>}
      {title && <h5>{title}</h5>}
      {children}
    </div>
  )
}
