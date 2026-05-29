export interface DirectChatContact {
  name: string
  image: string
  date: string
  preview: string
}

export interface DirectChatMessage {
  from: string
  image: string
  timestamp: string
  text: string
  isOwn?: boolean
}
