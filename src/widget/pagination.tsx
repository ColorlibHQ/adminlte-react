import type { ComponentSize } from '../types/theme'
import { cn } from '../lib/class-name'

export interface PaginationProps {
  /** 1-based current page. */
  page: number
  totalPages: number
  onPageChange?: (page: number) => void
  size?: ComponentSize
  /** Numbered links to show on each side of the current page. Default 1. */
  siblingCount?: number
  align?: 'start' | 'center' | 'end'
  /** Hide the ‹ › previous/next controls. */
  hideControls?: boolean
  label?: string
  className?: string
}

type PageToken = number | 'ellipsis'

function buildRange(page: number, total: number, sibling: number): PageToken[] {
  // Always show first + last; window of `sibling` around current; ellipses for gaps.
  const tokens = new Set<number>([1, total])
  for (let p = page - sibling; p <= page + sibling; p++) {
    if (p >= 1 && p <= total) tokens.add(p)
  }
  const sorted = [...tokens].sort((a, b) => a - b)
  const out: PageToken[] = []
  let prev = 0
  for (const p of sorted) {
    if (prev && p - prev > 1) out.push('ellipsis')
    out.push(p)
    prev = p
  }
  return out
}

/** Bootstrap pagination. Renders `<button>`s when `onPageChange` is given, else `<a href="#">`. */
export function Pagination({
  page,
  totalPages,
  onPageChange,
  size,
  siblingCount = 1,
  align = 'start',
  hideControls,
  label = 'Pagination',
  className,
}: PaginationProps) {
  if (totalPages < 1) return null
  const tokens = buildRange(page, totalPages, siblingCount)

  const item = (
    key: React.Key,
    content: React.ReactNode,
    target: number,
    opts: { active?: boolean; disabled?: boolean; ariaLabel?: string } = {}
  ) => {
    const { active, disabled, ariaLabel } = opts
    const go = (e: React.MouseEvent) => {
      if (disabled || active) return
      if (onPageChange) {
        e.preventDefault()
        onPageChange(target)
      }
    }
    return (
      <li key={key} className={cn('page-item', active && 'active', disabled && 'disabled')}>
        {onPageChange ? (
          <button
            type="button"
            className="page-link"
            onClick={go}
            aria-label={ariaLabel}
            aria-current={active ? 'page' : undefined}
            disabled={disabled}
          >
            {content}
          </button>
        ) : (
          <a
            className="page-link"
            href="#"
            onClick={go}
            aria-label={ariaLabel}
            aria-current={active ? 'page' : undefined}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : undefined}
          >
            {content}
          </a>
        )}
      </li>
    )
  }

  return (
    <nav aria-label={label}>
      <ul
        className={cn(
          'pagination mb-0',
          size && `pagination-${size}`,
          align === 'center' && 'justify-content-center',
          align === 'end' && 'justify-content-end',
          className
        )}
      >
        {!hideControls &&
          item('prev', <span aria-hidden="true">&lsaquo;</span>, page - 1, {
            disabled: page <= 1,
            ariaLabel: 'Previous page',
          })}
        {tokens.map((t, i) =>
          t === 'ellipsis' ? (
            <li key={`e${i}`} className="page-item disabled">
              <span className="page-link">&hellip;</span>
            </li>
          ) : (
            item(t, t, t, { active: t === page })
          )
        )}
        {!hideControls &&
          item('next', <span aria-hidden="true">&rsaquo;</span>, page + 1, {
            disabled: page >= totalPages,
            ariaLabel: 'Next page',
          })}
      </ul>
    </nav>
  )
}
