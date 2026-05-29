'use client'

import { useEffect, useRef } from 'react'

export interface ApexChartProps {
  id: string
  series: any[]
  config: Record<string, any>
}

export function ApexChart({ id, series, config }: ApexChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<any>(null)

  useEffect(() => {
    let cancelled = false
    const el = containerRef.current
    if (!el) return

    const initChart = async () => {
      const ApexCharts = (await import('apexcharts')).default
      // Guard: effect may have been cleaned up before the dynamic import resolved
      if (cancelled || !containerRef.current) return

      const chart = new ApexCharts(el, { ...config, series })
      chartRef.current = chart
      chart.render()
    }

    initChart().catch((err) => console.error('ApexChart init error:', err))

    return () => {
      cancelled = true
      if (chartRef.current) {
        chartRef.current.destroy()
        chartRef.current = null
      }
    }
  }, [id, series, config])

  return <div id={id} ref={containerRef}></div>
}
