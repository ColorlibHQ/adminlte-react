# Changelog

All notable changes to **@adminlte/react** are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.0] - 2026-08-19

### Changed

- **The library now type-checks against Next.js 16.** `next` is an optional peer dependency (`>=14.0.0`) that was never listed in the root `devDependencies`, so pnpm's `autoInstallPeers` resolved it on its own and the lockfile had pinned it at **14.2.35** since the project started — meaning `pnpm type-check` was validating `layout/sidebar-nav.tsx`'s `usePathname` import against **two-major-old Next types** while the demo and consumers ran Next 16. `next` is now pinned in `devDependencies` at `^16.3.1`, matching every other optional peer (`react`, `apexcharts`, `quill`, …) which were already pinned there for exactly this reason. This also clears the last `unmet peer` warning from `pnpm install` (Next 14 wanted `react@^18.2.0` against the installed React 19). No API, source or output changed — `tsc --noEmit` passes against Next 16 types unchanged.
- **Dependencies updated to their latest releases.** `apexcharts` 6.8.0 → **6.10.0** and Next.js 16.3.0 → **16.3.1** (demo), `vitest` 4.1.10 → **4.1.11**. All within their current majors; no code changes were required.
- **Demo CDN pin refreshed to match:** apexcharts 6.8.0 → 6.10.0, in the demo's root layout and in the copy-paste snippet on the docs Plugins page. Every other pin (Bootstrap 5.3.8, Bootstrap Icons 1.13.1, OverlayScrollbars 2.16.0, FullCalendar 7.0.2, Source Sans 3 5.3.0, Tabulator 6.5.2, Tom Select 2.6.2, Quill 2.0.3, Flatpickr 4.6.13, jsVectorMap 1.7.0) was already at the latest release.

### Notes

