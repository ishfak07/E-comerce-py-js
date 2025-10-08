import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Home from '../../pages/Home'

vi.mock('axios', () => ({
  default: { get: vi.fn(() => Promise.resolve({ data: { items: [] } })) }
}))

describe('Home', () => {
  it('renders title', async () => {
    render(<Home />)
    expect(await screen.findByText('Store')).toBeInTheDocument()
  })
})



