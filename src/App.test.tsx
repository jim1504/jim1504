import '@testing-library/jest-dom/vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'
import profileSource from './data/profile.ts?raw'
import { decodeEmail } from './lib/contact'
import contactSource from './lib/contact.ts?raw'

afterEach(cleanup)

// jsdom has no modal dialog support; real browsers do.
HTMLDialogElement.prototype.showModal ??= function (this: HTMLDialogElement) {
  this.setAttribute('open', '')
}
HTMLDialogElement.prototype.close ??= function (this: HTMLDialogElement) {
  this.removeAttribute('open')
  this.dispatchEvent(new Event('close'))
}

describe('profile page', () => {
  it('never renders the phone number', () => {
    const { container } = render(<App />)
    expect(container.textContent?.replace(/\D/g, '')).not.toContain('8132448')
    expect(container.innerHTML).not.toMatch(/tel:/)
  })

  it('keeps the email address out of the page and source', () => {
    const { container } = render(<App />)
    expect(container.innerHTML).not.toMatch(/@gmail|mailto:/)
    for (const source of [contactSource, profileSource]) expect(source).not.toMatch(/jim\.william1504|gmail/)
    expect(decodeEmail()).toBe('jim.william1504@gmail.com')
  })

  it('opens a CV request email from every Request CV button', () => {
    render(<App />)
    const hrefs: string[] = []
    const original = window.location
    Object.defineProperty(window, 'location', { configurable: true, value: { set href(v: string) { hrefs.push(v) } } })
    try {
      const buttons = screen.getAllByRole('button', { name: /request (my )?cv/i })
      expect(buttons.length).toBeGreaterThanOrEqual(3)
      for (const b of buttons) fireEvent.click(b)
    } finally {
      Object.defineProperty(window, 'location', { configurable: true, value: original })
    }
    expect(hrefs.length).toBeGreaterThanOrEqual(3)
    for (const h of hrefs) expect(h).toBe('mailto:jim.william1504@gmail.com?subject=CV%20request')
  })

  it('switches between light and dark themes and remembers the choice', () => {
    document.documentElement.dataset.theme = 'light'
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
    fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }))
    expect(document.documentElement.dataset.theme).toBe('light')
  })

  it('blocks copy and right-click and points to the CV request', () => {
    render(<App />)
    const copy = new Event('copy', { bubbles: true, cancelable: true })
    document.body.dispatchEvent(copy)
    expect(copy.defaultPrevented).toBe(true)

    expect(fireEvent.contextMenu(document.body)).toBe(false)
    expect(screen.getByRole('status')).toHaveTextContent(/email me a request/i)
  })

  it('opens project screenshots in a popup and steps through them', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: /open screenshots of hi support/i }))
    const dialog = screen.getByRole('dialog', { name: /hi support/i })
    expect(dialog).toHaveTextContent('1 of 4')
    expect(dialog).toHaveTextContent(/operator performance dashboard/i)

    fireEvent.click(screen.getByRole('button', { name: 'Next' }))
    expect(dialog).toHaveTextContent('2 of 4')
    fireEvent.keyDown(dialog, { key: 'ArrowLeft' })
    expect(dialog).toHaveTextContent('1 of 4')
    // Screenshots are backgrounds, never <img>, so there is no "Save image as".
    expect(dialog.querySelector('img')).toBeNull()
  })

  it('blocks save and print shortcuts', () => {
    render(<App />)
    expect(fireEvent.keyDown(document, { key: 's', ctrlKey: true })).toBe(false)
    expect(fireEvent.keyDown(document, { key: 'p', metaKey: true })).toBe(false)
    expect(fireEvent.keyDown(document, { key: 'f', ctrlKey: true })).toBe(true)
  })
})
