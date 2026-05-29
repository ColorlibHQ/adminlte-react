import type { DashboardLayoutProps } from '../types/layout'
import { cn } from '../lib/class-name'
import { SidebarProvider } from '../context/sidebar-context'
import { ColorModeProvider } from '../context/color-mode-context'
import { CommandPaletteProvider } from '../context/command-palette-context'
import { BodyClassSync } from '../context/body-class-sync'
import { LteBehaviors } from '../context/lte-behaviors'
import { Accessibility } from '../context/accessibility'
import { HtmlDir } from '../context/html-dir'
import { Topbar } from './topbar'
import { Sidebar } from './sidebar'
import { Footer } from './footer'
import { CommandPalette, flattenMenuToCommands } from '../widget/command-palette'

/**
 * Main dashboard layout component (RSC outer shell).
 * Computes static body classes server-side, nests client providers inside.
 */
export function DashboardLayout({
  menuItems,
  logo = <><b>Admin</b>LTE</>,
  logoHref = '/',
  user,
  sidebarTheme = 'dark',
  sidebarClass,
  sidebarBreakpoint = 'lg',
  sidebarMini = false,
  fixedHeader = false,
  fixedSidebar = false,
  fixedFooter = false,
  colorModeToggle = true,
  initialColorMode = 'auto',
  dir,
  enableSidebarPersistence = false,
  navbarClass,
  bodyClass,
  topbarStart,
  topbarEnd,
  footer,
  children,
}: DashboardLayoutProps) {
  // Compute static body classes server-side
  const breakpointValue = sidebarBreakpoint === 'lg' ? 992 : 768
  const staticBodyClasses = cn(
    'layout-fixed',
    `sidebar-expand-${sidebarBreakpoint}`,
    fixedHeader && 'fixed-header',
    fixedSidebar && 'fixed-sidebar',
    fixedFooter && 'fixed-footer',
    'bg-body-tertiary',
    bodyClass
  )

  const defaultSidebarClass = 'bg-body-secondary shadow'
  const commandItems = flattenMenuToCommands(menuItems)

  return (
    <ColorModeProvider initialMode={initialColorMode}>
      <SidebarProvider
        sidebarMini={sidebarMini}
        enablePersistence={enableSidebarPersistence}
        sidebarBreakpoint={breakpointValue}
      >
        <CommandPaletteProvider>
          <BodyClassSync staticClasses={staticBodyClasses} />
          <LteBehaviors />
          <Accessibility />
          {dir && <HtmlDir dir={dir} />}

          <div className="app-wrapper">
            <Topbar
              colorModeToggle={colorModeToggle}
              navbarClass={navbarClass}
              start={topbarStart}
              end={topbarEnd}
              user={user}
            />

            <Sidebar
              items={menuItems}
              logo={logo}
              logoHref={logoHref}
              theme={sidebarTheme}
              sidebarClass={sidebarClass || defaultSidebarClass}
            />

            <main className="app-main">{children}</main>

            <Footer>{footer}</Footer>
          </div>

          <CommandPalette items={commandItems} />
        </CommandPaletteProvider>
      </SidebarProvider>
    </ColorModeProvider>
  )
}
