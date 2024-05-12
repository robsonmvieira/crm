import { NearestEventCard } from '../nearestEventCard'
import SectionDescription from '../section-description'

export default function NearestEvent() {
  return (
    <div className="bg-white rounded-2xl p-6">
      <SectionDescription title={'Nearest Events'} />
      <div className="w-full mt-6 space-y-4">
        <NearestEventCard />
        <NearestEventCard />
        <NearestEventCard />
        <NearestEventCard />
      </div>
    </div>
  )
}

NearestEvent.displayName = 'NearestEvent'
