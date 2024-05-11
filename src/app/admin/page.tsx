'use client'

import Activity from './components/activity'
import ProjectCardList from './components/project-card/projectCardList'
import Welcome from './components/welcome'
import SearchBar from './components/search-bar/searchBar'
import SectionDescription from './components/section-description'
import WorkloadList from './components/workload-list'
import NearestEvent from './components/nearest-event'

export default function Home() {
  return (
    <div>
      <SearchBar />
      <div className="mt-14">
        <Welcome name={'Joe Doe'} currentRoute={'Dashboard'} />

        <div className="mt-8 grid gap-8 grid-cols-[1fr_400px]">
          <WorkloadList />
          <NearestEvent />
        </div>

        <div className="mt-8 grid gap-8 grid-cols-[1fr_400px]">
          <div>
            <SectionDescription title={'Projects'} />
            <ProjectCardList />
          </div>
          <Activity />
        </div>
      </div>
    </div>
  )
}
