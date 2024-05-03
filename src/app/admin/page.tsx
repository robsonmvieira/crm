import { Input } from '@/components/ui/input'
import { Bell, ChevronDown, Search, Calendar, ChevronRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { NearestEventCard } from './components/nearestEventCard'

export default function Home() {
  const today = useMemo(() => new Date(), [])
  const formattedDate = useMemo(() => {
    const date = Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(today)
    return date
  }, [today])
  return (
    <div>
      {/* topbar */}
      <div className="flex justify-between items-center">
        <div
          className="w-[415px] flex 
              flex-row 
              justify-between 
              items-center 
              h-12 
              rounded-xl 
              bg-background 
              px-3 
              py-2 
              text-sm 
              ring-offset-background 
              file:border-0 
              file:bg-transparent 
              file:text-sm 
              file:font-medium 
              placeholder:text-muted-foreground 
              focus-visible:outline-none 
              disabled:cursor-not-allowed 
              disabled:opacity-50
              gap-3"
        >
          <Search className="w-6 h-6" />
          <Input
            placeholder="Search"
            className="h-12
            border-none
                text-muted-foreground 
                focus-visible:ring-0
                focus-visible:ring-offset-0
                pl-0
                text-base
                font-normal
          "
          />
        </div>
        <div className="flex gap-10 items-center">
          <div className="bg-white rounded-2xl p-4">
            <Bell className="w-6 h-6" />
          </div>
          <div className="flex gap-4 items-center bg-white rounded-2xl h-12 px-6 ">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground font-bold">Joe Doe</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* topbar */}

      <div className="mt-14">
        <div>
          <span className="text-muted-foreground font-light">
            Welcome, Joe Doe!
          </span>
        </div>
        <div className="flex justify-between items-center w-full mt-3">
          <div>
            <h4 className="text-2xl text-slate-800 font-bold">Dashboard</h4>
          </div>
          <div className="flex gap-4 bg-slate-250 rounded-2xl p-4">
            <Calendar className="w-6 h-6" />
            <div>
              <span className="font-normal text-muted-foreground text-slate-900 leading-6">
                {formattedDate}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 grid-cols-[1fr_400px]">
          <div className="bg-white rounded-2xl p-6">
            <div className="flex w-full  items-center justify-between">
              <span className="font-bold text-2xl text-slate-900">
                Workload
              </span>
              <Button
                variant={'outline'}
                className="hover:pl-4 hover:bg-none  hover:text-blue-500 border-none text-muted-foreground p-0 font-semibold text-base gap-5 flex text-blue-450"
              >
                View All
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
            <div></div>
          </div>

          <div className="bg-white rounded-2xl p-6">
            <div className="flex w-full  items-center justify-between">
              <span className="font-bold text-2xl text-slate-900">
                Nearest Events
              </span>
              <Button
                variant={'outline'}
                className="hover:pl-4 hover:bg-none  hover:text-blue-500 border-none text-muted-foreground p-0 font-semibold text-base gap-5 flex text-blue-450"
              >
                View All
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            <div className="w-full mt-6 space-y-4">
              <NearestEventCard />
              <NearestEventCard />
              <NearestEventCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
