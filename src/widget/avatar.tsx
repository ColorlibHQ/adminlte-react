import { Children, cloneElement, isValidElement } from 'react'
import type { BootstrapTheme } from '../types/theme'
import { cn } from '../lib/class-name'

export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy'

const STATUS_THEME: Record<AvatarStatus, string> = {
  online: 'success',
  offline: 'secondary',
  away: 'warning',
  busy: 'danger',
}

export interface AvatarProps {
  src?: string
  alt?: string
  /** Fallback initials shown when there is no `src`. */
  initials?: string
  /** Pixel size (width & height). Default 40. */
  size?: number
  /** Square with rounded corners instead of a circle. */
  rounded?: boolean
  /** Background theme for the initials fallback. */
  theme?: BootstrapTheme
  status?: AvatarStatus
  className?: string
}

/** A user avatar — image or initials fallback, optional presence dot. */
export function Avatar({
  src,
  alt = '',
  initials,
  size = 40,
  rounded,
  theme = 'secondary',
  status,
  className,
}: AvatarProps) {
  const shape = rounded ? 'rounded' : 'rounded-circle'
  const dot = status && (
    <span
      className={cn(
        'position-absolute bottom-0 end-0 border border-2 border-white rounded-circle',
        `bg-${STATUS_THEME[status]}`
      )}
      style={{ width: size * 0.28, height: size * 0.28 }}
      title={status}
    />
  )

  const inner = src ? (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn(shape, 'object-fit-cover')}
      style={{ width: size, height: size }}
    />
  ) : (
    <span
      className={cn('d-inline-flex align-items-center justify-content-center', shape, `text-bg-${theme}`)}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
      aria-label={alt || initials}
    >
      {initials}
    </span>
  )

  if (!status) return <span className={cn('d-inline-block', className)}>{inner}</span>

  return (
    <span className={cn('position-relative d-inline-block', className)} style={{ lineHeight: 0 }}>
      {inner}
      {dot}
    </span>
  )
}

export interface AvatarGroupProps {
  /** Pixel overlap between stacked avatars. Default 12. */
  overlap?: number
  className?: string
  children: React.ReactNode
}

/** Overlapping stack of `Avatar`s. */
export function AvatarGroup({ overlap = 12, className, children }: AvatarGroupProps) {
  return (
    <div className={cn('d-inline-flex align-items-center', className)}>
      {Children.map(children, (child, idx) =>
        isValidElement(child)
          ? cloneElement(child as React.ReactElement<{ style?: React.CSSProperties }>, {
              style: {
                ...(child.props as { style?: React.CSSProperties }).style,
                marginLeft: idx === 0 ? 0 : -overlap,
                zIndex: idx,
              },
            })
          : child
      )}
    </div>
  )
}
