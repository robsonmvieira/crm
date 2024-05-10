import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import ActivityStreamCard from './stream-activity/activityStreamCard'
import ActivityTitle from './stream-activity/components/activityTitle'
import { mockActivityStreamData } from './stream-activity/components/mockData'

export default function Activity() {
  return (
    <div className="bg-white rounded-2xl p-6">
      <div>
        <ActivityTitle />
        <div>
          {mockActivityStreamData.map(item => (
            <ActivityStreamCard
              key={item.userName}
              userAvatar={item.userAvatar}
              userPosition={item.userPosition}
              userName={item.userName}
              activities={item.activities}
            />
          ))}
        </div>
      </div>

      <div className="flex mt-4 items-baseline w-full justify-center ">
        <Button
          variant={'outline'}
          className="
        hover:pl-2
        hover:bg-none  
        hover:text-blue-500 
        border-none 
        text-muted-foreground 
        p-0 
        font-semibold 
        text-base 
        gap-1
        flex 
        text-blue-450
        bg-transparent h-1"
        >
          View More
          <ChevronDown className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

Activity.displayName = 'Activity'