- **TypeScript stays on 6.0.3 — still blocked by `typescript-eslint`.** TS 7.0.2 is out, but `typescript-eslint` 8.67.0 (its latest, and its `8.67.1-alpha.18` canary) still peers `typescript@>=4.8.4 <6.1.0` and **hard-throws** rather than warning: `pnpm lint` exits 2 with *"typescript-eslint does not support TS 7.0"*, which would fail the lint gate in CI. Upstream tracks TS >=7.1 support in [typescript-eslint#10940](https://github.com/typescript-eslint/typescript-eslint/issues/10940). Verified again this release: `tsc --noEmit` passes cleanly on 7.0.2 for **both** the library and the demo, so the codebase itself is TS 7-ready and the hold can be lifted the moment typescript-eslint ships support — no source changes should be needed. (Running TS 6 side-by-side purely to feed typescript-eslint was rejected as more fragile than waiting.) Core made the same call in its 4.2.0 release.
- `admin-lte` is unchanged at 4.8.1, so the bundled stylesheet (`@adminlte/react/css`) is byte-identical to 0.5.0. This is a toolchain/dependency release: `src/` is untouched and the published `dist/` output is unchanged.
- Peer dependency ranges are unchanged — `next` stays `>=14.0.0`, so nothing consumers depend on narrowed.
- Verified: library build, type-check, lint (0 errors, 13 pre-existing warnings) and 19 unit tests; the CI RSC-boundary check (35 client modules in `src/` and `dist/`, `dist/form/button.js` still server-only); demo type-check, production build (66 static pages) and the `EXPORT=true` subpath export; all 67 Playwright route-smoke + a11y tests.

## [0.5.0] - 2026-08-19

### Changed

- **AdminLTE core upgraded to 4.8.1** (from 4.3.1), covering core [4.4.0](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#440---2026-08-18), [4.4.1](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#441---2026-08-18), [4.5.0](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#450---2026-08-18), [4.6.0](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#460---2026-08-18), [4.7.0](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#470---2026-08-18), [4.8.0](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#480---2026-08-19) and [4.8.1](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#481---2026-08-19). What the bundled stylesheet (`@adminlte/react/css`) actually picks up:
  - **The sidebar is now a flex column** (core 4.4.0, #6104). `.app-sidebar` gets `display: flex; flex-direction: column`, `.sidebar-brand` / `.sidebar-search` become `flex: 0 0 auto` and `.sidebar-wrapper` `flex: 1 1 auto; min-height: 0` — replacing the hard-coded `height: calc(100vh - (3.5rem + 1px))` that was repeated across every `sidebar-expand-*` breakpoint. The wrapper now fills whatever the sidebar leaves it instead of assuming a 3.5rem header, so a taller brand or an extra block above the menu no longer pushes the last items out of view. Verified in-browser on `/layout/fixed-sidebar`: wrapper 664 px inside a 720 px viewport, still scrolling under OverlayScrollbars.
  - **`data-lte-print="plain"`** (core 4.7.0) — set it on `<html>` (or any container) for pages that should print as documents: no `(https://…)` suffix after external links, no outline around buttons. It works with nothing but the bundled CSS. Print also stopped drawing a black box around `.skip-link` and every `.nav-link` — the `border: 1px solid #000` rule is scoped to `.btn` again, which matters here because the sidebar prints by design.
  - **`d-print-none` works on the shell** (core 4.6.0) — the print rules that force `display` on `.app-wrapper` and `.app-sidebar` are now `:not(.d-print-none)`, so Bootstrap's utility can hide the chrome from printed pages.
  - **Skip-link hover contrast fix** (core 4.6.0) — `--bs-white` / `--bs-primary-emphasis` (a token Bootstrap never defines, so the background computed to transparent) swapped for `--bs-body-bg` / `--bs-primary-text-emphasis`, so the hovered skip link stays legible in both colour modes.
  - The demo's `public/css/adminlte.rtl.css` was refreshed from core 4.8.1 to match.
- **Palette attributes are available, opt-in.** Core's extended palettes ship as separate stylesheets that `@adminlte/react/css` deliberately does **not** bundle: `adminlte-colors.css` (4.4.0 — 14 generated colours as `--bs-*` tokens plus the `.bg-*` / `.text-bg-*` / `.text-*` / `.border-*` / `.link-*` / `.bg-gradient-*` / `.card-*` / `.callout-*` / `.direct-chat-*` families, ≈8 kB gzipped) and `adminlte-colors-v3.css` (4.5.0 — the same families for the 18 AdminLTE 3 colours at their original values, ≈9.5 kB gzipped). Install `admin-lte` and import the sheet you want next to the library CSS to get:
  - **`data-lte-primary="teal"`** (4.6.0, with 4.8.1's pagination focus-ring fix) — promotes any palette colour to Bootstrap's `primary`, so buttons, links, pagination, form focus rings, progress bars, list groups and dropdowns follow it. Verified: `.btn-primary` goes `rgb(13, 110, 253)` → `rgb(18, 130, 125)` once the sheet is loaded, and does nothing without it.
  - **`data-lte-contrast="aa"`** (4.8.0, v3 sheet only) — flips text to black on the eight v3 colours that miss WCAG AA (blue, cyan, fuchsia, green, lightblue, olive, pink, teal). Verified: `.text-bg-lightblue` goes white → black.

### Added

- Docs for both of the above: a **Core `<html>` attributes** table in the README's Styling section, and **The extended palette** / **Print** sections on the in-app `/docs/theming` page. They document core CSS you opt into yourself — no new component props or APIs.

### Notes

- **Core's restyled search fields don't reach this port.** 4.4.0 restyles `.navbar-search` and `.sidebar-search` into quiet pills (a new `--lte-search-field-*` variable set). `@adminlte/react` renders neither: the topbar search is a command-palette trigger button and the sidebar has no filter, so the new rules are inert here — nothing regressed, nothing gained.
- **Core 4.4.1's ApexCharts dark-mode fix is a recipe, not shipped CSS** — it was applied to core's own demo pages. The `ApexChart` wrapper still passes `config` through verbatim and sets no Apex `theme`, so callers wanting dark tooltips pass `theme: { mode }` themselves.
- Core's JavaScript is still irrelevant to this port — `@adminlte/react` never loads `adminlte.js` (see the 0.3.0 notes).
- No dependency other than `admin-lte` changed; peer dependency ranges are untouched.
- Verified: library build, type-check, lint (0 errors, 13 pre-existing warnings) and 19 unit tests; demo type-check and production build; all 67 Playwright route-smoke + a11y tests.

## [0.4.0] - 2026-08-13

### Changed

- **AdminLTE core upgraded to 4.3.1.** The bundled stylesheet (`@adminlte/react/css`) picks up everything CSS-side from core [4.2.0](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#420---2026-08-06), [4.3.0](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#430---2026-08-10) and [4.3.1](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#431---2026-08-10): the rebuilt v3 ribbons (`.ribbon-wrapper` + `.ribbon`, with 4.3.1's corner-geometry fix), the v3 social/post widgets (`.user-block`, `.post`, `.widget-user`, `.widget-user-2`, `.description-block`), and the contrast fixes core's expanded axe gate caught. The RTL stylesheet in the demo was refreshed to match. Core's new JavaScript (SidebarSearch, the `initialize()`/`teardown()` lifecycle, server-rendered ColorMode resolution) does not affect this port — `@adminlte/react` never loads `adminlte.js` (see the 0.3.0 notes).
- **All dependencies updated to their latest releases.** Two majors in the dev/demo toolchain: `apexcharts` 5.13 → **6.8** (the `ApexChart` wrapper needed no changes — its peer range was already `>=4.0.0` — and every chart page passes the Playwright suite against v6) and `@testing-library/jest-dom` 6 → 7; plus `jsdom` 29 → 30 and `@types/node` 25 → 26. Minors/patches: Next.js 16.3.0, React 19.2.8, ESLint 10.8.1, typescript-eslint 8.67, Vitest 4.1.10, Playwright 1.62.1, `@axe-core/playwright` 4.13, Tabulator 6.5.2, Tom Select 2.6.2, admin-lte 4.3.1.
- **Demo CDN pins refreshed to match the installed versions:** apexcharts 6.8.0, tabulator-tables 6.5.2, tom-select 2.6.2, OverlayScrollbars 2.11 → 2.16, Source Sans 3 5.0.12 → 5.3.0. Bootstrap 5.3.8 and Bootstrap Icons 1.13.1 were already current. The copy-paste snippets on the docs Plugins page were brought up to the same versions (they had drifted as far back as apexcharts 3).
- **Demo calendar migrated to FullCalendar 7** (from 6.1.20). v7 is a real migration, not a pin bump: the global bundle moved (`index.global.min.js` → `all/global.min.js`), CSS is no longer injected by the JS — the demo now loads `skeleton.css` plus the **classic** theme (the pre-v7 look) alongside the script — `Draggable` moved under the `FullCalendar.Interaction` namespace, and per-event `backgroundColor`/`borderColor`/`textColor` were renamed to `color`/`contrastColor`. Verified in-browser: month grid, toolbar views, per-event colors, and external drag-and-drop all work; v7's rewritten DOM (ARIA `grid`/`gridcell`, no tables) passes the a11y suite.

### Notes

- **TypeScript stays on 6.0.3.** TS 7.0 has shipped, but `typescript-eslint` (peer `>=4.8.4 <6.1.0`) refuses to run under it ("typescript-eslint does not support TS 7.0"), which would break the lint gate — core made the same call in its 4.2.0 release. `tsc --noEmit` itself passes on 7.0.2, so the hold can be lifted as soon as typescript-eslint supports TS 7.
- Peer dependency ranges are unchanged — nothing consumers depend on narrowed.
- Verified: library build, type-check, lint and 19 unit tests; demo type-check and production build; all 67 Playwright route-smoke + a11y tests.

## [0.3.0] - 2026-07-02

### Changed

- **AdminLTE core upgraded to 4.1.0.** The bundled stylesheet (`@adminlte/react/css`) picks up everything from core [4.0.4](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#404---2026-07-02) and [4.1.0](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#410---2026-07-02): ~6 KB gzip smaller (duplicate docs styles removed and the docs/FAQ styling split into core's separate `adminlte-docs.css`, which applications never needed), WCAG AA contrast fix for breadcrumb links on the content-header background, and the repaired callout link/code colors. The RTL stylesheet in the demo was refreshed to match.
- Demo loads Bootstrap 5.3.8 from the CDN (was 5.3.7), matching the compiled core CSS.

### Notes

- Core 4.1.0's new JavaScript (ESM bundle, TypeScript declarations, component lifecycle, bundled ColorMode) does not affect this port: `@adminlte/react` re-implements all behavior natively in React and never loads `adminlte.js`. Do **not** load core's `adminlte.js` alongside this library — both implement the `data-lte-toggle` data API and cards would double-toggle. Theme preferences continue to interoperate with core via the shared `lte-theme` storage key.

## [0.2.0] - 2026-06-10

### Added

#### UI element components

- `Badge` — contrast-aware `text-bg-*` label; `pill` and `positioned` (overlay) variants.
- `Breadcrumb` — data-driven trail; last item renders as the active page; optional `divider`.
- `Pagination` — controlled, windowed with ellipses; renders `<button>`s when given
  `onPageChange`, otherwise `<a>`; `size`, `siblingCount`, and `align` options.
- `Spinner` — `border`/`grow` variants with an accessible status label.
- `Avatar` / `AvatarGroup` — image or initials fallback, presence dot, overlapping stacks.
- `ListGroup` / `ListGroupItem` — item renders as `<a>`, `<button>`, or `<div>` based on its
  props (`href`/`onClick`/`action`); `active`, `disabled`, contextual `theme`.
- `Table` — generic, column-driven table (`columns` + `data`, custom cell `render`, `rowKey`)
  with `striped`/`hover`/`bordered`/`small`/`responsive` options.
- `Dropdown` — items, dividers, headers, icons; `split`, `direction`, `align`, outline variant
  (driven by the Bootstrap JS bundle).
- `Carousel` — slides with captions, indicators, controls, fade, autoplay (Bootstrap JS bundle).
- `Offcanvas` / `OffcanvasTrigger` — slide-in panel with header/footer and a paired trigger
  (Bootstrap JS bundle).
- `Stepper` — controlled progress/wizard stepper (horizontal or vertical, optional clickable steps).

#### Navigation

- `LinkProvider` / `useLinkComponent` and a `linkComponent` prop on `DashboardLayout` — inject a
  router link (e.g. an adapter around `next/link`) so sidebar navigation is client-side. Defaults
  to a plain `<a>`, keeping the library framework-agnostic.
- `docsHref` / `docsLabel` props on `DashboardLayout` for the sidebar footer link, routed through
  the injectable Link. **Changed:** the footer link is now opt-in — previously it was hardcoded to
  the external AdminLTE HTML docs; it now renders only when `docsHref` is set (point it at your own
  docs). The demo points it at its in-app `/docs`.

### Changed

- **Package renamed to `@adminlte/react`** (previously `adminlte-react`), published under the
  `@adminlte` npm org. Update imports: `from '@adminlte/react'` and
  `import '@adminlte/react/css'`.
- **Build: per-file ESM output (RSC boundaries preserved).** The package is no longer a single
  bundled file stamped with a blanket `"use client"`. Each source module now compiles to its own
  `dist/` file, so the `'use client'` directive survives per component: server-component-authored
  widgets (`Button`, `Input`, `SmallBox`, `DashboardLayout`, …) stay Server Components for
  consumers, and bundlers can tree-shake through the barrel. CommonJS output was dropped (the
  package is ESM-only; it targets Next.js 14+ / modern bundlers). Sourcemaps are no longer
  published (≈7 MB lighter tarball; dist shrank from ≈9 MB to ≈0.75 MB).
- **All heavy plugins are now optional peer dependencies** (`apexcharts`, `flatpickr`,
  `jsvectormap`, `quill`, `sortablejs`, `tabulator-tables`, `tom-select`). Previously apexcharts,
  jsvectormap, and sortablejs were silently bundled in; now all plugins follow the documented
  model — install only the ones whose components you use. They are still lazy-loaded via dynamic
  `import()`, which Next.js code-splits per page.
- `flattenMenuToCommands` / `CommandItem` moved to a server-safe module so Server Components
  (e.g. `DashboardLayout`) can flatten menus during server render. Barrel imports are unchanged.
- `ApexChart` props are now typed (`config: ApexOptions`, typed `series`) instead of `any`, and
  prop changes update the chart in place (`updateOptions`) instead of destroy + re-create.
  Inline (non-memoized) `series`/`config` objects no longer re-create the chart every render.
- `SidebarProvider` / `ColorModeProvider` context values are memoized — consumers no longer
  re-render on every provider render.
- `Input`, `Select`, `Textarea`, and `InputSwitch` forward refs to their underlying form
  controls (focus management, react-hook-form, etc.).
- Sidebar OverlayScrollbars detection switched from a 100 ms `setInterval` poll to an immediate
  check + `requestAnimationFrame` retry loop, tolerating lazily loaded
  (`next/script afterInteractive`) OverlayScrollbars.

### Fixed

- `Datatable` destroys its Tabulator instance on unmount/re-render (previously leaked instances
  and stacked tables on prop changes).
- `Editor` no longer creates a second Quill instance when `placeholder`/`quillOptions` change;
  the `value` prop now syncs into the editor after mount (controlled usage works), and the
  hidden form input tracks the edited HTML instead of the stale `value` prop.
- `Card` `removable` tool button actually removes the card (was a no-op); new `onRemove`
  callback fires after removal.
- `Input` `igroupSize` now actually sizes the control (`form-control-sm`/`form-control-lg`);
  previously the computed class was never applied.

### Tested

- Vitest unit tests for pure logic and presentational components.
- CI workflow (GitHub Actions): type-check, lint, unit tests, library build, an RSC-boundary
  check on `dist/`, and demo type-check + build.

## [0.1.0] - 2026-05-29

Initial public release — an AdminLTE 4 / Bootstrap 5.3 component library for the
Next.js App Router and React Server Components.

### Added

#### Layout

- `DashboardLayout` — the application shell. A React Server Component that computes
  static `<body>` layout classes on the server and nests the client providers
  (color mode, sidebar, command palette) inside. Supports `fixedHeader`,
  `fixedSidebar`, `fixedFooter`, `sidebarMini`, `sidebarTheme`, `sidebarBreakpoint`,
  RTL via `dir`, optional sidebar-state persistence, and custom topbar/footer slots.
- `AuthLayout` — standalone login/register layout that applies its body classes via
  effect, so it composes under a Next.js root layout.
- `AppContent` — page content wrapper with title and breadcrumbs.
- Lower-level pieces exported for custom shells: `Topbar`, `Sidebar`, `SidebarBrand`,
  `SidebarNav`, `SidebarNavItem`, `SidebarOverlay`, `Footer`, `ColorModeToggle`.

#### Widgets

- `SmallBox`, `InfoBox`, `Card` (collapse / maximize / remove), `Alert`, `Callout`,
  `Progress`, `ProgressGroup`, `Ratings`, `ProfileCard`, `DescriptionBlock`,
  `Timeline`.
- Topbar dropdowns: `NavMessages`, `NavNotifications`, `NavTasks`.
- `DirectChat` — chat card with a slide-in contacts pane.
- `ApexChart` and `SparklineChart` — ApexCharts wrappers (lazy-loaded).
- `WorldMap` — jsVectorMap world map (lazy-loaded).
- `CommandPalette` — ⌘K / Ctrl+K searchable navigator, plus the
  `flattenMenuToCommands` helper to build commands from a menu tree.

#### Forms

- `Button`, `Input`, `Select`, `Textarea`, `InputSwitch`, `InputColor`, `InputFile`.
- `InputFlatpickr` (date/time picker) and `InputTomSelect` (searchable / multi-select),
  both lazy-loaded.

#### Tools

- `Modal` — Bootstrap modal dialog.
- `Datatable` — Tabulator-powered data grid with local data or remote `apiUrl`
  (lazy-loaded).
- `Editor` — Quill rich-text editor (lazy-loaded).

#### Contexts & hooks

- Contexts: `SidebarProvider` / `useSidebarContext`,
  `ColorModeProvider` / `useColorModeContext`,
  `CommandPaletteProvider` / `useCommandPalette`.
- Hooks: `usePushMenu`, `useCardWidget`, `useDirectChat`, `useFullscreen`,
  `useTreeviewAnimation`, `useSortable`.

#### Theming

- Light / dark / auto color modes driven by Bootstrap's `data-bs-theme`, with
  `auto` resolved from `prefers-color-scheme` and the choice persisted to
  `localStorage` (`lte-theme`).
- Optional sidebar collapsed-state persistence (`lte.sidebar.state`).

#### Types

- Fully typed public API, including `MenuNode` (`header` | `item` | `group`),
  `BootstrapTheme`, `ColorMode`, `DashboardLayoutProps`, `AuthLayoutProps`,
  `AppContentProps`, `TopbarUser`, direct-chat types, and `CommandItem`.

### Notes

- Built with `tsup` to dual ESM + CJS with type declarations and source maps. The
  published bundle is tagged `"use client"` so it works under the App Router; the
  AdminLTE stylesheet ships under the `adminlte-react/css` export.
- Heavy third-party libraries are never bundled eagerly — they load via dynamic
  `import()` inside the components that use them.

[0.5.0]: https://github.com/ColorlibHQ/adminlte-react/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/ColorlibHQ/adminlte-react/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/ColorlibHQ/adminlte-react/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/ColorlibHQ/adminlte-react/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/ColorlibHQ/adminlte-react/releases/tag/v0.1.0
