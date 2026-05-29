# README screenshots

The root `README.md` currently uses `placehold.co` placeholder images. Replace them with
real captures committed here, then swap the `src` URLs in `README.md` to point at these
files (e.g. `docs/screenshots/dashboard-light.png`).

## Hero (the live demo)

Capture the demo dashboard in both themes, ~1600×1000 (2× for retina):

| File | What to capture |
| --- | --- |
| `dashboard-light.png` | `/` (main dashboard), light mode |
| `dashboard-dark.png`  | `/` (main dashboard), dark mode (toggle in the topbar) |

How: `pnpm build && pnpm demo`, open <http://localhost:3000/>, screenshot. (Or wire a
Playwright capture script.)

## Premium thumbnails (`dashboardpack/`)

Unique product shots for the "Upgrade to a Premium Dashboard" section, ~1200×720:

| File | Product |
| --- | --- |
| `dashboardpack/apex.png`        | Apex Dashboard (Next.js) |
| `dashboardpack/zenith.png`      | Zenith Dashboard (shadcn/ui) |
| `dashboardpack/haze.png`        | Haze (Nuxt) |
| `dashboardpack/tailpanel.png`   | TailPanel (React + Tailwind) |
| `dashboardpack/admindek.png`    | Admindek (Bootstrap 5) |
| `dashboardpack/svelteforge.png` | SvelteForge Premium (SvelteKit) |

Keep these distinct from other Colorlib repos' screenshots (the README asks for unique
shots per template).
