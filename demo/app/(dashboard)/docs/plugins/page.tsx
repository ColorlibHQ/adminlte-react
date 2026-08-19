import type { Metadata } from 'next'
import { DocsPage } from '@/components/docs/docs-page'
import { CodeBlock } from '@/components/docs/code-block'

export const metadata: Metadata = {
  title: 'Plugins & Dynamic Imports',
  description: 'How the chart, map, datatable, editor, and advanced form components lazy-load their libraries, and what you need to install.',
}

interface PluginRow {
  component: string
  pkg: string
  css: string
  install: 'Required' | 'Bundled'
}

const plugins: PluginRow[] = [
  { component: 'ApexChart, SparklineChart', pkg: 'apexcharts', css: 'apexcharts/dist/apexcharts.css', install: 'Bundled' },
  { component: 'WorldMap', pkg: 'jsvectormap', css: 'jsvectormap/dist/css/jsvectormap.min.css', install: 'Bundled' },
  { component: 'useSortable', pkg: 'sortablejs', css: '—', install: 'Bundled' },
  { component: 'Datatable', pkg: 'tabulator-tables', css: 'tabulator-tables/dist/css/tabulator_bootstrap5.min.css', install: 'Required' },
  { component: 'Editor', pkg: 'quill', css: 'quill/dist/quill.snow.css', install: 'Required' },
  { component: 'InputFlatpickr', pkg: 'flatpickr', css: 'flatpickr/dist/flatpickr.min.css', install: 'Required' },
  { component: 'InputTomSelect', pkg: 'tom-select', css: 'tom-select/dist/css/tom-select.bootstrap5.min.css', install: 'Required' },
]

export default function PluginsPage() {
  return (
    <DocsPage
      title="Plugins & Dynamic Imports"
      lead="Heavy third-party libraries are loaded with dynamic import() inside the components that use them — they never enter your initial bundle."
    >
      <h2>The pattern</h2>
      <p>
        Components that wrap a large library import it lazily inside a{' '}
        <code>useEffect</code>, initialize it against a ref, and tear it down on unmount.
        Because the import is dynamic, the library is code-split into its own chunk and only
        downloaded when the component actually mounts. Here is the shape, from{' '}
        <code>ApexChart</code>:
      </p>
      <CodeBlock
        code={`useEffect(() => {
  let cancelled = false
  const el = containerRef.current
  if (!el) return

  const init = async () => {
    const ApexCharts = (await import('apexcharts')).default
    if (cancelled || !containerRef.current) return
    const chart = new ApexCharts(el, { ...config, series })
    chartRef.current = chart
    chart.render()
  }
  init().catch(err => console.error(err))

  return () => {
    cancelled = true
    chartRef.current?.destroy()
  }
}, [id, series, config])`}
      />
      <p>
        If you write your own plugin-backed component, follow the same rules: guard against
        the effect being cleaned up before the dynamic import resolves, and destroy the
        instance on unmount.
      </p>

      <h2>Install matrix</h2>
      <p>
        Each plugin-backed component needs its library&apos;s <strong>CSS</strong>, which you
        load once (CDN or a bundler import). Libraries marked <em>Required</em> are listed
        as <code>external</code> in the build, so you <strong>must</strong> install the npm
        package for the JavaScript to resolve. Libraries marked <em>Bundled</em> ship inside{' '}
        <code>@adminlte/react</code>&apos;s code-split chunks — installing them is optional
        for the JS, but you still need their CSS.
      </p>
      <div className="table-responsive">
        <table className="table table-sm table-striped align-middle docs-props">
          <thead>
            <tr>
              <th>Component(s)</th>
              <th>npm package</th>
              <th>JS install</th>
              <th>CSS to load</th>
            </tr>
          </thead>
          <tbody>
            {plugins.map(p => (
              <tr key={p.pkg}>
                <td>{p.component}</td>
                <td><code>{p.pkg}</code></td>
                <td>
                  <span className={`badge ${p.install === 'Required' ? 'text-bg-warning' : 'text-bg-secondary'} fw-normal`}>
                    {p.install}
                  </span>
                </td>
                <td>{p.css === '—' ? <span className="text-secondary">—</span> : <code>{p.css}</code>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Loading plugin CSS</h2>
      <p>
        Load only the stylesheets for the components you use. From a CDN in your root
        layout:
      </p>
      <CodeBlock
        filename="app/layout.tsx"
        code={`<head>
  {/* ApexCharts (charts) */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/apexcharts@6.10.0/dist/apexcharts.css" />
  {/* Tabulator (datatable) — Bootstrap 5 theme */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tabulator-tables@6.5.2/dist/css/tabulator_bootstrap5.min.css" />
  {/* jsVectorMap (world map) */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsvectormap@1.7.0/dist/jsvectormap.min.css" />
</head>`}
      />
      <p>Or import them through your bundler:</p>
      <CodeBlock
        code={`import 'apexcharts/dist/apexcharts.css'
import 'quill/dist/quill.snow.css'
import 'flatpickr/dist/flatpickr.min.css'`}
      />

      <h2>Recommended extras</h2>
      <p>
        AdminLTE&apos;s sidebar uses{' '}
        <a href="https://kingsora.github.io/OverlayScrollbars/" target="_blank" rel="noopener noreferrer">OverlayScrollbars</a>{' '}
        for its custom scrollbar. It is optional — the sidebar still scrolls without it —
        but loading it matches the AdminLTE look:
      </p>
      <CodeBlock
        filename="app/layout.tsx"
        code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.16.0/styles/overlayscrollbars.min.css" />
{/* ...at end of <body>: */}
<script src="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.16.0/browser/overlayscrollbars.browser.es6.min.js" />`}
      />
    </DocsPage>
  )
}
