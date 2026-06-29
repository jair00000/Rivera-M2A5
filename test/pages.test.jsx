import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../src/pages/Home.jsx'
import About from '../src/pages/About.jsx'

// These two pages use no router hooks, so they can be tested on their own.
describe('Pages', () => {
  it('Home renders "Home page"', () => {
    render(<Home />)
    expect(screen.getByText('Home page')).toBeInTheDocument()
  })

  it('About renders "About page"', () => {
    render(<About />)
    expect(screen.getByText('About page')).toBeInTheDocument()
  })
})
