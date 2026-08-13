import type { Metadata } from 'next'
import Script from 'next/script'
import '@adminlte/react/css'
import './globals.css'
import { SubpathLinks } from '@/components/subpath-links'
import { InertLinks } from '@/components/inert-links'

export const metadata: Metadata = {
  metadataBase: new URL('https://adminlte.io/themes/next-react'),
  title: {
    default: 'AdminLTE React — Bootstrap 5 admin dashboard',
    template: '%s · AdminLTE React',
  },
  description:
    'AdminLTE 4 + Bootstrap 5.3 admin dashboard components for React & Next.js (App Router / RSC) — 60+ demo pages, dark mode, and a ⌘K command palette.',
  applicationName: 'AdminLTE React',
  authors: [{ name: 'Colorlib', url: 'https://colorlib.com' }],
  openGraph: {
    title: 'AdminLTE React — Bootstrap 5 admin dashboard',
    description: 'AdminLTE 4 + Bootstrap 5.3 components for React & Next.js. 60+ demo pages, dark mode, ⌘K palette.',
    siteName: 'AdminLTE React',
    type: 'website',
    images: ['/assets/img/AdminLTEFullLogo.png'],
  },
  twitter: {
    card: 'summary',
    title: 'AdminLTE React — Bootstrap 5 admin dashboard',
    description: 'AdminLTE 4 + Bootstrap 5.3 components for React & Next.js. 60+ demo pages, dark mode, ⌘K palette.',
    images: ['/assets/img/AdminLTEFullLogo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Open the CDN connection early — every stylesheet below comes from it.
            The crossOrigin variant covers the CORS-mode font file requests. */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        {/* Source Sans 3 (AdminLTE's default typeface) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.3.0/index.css"
        />
        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        />
        {/* OverlayScrollbars CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.16.0/styles/overlayscrollbars.min.css"
        />
        {/* ApexCharts CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/apexcharts@6.8.0/dist/apexcharts.css"
        />
        {/* jsVectorMap CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/jsvectormap@1.7.0/dist/jsvectormap.css"
        />
        {/* Tabulator CSS (Bootstrap 5 theme) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tabulator-tables@6.5.2/dist/css/tabulator_bootstrap5.min.css"
        />
        {/* Quill (rich-text editor) — Snow theme */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css"
        />
        {/* Flatpickr (date picker) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.css"
        />
        {/* Tom Select (advanced select) — Bootstrap 5 theme */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tom-select@2.6.2/dist/css/tom-select.bootstrap5.min.css"
        />
      </head>
      <body>
        {children}
        <SubpathLinks />
        <InertLinks />
        {/* Bootstrap JS (the bundle build already includes Popper) */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        {/* OverlayScrollbars JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.16.0/browser/overlayscrollbars.browser.es6.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
