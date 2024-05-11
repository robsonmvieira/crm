import ProjectCard from '../projectCard'
import { projectCardListMockData } from './projectCardListMockData'

export default function ProjectCardList() {
  return (
    <div className="w-full mt-5 space-y-5">
      {projectCardListMockData.map(projectCard => (
        <ProjectCard key={projectCard.projectName} {...projectCard} />
      ))}
    </div>
  )
}

ProjectCardList.displayName = 'ProjectCardList'
