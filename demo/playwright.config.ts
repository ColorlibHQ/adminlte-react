import { defineConfig } from '@playwright/test'

// Override with PORT=… when other servers are running (never reuse a foreign server)
const PORT = Number(process.env.PORT) || 3210
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
    command: process.env.PW_COMMAND || `pnpm exec next dev -p ${PORT}`,
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120_000,
  },
})
