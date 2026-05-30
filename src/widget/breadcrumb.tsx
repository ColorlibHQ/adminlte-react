import { cn } from '../lib/class-name'

export interface BreadcrumbItem {
  label: React.ReactNode
  href?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  /** Optional divider character (Bootstrap default is "/"). */
  divider?: string
  className?: string
  label?: string
}

/** Bootstrap breadcrumb trail. The last item is rendered as the active page. */
export function Breadcrumb({ items, divider, className, label = 'breadcrumb' }: BreadcrumbProps) {
  return (
    <nav
      aria-label={label}
      style={divider ? ({ ['--bs-breadcrumb-divider' as string]: `"${divider}"` } as React.CSSProperties) : undefined}
    >
      <ol className={cn('breadcrumb', className)}>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <li
              key={idx}
              className={cn('breadcrumb-item', isLast && 'active')}
              aria-current={isLast ? 'page' : undefined}
            >
              {item.href && !isLast ? <a href={item.href}>{item.label}</a> : item.label}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
