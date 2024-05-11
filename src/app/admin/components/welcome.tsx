'use client'
import { Calendar } from 'lucide-react'
import { useMemo } from 'react'

export interface WelcomeProps {
  readonly name: string
  readonly currentRoute: string
}

export default function Welcome({ name, currentRoute }: WelcomeProps) {
  const today = useMemo(() => new Date(), [])
  const formattedDate = useMemo(() => {
    const date = Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(today)
    return date
  }, [today])
  return (
    <>
      <div>
        <span className="text-muted-foreground font-light">
          Welcome, {name}!
        </span>
      </div>
      <div className="flex justify-between items-center w-full mt-3">
        <div>
          <h4 className="text-2xl text-slate-800 font-bold">{currentRoute}</h4>
        </div>
        <div className="flex gap-4 bg-slate-250 rounded-2xl p-4">
          <Calendar className="w-6 h-6" />
          <div>
            <span className="font-normal text-muted-foreground text-slate-900 leading-6">
              {formattedDate}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
Welcome.displayName = 'Welcome'
