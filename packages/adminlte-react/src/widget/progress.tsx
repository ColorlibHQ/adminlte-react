import type { BootstrapTheme } from '../types/theme'

export interface ProgressProps {
  value?: number
  theme?: BootstrapTheme
  striped?: boolean
  animated?: boolean
  height?: string
  showLabel?: boolean
}

export function Progress({
  value = 0,
  theme = 'primary',
  striped,
  animated,
  height,
  showLabel,
}: ProgressProps) {
  return (
    <div className="progress" style={height ? { height } : {}}>
      <div
        className={`progress-bar bg-${theme} ${striped ? 'progress-bar-striped' : ''} ${
          animated ? 'progress-bar-animated' : ''
        }`}
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {showLabel && `${value}%`}
      </div>
    </div>
  )
}
