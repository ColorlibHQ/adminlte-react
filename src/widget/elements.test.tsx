import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Badge } from './badge'
import { Breadcrumb } from './breadcrumb'
import { Spinner } from './spinner'
import { Avatar } from './avatar'
import { ListGroupItem } from './list-group'

describe('Badge', () => {
  it('applies the contrast background and pill class', () => {
    render(<Badge theme="success" pill>OK</Badge>)
    const el = screen.getByText('OK')
    expect(el).toHaveClass('badge', 'text-bg-success', 'rounded-pill')
  })
})

describe('Breadcrumb', () => {
  it('links non-last items and marks the last active', () => {
    render(
      <Breadcrumb
        items={[{ label: 'Home', href: '/' }, { label: 'Library', href: '/docs' }, { label: 'Here' }]}
      />
    )
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    const last = screen.getByText('Here')
    expect(last).toHaveAttribute('aria-current', 'page')
    expect(last.querySelector('a')).toBeNull()
  })
})

describe('Spinner', () => {
  it('renders the chosen variant with an accessible label', () => {
    render(<Spinner variant="grow" small theme="danger" label="Working" />)
    const el = screen.getByRole('status')
    expect(el).toHaveClass('spinner-grow', 'spinner-grow-sm', 'text-danger')
    expect(screen.getByText('Working')).toHaveClass('visually-hidden')
  })
})

describe('Avatar', () => {
  it('renders an image when given a src', () => {
    render(<Avatar src="/a.jpg" alt="Jane" />)
    expect(screen.getByAltText('Jane')).toHaveAttribute('src', '/a.jpg')
  })

  it('falls back to initials with a status dot', () => {
    const { container } = render(<Avatar initials="JD" status="online" />)
    expect(screen.getByText('JD')).toBeInTheDocument()
    expect(container.querySelector('.bg-success')).toBeInTheDocument()
  })
})

describe('ListGroupItem', () => {
  it('renders an anchor when given href', () => {
    render(<ListGroupItem href="/x">Link</ListGroupItem>)
    const el = screen.getByText('Link')
    expect(el.tagName).toBe('A')
    expect(el).toHaveClass('list-group-item', 'list-group-item-action')
  })

  it('renders a button and fires onClick', () => {
    const onClick = vi.fn()
    render(<ListGroupItem onClick={onClick}>Act</ListGroupItem>)
    const el = screen.getByText('Act')
    expect(el.tagName).toBe('BUTTON')
    fireEvent.click(el)
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('renders a plain div otherwise', () => {
    render(<ListGroupItem active>Static</ListGroupItem>)
    const el = screen.getByText('Static')
    expect(el.tagName).toBe('DIV')
    expect(el).toHaveClass('active')
  })
})
