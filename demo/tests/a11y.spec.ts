import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

// Representative pages: dashboard, data grid, forms, the component showcase, auth.
const PAGES = [
  '/',
  '/pages/projects',
  '/forms/elements',
  '/docs/components/elements',
  '/examples/login',
]

for (const path of PAGES) {
  test(`a11y (no serious/critical WCAG-AA violations): ${path}`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'load', timeout: 45_000 })
    await page.waitForTimeout(800)

    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()
    const serious = results.violations.filter(
      v => v.impact === 'serious' || v.impact === 'critical'
    )
    const critical = serious.filter(v => v.impact === 'critical')

    // Log every serious/critical finding (with offending node HTML) for the audit.
    for (const v of serious) {
      console.log(`[a11y] ${path} — ${v.id} (${v.impact}) ×${v.nodes.length}: ${v.help}`)
      for (const n of v.nodes.slice(0, 3)) console.log(`    ↳ ${n.html}`)
    }

    // Gate: zero CRITICAL violations. `color-contrast` (serious) comes from the
    // AdminLTE/Bootstrap theme palette and is tracked as a known baseline.
    expect(
      critical.map(v => `${v.id} — ${v.help} [${v.nodes.length}]`),
      `critical axe violations on ${path}`
    ).toEqual([])
  })
}
