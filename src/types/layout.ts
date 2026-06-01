import type React from 'react'
import type { BreakpointSize, ColorMode } from './theme'
import type { MenuNode } from './menu'
import type { LinkComponent } from '../context/link-context'

/**
 * The signed-in user shown in the topbar user menu.
 */
export interface TopbarUser {
  name: string
  image: string
  role?: string
  memberSince?: string
}

/**
 * Props for the DashboardLayout component.
 */
export interface DashboardLayoutProps {
  menuItems: MenuNode[]
  logo?: React.ReactNode
  logoHref?: string
  user?: TopbarUser
  sidebarTheme?: 'light' | 'dark'
  sidebarClass?: string
  sidebarBreakpoint?: BreakpointSize
  sidebarMini?: boolean
  fixedHeader?: boolean
  fixedSidebar?: boolean
  fixedFooter?: boolean
  colorModeToggle?: boolean
  initialColorMode?: ColorMode
  dir?: 'ltr' | 'rtl'
  enableSidebarPersistence?: boolean
  navbarClass?: string
  bodyClass?: string
  topbarStart?: React.ReactNode
  topbarEnd?: React.ReactNode
  footer?: React.ReactNode
  /**
   * Router link to use for sidebar navigation (e.g. an adapter around `next/link`).
   * Enables client-side navigation; defaults to a plain `<a>` (full-page navigation).
   */
  linkComponent?: LinkComponent
  /** Optional sidebar footer link, e.g. to your documentation. Hidden when unset. */
  docsHref?: string
  /** Label for the sidebar footer link (default "View documentation"). */
  docsLabel?: string
  children: React.ReactNode
}

/**
 * Props for the AuthLayout component (login/register).
 */
export interface AuthLayoutProps {
  authType?: 'login' | 'register'
  logo?: React.ReactNode
  logoHref?: string
  children: React.ReactNode
}

/**
 * Props for the AppContent wrapper component.
 */
export interface AppContentProps {
  header?: React.ReactNode
  breadcrumbs?: Array<{ label: string; href?: string }>
  title?: string
  fluid?: boolean
  children: React.ReactNode
}
