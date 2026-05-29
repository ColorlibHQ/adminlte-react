import { useState } from 'react'

export interface UseDirectChatResult {
  isContactsOpen: boolean
  toggleContacts: () => void
  openContacts: () => void
  closeContacts: () => void
}

/**
 * Hook that manages direct chat contacts pane visibility.
 * Ports the logic from direct-chat.ts.
 */
export function useDirectChat(): UseDirectChatResult {
  const [isContactsOpen, setIsContactsOpen] = useState(false)

  const toggleContacts = () => setIsContactsOpen(v => !v)
  const openContacts = () => setIsContactsOpen(true)
  const closeContacts = () => setIsContactsOpen(false)

  return {
    isContactsOpen,
    toggleContacts,
    openContacts,
    closeContacts,
  }
}
