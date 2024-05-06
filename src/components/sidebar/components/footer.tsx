'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

function SideBarFooter() {
  return (
    <div
      className="flex 
    flex-col 
    justify-center 
    items-center 
    gap-8 ml-6 mr-8 mb-4"
    >
      <div>
        <Image
          src={'/sidebar/sidebar-support.svg'}
          fetchPriority="auto"
          width={168}
          height={214}
          alt="logo dashboard"
        />
      </div>
      <div className="w-full">
        <Button
          variant={'outline'}
          className="border-none 
        text-muted-foreground w-full justify-start gap-5"
        >
          <LogOut className="w-6 h6 text-muted-foreground" />
          Logout
        </Button>
      </div>
    </div>
  )
}

SideBarFooter.displayName = 'SideBarFooter'
export { SideBarFooter }
