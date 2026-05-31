'use client'

import { useEffect, useRef } from 'react'

export function KanbanBoard() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    let cancelled = false
    const instances: any[] = []

    const updateLaneCount = (laneEl: Element) => {
      const lane = laneEl.closest('.kanban-lane')
      const badge = lane?.querySelector('.kanban-lane-header .badge')
      if (badge) badge.textContent = String(laneEl.children.length)
    }

    const addHandlers: Array<{ el: Element; fn: () => void }> = []

    import('sortablejs').then(({ default: Sortable }) => {
      if (cancelled) return
      root.querySelectorAll('.kanban-cards').forEach((el) => {
        instances.push(
          new Sortable(el as HTMLElement, {
            group: 'kanban',
            animation: 150,
            ghostClass: 'sortable-ghost',
            dragClass: 'sortable-drag',
            onEnd: (evt: any) => {
              updateLaneCount(evt.from)
              if (evt.from !== evt.to) updateLaneCount(evt.to)
            },
          })
        )
      })

      root.querySelectorAll('[data-add-card-for]').forEach((btn) => {
        const fn = () => {
          const title = prompt('Card title:')
          if (!title) return
          const laneId = (btn as HTMLElement).dataset.addCardFor
          const lane = root.querySelector(`.kanban-cards[data-lane-id="${laneId}"]`)
          if (!lane) return
          const card = document.createElement('article')
          card.className = 'kanban-card'
          const safe = title.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' } as Record<string, string>)[c])
          card.innerHTML =
            '<p class="fw-semibold mb-1 small">' + safe + '</p>' +
            '<div class="d-flex justify-content-between align-items-center">' +
            '<div class="kanban-assignees"><span class="kanban-assignee" title="You">YO</span></div>' +
            '<small class="text-secondary">just now</small></div>'
          lane.append(card)
          updateLaneCount(lane)
        }
        btn.addEventListener('click', fn)
        addHandlers.push({ el: btn, fn })
      })
    })

    return () => {
      cancelled = true
      instances.forEach((s) => s.destroy())
      addHandlers.forEach(({ el, fn }) => el.removeEventListener('click', fn))
    }
  }, [])

  return (
    <div ref={ref}>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <p className="text-secondary mb-0 small">
                          Drag cards between lanes. Try dropping &ldquo;In progress&rdquo; items into
                          &ldquo;Done&rdquo;.
                        </p>
                      </div>
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-secondary" type="button">
                          <i className="bi bi-funnel me-1" aria-hidden="true"></i>Filter
                        </button>
                        <button className="btn btn-outline-secondary" type="button">
                          <i className="bi bi-sort-down me-1" aria-hidden="true"></i>Sort
                        </button>
                        <button className="btn btn-primary" type="button">
                          <i className="bi bi-plus-lg me-1" aria-hidden="true"></i>Add lane
                        </button>
                      </div>
                    </div>

                    <div className="kanban-board" id="kanban-board">
                      <div className="kanban-lane" data-lane-id="backlog">
                        <div className="kanban-lane-header">
                          <h2 className="h6 mb-0 d-flex align-items-center gap-2">
                            <span className="badge text-bg-secondary" style={{ fontSize: '0.65rem' }}> 3 </span>
                            Backlog
                          </h2>
                          <button
                            className="btn btn-sm btn-link text-secondary p-0"
                            type="button"
                            title="Lane actions"
                            aria-label="Lane actions"
                          >
                            <i className="bi bi-three-dots" aria-hidden="true"></i>
                          </button>
                        </div>
                        <div className="kanban-cards" data-lane-id="backlog">
                          <article className="kanban-card">
                            <span className="badge text-bg-secondary mb-2"> tech debt </span>
                            <p className="fw-semibold mb-1 small">Audit unused SCSS variables</p>
                            <p className="text-secondary small mb-2">
                              Identify deprecated Bootstrap 5.3.4 variables and add comments.
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="kanban-assignees">
                                <span className="kanban-assignee" title="DM"> DM </span>
                              </div>
                            </div>
                          </article>
                          <article className="kanban-card">
                            <span className="badge text-bg-info mb-2"> docs </span>
                            <p className="fw-semibold mb-1 small">Document hreflang setup</p>

                            <div className="d-flex justify-content-between align-items-center">
                              <div className="kanban-assignees">
                                <span className="kanban-assignee" title="JD"> JD </span>
                              </div>
                            </div>
                          </article>
                          <article className="kanban-card">
                            <span className="badge text-bg-danger mb-2"> bug </span>
                            <p className="fw-semibold mb-1 small">Investigate Safari iOS calendar drag bug</p>

                            <div className="d-flex justify-content-between align-items-center">
                              <div className="kanban-assignees">
                                <span className="kanban-assignee" title="OB"> OB </span
                                ><span className="kanban-assignee" title="MK"> MK </span>
                              </div>
                              <small className="text-secondary">
                                <i className="bi bi-calendar-event me-1" aria-hidden="true"></i>
                                May 28
                              </small>
                            </div>
                          </article>
                        </div>
                        <button className="kanban-add-card mt-2" type="button" data-add-card-for="backlog">
                          <i className="bi bi-plus-lg me-1" aria-hidden="true"></i>
                          Add card
                        </button>
                      </div>
                      <div className="kanban-lane" data-lane-id="todo">
                        <div className="kanban-lane-header">
                          <h2 className="h6 mb-0 d-flex align-items-center gap-2">
                            <span className="badge text-bg-primary" style={{ fontSize: '0.65rem' }}> 2 </span>
                            To do
                          </h2>
                          <button
                            className="btn btn-sm btn-link text-secondary p-0"
                            type="button"
                            title="Lane actions"
                            aria-label="Lane actions"
                          >
                            <i className="bi bi-three-dots" aria-hidden="true"></i>
                          </button>
                        </div>
                        <div className="kanban-cards" data-lane-id="todo">
                          <article className="kanban-card">
                            <span className="badge text-bg-primary mb-2"> feature </span>
                            <p className="fw-semibold mb-1 small">Add Tom Select recommended-integration doc</p>
                            <p className="text-secondary small mb-2">
                              Cover install, theming, single + multi select examples.
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="kanban-assignees">
                                <span className="kanban-assignee" title="JD"> JD </span>
                              </div>
                              <small className="text-secondary">
                                <i className="bi bi-calendar-event me-1" aria-hidden="true"></i>
                                May 24
                              </small>
                            </div>
                          </article>
                          <article className="kanban-card">
                            <span className="badge text-bg-primary mb-2"> feature </span>
                            <p className="fw-semibold mb-1 small">Wire up profile page avatar upload</p>

                            <div className="d-flex justify-content-between align-items-center">
                              <div className="kanban-assignees">
                                <span className="kanban-assignee" title="EM"> EM </span>
                              </div>
                            </div>
                          </article>
                        </div>
                        <button className="kanban-add-card mt-2" type="button" data-add-card-for="todo">
                          <i className="bi bi-plus-lg me-1" aria-hidden="true"></i>
                          Add card
                        </button>
                      </div>
                      <div className="kanban-lane" data-lane-id="in-progress">
                        <div className="kanban-lane-header">
                          <h2 className="h6 mb-0 d-flex align-items-center gap-2">
                            <span className="badge text-bg-warning" style={{ fontSize: '0.65rem' }}> 2 </span>
                            In progress
                          </h2>
                          <button
                            className="btn btn-sm btn-link text-secondary p-0"
                            type="button"
                            title="Lane actions"
                            aria-label="Lane actions"
                          >
                            <i className="bi bi-three-dots" aria-hidden="true"></i>
                          </button>
                        </div>
                        <div className="kanban-cards" data-lane-id="in-progress">
                          <article className="kanban-card">
                            <span className="badge text-bg-primary mb-2"> feature </span>
                            <p className="fw-semibold mb-1 small">Build kanban board demo</p>
                            <p className="text-secondary small mb-2">
                              SortableJS, draggable between lanes, MIT license.
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="kanban-assignees">
                                <span className="kanban-assignee" title="JD"> JD </span>
                              </div>
                              <small className="text-secondary">
                                <i className="bi bi-calendar-event me-1" aria-hidden="true"></i>
                                Today
                              </small>
                            </div>
                          </article>
                          <article className="kanban-card">
                            <span className="badge text-bg-warning mb-2"> qa </span>
                            <p className="fw-semibold mb-1 small">Tabulator + FullCalendar integration QA</p>

                            <div className="d-flex justify-content-between align-items-center">
                              <div className="kanban-assignees">
                                <span className="kanban-assignee" title="OB"> OB </span>
                              </div>
                            </div>
                          </article>
                        </div>
                        <button className="kanban-add-card mt-2" type="button" data-add-card-for="in-progress">
                          <i className="bi bi-plus-lg me-1" aria-hidden="true"></i>
                          Add card
                        </button>
                      </div>
                      <div className="kanban-lane" data-lane-id="done">
                        <div className="kanban-lane-header">
                          <h2 className="h6 mb-0 d-flex align-items-center gap-2">
                            <span className="badge text-bg-success" style={{ fontSize: '0.65rem' }}> 3 </span>
                            Done
                          </h2>
                          <button
                            className="btn btn-sm btn-link text-secondary p-0"
                            type="button"
                            title="Lane actions"
                            aria-label="Lane actions"
                          >
                            <i className="bi bi-three-dots" aria-hidden="true"></i>
                          </button>
                        </div>
                        <div className="kanban-cards" data-lane-id="done">
                          <article className="kanban-card">
                            <span className="badge text-bg-primary mb-2"> feature </span>
                            <p className="fw-semibold mb-1 small">Upgrade to Bootstrap 5.3.8</p>

                            <div className="d-flex justify-content-between align-items-center">
                              <div className="kanban-assignees">
                                <span className="kanban-assignee" title="DM"> DM </span>
                              </div>
                            </div>
                          </article>
                          <article className="kanban-card">
                            <span className="badge text-bg-primary mb-2"> feature </span>
                            <p className="fw-semibold mb-1 small">Ship 8 Tier-1 page templates</p>
                            <p className="text-secondary small mb-2">
                              Profile, settings, invoice, pricing, FAQ, 404/500/maintenance.
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="kanban-assignees">
                                <span className="kanban-assignee" title="JD"> JD </span
                                ><span className="kanban-assignee" title="OB"> OB </span>
                              </div>
                            </div>
                          </article>
                          <article className="kanban-card">
                            <span className="badge text-bg-secondary mb-2"> tech debt </span>
                            <p className="fw-semibold mb-1 small">Drop dead eslint-config-xo deps</p>

                            <div className="d-flex justify-content-between align-items-center">
                              <div className="kanban-assignees">
                                <span className="kanban-assignee" title="DM"> DM </span>
                              </div>
                            </div>
                          </article>
                        </div>
                        <button className="kanban-add-card mt-2" type="button" data-add-card-for="done">
                          <i className="bi bi-plus-lg me-1" aria-hidden="true"></i>
                          Add card
                        </button>
                      </div>
                    </div>
                  
    </div>
  )
}
