import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Pagination } from './pagination'

describe('Pagination', () => {
  it('shows every page when the total is small', () => {
    render(<Pagination page={2} totalPages={4} />)
    for (const n of ['1', '2', '3', '4']) {
      expect(screen.getByText(n)).toBeInTheDocument()
    }
    // no ellipsis needed
    expect(screen.queryByText('…')).not.toBeInTheDocument()
  })

  it('windows with ellipses around the current page', () => {
    render(<Pagination page={6} totalPages={12} siblingCount={1} />)
    // first, last, and the window 5–7 are present
    for (const n of ['1', '5', '6', '7', '12']) {
      expect(screen.getByText(n)).toBeInTheDocument()
    }
    // a far page is collapsed into an ellipsis
    expect(screen.queryByText('3')).not.toBeInTheDocument()
    expect(screen.getAllByText('…').length).toBeGreaterThan(0)
  })

  it('marks the current page active', () => {
    render(<Pagination page={3} totalPages={5} />)
    const active = document.querySelector('.page-item.active')
    expect(active?.textContent).toBe('3')
  })

  it('renders buttons and calls onPageChange', () => {
    const onPageChange = vi.fn()
    render(<Pagination page={3} totalPages={5} onPageChange={onPageChange} />)
    fireEvent.click(screen.getByText('4'))
    expect(onPageChange).toHaveBeenCalledWith(4)
    expect(screen.getByText('4').tagName).toBe('BUTTON')
  })

  it('disables prev on the first page and next on the last', () => {
    const { rerender } = render(<Pagination page={1} totalPages={5} onPageChange={() => {}} />)
    const items = () => Array.from(document.querySelectorAll('.page-item'))
    expect(items()[0].classList.contains('disabled')).toBe(true) // prev
    rerender(<Pagination page={5} totalPages={5} onPageChange={() => {}} />)
    const all = items()
    expect(all[all.length - 1].classList.contains('disabled')).toBe(true) // next
  })

  it('renders anchors when no onPageChange is given', () => {
    render(<Pagination page={1} totalPages={3} />)
    expect(screen.getByText('2').tagName).toBe('A')
  })

  it('renders nothing when there are no pages', () => {
    const { container } = render(<Pagination page={1} totalPages={0} />)
    expect(container.firstChild).toBeNull()
  })
})
