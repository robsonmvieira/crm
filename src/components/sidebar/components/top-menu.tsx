import { ListMenuSideBar } from './list-menu'
import Image from 'next/image'

function TopMenu() {
  return (
    <div className="mt-10 ml-6 mr-8">
      <div>
        <Image
          src={'/shared/logodash-logo.svg'}
          width={56}
          height={56}
          alt="logo dashboard"
        />
      </div>
      <ListMenuSideBar />
    </div>
  )
}

TopMenu.displayName = 'TopMenu'

export { TopMenu }
