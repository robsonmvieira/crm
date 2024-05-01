import { ListMenuItemSideBar, type ListMenuItemSideBarProps } from './list-item'
import { menuItemList } from './menu-options.list'
function ListMenuSideBar() {
  return (
    <ul className="mt-10 space-y-4">
      {menuItemList.map((item: ListMenuItemSideBarProps) => (
        <ListMenuItemSideBar {...item} key={item.title} />
      ))}
    </ul>
  )
}
ListMenuSideBar.displayName = 'ListMenuSideBar'
export { ListMenuSideBar }
