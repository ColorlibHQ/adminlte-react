'use client'

import { useEffect, useRef } from 'react'

// FullCalendar v7 no longer bundles CSS in the JS, and the theme is a separate
// plugin — the "classic" theme reproduces the pre-v7 look. Core must load
// before the theme script (the theme registers itself on the global).
const FC_BASE = 'https://cdn.jsdelivr.net/npm/fullcalendar@7.0.2'
const FC_SCRIPTS = [`${FC_BASE}/all/global.min.js`, `${FC_BASE}/themes/classic/global.min.js`]
const FC_STYLES = [
  `${FC_BASE}/skeleton.min.css`,
  `${FC_BASE}/themes/classic/theme.min.css`,
  `${FC_BASE}/themes/classic/palette.min.css`,
]

function loadStylesheet(href: string) {
  if (document.querySelector(`link[href="${href}"]`)) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    let script = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null
    if (script) {
      if (script.dataset.loaded) return resolve()
      script.addEventListener('load', () => resolve())
      script.addEventListener('error', reject)
      return
    }
    script = document.createElement('script')
    script.src = src
    script.crossOrigin = 'anonymous'
    script.onload = () => {
      script!.dataset.loaded = 'true'
      resolve()
    }
    script.onerror = reject
    document.body.appendChild(script)
  })
}

async function loadFullCalendar(): Promise<any> {
  FC_STYLES.forEach(loadStylesheet)
  for (const src of FC_SCRIPTS) await loadScript(src)
  return (window as any).FullCalendar
}

const isoDate = (d: Date) => d.toISOString().slice(0, 10)

export function CalendarView() {
  const calRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<any>(null)

  useEffect(() => {
    let cancelled = false

    loadFullCalendar()
      .then((FullCalendar) => {
        if (cancelled || !calRef.current) return
        const externalEl = document.getElementById('external-events')
        const removeAfterDrop = document.getElementById('remove-after-drop') as HTMLInputElement | null

        if (externalEl) {
          // v7 global groups exports by plugin: Draggable lives under Interaction
          new FullCalendar.Interaction.Draggable(externalEl, {
            itemSelector: '.draggable-event',
            eventData: (el: HTMLElement) => ({
              title: el.textContent?.trim(),
              // v7 renamed backgroundColor/borderColor -> color
              color: el.dataset.color,
            }),
          })
        }

        const today = new Date()
        const offsetDay = (n: number) => {
          const d = new Date(today)
          d.setDate(today.getDate() + n)
          return isoDate(d)
        }

        const calendar = new FullCalendar.Calendar(calRef.current, {
          initialView: 'dayGridMonth',
          headerToolbar: {
            start: 'prev,next today',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          },
          height: 700,
          editable: true,
          droppable: true,
          dayMaxEvents: 3,
          drop: (info: any) => {
            if (removeAfterDrop?.checked) info.draggedEl.remove()
          },
          dateClick: (info: any) => {
            const title = prompt('Event title:')
            if (title) calendar.addEvent({ title, start: info.dateStr, allDay: info.allDay })
          },
          eventClick: (info: any) => {
            if (confirm(`Delete "${info.event.title}"?`)) info.event.remove()
          },
          events: [
            { title: 'Quarterly planning', start: offsetDay(-2), color: '#0d6efd' },
            { title: 'Onboarding session', start: offsetDay(1), color: '#198754' },
            { title: 'Design review', start: offsetDay(3), end: offsetDay(4), color: '#ffc107', contrastColor: '#000' },
            { title: 'Release v2.5', start: offsetDay(7), color: '#dc3545' },
            { title: 'All-hands', start: offsetDay(10), color: '#6f42c1' },
          ],
        })
        instanceRef.current = calendar
        calendar.render()
      })
      .catch((err) => console.error('FullCalendar load error:', err))

    return () => {
      cancelled = true
      if (instanceRef.current) {
        instanceRef.current.destroy()
        instanceRef.current = null
      }
    }
  }, [])

  return <div id="calendar" ref={calRef}></div>
}
