# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`@adminlte/react` — an AdminLTE 4 / Bootstrap 5.3 component library built for Next.js 14+ App Router (React Server Components). **The repo root _is_ the library** (the published npm package, under the `@adminlte` npm org). It's also a small pnpm workspace: the root package is the library, and `demo/` is a Next.js 14 App Router app that dogfoods it via `"@adminlte/react": "workspace:*"` (pnpm symlinks `demo/node_modules/@adminlte/react` → repo root).

- Root (`src/`, `package.json` named `@adminlte/react`, `tsup.config.ts`, `dist/`) — the publishable library
- `demo/` — demo + dev playground; consumes the library through the workspace link

Testing: `pnpm test` runs Vitest (jsdom) unit tests colocated in `src/` (`*.test.ts(x)`); the demo has Playwright tests (`cd demo && pnpm test` — route smoke + a11y, starts its own dev server). `pnpm lint` runs ESLint (`eslint.config.mjs`: typescript-eslint + react-hooks) over `src/`; `pnpm type-check` (`tsc --noEmit`) is the strict type gate. All pass clean — keep them that way. CI (`.github/workflows/ci.yml`) runs type-check, lint, unit tests, the library build (plus an RSC-boundary check on `dist/`), and the demo type-check + build.

## Commands

From the repo root (these operate on the **library**):

```bash
pnpm build        # tsup → copy-css → fix-dist (see "The build pipeline" below)
pnpm dev          # tsup --watch (rebuild the library on change)
pnpm type-check   # tsc --noEmit — the primary check before considering library work done
pnpm lint         # ESLint over src/ (typescript-eslint + react-hooks)
pnpm test         # Vitest unit tests (src/**/*.test.*)
pnpm demo         # run the demo app (next dev) — alias for the demo workspace
pnpm demo:build   # production build of the demo
```

Demo-only (`cd demo`): standard `next dev` / `next build` / `next start` / `pnpm type-check`, plus `pnpm export`.

