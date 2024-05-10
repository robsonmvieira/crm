import { render } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import {
  ListMenuItemSideBar,
  type ListMenuItemSideBarProps
} from '../list-item'

describe('ListItem Component Unit Test', () => {
  let dumbData: ListMenuItemSideBarProps
  beforeEach(() => {
    dumbData = {
      title: 'Dashboard',
      iconActivePath: 'dashboard-active-icon.svg',
      iconInactivePath: 'dashboard-inactive-icon.svg'
    }
  })
  it('should render correctly', () => {
    render(<ListMenuItemSideBar {...dumbData} />)
    expect(ListMenuItemSideBar).toBeDefined()
  })

  it('should use title as alt text if alt is not provided', () => {
    const { getByAltText } = render(<ListMenuItemSideBar {...dumbData} />)
    const element = getByAltText('icon Dashboard')
    expect(element).toBeDefined()
  })
})
