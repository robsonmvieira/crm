'use client'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
export interface SectionDescriptionProps {
  title: string
}

export default function SectionDescription({ title }: SectionDescriptionProps) {
  return (
    <div className="flex w-full  items-center justify-between">
      <span className="font-bold text-2xl text-slate-900">{title}</span>
      <Button
        variant={'outline'}
        className={`
          hover:pl-4 
          hover:bg-none  
          hover:text-blue-500 
          border-none 
          text-muted-foreground 
          p-0 
          font-semibold 
          text-base 
          gap-2 
          flex 
          text-blue-450
          bg-transparent}
          `}
      >
        View All
        <ChevronRight className="w-6 h-6" />
      </Button>
    </div>
  )
}
SectionDescription.displayName = 'SectionDescription'
