import type { Chart as ChartJS, ScriptableContext } from 'chart.js'

/**
 * AdminLTE theme preset for Chart.js.
 *
 * `applyChartTheme(Chart)` writes the AdminLTE look into `Chart.defaults`: the body font,
 * colours read from Bootstrap's CSS variables (so light/dark mode and custom themes follow),
 * subtle horizontal gridlines only, rounded bars, smooth lines, circular point-style legends
 * and Bootstrap-style tooltips. It is idempotent — `<Chart>` calls it again whenever
 * `<html data-bs-theme>` or `<html dir>` changes, then updates every live chart.
 *
 * It takes the Chart.js constructor as an argument (no static import), so this module stays
 * safe to import from Server Components and never pulls `chart.js` into a bundle by itself.
 */

type ChartStatic = typeof ChartJS

export interface ChartThemeColors {
  /** Body font family (`--bs-body-font-family`). */
  fontFamily: string
  /** Primary text colour (`--bs-body-color`) — legend labels. */
  text: string
  /** Muted text colour (`--bs-secondary-color`) — axis ticks. */
  muted: string
  /** Gridline / border colour (`--bs-border-color-translucent`). */
  grid: string
  /** Surface colour (`--bs-body-bg`) — doughnut segment separators, point borders. */
  surface: string
  /** Tooltip background (`--bs-emphasis-color`). */
  tooltipBg: string
  /** Tooltip text (`--bs-body-bg`). */
  tooltipText: string
  /** `true` when the document is right-to-left. */
  rtl: boolean
}

const FALLBACK: ChartThemeColors = {
  fontFamily:
    '"Source Sans 3", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  text: '#212529',
  muted: 'rgba(33, 37, 41, 0.75)',
  grid: 'rgba(0, 0, 0, 0.175)',
  surface: '#fff',
  tooltipBg: '#000',
  tooltipText: '#fff',
  rtl: false,
}

/** Reads the current theme colours from the document's Bootstrap CSS variables. */
export function readChartThemeColors(root?: Element): ChartThemeColors {
  if (typeof window === 'undefined' || typeof document === 'undefined') return FALLBACK
  const el = root ?? document.documentElement
  const css = getComputedStyle(el)
  const v = (name: string, fallback: string) => css.getPropertyValue(name).trim() || fallback
  return {
    fontFamily: v('--bs-body-font-family', FALLBACK.fontFamily),
    text: v('--bs-body-color', FALLBACK.text),
    muted: v('--bs-secondary-color', FALLBACK.muted),
    grid: v('--bs-border-color-translucent', FALLBACK.grid),
    surface: v('--bs-body-bg', FALLBACK.surface),
    tooltipBg: v('--bs-emphasis-color', FALLBACK.tooltipBg),
    tooltipText: v('--bs-body-bg', FALLBACK.tooltipText),
    rtl: (document.documentElement.getAttribute('dir') || css.direction) === 'rtl',
  }
}

/**
 * Returns `color` with the given alpha. Accepts `#rgb`, `#rrggbb`, `#rrggbbaa`, `rgb()` and
 * `rgba()`; anything else (named colours, gradients) is returned unchanged.
 */
export function withAlpha(color: string, alpha: number): string {
  const c = color.trim()
  const hex = /^#([0-9a-f]{3,8})$/i.exec(c)
  if (hex) {
    let h = hex[1]
    if (h.length === 3 || h.length === 4) h = h.split('').map(x => x + x).join('')
    if (h.length !== 6 && h.length !== 8) return color
    const n = (i: number) => parseInt(h.slice(i, i + 2), 16)
    return `rgba(${n(0)}, ${n(2)}, ${n(4)}, ${alpha})`
  }
  const rgb = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(c)
  if (rgb) return `rgba(${rgb[1]}, ${rgb[2]}, ${rgb[3]}, ${alpha})`
  return color
}

/**
 * Default `backgroundColor` for line datasets: a filled area fades from the line colour to
 * transparent (a vertical gradient); points and legend swatches use the solid line colour.
 * An explicit `backgroundColor` on a dataset always wins over this default.
 */
