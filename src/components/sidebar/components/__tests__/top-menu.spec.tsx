import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopMenu } from '../top-menu'

describe('TopMenu Component Unit Test', () => {
  it('should render correctly', () => {
    render(<TopMenu />)
    expect(TopMenu).toBeDefined()
    // expect(true).toBe(true)
  })

  it('should find a image', () => {
    const { getByAltText } = render(<TopMenu />)
    const element = getByAltText('logo dashboard')
    expect(element).toBeDefined()
  })
})
