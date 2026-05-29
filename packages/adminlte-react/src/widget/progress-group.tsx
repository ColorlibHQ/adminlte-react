import type { BootstrapTheme } from '../types/theme'

export interface ProgressGroupProps {
  label: string
  value: number
  color?: BootstrapTheme
  max?: number
  showPercentage?: boolean
}

export function ProgressGroup({
  label,
  value,
  color = 'primary',
  max = 100,
  showPercentage = true,
}: ProgressGroupProps) {
  const percentage = Math.round((value / max) * 100)

  return (
    <div className="mb-2">
      <div className="d-flex justify-content-between mb-1">
        <span>{label}</span>
        {showPercentage && <span className="text-muted">{percentage}%</span>}
      </div>
      <div className="progress">
        <div className={`progress-bar bg-${color}`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}
