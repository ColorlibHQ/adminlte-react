import { describe, it, expect } from 'vitest'
import { cn } from './class-name'

describe('cn', () => {
  it('joins truthy class names', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('drops falsey values', () => {
    expect(cn('a', false, null, undefined, '', 'b')).toBe('a b')
  })

  it('supports conditional expressions', () => {
    const active = true
    const disabled = false
    expect(cn('nav-link', active && 'active', disabled && 'disabled')).toBe('nav-link active')
  })

  it('returns an empty string when nothing is truthy', () => {
    expect(cn(false, undefined, null)).toBe('')
  })
})
