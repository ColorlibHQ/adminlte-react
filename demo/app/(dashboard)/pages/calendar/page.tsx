import { AppContent } from '@colorlib/adminlte-react'
import { CalendarView } from '@/components/calendar-view'

export const metadata = { title: "Calendar" }

export default function CalendarPage() {
  return (
    <AppContent
      title="Calendar"
      breadcrumbs={[
        { label: 'Home', href: '#' },
        { label: 'Calendar' },
      ]}
    >
      <div className="row g-3">
        {/* Sidebar: draggable events */}
        <div className="col-lg-3">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Draggable events</h3>
            </div>
            <div className="card-body">
              <p className="text-secondary small mb-3">
                Drag an event to the calendar to schedule it.
              </p>
              <div id="external-events">
                <div className="draggable-event badge text-bg-primary p-2 mb-2 d-block text-start" data-color="#0d6efd">
                  <i className="bi bi-grip-vertical me-1" aria-hidden="true"></i>
                  Team standup
                </div>
                <div className="draggable-event badge text-bg-success p-2 mb-2 d-block text-start" data-color="#198754">
                  <i className="bi bi-grip-vertical me-1" aria-hidden="true"></i>
                  Customer call
                </div>
                <div className="draggable-event badge text-bg-warning p-2 mb-2 d-block text-start" data-color="#ffc107">
                  <i className="bi bi-grip-vertical me-1" aria-hidden="true"></i>
                  Design review
                </div>
                <div className="draggable-event badge text-bg-info p-2 mb-2 d-block text-start" data-color="#0dcaf0">
                  <i className="bi bi-grip-vertical me-1" aria-hidden="true"></i>
                  1:1 with manager
                </div>
                <div className="draggable-event badge text-bg-danger p-2 d-block text-start" data-color="#dc3545">
                  <i className="bi bi-grip-vertical me-1" aria-hidden="true"></i>
                  Release window
                </div>
              </div>
              <hr />
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="remove-after-drop" />
                <label className="form-check-label small" htmlFor="remove-after-drop">
                  Remove from list after dropping
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Calendar */}
        <div className="col-lg-9">
          <div className="card">
            <div className="card-body">
              <CalendarView />
            </div>
            <div className="card-footer text-secondary small">
              Powered by{' '}
              <a href="https://fullcalendar.io/" target="_blank" rel="noopener">
                FullCalendar 6
              </a>{' '}
              &mdash; MIT licensed, jQuery-free.
            </div>
          </div>
        </div>
      </div>
    </AppContent>
  )
}
