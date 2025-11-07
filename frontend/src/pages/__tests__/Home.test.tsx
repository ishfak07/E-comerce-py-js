import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Home from '../../pages/Home'
import { AuthProvider } from '../../context/AuthProvider'

vi.mock('axios', () => ({
  default: {
    create: vi.fn(() => ({
      defaults: { headers: { common: {} } },
      interceptors: {
        request: { use: vi.fn() },
        response: { use: vi.fn() }
      }
    })),
    get: vi.fn(() => Promise.resolve({ data: { items: [] } }))
  }
}))

describe('Home', () => {
  it('renders title', async () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Home />
        </AuthProvider>
      </MemoryRouter>
    )
    expect(await screen.findByText('Welcome to')).toBeInTheDocument()
  })
})



