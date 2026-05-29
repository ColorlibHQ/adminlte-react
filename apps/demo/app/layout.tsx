import type { Metadata } from 'next'
import 'adminlte-react/css'
import './globals.css'

export const metadata: Metadata = {
  title: 'AdminLTE React Demo',
  description: 'AdminLTE 4 React/Next.js component library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Source Sans 3 (AdminLTE's default typeface) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.0.12/index.css"
        />
        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        />
        {/* OverlayScrollbars CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/styles/overlayscrollbars.min.css"
        />
        {/* ApexCharts CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.css"
        />
        {/* jsVectorMap CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/css/jsvectormap.min.css"
        />
        {/* Tabulator CSS (Bootstrap 5 theme) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tabulator-tables@6.4.0/dist/css/tabulator_bootstrap5.min.css"
        />
      </head>
      <body>
        {children}
        {/* Popper JS */}
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
        {/* Bootstrap JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
        {/* OverlayScrollbars JS */}
        <script src="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/browser/overlayscrollbars.browser.es6.min.js"></script>
      </body>
    </html>
  )
}
