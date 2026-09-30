import { describe, it, expect, afterEach } from 'vitest'
import Chart from 'chart.js/auto'
import { applyChartTheme, readChartThemeColors, withAlpha } from './chart-theme'

describe('withAlpha', () => {
  it('converts hex and rgb colours to rgba', () => {
    expect(withAlpha('#0d6efd', 0.3)).toBe('rgba(13, 110, 253, 0.3)')
    expect(withAlpha('#fff', 0.5)).toBe('rgba(255, 255, 255, 0.5)')
    expect(withAlpha('rgb(1, 2, 3)', 0.1)).toBe('rgba(1, 2, 3, 0.1)')
    expect(withAlpha('rgba(1, 2, 3, 0.9)', 0.1)).toBe('rgba(1, 2, 3, 0.1)')
  })

  it('leaves unknown formats unchanged', () => {
    expect(withAlpha('tomato', 0.5)).toBe('tomato')
  })
})

describe('applyChartTheme', () => {
  afterEach(() => {
    document.documentElement.removeAttribute('dir')
    document.documentElement.removeAttribute('style')
  })

  it('writes the theme colours into Chart.defaults', () => {
    const colors = {
      ...readChartThemeColors(),
      fontFamily: 'Test Sans',
      text: '#111111',
      muted: '#222222',
      grid: '#333333',
      surface: '#444444',
      tooltipBg: '#000000',
      tooltipText: '#ffffff',
      rtl: true,
    }
    applyChartTheme(Chart, colors)
    expect(Chart.defaults.font.family).toBe('Test Sans')
    expect(Chart.defaults.color).toBe('#222222')
    expect(Chart.defaults.plugins.legend.labels.color).toBe('#111111')
    expect(Chart.defaults.plugins.legend.rtl).toBe(true)
    expect(Chart.defaults.plugins.tooltip.rtl).toBe(true)
    expect(Chart.defaults.elements.arc.borderColor).toBe('#444444')
    expect(Chart.defaults.elements.bar.borderRadius).toBe(4)
  })

  it('reads colours and direction from the document', () => {
    document.documentElement.style.setProperty('--bs-body-color', '#abcdef')
    document.documentElement.setAttribute('dir', 'rtl')
    const colors = readChartThemeColors()
    expect(colors.text).toBe('#abcdef')
    expect(colors.rtl).toBe(true)
  })
})
