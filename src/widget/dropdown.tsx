import type { BootstrapTheme, ComponentSize } from '../types/theme'
import { cn } from '../lib/class-name'

export interface DropdownItem {
  label?: React.ReactNode
  href?: string
  onClick?: () => void
  active?: boolean
  disabled?: boolean
  /** Render a divider (other fields ignored). */
  divider?: boolean
  /** Render a non-interactive header label. */
  header?: boolean
  icon?: string
}

export interface DropdownProps {
  label: React.ReactNode
  items: DropdownItem[]
  theme?: BootstrapTheme
  size?: ComponentSize
  variant?: 'solid' | 'outline'
  /** Open the menu from the end of the toggle. */
  align?: 'start' | 'end'
  /** Drop direction. */
  direction?: 'down' | 'up' | 'start' | 'end'
  /** Split button: separate caret toggle. */
  split?: boolean
  className?: string
}

/**
 * Bootstrap dropdown (driven by the Bootstrap JS bundle via `data-bs-toggle`).
 * Ensure `bootstrap.bundle.js` is loaded in the host app.
 */
export function Dropdown({
  label,
  items,
  theme = 'primary',
  size,
  variant = 'solid',
  align = 'start',
  direction = 'down',
  split,
  className,
}: DropdownProps) {
  const btnTheme = variant === 'outline' ? `btn-outline-${theme}` : `btn-${theme}`
  const btnSize = size ? `btn-${size}` : ''
  const dirClass = direction === 'down' ? 'dropdown' : `drop${direction}`

  const menu = (
    <ul className={cn('dropdown-menu', align === 'end' && 'dropdown-menu-end')}>
      {items.map((item, idx) => {
        if (item.divider) {
          return (
            <li key={idx}>
              <hr className="dropdown-divider" />
            </li>
          )
        }
        if (item.header) {
          return (
            <li key={idx}>
              <h6 className="dropdown-header">{item.label}</h6>
            </li>
          )
        }
        const content = (
          <>
            {item.icon && <i className={cn('bi', item.icon, 'me-2')} aria-hidden="true" />}
            {item.label}
          </>
        )
        const itemClass = cn('dropdown-item', item.active && 'active', item.disabled && 'disabled')
        return (
          <li key={idx}>
            {item.href ? (
              <a className={itemClass} href={item.href} aria-disabled={item.disabled}>
                {content}
              </a>
            ) : (
              <button type="button" className={itemClass} onClick={item.onClick} disabled={item.disabled}>
                {content}
              </button>
            )}
          </li>
        )
      })}
    </ul>
  )

  if (split) {
    return (
      <div className={cn('btn-group', dirClass !== 'dropdown' && dirClass, className)}>
        <button type="button" className={cn('btn', btnTheme, btnSize)}>
          {label}
        </button>
        <button
          type="button"
          className={cn('btn', btnTheme, btnSize, 'dropdown-toggle dropdown-toggle-split')}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle dropdown</span>
        </button>
        {menu}
      </div>
    )
  }

  return (
    <div className={cn(dirClass, className)}>
      <button
        type="button"
        className={cn('btn', btnTheme, btnSize, 'dropdown-toggle')}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </button>
      {menu}
    </div>
  )
}
