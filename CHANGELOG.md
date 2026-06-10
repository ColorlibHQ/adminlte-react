# Changelog

All notable changes to **@colorlib/adminlte-react** are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

### Tested

- Vitest unit tests for pure logic and presentational components.

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
  AdminLTE stylesheet ships under the `@colorlib/adminlte-react/css` export.
- Heavy third-party libraries are never bundled eagerly — they load via dynamic
  `import()` inside the components that use them.

[Unreleased]: https://github.com/ColorlibHQ/adminlte-react/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/ColorlibHQ/adminlte-react/releases/tag/v0.1.0
