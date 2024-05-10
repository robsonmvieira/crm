import Image from 'next/image'
export interface ActivityStreamCardItemProps {
  readonly activityIcon: string
  readonly activityDescription: string
}

export default function ActivityStreamCardItem({
  activityIcon,
  activityDescription
}: ActivityStreamCardItemProps) {
  return (
    <div className="flex mt-5 bg-blue-75 rounded-2xl p-6 gap-4 items-start ">
      <Image
        src={activityIcon}
        alt="upload icon"
        fetchPriority="high"
        width={12}
        height={12}
        className="w-8 h-8 object-cover max-w-16 max-h-16"
      />
      <span className="text-base font-light text-slate-900">
        {activityDescription}
      </span>
    </div>
  )
}
ActivityStreamCardItem.DisplayName = 'ActivityStreamCardItem'
