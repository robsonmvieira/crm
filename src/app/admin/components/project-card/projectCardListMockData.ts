import { type ProjectCardProps } from '../projectCard'

export const projectCardListMockData: ProjectCardProps[] = [
  {
    id: '1',
    createdAt: new Date(),
    priority: 'Medium',
    projectIcon: '/dashboard-page/medical-project-icon.svg',
    projectName: '9NNdPPihAADF',
    projectDescription: 'Medical App (iOS native)',
    projectData: {
      tasksNumber: 15,
      activeTasksNumber: 5,
      completedTasksNumber: 10,
      lastActivity: new Date(),
      members: [
        {
          name: 'Pedro Rodriguez',
          avatar:
            'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Donald Blank',
          avatar:
            'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Alanis Bonner',
          avatar:
            'https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]
    }
  }
]
