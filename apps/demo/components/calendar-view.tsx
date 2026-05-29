'use client'

import { useEffect, useRef } from 'react'

const FC_SRC = 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.20/index.global.min.js'

function loadFullCalendar(): Promise<any> {
  return new Promise((resolve, reject) => {
    const w = window as any
    if (w.FullCalendar) return resolve(w.FullCalendar)
    let script = document.querySelector(`script[src="${FC_SRC}"]`) as HTMLScriptElement | null
    if (script) {
      script.addEventListener('load', () => resolve((window as any).FullCalendar))
      script.addEventListener('error', reject)
      return
    }
    script = document.createElement('script')
    script.src = FC_SRC
    script.crossOrigin = 'anonymous'
    script.onload = () => resolve((window as any).FullCalendar)
    script.onerror = reject
    document.body.appendChild(script)
  })
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
          new FullCalendar.Draggable(externalEl, {
            itemSelector: '.draggable-event',
            eventData: (el: HTMLElement) => ({
              title: el.textContent?.trim(),
              backgroundColor: el.dataset.color,
              borderColor: el.dataset.color,
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
            { title: 'Quarterly planning', start: offsetDay(-2), backgroundColor: '#0d6efd', borderColor: '#0d6efd' },
            { title: 'Onboarding session', start: offsetDay(1), backgroundColor: '#198754', borderColor: '#198754' },
            { title: 'Design review', start: offsetDay(3), end: offsetDay(4), backgroundColor: '#ffc107', borderColor: '#ffc107', textColor: '#000' },
            { title: 'Release v2.5', start: offsetDay(7), backgroundColor: '#dc3545', borderColor: '#dc3545' },
            { title: 'All-hands', start: offsetDay(10), backgroundColor: '#6f42c1', borderColor: '#6f42c1' },
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
