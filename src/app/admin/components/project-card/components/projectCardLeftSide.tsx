import { CalendarCheck, MoveUp } from 'lucide-react'
import Image from 'next/image'

export interface ProjectCardLeftSideProps {
  readonly createdAt: Date
  readonly priority: string
  readonly projectIcon: string
  readonly projectName: string
  readonly projectDescription: string
}
export default function ProjectCardLeftSide({
  createdAt,
  priority,
  projectIcon,
  projectName,
  projectDescription
}: ProjectCardLeftSideProps) {
  return (
    <div className="space-y-5 w-1/2 p-6">
      <div className="flex gap-3 items-center">
        <div>
          <Image
            src={projectIcon}
            alt="Picture of the author"
            fetchPriority="high"
            width={48}
            height={48}
            className="rounded-2xl overflow-hidden w-16 h-16 object-cover max-w-16 max-h-16"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-muted-foreground">{projectName}</span>
          <span className="font-bold text-base text-slate-900">
            {projectDescription}
          </span>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex w-full gap-2 items-center">
          <CalendarCheck className="w-5 h-5 text-slate-450" />
          <span className="font-semibold text-sm text-slate-450">
            Create {createdAt.toDateString()}
          </span>
        </div>
        <div className="flex w-full gap-2 items-center justify-center">
          <MoveUp className="w-6 h-4 text-amber-400" />
          <span className="text-amber-400 font-bold text-sm">{priority}</span>
        </div>
      </div>
    </div>
  )
}
ProjectCardLeftSide.displayName = 'ProjectCardLeftSide'
