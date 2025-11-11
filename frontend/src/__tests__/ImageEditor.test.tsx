import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ImageEditor from '../components/ImageEditor'

// Mock the toast function
vi.mock('../lib/toast', () => ({
  toast: vi.fn()
}))

// Mock react-easy-crop
vi.mock('react-easy-crop', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="cropper">{children}</div>
}))

// Mock background removal
vi.mock('@imgly/background-removal', () => ({
  removeBackground: vi.fn()
}))

describe('ImageEditor', () => {
  const mockOnSave = vi.fn()
  const mockOnCancel = vi.fn()

  it('renders the image editor modal', () => {
    render(
      <ImageEditor
        imageSrc="data:image/png;base64,test"
        onSave={mockOnSave}
        onCancel={mockOnCancel}
      />
    )

    expect(screen.getByText('Edit Profile Picture')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Save Changes')).toBeInTheDocument()
  })

  it('calls onCancel when cancel button is clicked', () => {
    render(
      <ImageEditor
        imageSrc="data:image/png;base64,test"
        onSave={mockOnSave}
        onCancel={mockOnCancel}
      />
    )

    const cancelButton = screen.getByText('Cancel')
    fireEvent.click(cancelButton)

    expect(mockOnCancel).toHaveBeenCalled()
  })
})