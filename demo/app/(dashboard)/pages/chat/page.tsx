'use client'

import { useEffect, useRef, useState } from 'react'
import { AppContent } from '@adminlte/react'

type ChatMessage = {
  from: 'them' | 'me'
  text: string
  time: string
}

const initialMessages: ChatMessage[] = [
  {
    from: 'them',
    text: 'Hey Jane! Did you get a chance to look at the v2.4 candidate?',
    time: '10:38 AM',
  },
  {
    from: 'me',
    text: 'Just finished going through it. Overall really solid — the new motion primitives are great.',
    time: '10:40 AM',
  },
  {
    from: 'them',
    text: 'Glad you like them. Any concerns?',
    time: '10:40 AM',
  },
  {
    from: 'me',
    text: 'Two small things: the success state on form inputs feels light, and the focus ring is barely visible on dark theme.',
    time: '10:41 AM',
  },
  {
    from: 'them',
    text: 'Yeah, that focus ring issue has been bugging me too. I’ll bump the contrast and ping you for another look.',
    time: '10:42 AM',
  },
  {
    from: 'me',
    text: 'Sounds good. Otherwise, ship it!',
    time: '10:42 AM',
  },
]
export default function Page() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [draft, setDraft] = useState('')
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    list.scrollTop = list.scrollHeight
  }, [messages])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return
    const time = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    setMessages((prev) => [...prev, { from: 'me', text, time }])
    setDraft('')
  }

  return (
    <AppContent title="Chat" breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'Chat' }]}>
      <div className="chat-app">
        {/* Contacts */}
        <aside className="chat-contacts">
          <div className="p-3 border-bottom">
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-body">
                <i className="bi bi-search" aria-hidden="true"></i>
              </span>
              <input
                type="search"
                className="form-control"
                placeholder="Search contacts…"
                aria-label="Search contacts"
              />
            </div>
          </div>
          <div className="flex-grow-1 overflow-auto">
            <a href="#" className="chat-contact active">
              <span className="chat-avatar bg-primary-subtle text-primary-emphasis online"> OB </span>
              <div className="flex-grow-1 overflow-hidden">
                <div className="d-flex justify-content-between">
                  <p className="mb-0 text-truncate fw-semibold">Olivia Bennett</p>
                  <small className="text-secondary flex-shrink-0 ms-2"> 2m </small>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-truncate fw-semibold">Approved — a few small notes…</small>
                  <span className="badge text-bg-primary rounded-pill ms-2"> 2 </span>
                </div>
              </div>
            </a>
            <a href="#" className="chat-contact">
              <span className="chat-avatar bg-success-subtle text-success-emphasis online"> MR </span>
              <div className="flex-grow-1 overflow-hidden">
                <div className="d-flex justify-content-between">
                  <p className="mb-0 text-truncate">Marcus Reyes</p>
                  <small className="text-secondary flex-shrink-0 ms-2"> 1h </small>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-truncate text-secondary"> Lunch Thursday? </small>
                </div>
              </div>
            </a>
            <a href="#" className="chat-contact">
              <span className="chat-avatar bg-info-subtle text-info-emphasis"> SK </span>
              <div className="flex-grow-1 overflow-hidden">
                <div className="d-flex justify-content-between">
                  <p className="mb-0 text-truncate">Sara Khan</p>
                  <small className="text-secondary flex-shrink-0 ms-2"> 3h </small>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-truncate text-secondary">
                    Customer interview notes are up.
                  </small>
                </div>
              </div>
            </a>
            <a href="#" className="chat-contact">
              <span className="chat-avatar bg-warning-subtle text-warning-emphasis"> DS </span>
              <div className="flex-grow-1 overflow-hidden">
                <div className="d-flex justify-content-between">
                  <p className="mb-0 text-truncate fw-semibold">Diego Smania</p>
                  <small className="text-secondary flex-shrink-0 ms-2"> Yesterday </small>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-truncate fw-semibold"> PR is ready for review. </small>
                  <span className="badge text-bg-primary rounded-pill ms-2"> 1 </span>
                </div>
              </div>
            </a>
            <a href="#" className="chat-contact">
              <span className="chat-avatar bg-danger-subtle text-danger-emphasis"> ED </span>
              <div className="flex-grow-1 overflow-hidden">
                <div className="d-flex justify-content-between">
                  <p className="mb-0 text-truncate">Emma Dawson</p>
                  <small className="text-secondary flex-shrink-0 ms-2"> Yesterday </small>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-truncate text-secondary">Heading out, see you Mon.</small>
                </div>
              </div>
            </a>
            <a href="#" className="chat-contact">
              <span className="chat-avatar bg-primary-subtle text-primary-emphasis online"> LC </span>
              <div className="flex-grow-1 overflow-hidden">
                <div className="d-flex justify-content-between">
                  <p className="mb-0 text-truncate">Liam Carter</p>
                  <small className="text-secondary flex-shrink-0 ms-2"> May 16 </small>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-truncate text-secondary">Pushed the calendar fix.</small>
                </div>
              </div>
            </a>
            <a href="#" className="chat-contact">
              <span className="chat-avatar bg-secondary-subtle text-secondary-emphasis"> AF </span>
              <div className="flex-grow-1 overflow-hidden">
                <div className="d-flex justify-content-between">
                  <p className="mb-0 text-truncate">Ava Foster</p>
                  <small className="text-secondary flex-shrink-0 ms-2"> May 15 </small>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-truncate text-secondary">
                    Adding you to the design crit.
                  </small>
                </div>
              </div>
            </a>
          </div>
        </aside>

        {/* Conversation */}
        <section className="chat-conversation">
          <header className="chat-header">
            <span className="chat-avatar bg-primary-subtle text-primary-emphasis online"> OB </span>
            <div className="flex-grow-1">
              <p className="mb-0 fw-semibold">Olivia Bennett</p>
              <small className="text-success">
                <i className="bi bi-circle-fill" style={{ fontSize: '0.5rem' }} aria-hidden="true"></i>
                Online &middot; typing&hellip;
              </small>
            </div>
            <div className="btn-group btn-group-sm">
              <button className="btn btn-outline-secondary" type="button" title="Call">
                <i className="bi bi-telephone" aria-hidden="true"></i>
              </button>
              <button className="btn btn-outline-secondary" type="button" title="Video call">
                <i className="bi bi-camera-video" aria-hidden="true"></i>
              </button>
              <button className="btn btn-outline-secondary" type="button" title="More">
                <i className="bi bi-three-dots-vertical" aria-hidden="true"></i>
              </button>
            </div>
          </header>

          <div className="chat-messages" id="chat-messages" ref={listRef}>
            {messages.map((msg, idx) => (
              <div className={`chat-message ${msg.from}`} key={idx}>
                <div className="chat-bubble">
                  {msg.text}
                  <span className="chat-time">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          <form className="chat-composer" id="chat-composer" onSubmit={handleSubmit}>
            <div className="input-group">
              <button className="btn btn-outline-secondary" type="button" title="Attach">
                <i className="bi bi-paperclip" aria-hidden="true"></i>
              </button>
              <input
                type="text"
                className="form-control"
                placeholder="Type a message…"
                aria-label="Type a message"
                id="chat-input"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
              <button className="btn btn-outline-secondary" type="button" title="Emoji">
                <i className="bi bi-emoji-smile" aria-hidden="true"></i>
              </button>
              <button className="btn btn-primary" type="submit">
                <i className="bi bi-send" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </section>
      </div>
    </AppContent>
  )
}
