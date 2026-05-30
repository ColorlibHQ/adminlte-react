'use client'

import { useEffect, useRef } from 'react'
import type { ApexOptions } from 'apexcharts'

export interface SparklineChartProps {
  id: string
  data: number[]
}

export function SparklineChart({ id, data }: SparklineChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<any>(null)

  useEffect(() => {
    let cancelled = false
    const el = containerRef.current
    if (!el) return

    const initChart = async () => {
      const ApexCharts = (await import('apexcharts')).default
      if (cancelled || !containerRef.current) return

      const options: ApexOptions = {
        series: [{ data }],
        chart: {
          type: 'area',
          height: 50,
          sparkline: { enabled: true },
        },
        stroke: { curve: 'straight' },
        fill: { opacity: 0.3 },
        yaxis: { min: 0 },
        colors: ['#DCE6EC'],
      }

      const chart = new ApexCharts(el, options)
      chartRef.current = chart
      chart.render()
    }

    initChart().catch((err) => console.error('SparklineChart init error:', err))

    return () => {
      cancelled = true
      if (chartRef.current) {
        chartRef.current.destroy()
        chartRef.current = null
      }
    }
  }, [id, data])

  return <div id={id} ref={containerRef}></div>
}
