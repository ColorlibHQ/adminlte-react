'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import type {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  ChartType,
  DefaultDataPoint,
  Plugin,
} from 'chart.js'
import { applyChartTheme } from '../lib/chart-theme'

export interface ChartProps<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown,
> {
  /** DOM id of the chart container. */
  id?: string
  /** Chart.js chart type: `line`, `bar`, `doughnut`, `pie`, `radar`, `polarArea`, `scatter`, `bubble`… */
  type: TType
  /** Chart.js `data` (labels + datasets). Plain data, so it can come from a Server Component. */
  data: ChartData<TType, TData, TLabel>
  /** Chart.js `options`. Merged over the AdminLTE theme preset (`Chart.defaults`). */
  options?: ChartOptions<TType>
  /** Inline Chart.js plugins for this chart only. */
  plugins?: Plugin<TType>[]
  /** Height of the chart area — a number is pixels. Default `300`. */
  height?: number | string
  /** Accessible name for the chart (`aria-label` on the canvas). */
  ariaLabel?: string
  /** Fallback content inside `<canvas>` (e.g. a data table for screen readers). */
  fallback?: ReactNode
  className?: string
  style?: CSSProperties
}

// ─── Live theming ────────────────────────────────────────────────────────────
// One MutationObserver for every mounted chart: when <html data-bs-theme> (colour mode) or
// <html dir> changes, the preset re-reads the CSS variables and each chart re-renders.
// Chart.js copies scale defaults into a chart's options when the chart is created, so each
// chart gets a fresh copy of its caller-supplied options before the update — otherwise its
// axes would keep the previous theme's colours.
type ChartCtor = typeof ChartJS
const liveCharts = new Map<ChartJS, () => object>()
let ChartClass: ChartCtor | null = null
let observer: MutationObserver | null = null

function retheme() {
  if (!ChartClass) return
  applyChartTheme(ChartClass)
  liveCharts.forEach((freshOptions, chart) => {
    chart.options = freshOptions() as never
    chart.update('none')
  })
}

function track(chart: ChartJS, freshOptions: () => object) {
  liveCharts.set(chart, freshOptions)
  if (!observer && typeof MutationObserver !== 'undefined') {
    observer = new MutationObserver(retheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-bs-theme', 'dir'],
    })
  }
}

function untrack(chart: ChartJS) {
  liveCharts.delete(chart)
  if (liveCharts.size === 0 && observer) {
    observer.disconnect()
    observer = null
  }
}

async function loadChart(): Promise<ChartCtor> {
  if (!ChartClass) {
    // chart.js/auto registers every controller, element, scale and plugin
    const mod = await import('chart.js/auto')
    ChartClass = mod.default as unknown as ChartCtor
  }
  // Re-read the theme on every mount: the colour mode may have changed since the last one
  applyChartTheme(ChartClass)
  return ChartClass
}

/** Copy `data` so Chart.js (which instruments data arrays) never mutates caller-owned props. */
function cloneData<T>(data: T): T {
  try {
    return structuredClone(data)
  } catch {
    return data
  }
}

/**
 * Deep-copies plain objects/arrays (functions and class instances are kept by reference).
 * Chart.js writes resolved defaults into the options object it is given, so it always gets
 * a copy — the caller's object stays untouched and can be re-applied after a theme change.
 */
function cloneOptions<T>(value: T): T {
  if (Array.isArray(value)) return value.map(cloneOptions) as T
  if (value && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype) {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(value)) out[k] = cloneOptions(v)
    return out as T
  }
  return value
}

function withBaseOptions(options: object | undefined) {
  return { responsive: true, maintainAspectRatio: false, ...cloneOptions(options || {}) }
}

/**
 * Chart.js chart, lazy-loaded. `chart.js` is an optional peer dependency — install it
 * (`npm install chart.js`); it is imported on mount, so pages without charts never load it.
 *
 * The AdminLTE theme preset (`applyChartTheme`) is applied automatically and follows the
 * colour mode and document direction live. Charts resize with their container and are
 * destroyed on unmount.
 */
export function Chart<TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown>({
  id,
  type,
  data,
  options,
  plugins,
  height = 300,
  ariaLabel,
  fallback,
  className,
  style,
}: ChartProps<TType, TData, TLabel>) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<ChartJS | null>(null)
  // Latest options, read when the theme changes (see `retheme`)
  const optionsRef = useRef(options)
  useEffect(() => {
    optionsRef.current = options
  })

  // Value-based keys so inline `data`/`options` objects don't re-create the chart on every
  // parent render (callbacks inside options are ignored by the key — only data/option values
  // trigger an update)
  const dataKey = JSON.stringify(data)
  const optionsKey = JSON.stringify(options ?? {})

  // Create on mount / type change; destroy on unmount
  useEffect(() => {
    let cancelled = false
    const canvas = canvasRef.current
    if (!canvas) return

    loadChart()
      .then(ChartCtor => {
        // Guard: effect may have been cleaned up before the dynamic import resolved
        if (cancelled || !canvasRef.current) return
        ChartCtor.getChart(canvas)?.destroy()
        const chart = new ChartCtor(canvas, {
          type,
          data: cloneData(data),
          options: withBaseOptions(options),
          plugins,
        } as never)
        chartRef.current = chart
        track(chart, () => withBaseOptions(optionsRef.current))
      })
      .catch(err => console.error('Chart init error:', err))

    return () => {
      cancelled = true
      const chart = chartRef.current
      if (chart) {
        untrack(chart)
        chart.destroy()
        chartRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])

  // Data/option changes: update in place instead of destroy + re-create
  useEffect(() => {
    const chart = chartRef.current
    if (!chart) return
    chart.data = cloneData(data) as never
    chart.options = withBaseOptions(options) as never
    chart.update()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataKey, optionsKey])

  return (
    <div
      id={id}
      className={className}
      style={{ position: 'relative', height: typeof height === 'number' ? `${height}px` : height, ...style }}
    >
      <canvas ref={canvasRef} role="img" aria-label={ariaLabel ?? `${type} chart`}>
        {fallback}
      </canvas>
    </div>
  )
}
