'use client'

import { useState } from 'react'
import type { DirectChatContact, DirectChatMessage } from '../types/direct-chat'

export type { DirectChatContact, DirectChatMessage } from '../types/direct-chat'

export interface DirectChatProps {
  badge?: number
  contacts?: DirectChatContact[]
  messages?: DirectChatMessage[]
  collapsible?: boolean
  removable?: boolean
  onRemove?: () => void
  className?: string
}

export function DirectChat({
  badge = 0,
  contacts = [],
  messages = [],
  collapsible = true,
  removable = true,
  onRemove,
  className,
}: DirectChatProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isContactsOpen, setIsContactsOpen] = useState(false)
  const [isRemoved, setIsRemoved] = useState(false)

  if (isRemoved) return null

  const handleCollapse = () => setIsCollapsed(!isCollapsed)
  const handleToggleContacts = () => setIsContactsOpen(!isContactsOpen)
  const handleRemove = () => {
    setIsRemoved(true)
    onRemove?.()
  }

  return (
    <div className={`card direct-chat direct-chat-primary mb-4 ${isContactsOpen ? 'direct-chat-contacts-open' : ''} ${className || ''}`.trim()}>
      <div className="card-header">
        <h3 className="card-title">Direct Chat</h3>
        <div className="card-tools">
          {badge > 0 && (
            <span title={`${badge} New Messages`} className="badge text-bg-primary">
              {badge}
            </span>
          )}
          {collapsible && (
            <button
              type="button"
              className="btn btn-tool"
              onClick={handleCollapse}
              title={isCollapsed ? 'Expand' : 'Collapse'}
            >
              <i data-lte-icon="expand" className={`bi ${isCollapsed ? 'bi-plus-lg' : 'bi-dash-lg'}`}></i>
              <i data-lte-icon="collapse" className={`bi ${isCollapsed ? 'd-none bi-plus-lg' : 'd-none bi-dash-lg'}`}></i>
            </button>
          )}
          <button
            type="button"
            className="btn btn-tool"
            title="Contacts"
            data-lte-toggle="chat-pane"
            onClick={handleToggleContacts}
          >
            <i className="bi bi-chat-text-fill"></i>
          </button>
          {removable && (
            <button type="button" className="btn btn-tool" onClick={handleRemove} title="Remove">
              <i className="bi bi-x-lg"></i>
            </button>
          )}
        </div>
      </div>

      {!isCollapsed && (
        <>
          <div className="card-body">
            <div className="direct-chat-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`direct-chat-msg ${msg.isOwn ? 'end' : ''}`}>
                  <div className="direct-chat-infos clearfix">
                    {msg.isOwn ? (
                      <>
                        <span className="direct-chat-name float-end">{msg.from}</span>
                        <span className="direct-chat-timestamp float-start">{msg.timestamp}</span>
                      </>
                    ) : (
                      <>
                        <span className="direct-chat-name float-start">{msg.from}</span>
                        <span className="direct-chat-timestamp float-end">{msg.timestamp}</span>
                      </>
                    )}
                  </div>
                  <img className="direct-chat-img" src={msg.image} alt={msg.from} />
                  <div className="direct-chat-text">{msg.text}</div>
                </div>
              ))}
            </div>

            {contacts.length > 0 && (
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  {contacts.map((contact, idx) => (
                    <li key={idx}>
                      <a href="#">
                        <img className="contacts-list-img" src={contact.image} alt={contact.name} />
                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            {contact.name}
                            <small className="contacts-list-date float-end">{contact.date}</small>
                          </span>
                          <span className="contacts-list-msg">{contact.preview}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="card-footer">
            <form action="#" method="post">
              <div className="input-group">
                <input
                  type="text"
                  name="message"
                  placeholder="Type Message ..."
                  className="form-control"
                />
                <span className="input-group-append">
                  <button type="button" className="btn btn-primary">
                    Send
                  </button>
                </span>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  )
}
