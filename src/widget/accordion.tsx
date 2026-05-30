'use client'

import { useState } from 'react'

export interface AccordionItem {
  title: React.ReactNode
  children: React.ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  /** Index open on first render; -1 for all closed. */
  defaultOpen?: number
  /** Allow multiple panels open at once. */
  alwaysOpen?: boolean
  /** Edge-to-edge style (`.accordion-flush`). */
  flush?: boolean
  id?: string
  className?: string
}

/**
 * Bootstrap accordion driven by React state (no Bootstrap JS / data-bs-toggle).
 */
export function Accordion({
  items,
  defaultOpen = 0,
  alwaysOpen = false,
  flush,
  id = 'accordion',
  className,
}: AccordionProps) {
  const [open, setOpen] = useState<number[]>(defaultOpen >= 0 ? [defaultOpen] : [])

  const toggle = (i: number) =>
    setOpen(prev =>
      prev.includes(i) ? prev.filter(x => x !== i) : alwaysOpen ? [...prev, i] : [i]
    )

  return (
    <div className={`accordion${flush ? ' accordion-flush' : ''}${className ? ` ${className}` : ''}`} id={id}>
      {items.map((item, i) => {
        const isOpen = open.includes(i)
        return (
          <div className="accordion-item" key={i}>
            <h2 className="accordion-header">
              <button
                type="button"
                className={`accordion-button${isOpen ? '' : ' collapsed'}`}
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
              >
                {item.title}
              </button>
            </h2>
            <div className={`accordion-collapse collapse${isOpen ? ' show' : ''}`}>
              <div className="accordion-body">{item.children}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
