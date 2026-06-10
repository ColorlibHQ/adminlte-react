'use client'

import { useState } from 'react'
import { AppContent, Card } from '@colorlib/adminlte-react'

const themeBg = [
  'bg-primary',
  'bg-primary-subtle',
  'bg-secondary',
  'bg-secondary-subtle',
  'bg-success',
  'bg-success-subtle',
  'bg-danger',
  'bg-danger-subtle',
  'bg-warning',
  'bg-warning-subtle',
  'bg-info',
  'bg-info-subtle',
  'bg-light',
  'bg-light-subtle',
  'bg-dark',
  'bg-dark-subtle',
  'bg-body-secondary',
  'bg-body-tertiary',
  'bg-body',
  'bg-black',
  'bg-white',
  'bg-transparent',
]

const colorFooter = (
  <>
    Check more color in{' '}
    <a
      href="https://getbootstrap.com/docs/5.3/utilities/background/"
      target="_blank"
      rel="noreferrer"
      className="link-primary"
    >
      Bootstrap Background Colors
    </a>
  </>
)

interface ThemeSectionProps {
  title: string
  modeId: string
  modeLabel: string
  colorId: string
  colorLabel: string
  element: 'aside' | 'nav' | 'footer'
}

function ThemeSection({
  title,
  modeId,
  modeLabel,
  colorId,
  colorLabel,
  element,
}: ThemeSectionProps) {
  const [colorMode, setColorMode] = useState('')
  const [bg, setBg] = useState('')

  let code = ''
  if (element === 'aside') {
    code = `<aside class="app-sidebar ${bg}" data-bs-theme="${colorMode}">...</aside>`
  } else if (element === 'nav') {
    code = `<nav class="app-header navbar navbar-expand ${bg}" data-bs-theme="${colorMode}">...</nav>`
  } else {
    code = `<footer class="app-footer ${bg}" data-bs-theme="${colorMode}">...</footer>`
  }

  return (
    <Card title={title} collapsible removable footer={colorFooter}>
      {/* begin::Row */}
      <div className="row">
        {/* begin::Col */}
        <div className="col-md-3">
          <select
            id={modeId}
            className="form-select form-select-lg"
            aria-label={modeLabel}
            value={colorMode}
            onChange={(e) => setColorMode(e.target.value)}
          >
            <option value="">---Select---</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
        {/* end::Col */}
        {/* begin::Col */}
        <div className="col-md-3">
          <select
            id={colorId}
            className="form-select form-select-lg"
            aria-label={colorLabel}
            value={bg}
            onChange={(e) => setBg(e.target.value)}
          >
            <option value="">---Select---</option>
            {themeBg.map((item) => (
              <option key={item} value={item} className={`text-${item}`}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* end::Col */}
        {/* begin::Col */}
        <div className="col-md-6">
          <div id={`${element}-color-code`} className="w-100">
            {(colorMode || bg) && (
              <pre>
                <code className="language-html">{code}</code>
              </pre>
            )}
          </div>
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
    </Card>
  )
}

export default function Page() {
  return (
    <AppContent
      title="Theme Customize"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Theme Customize' }]}
    >
      {/* begin::Row */}
      <div className="row">
        {/* begin::Col */}
        <div className="col-12">
          <ThemeSection
            title="Sidebar Theme"
            modeId="sidebar-color-modes"
            modeLabel="Sidebar Color Mode Select"
            colorId="sidebar-color"
            colorLabel="Sidebar Color Select"
            element="aside"
          />

          <div className="mt-4">
            <ThemeSection
              title="Navbar Theme"
              modeId="navbar-color-modes"
              modeLabel="Navbar Color Mode Select"
              colorId="navbar-color"
              colorLabel="Navbar Color Select"
              element="nav"
            />
          </div>

          <div className="mt-4">
            <ThemeSection
              title="Footer Theme"
              modeId="footer-color-modes"
              modeLabel="Footer Color Mode Select"
              colorId="footer-color"
              colorLabel="Footer Color Select"
              element="footer"
            />
          </div>
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
    </AppContent>
  )
}
