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
  },

  {
    id: '2',
    createdAt: new Date(),
    priority: 'Medium',
    projectIcon: '/dashboard-page/medical-project-icon.svg',
    projectName: '1125PP4521',
    projectDescription: 'Dashboard to Google ',
    projectData: {
      tasksNumber: 250,
      activeTasksNumber: 15,
      completedTasksNumber: 25,
      lastActivity: new Date(),
      members: [
        {
          name: 'Emily Smith',
          avatar:
            'https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Clear Martin',
          avatar:
            'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Rachel Roberts',
          avatar:
            'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]
    }
  },
  {
    id: '2',
    createdAt: new Date(),
    priority: 'Low',
    projectIcon: '/dashboard-page/medical-project-icon.svg',
    projectName: '999190DDBR',
    projectDescription: 'Federal Police',
    projectData: {
      tasksNumber: 250,
      activeTasksNumber: 25,
      completedTasksNumber: 5,
      lastActivity: new Date(),
      members: [
        {
          name: 'Josh Cooper',
          avatar:
            'https://images.unsplash.com/photo-1563986768817-257bf91c5753?q=80&w=3610&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Neo Zen',
          avatar:
            'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Zoe Van Der Varten',
          avatar:
            'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]
    }
  }
]
