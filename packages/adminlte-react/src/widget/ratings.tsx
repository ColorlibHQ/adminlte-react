import type { BootstrapTheme } from '../types/theme'

export interface RatingsProps {
  value: number
  max?: number
  color?: BootstrapTheme
  readonly?: boolean
  className?: string
}

export function Ratings({
  value,
  max = 5,
  color = 'warning',
  readonly = true,
  className,
}: RatingsProps) {
  return (
    <div className={className}>
      {Array.from({ length: max }).map((_, i) => (
        <i
          key={i}
          className={`bi bi-star${i < value ? '-fill' : ''} text-${color}`}
          style={{ cursor: readonly ? 'default' : 'pointer' }}
        ></i>
      ))}
    </div>
  )
}
