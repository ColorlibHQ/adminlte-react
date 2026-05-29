# AdminLTE React

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)
[![React 18+](https://img.shields.io/badge/React-18+-149eca.svg?logo=react&logoColor=white)](https://react.dev)
[![Next.js 14+](https://img.shields.io/badge/Next.js-14+-000000.svg?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Bootstrap 5.3](https://img.shields.io/badge/Bootstrap-5.3-7952b3.svg?logo=bootstrap&logoColor=white)](https://getbootstrap.com/docs/5.3/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![RSC ready](https://img.shields.io/badge/RSC-ready-000000.svg)](#performance)

A modern React/Next.js component library for building admin dashboards and web applications with AdminLTE 4 styling and Bootstrap 5.3 — built for the Next.js App Router and React Server Components by [Colorlib](https://colorlib.com).

**Status**: v0.1.0 (Early Release) · **Live demo:** [preview.colorlib.com/theme/adminlte-react](https://preview.colorlib.com/theme/adminlte-react/) _(coming soon)_

<!-- TODO: replace the placeholder images below with real captures committed under docs/screenshots/ (dashboard-light.png + dashboard-dark.png). See docs/screenshots/README.md. -->
<p align="center">
  <a href="https://preview.colorlib.com/theme/adminlte-react/">
    <img alt="AdminLTE React dashboard — light theme" src="https://placehold.co/800x500/f1f4f9/2b3a4a?text=AdminLTE+React%0A%E2%80%94+Dashboard+(Light)" width="49%">
  </a>
  <a href="https://preview.colorlib.com/theme/adminlte-react/">
    <img alt="AdminLTE React dashboard — dark theme" src="https://placehold.co/800x500/1b2531/cfd8e3?text=AdminLTE+React%0A%E2%80%94+Dashboard+(Dark)" width="49%">
  </a>
</p>

> **Documentation:** Full guides and an API reference for every component, hook, and
> context live in the demo app under `/docs`. Run `pnpm demo` and open
> [`/docs/introduction`](http://localhost:3000/docs/introduction). A condensed reference
> follows below, and the release history is in the [CHANGELOG](./CHANGELOG.md).

## Features

- ✨ **React Server Components (RSC)** - Server-first; only interactive parts ship as client components
- 📦 **No required runtime dependencies** - Beyond the React/Next peers; nothing extra forced into your bundle
- 🎨 **Pre-built Components** - 30+ components across layout, widgets, forms, and tools
- 🌙 **Dark Mode Support** - Light/Dark/Auto, driven by Bootstrap's `data-bs-theme`
- ♿ **Accessible** - Semantic markup, ARIA landmarks, keyboard navigation
- 🎯 **TypeScript First** - Fully typed props, hooks, and the menu data model
- 📱 **Responsive** - Mobile-first Bootstrap 5.3 design with an off-canvas sidebar
- 🔌 **Lazy plugins** - ApexCharts, Tabulator, Quill, Flatpickr, Tom Select & jsVectorMap load on demand

## Installation

```bash
npm install adminlte-react
# or
pnpm add adminlte-react
```

### Peer Dependencies

```bash
npm install react react-dom next
```

`react` and `react-dom` (18+) are required. **Next.js 14+** is required in practice — the
sidebar uses `next/navigation` for active-link detection and the command palette uses the
Next router. You also need **Bootstrap 5.3 JavaScript** (for dropdowns, modals, tooltips,
toasts) and **Bootstrap Icons** (the components use `bi-*` classes); load both from a CDN
or install them:

```bash
npm install bootstrap bootstrap-icons
```

### Optional Plugins

Install only the libraries for the lazy components you use:

```bash
npm install apexcharts       # <ApexChart>, <SparklineChart>
npm install tabulator-tables # <Datatable>
npm install quill            # <Editor>
npm install flatpickr        # <InputFlatpickr>
npm install tom-select       # <InputTomSelect>
npm install jsvectormap      # <WorldMap>
npm install sortablejs       # useSortable()
```

Each also needs its own CSS loaded once. See the **Plugins & Dynamic Imports** docs page
for the full matrix.

## Quick Start

### 1. Import CSS in your Next.js layout

```tsx
// app/layout.tsx
import 'adminlte-react/css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './globals.css'

export const metadata = {
  title: 'Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css"
        />
      </head>
      <body>
        {children}
        {/* Bootstrap JS required for dropdowns, modals, etc */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}
```

### 2. Create a dashboard layout

```tsx
// app/(dashboard)/layout.tsx
import { DashboardLayout } from 'adminlte-react'
import { menuItems } from '@/lib/menu'

export default function Layout({ children }) {
  return (
    <DashboardLayout
      menuItems={menuItems}
      fixedHeader
      fixedSidebar
      colorModeToggle
    >
      {children}
    </DashboardLayout>
  )
}
```

### 3. Define your menu

```ts
// lib/menu.ts
import type { MenuNode } from 'adminlte-react'

export const menuItems: MenuNode[] = [
  {
    type: 'group',
    text: 'Dashboard',
    icon: 'bi-speedometer',
    children: [
      {
        type: 'item',
        text: 'Dashboard v1',
        href: '/',
        icon: 'bi-circle',
      },
    ],
  },
  {
    type: 'header',
    text: 'UI ELEMENTS',
  },
  {
    type: 'item',
    text: 'Profile',
    href: '/profile',
    icon: 'bi-person',
  },
]
```

### 4. Build dashboard pages

```tsx
// app/(dashboard)/page.tsx
import { AppContent, SmallBox, Card, Progress } from 'adminlte-react'

export default function Dashboard() {
  return (
    <AppContent
      title="Dashboard"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Dashboard' },
      ]}
    >
      <div className="row">
        <div className="col-lg-3 col-6">
          <SmallBox
            title="53"
            text="New Orders"
            theme="primary"
            icon={<i className="bi bi-bag-check"></i>}
            url="#"
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <Card title="Sales Chart" theme="primary">
            {/* Your chart here */}
          </Card>
        </div>
      </div>
    </AppContent>
  )
}
```

## Components

### Layout

- **`DashboardLayout`** - Main app shell (RSC) with sidebar, topbar, footer & command palette
- **`AuthLayout`** - Standalone auth page layout (login, register)
- **`AppContent`** - Page content wrapper with title and breadcrumbs
- Lower-level pieces are also exported: `Topbar`, `Sidebar`, `SidebarBrand`, `SidebarNav`, `SidebarNavItem`, `SidebarOverlay`, `Footer`, `ColorModeToggle`

### Widgets

- **`SmallBox`** - Colored stat tile with footer link
- **`InfoBox`** - Metric widget with optional progress bar
- **`Card`** - Collapsible / maximizable / removable card container
- **`Alert`** - Alert message with optional icon, title & dismiss
- **`Callout`** - Highlighted informational block
- **`Progress`** / **`ProgressGroup`** - Single bar / labeled group
- **`Ratings`** - Star ratings display
- **`ProfileCard`** - User profile card with social links
- **`DescriptionBlock`** - Label/value blocks
- **`Timeline`** - Chronological timeline
- **`NavMessages`** / **`NavNotifications`** / **`NavTasks`** - Topbar dropdown widgets
- **`DirectChat`** - Chat widget with contacts pane
- **`ApexChart`** / **`SparklineChart`** - ApexCharts wrappers (dynamic import)
- **`WorldMap`** - jsVectorMap world map (dynamic import)
- **`CommandPalette`** - ⌘K searchable navigator (+ `flattenMenuToCommands` helper)

### Forms

- **`Button`** - Themed button with variants, sizes, icon
- **`Input`** / **`Textarea`** - Text inputs with label, hint & error
- **`Select`** - Dropdown select (options or children)
- **`InputSwitch`** - Toggle switch
- **`InputColor`** - Native color picker
- **`InputFile`** - File input (single/multiple)
- **`InputFlatpickr`** - Date/time picker (dynamic import)
- **`InputTomSelect`** - Searchable / multi-select (dynamic import)

### Tools

- **`Modal`** - Bootstrap modal dialog
- **`Datatable`** - Data grid with Tabulator (dynamic import)
- **`Editor`** - Rich text editor with Quill (dynamic import)

## Context & Hooks

`DashboardLayout` provides three contexts. Each has a hook (use them in client components):

- **`useSidebarContext()`** → `{ isCollapsed, isMobileOpen, isMiniMode, toggle, collapse, expand, sidebarBreakpoint }`
- **`useColorModeContext()`** → `{ colorMode, setColorMode, resolvedMode }`
- **`useCommandPalette()`** → `{ isOpen, open, close, toggle }` (or `undefined` outside the provider)

Standalone hooks:

- **`usePushMenu(options?)`** - Sidebar state machine (used by `SidebarProvider`)
- **`useCardWidget(initialCollapsed?)`** - Card collapse / maximize / remove state
- **`useDirectChat()`** - Toggle the chat contacts pane
- **`useFullscreen()`** - Fullscreen API wrapper
- **`useTreeviewAnimation(isOpen, speed?)`** - Animate a collapsible `<ul>` height
- **`useSortable(enabled?)`** - Drag-and-drop on `.connectedSortable` lists (SortableJS)

```tsx
'use client'
import { useSidebarContext, useColorModeContext } from 'adminlte-react'

function Toolbar() {
  const { toggle } = useSidebarContext()
  const { setColorMode } = useColorModeContext()
  return (
    <>
      <button onClick={toggle}>Toggle sidebar</button>
      <button onClick={() => setColorMode('dark')}>Dark mode</button>
    </>
  )
}
```

## Styling

All components use Bootstrap 5.3 utility classes. Customize via CSS variables or override classes:

```css
:root {
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  /* ... other variables */
}
```

## Type Safety

Full TypeScript support with exported types:

```tsx
import type { DashboardLayoutProps, MenuNode, BootstrapTheme } from 'adminlte-react'

const props: DashboardLayoutProps = {
  menuItems: [],
  colorModeToggle: true,
}
```

## Dark Mode

Dark mode is handled automatically by `ColorModeProvider` (inside `DashboardLayout`). It sets `data-bs-theme` on `<html>`, resolves `auto` from `prefers-color-scheme`, and persists the user's choice in localStorage under the key `lte-theme`.

Set the starting mode with `initialColorMode` on `DashboardLayout`, or mount the provider directly:

```tsx
<ColorModeProvider initialMode="dark">
  {children}
</ColorModeProvider>
```

## Accessibility

Components are built with accessibility in mind:

- Semantic HTML and ARIA landmarks
- Keyboard navigation (including the ⌘K command palette)
- Focus management
- Reduced-motion friendly animations

## Browser Support

Modern evergreen browsers — latest Chrome, Firefox, Safari, and Edge.

## Performance

- **RSC-optimized** - Presentational components render on the server; only interactive parts hydrate
- **Lazy plugins** - Chart, map, datatable, editor, and advanced form libraries load on demand via dynamic `import()`
- **CSS-in-JS free** - Plain Bootstrap classes and CSS variables
- **Tree-shakeable** - ESM build with `sideEffects` scoped to the stylesheet, so unused components are dropped

## Contributing

Contributions are welcome! Open an issue or pull request on
[GitHub](https://github.com/ColorlibHQ/adminlte-react). Build the library with
`pnpm build` and run `pnpm type-check` before submitting.

## Upgrade to a Premium Dashboard

Need advanced features, more pages, and dedicated support? Explore Colorlib's collection of professional admin templates on [DashboardPack](https://dashboardpack.com/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react).

<!-- TODO: replace the placeholder thumbnails with unique screenshots committed under docs/screenshots/dashboardpack/ (apex.png, zenith.png, haze.png, tailpanel.png, admindek.png, svelteforge.png). -->
<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/apex-dashboard-nextjs/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react">
        <img src="https://placehold.co/600x360/eef2f7/2b3a4a?text=Apex+Dashboard" alt="Apex Dashboard — Next.js admin template with shadcn/ui" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/apex-dashboard-nextjs/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react"><strong>Apex Dashboard</strong></a>
      <br>
      <sub>Next.js 16 + React 19 + Tailwind CSS v4 + shadcn/ui. 5 dashboard variants, 20+ app pages, 125+ routes, full CRUD.</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/zenith-shadcn/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react">
        <img src="https://placehold.co/600x360/eef2f7/2b3a4a?text=Zenith+Dashboard" alt="Zenith — minimal Next.js admin dashboard with shadcn/ui" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/zenith-shadcn/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react"><strong>Zenith Dashboard</strong></a>
      <br>
      <sub>Next.js 16 + React 19 + Tailwind CSS v4 + shadcn/ui. Achromatic design, 50+ pages, 6 dashboards, live theme customizer.</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/haze-dashboard-nuxt/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react">
        <img src="https://placehold.co/600x360/eef2f7/2b3a4a?text=Haze" alt="Haze — Nuxt 4 admin dashboard with 92+ pages" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/haze-dashboard-nuxt/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react"><strong>Haze</strong></a>
      <br>
      <sub>Nuxt 4 + Nuxt UI v4 + Tailwind CSS v4. 92+ pages, 7 layouts, 5 dashboards, RTL, i18n, mock API layer.</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/tailpanel/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react">
        <img src="https://placehold.co/600x360/eef2f7/2b3a4a?text=TailPanel" alt="TailPanel — React and Tailwind CSS admin panel" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/tailpanel/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react"><strong>TailPanel</strong></a>
      <br>
      <sub>React + TypeScript + Tailwind CSS + Vite. 9 dashboard designs, dark and light themes.</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/admindek-html/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react">
        <img src="https://placehold.co/600x360/eef2f7/2b3a4a?text=Admindek" alt="Admindek — feature-rich Bootstrap 5 dashboard" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/admindek-html/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react"><strong>Admindek</strong></a>
      <br>
      <sub>Bootstrap 5 + vanilla JS. 100+ components, dark/light modes, RTL support, 10 color presets.</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://dashboardpack.com/theme-details/svelteforge-premium/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react">
        <img src="https://placehold.co/600x360/eef2f7/2b3a4a?text=SvelteForge" alt="SvelteForge Premium — SvelteKit admin dashboard" width="100%">
      </a>
      <br>
      <a href="https://dashboardpack.com/theme-details/svelteforge-premium/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react"><strong>SvelteForge Premium</strong></a>
      <br>
      <sub>SvelteKit + Tailwind CSS v4. 30+ wired-up modules, multi-tenant from row zero, dark/light/system mode.</sub>
    </td>
  </tr>
</table>

<p align="center">
  <a href="https://dashboardpack.com/?utm_source=github&utm_medium=readme&utm_campaign=adminlte-react"><strong>View All Premium Templates →</strong></a>
</p>

## License

MIT © [Colorlib](https://colorlib.com)

## Resources

- [AdminLTE Documentation](https://adminlte.io)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## Support

For issues, feature requests, or questions:
- [GitHub Issues](https://github.com/ColorlibHQ/adminlte-react/issues)
- [GitHub Discussions](https://github.com/ColorlibHQ/adminlte-react/discussions)
