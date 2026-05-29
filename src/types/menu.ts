import type { BootstrapTheme } from './theme'

/**
 * Menu header item (non-interactive section label).
 */
export interface MenuHeader {
  type: 'header'
  text: string
}

/**
 * Menu link item (clickable, can have children).
 */
export interface MenuItem {
  type: 'item'
  text: string
  href: string
  icon?: string // Bootstrap Icons class, e.g. 'bi bi-speedometer'
  iconColor?: BootstrapTheme
  badge?: string | number
  badgeColor?: BootstrapTheme
  target?: '_blank' | '_self'
}

/**
 * Menu group item (collapsible submenu).
 */
export interface MenuGroup {
  type: 'group'
  text: string
  icon?: string // Bootstrap Icons class
  iconColor?: BootstrapTheme
  badge?: string | number
  badgeColor?: BootstrapTheme
  children: MenuNode[]
}

/**
 * Discriminated union of all menu node types.
 */
export type MenuNode = MenuHeader | MenuItem | MenuGroup
