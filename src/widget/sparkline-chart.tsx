'use client'

import { useMemo } from 'react'
import { Chart } from './chart'
import { withAlpha } from '../lib/chart-theme'

export interface SparklineChartProps {
  id: string
  data: number[]
  /** Line (and area) colour. Default `#DCE6EC`. */
  color?: string
  /** `line` draws a filled area sparkline (default); `bar` draws mini columns. */
  type?: 'line' | 'bar'
  /** Height in pixels. Default `50`. */
  height?: number
  /** Accessible name for the sparkline. */
  ariaLabel?: string
}

/**
 * Tiny axis-less trend chart (Chart.js, lazy-loaded — install `chart.js`).
 */
export function SparklineChart({
  id,
  data,
  color = '#DCE6EC',
  type = 'line',
  height = 50,
  ariaLabel = 'Sparkline',
}: SparklineChartProps) {
  const chartData = useMemo(
    () => ({
      labels: data.map((_, i) => String(i + 1)),
      datasets: [
        type === 'bar'
          ? { data, backgroundColor: color, borderRadius: 2, maxBarThickness: 8 }
          : {
              data,
              borderColor: color,
              backgroundColor: withAlpha(color, 0.3),
              borderWidth: 2,
              fill: 'origin' as const,
              tension: 0,
              pointRadius: 0,
              pointHoverRadius: 0,
            },
      ],
    }),
    [data, color, type]
  )

  return (
    <Chart
      id={id}
      type={type}
      height={height}
      ariaLabel={ariaLabel}
      data={chartData as never}
      options={{
        events: [],
        layout: { padding: 1 },
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
          x: { display: false },
          y: { display: false, min: 0 },
        },
      }}
    />
  )
}
