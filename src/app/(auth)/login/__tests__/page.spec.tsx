import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Login from '../page'

describe('Login Page Unit Test', () => {
  it('should render login page', () => {
    render(<Login />)
    expect(Login).toBeDefined()
  })
})
