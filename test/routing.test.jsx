import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App.jsx'

// Render App at a chosen URL. App must NOT include its own Router; the test
// supplies a MemoryRouter so it can control the starting URL.
function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('Routing', () => {
  it('shows the Home page at "/"', () => {
    renderAt('/')
    expect(screen.getByText('Home page')).toBeInTheDocument()
  })

  it('shows the About page at "/about"', () => {
    renderAt('/about')
    expect(screen.getByText('About page')).toBeInTheDocument()
  })

  it('shows the product id at "/products/42" (route param)', () => {
    renderAt('/products/42')
    expect(screen.getByText('Product 42')).toBeInTheDocument()
  })

  it('shows the 404 page for an unknown URL', () => {
    renderAt('/does-not-exist')
    expect(screen.getByText('Page not found')).toBeInTheDocument()
  })

  it('navigates to About when the About link is clicked', async () => {
    const user = userEvent.setup()
    renderAt('/')
    await user.click(screen.getByRole('link', { name: 'About' }))
    expect(screen.getByText('About page')).toBeInTheDocument()
  })
})