function lineBackground(ctx: ScriptableContext<'line'>) {
  const raw = (ctx.dataset as { borderColor?: unknown } | undefined)?.borderColor
  const base = typeof raw === 'string' ? raw : undefined
  if (!base) return 'rgba(0, 0, 0, 0.1)'
  if (ctx.type !== 'dataset' || !ctx.dataset.fill) return base
  const { chart } = ctx
  const area = chart.chartArea
  if (!area) return withAlpha(base, 0.2)
  const gradient = chart.ctx.createLinearGradient(0, area.top, 0, area.bottom)
  gradient.addColorStop(0, withAlpha(base, 0.35))
  gradient.addColorStop(1, withAlpha(base, 0.02))
  return gradient
}

/** Applies the AdminLTE preset to `Chart.defaults`. Safe to call repeatedly. */
export function applyChartTheme(Chart: ChartStatic, colors: ChartThemeColors = readChartThemeColors()) {
  const d = Chart.defaults

  d.font.family = colors.fontFamily
  d.font.size = 12
  d.color = colors.muted
  d.borderColor = colors.grid

  // Scales: subtle horizontal gridlines, no axis border, no tick marks
  // (`defaults.scale` is typed as a union of every scale type; only the shared keys are set)
  const scale = d.scale as unknown as {
    grid: { color: string; drawTicks: boolean }
    border: { display: boolean }
    ticks: { padding: number; color: string }
  }
  scale.grid.color = colors.grid
  scale.grid.drawTicks = false
  scale.border.display = false
  scale.ticks.padding = 8
  scale.ticks.color = colors.muted
  // Category axes (the x axis of line/bar charts) draw no vertical gridlines
  const category = (d.scales as Record<string, { grid?: { display?: boolean } }>).category
  if (category) category.grid = { ...(category.grid || {}), display: false }

  // Elements
  d.elements.line.tension = 0.4
  d.elements.line.borderWidth = 2.5
  d.elements.line.borderCapStyle = 'round'
  d.elements.point.radius = 0
  d.elements.point.hoverRadius = 5
  d.elements.point.hitRadius = 12
  d.elements.point.borderWidth = 2
  d.elements.point.hoverBorderWidth = 2
  d.elements.point.pointStyle = 'circle'
  d.elements.bar.borderRadius = 4
  d.elements.bar.borderSkipped = 'start'
  d.elements.arc.borderColor = colors.surface
  d.elements.arc.borderWidth = 2
  d.elements.arc.hoverOffset = 6

  // Line datasets: gradient area fill derived from the line colour
  const lineDefaults = (d.datasets as unknown as Record<string, Record<string, unknown>>).line
  if (lineDefaults) {
    lineDefaults.backgroundColor = lineBackground
    lineDefaults.pointHoverBackgroundColor = colors.surface
  }
  const barDefaults = (d.datasets as unknown as Record<string, Record<string, unknown>>).bar
  if (barDefaults) barDefaults.maxBarThickness = 28

  // Cartesian charts: hovering anywhere on a column shows every series at that index
  for (const type of ['line', 'bar'] as const) {
    const o = (Chart.overrides as unknown as Record<string, Record<string, unknown>>)[type]
    if (o) o.interaction = { mode: 'index', intersect: false }
  }

  // Legend
  const legend = d.plugins.legend
  legend.rtl = colors.rtl
  legend.labels.color = colors.text
  legend.labels.usePointStyle = true
  legend.labels.pointStyle = 'circle'
  legend.labels.boxWidth = 8
  legend.labels.boxHeight = 8
  legend.labels.padding = 16

  // Tooltip — Bootstrap tooltip colours (inverted surface), rounded like other components
  const tooltip = d.plugins.tooltip
  tooltip.rtl = colors.rtl
  tooltip.backgroundColor = withAlpha(colors.tooltipBg, 0.9)
  tooltip.titleColor = colors.tooltipText
  tooltip.bodyColor = colors.tooltipText
  tooltip.footerColor = colors.tooltipText
  tooltip.borderWidth = 0
  tooltip.cornerRadius = 6
  tooltip.padding = 10
  tooltip.boxPadding = 4
  tooltip.caretSize = 5
  tooltip.usePointStyle = true
  tooltip.titleFont = { weight: 'bold' }
  tooltip.titleMarginBottom = 6
}
