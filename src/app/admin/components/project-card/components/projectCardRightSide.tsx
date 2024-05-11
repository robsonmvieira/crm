import Image from 'next/image'

export interface ProjectCardRightSideProps {
  readonly tasksNumber: number
  readonly activeTasksNumber: number
  readonly completedTasksNumber: number
  readonly lastActivity: Date
  readonly members: Array<{
    readonly name: string
    readonly avatar: string
  }>
}
export default function ProjectCardRightSide({
  tasksNumber,
  activeTasksNumber,
  members
}: ProjectCardRightSideProps) {
  return (
    <div className="w-1/2 p-6">
      <span className="font-bold text-base text-slate-900">Project Data</span>
      <div className="flex justify-between gap-4 mt-4">
        <div className="flex flex-col">
          <span className="text-slate-450 text-sm">All tasks</span>
          <span className="font-bold text-base text-slate-900">
            {tasksNumber}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-slate-450 text-sm">Active tasks</span>
          <span className="font-bold text-base text-slate-900">
            {activeTasksNumber}
          </span>
        </div>

        <div>
          <span className="text-slate-450 text-sm">Assignees</span>
          <div className="flex">
            {members.map(member => (
              <Image
                key={member.avatar}
                src={member.avatar}
                alt="Picture of the employee"
                fetchPriority="high"
                width={48}
                height={48}
                className="rounded-full overflow-hidden w-12 h-12 object-cover max-w-16 max-h-16"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
ProjectCardRightSide.displayName = 'ProjectCardRightSide'
