import { test, expect } from '@playwright/test'
import { getRoutes } from './routes'

const routes = getRoutes()

// Resource/network noise that isn't a page defect (dev-server source maps, etc.).
const BENIGN = /favicon|net::|ERR_|Failed to load resource|sourcemap|source map/i

test.describe('route smoke', () => {
  for (const route of routes) {
    test(`renders without errors: ${route}`, async ({ page }) => {
      const errors: string[] = []
      page.on('console', m => {
        if (m.type() === 'error' && !BENIGN.test(m.text())) errors.push(m.text())
      })
      page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message))

      const resp = await page.goto(route, { waitUntil: 'load', timeout: 45_000 })
      expect(resp?.status(), `HTTP status for ${route}`).toBeLessThan(400)

      await page.waitForTimeout(500) // let client islands hydrate / run effects
      expect(errors, `console / page errors on ${route}`).toEqual([])
    })
  }
})
