'use client'
import { SideBarFooter } from './components/footer'
import { TopMenu } from './components/top-menu'
export function Sidebar() {
  return (
    <div className="flex flex-col justify-between w-full bg-white rounded-2xl">
      <TopMenu />
      <SideBarFooter />
    </div>
  )
}
Sidebar.displayName = 'Sidebar'
