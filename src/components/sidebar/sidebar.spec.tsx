import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Sidebar } from './sidebar'
describe('Sidebar Component Unit Test', () => {
  it('should render correctly', () => {
    render(<Sidebar />)
    expect(Sidebar).toBeDefined()
  })

  it('should be able find the element with the text "Employees"', () => {
    const { findByText } = render(<Sidebar />)
    const element = findByText(/Employees/i)
    expect(element).toBeDefined()
  })

  it('should be able find the element with the text "Vacations"', () => {
    const { findByText } = render(<Sidebar />)
    const element = findByText(/Vacations/i)
    expect(element).toBeDefined()
  })
})
