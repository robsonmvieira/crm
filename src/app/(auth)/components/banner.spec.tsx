import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Banner } from './banner'

describe('Banner unit test', () => {
  it('should render correctly', () => {
    render(<Banner />)
    expect(Banner).toBeDefined()
  })
})
