# Changelog

All notable changes to **@adminlte/react** are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[Unreleased]: https://github.com/ColorlibHQ/adminlte-react/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/ColorlibHQ/adminlte-react/releases/tag/v0.1.0
