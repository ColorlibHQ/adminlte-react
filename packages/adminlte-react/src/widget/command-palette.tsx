'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCommandPalette } from '../context/command-palette-context'
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
  return out.filter((c) => (seen.has(c.href) ? false : (seen.add(c.href), true)))
}

export interface CommandPaletteProps {
  items: CommandItem[]
  placeholder?: string
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 1080,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingTop: '12vh',
  background: 'rgba(0, 0, 0, 0.5)',
}

const panelStyle: React.CSSProperties = {
  width: 'min(640px, 92vw)',
  maxHeight: '70vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}

const listStyle: React.CSSProperties = {
  overflowY: 'auto',
}

export function CommandPalette({ items, placeholder = 'Search pages…' }: CommandPaletteProps) {
  const ctx = useCommandPalette()
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)

  const isOpen = ctx?.isOpen ?? false

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter(
      (i) => i.label.toLowerCase().includes(q) || (i.section?.toLowerCase().includes(q) ?? false)
    )
  }, [query, items])

  // Reset + focus when opened
  useEffect(() => {
    if (!isOpen) return
    setQuery('')
    setActive(0)
    const t = setTimeout(() => inputRef.current?.focus(), 20)
    return () => clearTimeout(t)
  }, [isOpen])

  // Keep active index in range as results change
  useEffect(() => {
    setActive(0)
  }, [query])

  if (!isOpen || !ctx) return null

  const go = (item?: CommandItem) => {
    const target = item ?? results[active]
    if (!target) return
    ctx.close()
    router.push(target.href)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      go()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      ctx.close()
    }
  }

  return (
    <div
      style={overlayStyle}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) ctx.close()
      }}
    >
      <div className="card shadow-lg" style={panelStyle} role="dialog" aria-modal="true" aria-label="Command palette">
        <div className="input-group input-group-lg border-bottom">
          <span className="input-group-text bg-body border-0">
            <i className="bi bi-search"></i>
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            className="form-control border-0 shadow-none"
            placeholder={placeholder}
            aria-label="Search"
          />
        </div>

        <div className="list-group list-group-flush" style={listStyle}>
          {results.length === 0 && (
            <div className="text-secondary text-center py-4 small">No results for “{query}”</div>
          )}
          {results.map((item, idx) => (
            <button
              key={item.href}
              type="button"
              className={`list-group-item list-group-item-action d-flex align-items-center gap-2 ${idx === active ? 'active' : ''}`}
              onMouseEnter={() => setActive(idx)}
              onClick={() => go(item)}
            >
              <i className={`bi ${item.icon || 'bi-arrow-return-right'}`}></i>
              <span className="flex-grow-1 text-start">{item.label}</span>
              {item.section && (
                <span className={`badge fw-normal ${idx === active ? 'text-bg-light' : 'text-bg-secondary'}`}>
                  {item.section}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="card-footer d-flex justify-content-between align-items-center text-secondary small py-2">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> navigate
          </span>
          <span>
            <kbd>↵</kbd> open &middot; <kbd>esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  )
}
