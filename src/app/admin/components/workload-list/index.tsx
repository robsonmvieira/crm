import SectionDescription from '../section-description'
import { WorkloadCard } from '../workloadCard'

export default function WorkloadList() {
  return (
    <div className="bg-white rounded-2xl p-6">
      <SectionDescription title={'Workload'} />
      <div className="flex flex-wrap gap-4 w-full">
        <WorkloadCard />
        <WorkloadCard />
        <WorkloadCard />
        <WorkloadCard />
        <WorkloadCard />
        <WorkloadCard />
        <WorkloadCard />
        <WorkloadCard />
      </div>
    </div>
  )
}
WorkloadList.displayName = 'WorkloadList'
