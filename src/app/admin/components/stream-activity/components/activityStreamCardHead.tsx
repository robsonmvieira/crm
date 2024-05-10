import Image from 'next/image'
export interface ActivityStreamCardHeadProps {
  readonly userName: string
  readonly userAvatar: string
  readonly userPosition: string
}
export default function ActivityStreamCardHead({
  userAvatar,
  userPosition,
  userName
}: ActivityStreamCardHeadProps) {
  return (
    <div>
      <div className="flex gap-4 mt-4 items-center">
        <div>
          <Image
            src={userAvatar}
            alt="Picture of the author"
            fetchPriority="high"
            width={50}
            height={50}
            className="rounded-full overflow-hidden w-16 h-16 object-cover max-w-16 max-h-16"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-base font-bold text-slate-900">{userName}</span>
          <span className="text-sm text-slate-450 font-light">
            {userPosition}
          </span>
        </div>
      </div>
    </div>
  )
}
ActivityStreamCardHead.displayName = 'ActivityStreamCardHead'
