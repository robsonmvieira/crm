import Image from 'next/image'

export interface ListMenuItemSideBarProps {
  readonly title: string
  readonly iconActivePath: string
  readonly iconInactivePath: string
  readonly alt?: string
}
function ListMenuItemSideBar({
  title,
  iconActivePath,
  iconInactivePath,
  alt
}: ListMenuItemSideBarProps) {
  const iconBasePath = `/shared/icons/`
  return (
    <li className="cursor-pointer">
      <div
        className="flex 
          items-center 
          gap-4 
          text-muted-foreground 
          text-base font-semibold
          h-11
          rounded-xl
          "
      >
        <Image
          src={`${iconBasePath}${iconActivePath}`}
          width={24}
          height={24}
          alt={alt ?? `icon ${title}`}
        />
        <span className="">{title}</span>
      </div>
    </li>
  )
}
ListMenuItemSideBar.displayName = 'ListMenuItemSideBar'
export { ListMenuItemSideBar }
