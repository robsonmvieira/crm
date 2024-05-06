import { ArrowUp, Clock } from 'lucide-react'
import React from 'react'

function NearestEventCard() {
  return (
    <div className="h-[106px] flex gap-4">
      <div className="w-1 h-full bg-blue-450 rounded-2xl"></div>
      <div className="w-full flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="w-1/2">
            <span className="font-bold text-base text-slate-900 leading-6">
              Presentation of the new department
            </span>
          </div>
          <div>
            <ArrowUp className="w-6 h-6 text-amber-400" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm font-light text-muted-foreground">
              Today | 12:00 PM
            </span>
          </div>
          <div className="flex gap-2 rounded-lg bg-blue-75 p-3">
            <Clock className="w-6 h-6 text-slate-500" />
            <span>4h</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { NearestEventCard }
NearestEventCard.displayName = 'NearestEventCard'
