# README screenshots

Images used by the root `README.md`. All are committed and live — this documents where
they came from so they can be regenerated.

## Hero (`dashboard-light.png`, `dashboard-dark.png`)

The demo dashboard (`/`) in both themes, 1440×900 @2×, captured with Playwright + Chrome.

Regenerate: `pnpm build && cd demo && PORT=3100 pnpm start`, then screenshot
<http://localhost:3100/> (set `localStorage['lte-theme'] = 'dark'` before load for the dark
shot).

## Premium thumbnails (`dashboardpack/`)

Product dashboard shots for the "Upgrade to a Premium Dashboard" section (1520×1032).
These mirror the premium lineup in gentelella's README so the section looks identical —
copied from `gentelella/docs/screenshots/dashboardpack/`:
`apex.png`, `zenith.png`, `haze.png`, `tailpanel.png`, `admindek.png`, `svelteforge.png`.
