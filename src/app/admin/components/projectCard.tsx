import { Separator } from '@radix-ui/react-dropdown-menu'
import ProjectCardLeftSide from './project-card/components/projectCardLeftSide'
import ProjectCardRightSide from './project-card/components/projectCardRightSide'

export interface ProjectCardProps {
  readonly id?: string
  readonly createdAt: Date
  readonly priority: string
  readonly projectIcon: string
  readonly projectName: string
  readonly projectDescription: string

  readonly projectData: {
    readonly tasksNumber: number
    readonly activeTasksNumber: number
    readonly completedTasksNumber: number
    readonly lastActivity: Date
    readonly members: Array<{
      readonly name: string
      readonly avatar: string
    }>
  }
}

export default function ProjectCard({
  createdAt,
  priority,
  projectIcon,
  projectName,
  projectDescription,
  projectData
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl  flex">
      <ProjectCardLeftSide
        {...{
          createdAt,
          priority,
          projectIcon,
          projectName,
          projectDescription
        }}
      />
      <Separator className="w-[1px] bg-zinc-200" />
      <ProjectCardRightSide {...projectData} />
    </div>
  )
}

ProjectCard.displayName = 'ProjectCard'
