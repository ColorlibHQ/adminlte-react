'use client'

import { useEffect, useRef } from 'react'
import type ApexChartsType from 'apexcharts'
import type { ApexOptions } from 'apexcharts'

export interface ApexChartProps {
  id: string
  series: NonNullable<ApexOptions['series']>
  config: ApexOptions
}

export function ApexChart({ id, series, config }: ApexChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<ApexChartsType | null>(null)

  // Value-based keys so inline `series`/`config` objects don't re-create the
  // chart on every parent render (functions like formatters are ignored here,
  // which is fine — only data/option changes should trigger an update)
  const seriesKey = JSON.stringify(series)
  const configKey = JSON.stringify(config)

  useEffect(() => {
    let cancelled = false
    const el = containerRef.current
    if (!el) return

    // Already initialized: update in place instead of destroy + re-render
    if (chartRef.current) {
      chartRef.current.updateOptions({ ...config, series }, true, true)
      return
    }

    const initChart = async () => {
      const ApexCharts = (await import('apexcharts')).default
      // Guard: effect may have been cleaned up before the dynamic import resolved
      if (cancelled || !containerRef.current) return

      const chart = new ApexCharts(el, { ...config, series })
      chartRef.current = chart
      chart.render()
    }

    initChart().catch(err => console.error('ApexChart init error:', err))

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, seriesKey, configKey])

  // Destroy only on unmount
  useEffect(
    () => () => {
      chartRef.current?.destroy()
      chartRef.current = null
    },
    []
  )

  return <div id={id} ref={containerRef}></div>
}
