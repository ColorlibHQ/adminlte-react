import { test, expect } from '@playwright/test'
import { getRoutes } from './routes'

const routes = getRoutes()
const BENIGN = /favicon|sourcemap|source map/i

/**
 * Every route: dark-mode visitor (stored `lte-theme=dark`) must hydrate with no
 * React errors and paint dark from the first frame, and the 390px layout must not
 * scroll horizontally.
 */
test.describe('dark mode + mobile', () => {
  for (const route of routes) {
    test(`dark hydration clean: ${route}`, async ({ page }) => {
      await page.addInitScript(() => localStorage.setItem('lte-theme', 'dark'))
      const errors: string[] = []
      page.on('console', m => {
        if (['error', 'warning'].includes(m.type()) && /hydrat|did not match|mismatch/i.test(m.text()))
          errors.push(m.text())
        else if (m.type() === 'error' && !BENIGN.test(m.text())) errors.push(m.text())
      })
      page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message))
      await page.goto(route, { waitUntil: 'load' })
      await page.waitForTimeout(600)
      expect(await page.locator('html').getAttribute('data-bs-theme')).toBe('dark')
      expect(await page.evaluate(() => localStorage.getItem('lte-theme'))).toBe('dark')
      expect(errors).toEqual([])
    })

    test(`no horizontal overflow at 390px: ${route}`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 })
      await page.goto(route, { waitUntil: 'load' })
      await page.waitForTimeout(600)
      const over = await page.evaluate(() => {
        const de = document.documentElement
        return { sw: de.scrollWidth, cw: de.clientWidth, bw: document.body.scrollWidth }
      })
      expect(over.sw, `scrollWidth ${over.sw} > ${over.cw}`).toBeLessThanOrEqual(over.cw)
    })
  }
})

test('charts render a canvas on the dashboard', async ({ page }) => {
  await page.goto('/', { waitUntil: 'load' })
  await page.waitForSelector('canvas', { timeout: 15_000 })
  expect(await page.locator('canvas').count()).toBeGreaterThan(0)
})
