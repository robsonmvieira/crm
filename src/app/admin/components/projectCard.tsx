import Image from 'next/image'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { CalendarCheck, MoveUp } from 'lucide-react'
export default function ProjectCard() {
  return (
    <div className="bg-white rounded-2xl  flex">
      {/* left side */}
      <div className="space-y-5 w-1/2 p-6">
        <div className="flex gap-3 items-center">
          <div>
            <Image
              src="/dashboard-page/medical-project-icon.svg"
              alt="Picture of the author"
              fetchPriority="high"
              width={48}
              height={48}
              className="rounded-2xl overflow-hidden w-16 h-16 object-cover max-w-16 max-h-16"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">PN0001265</span>
            <span className="font-bold text-base text-slate-900">
              Medical App (iOS native)
            </span>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex w-full gap-2 items-center">
            <CalendarCheck className="w-5 h-5 text-slate-450" />
            <span className="font-semibold text-sm text-slate-450">
              Create Sep 12, 2022
            </span>
          </div>
          <div className="flex w-full gap-2 items-center justify-center">
            <MoveUp className="w-6 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold text-sm">Medium</span>
          </div>
        </div>
      </div>
      {/* right side */}
      <Separator className="w-[1px] bg-zinc-200" />
      <div className="w-1/2 p-6">
        <span className="font-bold text-base text-slate-900">Project Data</span>
        <div className="flex justify-between gap-4 mt-4">
          <div className="flex flex-col">
            <span className="text-slate-450 text-sm">All tasks</span>
            <span className="font-bold text-base text-slate-900">50</span>
          </div>

          <div className="flex flex-col">
            <span className="text-slate-450 text-sm">Active tasks</span>
            <span className="font-bold text-base text-slate-900">12</span>
          </div>

          <div>
            <span className="text-slate-450 text-sm">Assignees</span>
            <div className="flex">
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Picture of the employee"
                fetchPriority="high"
                width={48}
                height={48}
                className="rounded-full overflow-hidden w-12 h-12 object-cover max-w-16 max-h-16"
              />
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Picture of the employee"
                fetchPriority="high"
                width={48}
                height={48}
                className="-ml-4 rounded-full overflow-hidden w-12 h-12 object-cover max-w-16 max-h-16"
              />

              <Image
                src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Picture of the employee"
                fetchPriority="high"
                width={48}
                height={48}
                className="-ml-4 rounded-full overflow-hidden w-12 h-12 object-cover max-w-16 max-h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ProjectCard.displayName = 'ProjectCard'
