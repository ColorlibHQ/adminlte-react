import type { Metadata } from 'next'
import { DocsPage } from '@/components/docs/docs-page'

export const metadata: Metadata = {
  title: 'Introduction — AdminLTE React',
  description: 'What adminlte-react is, how it is architected, and who it is for.',
}

export default function IntroductionPage() {
  return (
    <DocsPage
      title="Introduction"
      lead="A React/Next.js component library that brings the AdminLTE 4 dashboard to the App Router — server-first, themeable, and free of jQuery."
    >
      <h2>What it is</h2>
      <p>
        <code>adminlte-react</code> packages the AdminLTE 4 admin theme (built on Bootstrap
        5.3) as a set of typed React components: a full dashboard shell, widgets, form
        controls, and tool components. It is designed for the Next.js App Router and React
        Server Components, but works in any React 18+ application.
      </p>

      <h2>Design principles</h2>
      <ul>
        <li>
          <strong>Server-first.</strong> The <code>DashboardLayout</code> is a React Server
          Component that computes static layout classes on the server and nests the
          interactive client providers inside. Presentational widgets ship as Server
          Components; only components that need state, effects, or browser APIs are marked{' '}
          <code>&apos;use client&apos;</code>.
        </li>
        <li>
          <strong>No jQuery, no adminlte.js.</strong> Interactive behaviors (sidebar
          toggle, card collapse/maximize, treeview, fullscreen, command palette) are
          re-implemented with React state and small hooks. AdminLTE&apos;s{' '}
          <code>data-lte-toggle</code> markup still works via a delegated listener for any
          raw HTML you drop in.
        </li>
        <li>
          <strong>Lazy plugins.</strong> Heavy third-party libraries (ApexCharts, Tabulator,
          Quill, Flatpickr, Tom Select, jsVectorMap) are loaded with dynamic{' '}
          <code>import()</code> inside the components that use them, so they never enter your
          initial bundle.
        </li>
        <li>
          <strong>TypeScript first.</strong> Every component, hook, context, and the menu
          data model is fully typed and exported.
        </li>
        <li>
          <strong>Dark mode built in.</strong> A <code>ColorModeProvider</code> manages
          light / dark / auto, drives Bootstrap&apos;s <code>data-bs-theme</code>, and
          persists the choice.
        </li>
      </ul>

      <h2>What&apos;s in the box</h2>
      <ul>
        <li>
          <strong>Layout</strong> — <code>DashboardLayout</code>, <code>AuthLayout</code>,{' '}
          <code>AppContent</code>, plus the lower-level <code>Topbar</code>,{' '}
          <code>Sidebar</code>, and <code>Footer</code> pieces.
        </li>
        <li>
          <strong>Widgets</strong> — stat boxes, cards, alerts, callouts, progress, ratings,
          timeline, profile card, navbar dropdowns, direct chat, charts, world map, and a
          command palette.
        </li>
        <li>
          <strong>Forms</strong> — inputs, select, textarea, switch, color, file, plus
          plugin-backed date picker and advanced select.
        </li>
        <li>
          <strong>Tools</strong> — modal, datatable (Tabulator), and a rich-text editor
          (Quill).
        </li>
        <li>
          <strong>Hooks &amp; context</strong> — sidebar, color mode and command-palette
          contexts, plus standalone hooks for card widgets, fullscreen, treeview animation,
          sortable lists, and direct chat.
        </li>
      </ul>

      <h2>Requirements</h2>
      <ul>
        <li>React 18 or newer and React DOM.</li>
        <li>
          Next.js 14+ in practice — the sidebar uses <code>next/navigation</code> for
          active-link detection and the command palette uses the Next router.
        </li>
        <li>
          Bootstrap 5.3 JavaScript for components that rely on Bootstrap&apos;s own behavior
          (dropdowns, modals, tooltips, toasts).
        </li>
      </ul>

      <p>
        Ready to build? Continue to <a href="/docs/installation">Installation</a>.
      </p>
    </DocsPage>
  )
}
