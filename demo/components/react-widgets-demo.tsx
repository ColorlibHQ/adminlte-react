'use client'

import { useState } from 'react'
import { Accordion, Tabs, Toast, Tooltip, Button } from '@adminlte/react'

/** Live showcase of the typed React components (Accordion, Tabs, Toast, Tooltip). */
export function ReactWidgetsDemo() {
  const [showToast, setShowToast] = useState(false)

  return (
    <div className="row g-4">
      <div className="col-lg-6">
        <div className="card card-primary card-outline h-100">
          <div className="card-header">
            <div className="card-title">Accordion</div>
          </div>
          <div className="card-body">
            <Accordion
              items={[
                { title: 'What is AdminLTE React?', children: 'A typed React/Next.js component library for AdminLTE 4 dashboards.' },
                { title: 'Does it need jQuery?', children: 'No — pure React state with Bootstrap 5.3 styling. No jQuery, no adminlte.js.' },
                { title: 'Is it free?', children: 'Yes. MIT-licensed and free for personal and commercial use.' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="card card-success card-outline h-100">
          <div className="card-header">
            <div className="card-title">Tabs</div>
          </div>
          <div className="card-body">
            <Tabs
              items={[
                { label: 'Overview', children: <p className="mb-0">Tabs driven entirely by React state.</p> },
                { label: 'Specs', children: <p className="mb-0">No Bootstrap JS required to switch panels.</p> },
                { label: 'Usage', children: <p className="mb-0">Pass an <code>items</code> array — that&apos;s it.</p> },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="card card-warning card-outline h-100">
          <div className="card-header">
            <div className="card-title">Tooltip</div>
          </div>
          <div className="card-body d-flex flex-wrap gap-2 align-items-center">
            <Tooltip title="Tooltip on top">
              <Button label="Top" theme="warning" />
            </Tooltip>
            <Tooltip title="Tooltip on the right" placement="right">
              <Button label="Right" theme="secondary" outline />
            </Tooltip>
            <Tooltip title="Tooltip on the bottom" placement="bottom">
              <Button label="Bottom" theme="secondary" outline />
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="card card-info card-outline h-100">
          <div className="card-header">
            <div className="card-title">Toast</div>
          </div>
          <div className="card-body">
            <Button label="Show toast" theme="info" icon="bi-bell" onClick={() => setShowToast(true)} />
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
              <Toast show={showToast} onClose={() => setShowToast(false)} title="AdminLTE React" theme="info">
                Saved successfully — this toast auto-dismisses.
              </Toast>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
