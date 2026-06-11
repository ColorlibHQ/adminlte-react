import type { MenuNode } from '../types/menu'

export interface CommandItem {
  label: string
  href: string
  icon?: string
  section?: string
}

/**
 * Flattens a MenuNode tree into a flat list of navigable commands.
 * Skips placeholder links (`href === '#'`) and de-duplicates by href.
 *
 * Lives outside the 'use client' command-palette module so Server Components
 * (e.g. DashboardLayout) can call it during server render.
 */
export function flattenMenuToCommands(nodes: MenuNode[]): CommandItem[] {
  const out: CommandItem[] = []
  const walk = (list: MenuNode[], section?: string) => {
    let sec = section
    for (const node of list) {
      if (node.type === 'header') {
        sec = node.text
      } else if (node.type === 'item') {
        if (node.href && node.href !== '#') {
          out.push({ label: node.text, href: node.href, icon: node.icon, section: sec })
        }
      } else if (node.type === 'group') {
        walk(node.children, node.text)
      }
    }
  }
  walk(nodes)
  const seen = new Set<string>()
  return out.filter(c => (seen.has(c.href) ? false : (seen.add(c.href), true)))
}
