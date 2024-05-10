import ActivityStreamCardHead from './components/activityStreamCardHead'
import ActivityStreamCardItem, {
  type ActivityStreamCardItemProps
} from './components/activityStreamCardItem'
export interface ActivityStreamCardProps {
  readonly userName: string
  readonly userAvatar: string
  readonly userPosition: string
  readonly activities: ActivityStreamCardItemProps[]
}
export default function ActivityStreamCard({
  userAvatar,
  userPosition,
  userName,
  activities
}: ActivityStreamCardProps) {
  return (
    <div>
      <ActivityStreamCardHead
        userAvatar={userAvatar}
        userPosition={userPosition}
        userName={userName}
      />

      <div>
        {activities.map(activity => (
          <ActivityStreamCardItem
            key={activity.activityDescription}
            activityIcon={activity.activityIcon}
            activityDescription={activity.activityDescription}
          />
        ))}
      </div>
    </div>
  )
}

ActivityStreamCard.displayName = 'ActivityStreamCard'
