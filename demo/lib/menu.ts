import type { MenuNode } from 'adminlte-react'

export const menuItems: MenuNode[] = [
  {
    type: 'group',
    text: 'Dashboard',
    icon: 'bi-speedometer',
    children: [
      { type: 'item', text: 'Dashboard v1', href: '/', icon: 'bi-circle' },
      { type: 'item', text: 'Dashboard v2', href: '/index2', icon: 'bi-circle' },
      { type: 'item', text: 'Dashboard v3', href: '/index3', icon: 'bi-circle' },
    ],
  },
  {
    type: 'item',
    text: 'Theme Generate',
    href: '/generate/theme',
    icon: 'bi-palette',
  },
  {
    type: 'group',
    text: 'Widgets',
    icon: 'bi-box-seam-fill',
    children: [
      { type: 'item', text: 'Small Box', href: '/widgets/small-box', icon: 'bi-circle' },
      { type: 'item', text: 'info Box', href: '/widgets/info-box', icon: 'bi-circle' },
      { type: 'item', text: 'Cards', href: '/widgets/cards', icon: 'bi-circle' },
    ],
  },
  {
    type: 'group',
    text: 'Layout Options',
    icon: 'bi-clipboard-fill',
    badge: '7',
    badgeColor: 'secondary',
    children: [
      { type: 'item', text: 'Default Sidebar', href: '/layout/unfixed-sidebar', icon: 'bi-circle' },
      { type: 'item', text: 'Fixed Sidebar', href: '/layout/fixed-sidebar', icon: 'bi-circle' },
      { type: 'item', text: 'Fixed Header', href: '/layout/fixed-header', icon: 'bi-circle' },
      { type: 'item', text: 'Fixed Footer', href: '/layout/fixed-footer', icon: 'bi-circle' },
      { type: 'item', text: 'Fixed Complete', href: '/layout/fixed-complete', icon: 'bi-circle' },
      { type: 'item', text: 'Layout + Custom Area', href: '/layout/layout-custom-area', icon: 'bi-circle' },
      { type: 'item', text: 'Sidebar Mini', href: '/layout/sidebar-mini', icon: 'bi-circle' },
      { type: 'item', text: 'Sidebar Mini + Collapsed', href: '/layout/collapsed-sidebar', icon: 'bi-circle' },
      { type: 'item', text: 'Sidebar Mini + Collapsed + No Hover', href: '/layout/collapsed-sidebar-without-hover', icon: 'bi-circle' },
      { type: 'item', text: 'Sidebar Mini + Logo Switch', href: '/layout/logo-switch', icon: 'bi-circle' },
      { type: 'item', text: 'Layout RTL', href: '/layout/layout-rtl', icon: 'bi-circle' },
    ],
  },
  {
    type: 'group',
    text: 'UI Elements',
    icon: 'bi-tree-fill',
    children: [
      { type: 'item', text: 'General', href: '/UI/general', icon: 'bi-circle' },
      { type: 'item', text: 'Icons', href: '/UI/icons', icon: 'bi-circle' },
      { type: 'item', text: 'Timeline', href: '/UI/timeline', icon: 'bi-circle' },
    ],
  },
  {
    type: 'group',
    text: 'Mailbox',
    icon: 'bi-envelope',
    children: [
      { type: 'item', text: 'Inbox', href: '/mailbox/inbox', icon: 'bi-circle' },
      { type: 'item', text: 'Read Message', href: '/mailbox/read', icon: 'bi-circle' },
      { type: 'item', text: 'Compose', href: '/mailbox/compose', icon: 'bi-circle' },
    ],
  },
  {
    type: 'group',
    text: 'Forms',
    icon: 'bi-pencil-square',
    children: [
      { type: 'item', text: 'Elements', href: '/forms/elements', icon: 'bi-circle' },
      { type: 'item', text: 'Layout', href: '/forms/layout', icon: 'bi-circle' },
      { type: 'item', text: 'Validation', href: '/forms/validation', icon: 'bi-circle' },
      { type: 'item', text: 'Wizard', href: '/forms/wizard', icon: 'bi-circle' },
    ],
  },
  {
    type: 'group',
    text: 'Tables',
    icon: 'bi-table',
    children: [
      { type: 'item', text: 'Simple Tables', href: '/tables/simple', icon: 'bi-circle' },
      { type: 'item', text: 'Data Tables', href: '/tables/data', icon: 'bi-circle' },
    ],
  },
  {
    type: 'header',
    text: 'PAGES',
  },
  {
    type: 'group',
    text: 'Pages',
    icon: 'bi-file-earmark-text',
    children: [
      { type: 'item', text: 'Profile', href: '/pages/profile', icon: 'bi-circle' },
      { type: 'item', text: 'Settings', href: '/pages/settings', icon: 'bi-circle' },
      { type: 'item', text: 'Invoice', href: '/pages/invoice', icon: 'bi-circle' },
      { type: 'item', text: 'Calendar', href: '/pages/calendar', icon: 'bi-circle' },
      { type: 'item', text: 'Kanban', href: '/pages/kanban', icon: 'bi-circle' },
      { type: 'item', text: 'Chat', href: '/pages/chat', icon: 'bi-circle' },
      { type: 'item', text: 'File Manager', href: '/pages/file-manager', icon: 'bi-circle' },
      { type: 'item', text: 'Projects', href: '/pages/projects', icon: 'bi-circle' },
      { type: 'item', text: 'Pricing', href: '/pages/pricing', icon: 'bi-circle' },
      { type: 'item', text: 'FAQ', href: '/pages/faq', icon: 'bi-circle' },
      {
        type: 'group',
        text: 'Error',
        icon: 'bi-circle',
        children: [
          { type: 'item', text: '404', href: '/pages/404', icon: 'bi-circle' },
          { type: 'item', text: '500', href: '/pages/500', icon: 'bi-circle' },
          { type: 'item', text: 'Maintenance', href: '/pages/maintenance', icon: 'bi-circle' },
        ],
      },
    ],
  },
  {
    type: 'header',
    text: 'EXAMPLES',
  },
  {
    type: 'group',
    text: 'Auth',
    icon: 'bi-box-arrow-in-right',
    children: [
      {
        type: 'group',
        text: 'Version 1',
        icon: 'bi-circle',
        children: [
          { type: 'item', text: 'Login', href: '/examples/login', icon: 'bi-circle' },
          { type: 'item', text: 'Register', href: '/examples/register', icon: 'bi-circle' },
        ],
      },
      {
        type: 'group',
        text: 'Version 2',
        icon: 'bi-circle',
        children: [
          { type: 'item', text: 'Login', href: '/examples/login-v2', icon: 'bi-circle' },
          { type: 'item', text: 'Register', href: '/examples/register-v2', icon: 'bi-circle' },
        ],
      },
      { type: 'item', text: 'Lockscreen', href: '/examples/lockscreen', icon: 'bi-circle' },
    ],
  },
  {
    type: 'header',
    text: 'MULTI LEVEL EXAMPLE',
  },
  {
    type: 'item',
    text: 'Level 1',
    href: '#',
    icon: 'bi-circle-fill',
  },
  {
    type: 'group',
    text: 'Level 1',
    icon: 'bi-circle-fill',
    children: [
      { type: 'item', text: 'Level 2', href: '#', icon: 'bi-circle' },
      {
        type: 'group',
        text: 'Level 2',
        icon: 'bi-circle',
        children: [
          { type: 'item', text: 'Level 3', href: '#', icon: 'bi-record-circle-fill' },
          { type: 'item', text: 'Level 3', href: '#', icon: 'bi-record-circle-fill' },
          { type: 'item', text: 'Level 3', href: '#', icon: 'bi-record-circle-fill' },
        ],
      },
      { type: 'item', text: 'Level 2', href: '#', icon: 'bi-circle' },
    ],
  },
  {
    type: 'item',
    text: 'Level 1',
    href: '#',
    icon: 'bi-circle-fill',
  },
  {
    type: 'header',
    text: 'LABELS',
  },
  {
    type: 'item',
    text: 'Important',
    href: '#',
    icon: 'bi-circle',
    iconColor: 'danger',
  },
  {
    type: 'item',
    text: 'Warning',
    href: '#',
    icon: 'bi-circle',
    iconColor: 'warning',
  },
  {
    type: 'item',
    text: 'Informational',
    href: '#',
    icon: 'bi-circle',
    iconColor: 'info',
  },
]
