import { describe, expect, it } from 'vitest'
import { SideBarFooter } from '../footer'
import { render } from '@testing-library/react'

describe('Footer Component Unit Test', () => {
  it('should render correctly', () => {
    render(<SideBarFooter />)
    expect(SideBarFooter).toBeDefined()
  })

  it('should be able find the element with the text "Logout"', () => {
    const { findByText } = render(<SideBarFooter />)
    const element = findByText(/Logout/i)
    expect(element).toBeDefined()
  })

  it('should be able find the element with the text "logo dashboard"', () => {
    const { findByText } = render(<SideBarFooter />)
    const element = findByText(/logo dashboard/i)
    expect(element).toBeDefined()
  })

  it('should be able find a image', () => {
    const { getByAltText } = render(<SideBarFooter />)
    const element = getByAltText('logo dashboard')
    expect(element).toBeDefined()
  })
})