### Subpath static export (adminlte.io hosting)
`cd demo && pnpm export` runs `EXPORT=true next build` → a static `out/` configured for **`https://adminlte.io/themes/next-react/`** (sibling of the v4 HTML demo at `/themes/v4/`). The subpath is **gated behind the `EXPORT` env** so local `pnpm demo` (dev) stays at the domain root. Mechanics (all in the demo, the published library is untouched):
- `next.config.mjs` sets `output:'export'`, `trailingSlash:true`, `assetPrefix:'/themes/next-react'` (prefixes `_next/`), and exposes `NEXT_PUBLIC_BASE_PATH`.
- `demo/lib/base.ts` `withBase()` prefixes absolute paths; applied at the **data layer** for things whose value must match `usePathname` for active-state — `lib/menu.ts` (sidebar), `components/docs/sections.ts` (docs nav) — and for client-rendered data (`lib/chart-data.ts` avatars) + the shell (`demo-layout.tsx` logo/images/topbar links).
- `components/subpath-links.tsx` (`<SubpathLinks/>`, mounted in `app/layout.tsx`) is an idempotent client shim that prefixes the long tail of server-rendered `<a href="/…">` and `<img src="/assets/…">`. **Gotcha:** the shim can't reliably fix React-*controlled* `img src` inside interactive client widgets (re-render reverts the DOM mutation) — those must be prefixed at the data source instead (that's why `chart-data.ts` is prefixed directly). Verified: `out/` served at the subpath renders home + docs with **0 failed requests**.
- **Deploy** (Hetzner, `ssh hetzner` → `/var/www/adminlte.io/public/themes/next-react/`, owner `web_adminlte_io:www-data`): `COPYFILE_DISABLE=1 tar -C out -czf - . | ssh hetzner 'rm -rf $DEST && mkdir -p $DEST && tar -C $DEST -xzf -'` then chown/chmod, then purge Cloudflare (token + zone id are in the server's `wp-config.php` — extract with `awk -F"'" '/CLOUDFLARE_API_TOKEN/{print $4}'`). **Don't curl a URL before the files are deployed** — Cloudflare caches the 404 (`.css`/`.png`, 4h TTL). A custom nginx `location /themes/next-react/` (in `sites-enabled/adminlte.io.conf`) serves the themed `404.html` for unmatched subpaths instead of WordPress.

### Per-page metadata & titles (demo)
Every route sets a `<title>` via a `%s · AdminLTE React` template. **The template only reaches a layout's descendants, not across an ancestor's resolved string title** — so it's defined in each *group* layout (`(dashboard)`/`(auth)`/`(fullpage)` `layout.tsx`), not just the root. Server pages `export const metadata = { title: '…' }`; **client pages can't export metadata**, so they get a sibling `layout.tsx` with it. Don't bake `· AdminLTE React` into a page title — the template appends it (double-suffix otherwise).

The demo imports the compiled `dist/`, not `src/`. After editing library source, rebuild it (`pnpm build`, or keep `pnpm dev` running in one terminal) before the demo reflects the change — run `pnpm dev` (library watch) and `pnpm demo` side by side during development.

## The build pipeline (per-file ESM, RSC boundaries preserved)

`tsup` (esbuild) compiles every `src/` module **unbundled** (`bundle: false`, ESM-only, no sourcemaps) to a mirrored `dist/` tree, plus a single bundled `dist/index.d.ts`. The build is **three sequential steps** (`tsup && copy-css && fix-dist`):

1. `tsup` — per-file transform of `src/**/*.ts(x)` (tests excluded). Each module keeps its own `'use client'` (or lack of one), so the RSC/client split in `src/` **is** the published artifact: server-authored components stay Server Components for consumers, and bundlers tree-shake through the barrel.
2. `copy-css` — copies `node_modules/admin-lte/dist/css/adminlte.css` → `dist/css/` (exposed as the `./css` export).
3. `fix-dist` — `fix-dist.js` (a) re-applies `"use client"` to any dist file whose source declares it (safety net; esbuild currently preserves them itself, hence "0 directives applied" in output), and (b) rewrites relative specifiers to be fully specified (`'./foo'` → `'./foo.js'`) — required because webpack enforces fully-specified ESM imports inside `node_modules`. It exits non-zero if a specifier can't be resolved.

**Critical implications:** the package is ESM-only (no CJS) — `exports['.']` has `types`/`import`/`default` conditions only. Don't re-introduce bundling without solving directive preservation per module; don't add a source file with extensionless imports that point at directories (fix-dist resolves `./x` → `x.js` or `x/index.js`). CI verifies the src↔dist client-module counts match and that `dist/form/button.js` stays unmarked.

**All** heavy plugins (`apexcharts`, `flatpickr`, `jsvectormap`, `quill`, `sortablejs`, `tabulator-tables`, `tom-select`) are **optional peer dependencies** — never bundled. They're loaded via dynamic `import()` (unbundled output keeps the specifier as written), so consumers install only what they use and Next code-splits them per page. Shared pure helpers that Server Components call (e.g. `lib/flatten-menu.ts`) must live outside `'use client'` modules.

## Architecture

### RSC vs. client split (authoring model)
Components are deliberately partitioned. **Pure-presentational** widgets/forms have no directive and are RSC (e.g. `small-box`, `info-box`, `progress`, `timeline`, `button`, `input`, `app-content`, `dashboard-layout`, `footer`). **Interactive** components start with `'use client'` (anything with state, effects, event handlers, or `next/navigation`). Match this convention: only add `'use client'` when a component genuinely needs the client. `grep -rl "'use client'" src` shows the current set.

### DashboardLayout = RSC shell + nested client providers
`layout/dashboard-layout.tsx` is an RSC that computes static `<body>` layout classes server-side, then nests client providers in this order: `ColorModeProvider` → `SidebarProvider` → `CommandPaletteProvider`. Alongside the visual tree it mounts four **headless effect components** (each returns `null`, only runs DOM side effects):

- `BodyClassSync` — mirrors React sidebar state onto `document.body` classes (`sidebar-collapse`, `sidebar-open`, `sidebar-mini`) plus the static layout classes.
- `LteBehaviors` — event-delegation handler that powers AdminLTE's `data-lte-toggle` markup (card collapse/maximize/remove, chat-pane) and Bootstrap `.needs-validation` forms **without loading adminlte.js**. Note: the React `Card`/`DirectChat` components use their own `onClick` handlers instead, so they're unaffected by this delegated listener.
- `Accessibility`, `HtmlDir` — a11y wiring and `dir` attribute.

`ColorModeProvider` sets `data-bs-theme` on `<html>` and persists to localStorage. Persistence keys: **`lte-theme`** (color mode), **`lte.sidebar.state`** (sidebar collapsed, JSON).

### Single menu data structure drives nav + command palette
`types/menu.ts` defines `MenuNode`, a discriminated union of `header | item | group` (groups nest `MenuNode[]`). The same array feeds the recursive `SidebarNavItem` tree **and** `flattenMenuToCommands(menuItems)` for the command palette. Consumers define one `menuItems` array (see `demo/lib/menu.ts`) and pass it to `DashboardLayout`.

### Dynamic-import plugin pattern
Heavy third-party libs are **never** statically imported. Each wrapper component (`tool/datatable.tsx` → Tabulator, `tool/editor.tsx` → Quill, `widget/apex-chart.tsx` → ApexCharts, `widget/world-map.tsx` → jsVectorMap, `form/input-flatpickr.tsx`, `form/input-tom-select.tsx`) does `await import(...)` inside `useEffect`. Follow this pattern for any new heavy dependency, and guard against unmount-before-resolve + destroy on cleanup (see `apex-chart.tsx` for the reference implementation). Consumers install these as their own deps and load the matching CSS/JS.

### Next.js coupling
`next` is declared an **optional** peer dependency, but `layout/sidebar-nav.tsx` imports `usePathname` from `next/navigation` for active-link detection — so the sidebar in practice requires Next. Navigation uses plain `<a href>` (full page loads), not `next/link`.

### What the library ships vs. what the consumer provides
The library ships JS + **only** `dist/css/adminlte.css` (import via `'@adminlte/react/css'`). Everything else is the consumer's responsibility, loaded via CDN in `demo/app/layout.tsx`: **Bootstrap JS bundle** (required for dropdowns/modals — the library does not bundle it; the bundle build already includes Popper), OverlayScrollbars, Bootstrap Icons, Source Sans 3 font, and the plugin CSS (ApexCharts, jsVectorMap, Tabulator, Quill, Flatpickr, Tom Select). The demo loads the JS via `next/script` `afterInteractive` and preconnects to the CDN. **Gotcha:** markup that Bootstrap JS decorates on window load (e.g. tab/pill `data-bs-toggle` groups) must render those attributes (`aria-selected`, `tabIndex={-1}` on inactive tabs) in JSX, or Bootstrap's mutations race React hydration and cause mismatch errors. When adding a component that needs runtime JS or CSS the library doesn't bundle, document the CDN/import requirement and mirror it in the demo's root layout.

### Demo route groups
`demo/app` uses route groups: `(dashboard)` (main shell via `demo/components/demo-layout.tsx`, which wraps `DashboardLayout` with shared brand/user/topbar), `(auth)` (login/register via `AuthLayout`), `(fullpage)` (layout-flag demos: fixed header/sidebar/footer, RTL, mini, etc.).

### In-app documentation
The library's browsable documentation is a set of in-app pages under `demo/app/(dashboard)/docs/*` (so it inherits the dashboard chrome and the topbar's `/docs/introduction` link resolves). Shared docs primitives live in `demo/components/docs/`: `docs-page.tsx` (page shell), `docs-nav.tsx` (sticky section nav), `props-table.tsx`, `code-block.tsx`, and `sections.ts`. **Gotcha:** the docs nav data lives in `sections.ts` (a plain, non-`'use client'` module) precisely because `docs/page.tsx` is a Server Component that `.map()`s over it — importing a value array from a `'use client'` module turns it into a client-reference proxy and crashes the server render. Keep shared data that both server and client files consume out of `'use client'` modules. The npm-facing docs are the root `README.md` + `CHANGELOG.md`.

## Code style

Prettier (`.prettierrc`): **no semicolons**, single quotes, `es5` trailing commas, `printWidth` 100, `arrowParens: avoid`. TypeScript `strict` is on in the root `tsconfig.json`, which also relaxes `noUnusedLocals` / `noUnusedParameters` / `noImplicitReturns` to `false` for the library; the demo has its own stricter `demo/tsconfig.json`.

When adding a component: create it under the right `src/` folder (`layout` / `widget` / `form` / `tool` / `context` / `hooks`), export it from `src/index.ts`, and add types to `src/types/` if they're part of the public API (`index.ts` re-exports all of `types/*`).
