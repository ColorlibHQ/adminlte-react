import { defineConfig } from '@playwright/test'

const PORT = 3210
const baseURL = `http://localhost:${PORT}`

/**
 * Runs the demo at the domain root (no subpath) via `next dev`, then smoke-tests
 * every route and runs an axe accessibility audit. Uses the system Chrome channel,
 * so no Playwright browser download is required.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 4,
  retries: 1,
  timeout: 60_000,
  reporter: [['list']],
  use: {
    baseURL,
    channel: 'chrome',
    headless: true,
  },
  webServer: {
    command: `pnpm exec next dev -p ${PORT}`,
    url: baseURL,
    reuseExistingServer: true,
    timeout: 120_000,
  },
})
