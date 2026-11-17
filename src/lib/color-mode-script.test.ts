import { afterEach, describe, expect, it, vi } from 'vitest'
import { colorModeInitScript } from './color-mode-script'

function run(stored: string | null, prefersDark: boolean) {
  localStorage.clear()
  if (stored !== null) localStorage.setItem('lte-theme', stored)
  vi.stubGlobal('matchMedia', () => ({ matches: prefersDark }))
  document.documentElement.removeAttribute('data-bs-theme')
  new Function(colorModeInitScript)()
  return document.documentElement.getAttribute('data-bs-theme')
}

describe('colorModeInitScript', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('applies a stored dark mode', () => expect(run('dark', false)).toBe('dark'))
  it('applies a stored light mode even when the system is dark', () =>
    expect(run('light', true)).toBe('light'))
  it('follows the system in auto / unset / garbage', () => {
    expect(run('auto', true)).toBe('dark')
    expect(run(null, false)).toBe('light')
    expect(run('nonsense', true)).toBe('dark')
  })
})
