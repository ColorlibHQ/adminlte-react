# README screenshots

Images used by the root `README.md`. All are committed and live — this documents where
they came from so they can be regenerated.

## Hero (`dashboard-light.png`, `dashboard-dark.png`)

The demo dashboard (`/`) in both themes, 1440×900 @2×, captured with Playwright + Chrome.

Regenerate: `pnpm build && cd demo && PORT=3100 pnpm start`, then screenshot
<http://localhost:3100/> (set `localStorage['lte-theme'] = 'dark'` before load for the dark
shot).

## Premium thumbnails (`dashboardpack/`)

Real, per-product dashboard shots for the "Upgrade to a Premium Dashboard" section,
normalised to ~1520px wide. Sourced from each product's own repo / screenshot pipeline:

| File | Product | Source |
| --- | --- | --- |
| `dashboardpack/apex.png`        | Apex Dashboard (Next.js)    | `tailwind-templates/screenshots/dashboardpack-premium/apex-dashboard.png` |
| `dashboardpack/zenith.png`      | Zenith (shadcn/ui)          | `tailwind-templates/screenshots/dashboardpack-premium/zenith-dashboard.png` |
| `dashboardpack/haze.png`        | Haze (Nuxt)                 | `publishing-tools/haze-next/screenshots/light/dashboard.png` |
| `dashboardpack/tailpanel.png`   | TailPanel (React + Tailwind)| `TailPanel/TailPanel-tailwindcss-admin-template.png` |
| `dashboardpack/admindek.png`    | Admindek (Bootstrap 5)      | `dashboardpack-admindek-angular/screenshots/light/dashboard-ecommerce.png` |
| `dashboardpack/svelteforge.png` | SvelteForge (SvelteKit)     | `publishing-tools/svelteforge-premium/screenshots/light/dashboard-light.png` |

Each is a distinct light-mode dashboard, unique to its product.
