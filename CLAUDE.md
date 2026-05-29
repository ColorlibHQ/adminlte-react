# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A **pnpm monorepo** publishing `adminlte-react` — an AdminLTE 4 / Bootstrap 5.3 component library built for Next.js 14+ App Router (React Server Components). Two workspace members:

- `packages/adminlte-react` — the publishable library (the actual product)
- `apps/demo` — a Next.js 14 App Router app used as both demo and dev playground; depends on the library via `workspace:*`

There is no test framework configured, and the library's `lint` script is a stub (`echo 'linting...'`). `pnpm type-check` (`tsc --noEmit`) is the real correctness gate.

## Commands

Run from the repo root:

```bash
pnpm dev          # runs all members' dev in parallel: library `tsup --watch` + demo `next dev`
pnpm build        # builds ONLY packages/* (the library). Does NOT build the demo app.
pnpm type-check   # tsc --noEmit across all members — the primary check before considering work done
pnpm lint         # next lint in demo; no-op stub in the library
```

Library-only (`cd packages/adminlte-react`):

```bash
pnpm build        # tsup → copy-css → add-use-client (see "The build pipeline" below)
pnpm dev          # tsup --watch
```

Demo-only (`cd apps/demo`): standard `next dev` / `next build` / `next start`.

After editing library source, the demo only picks up changes once the library is rebuilt — run library `dev` (watch) alongside the demo, or `pnpm dev` from root, since the demo imports the compiled `dist/`, not `src/`.

## The build pipeline (and the "use client" gotcha)

`tsup` (esbuild) bundles `src/index.ts` to dual ESM+CJS with `.d.ts`, treeshaken, sourcemapped. The build is **three sequential steps** (`tsup && copy-css && add-use-client`):

1. `tsup` — bundle. **esbuild strips `'use client'` directives during bundling**, so they cannot survive normally.
2. `copy-css` — copies `node_modules/admin-lte/dist/css/adminlte.css` → `dist/css/` (exposed as the `./css` export).
3. `add-use-client` — `add-use-client.js` prepends `"use client";` to the **entire** `dist/index.js` and `dist/index.cjs`.

**Critical implication:** the published barrel bundle is marked `'use client'` as a whole. The RSC/client split in `src/` (below) is the authoring model; the single-file published artifact is a client boundary. When changing the build or the entry, preserve this post-processing step or RSC consumers will get "use client" errors.

Heavy plugins (`flatpickr`, `tom-select`, `tabulator-tables`, `quill`) plus `react`/`react-dom`/`next` are `external` in `tsup.config.ts` — never bundled.

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
`types/menu.ts` defines `MenuNode`, a discriminated union of `header | item | group` (groups nest `MenuNode[]`). The same array feeds the recursive `SidebarNavItem` tree **and** `flattenMenuToCommands(menuItems)` for the command palette. Consumers define one `menuItems` array (see `apps/demo/lib/menu.ts`) and pass it to `DashboardLayout`.

### Dynamic-import plugin pattern
Heavy third-party libs are **never** statically imported. Each wrapper component (`tool/datatable.tsx` → Tabulator, `tool/editor.tsx` → Quill, `widget/apex-chart.tsx` → ApexCharts, `widget/world-map.tsx` → jsVectorMap, `form/input-flatpickr.tsx`, `form/input-tom-select.tsx`) does `await import(...)` inside `useEffect`. Follow this pattern for any new heavy dependency, and guard against unmount-before-resolve + destroy on cleanup (see `apex-chart.tsx` for the reference implementation). Consumers install these as their own deps and load the matching CSS/JS.

### Next.js coupling
`next` is declared an **optional** peer dependency, but `layout/sidebar-nav.tsx` imports `usePathname` from `next/navigation` for active-link detection — so the sidebar in practice requires Next. Navigation uses plain `<a href>` (full page loads), not `next/link`.

### What the library ships vs. what the consumer provides
The library ships JS + **only** `dist/css/adminlte.css` (import via `'adminlte-react/css'`). Everything else is the consumer's responsibility, loaded via CDN in `apps/demo/app/layout.tsx`: **Bootstrap JS bundle** (required for dropdowns/modals — the library does not bundle it), Popper, OverlayScrollbars, Bootstrap Icons, Source Sans 3 font, and the plugin CSS (ApexCharts, jsVectorMap, Tabulator). When adding a component that needs runtime JS or CSS the library doesn't bundle, document the CDN/import requirement and mirror it in the demo's root layout.

### Demo route groups
`apps/demo/app` uses route groups: `(dashboard)` (main shell via `components/demo-layout.tsx`, which wraps `DashboardLayout` with shared brand/user/topbar), `(auth)` (login/register via `AuthLayout`), `(fullpage)` (layout-flag demos: fixed header/sidebar/footer, RTL, mini, etc.).

### In-app documentation
The library's documentation is a set of in-app pages under `app/(dashboard)/docs/*` (so it inherits the dashboard chrome and the topbar's `/docs/introduction` link resolves). Shared docs primitives live in `components/docs/`: `docs-page.tsx` (page shell), `docs-nav.tsx` (sticky section nav), `props-table.tsx`, `code-block.tsx`, and `sections.ts`. **Gotcha:** the docs nav data lives in `sections.ts` (a plain, non-`'use client'` module) precisely because `docs/page.tsx` is a Server Component that `.map()`s over it — importing a value array from a `'use client'` module turns it into a client-reference proxy and crashes the server render. Keep shared data that both server and client files consume out of `'use client'` modules. The package's npm-facing docs are `packages/adminlte-react/README.md` + `CHANGELOG.md`.

## Code style

Prettier (`.prettierrc`): **no semicolons**, single quotes, `es5` trailing commas, `printWidth` 100, `arrowParens: avoid`. TypeScript `strict` is on via `tsconfig.base.json`, but the library's `tsconfig.json` relaxes `noUnusedLocals` / `noUnusedParameters` / `noImplicitReturns` to `false` (the demo keeps them strict).

When adding a component: create it under the right `src/` folder (`layout` / `widget` / `form` / `tool` / `context` / `hooks`), export it from `src/index.ts`, and add types to `src/types/` if they're part of the public API (`index.ts` re-exports all of `types/*`).
