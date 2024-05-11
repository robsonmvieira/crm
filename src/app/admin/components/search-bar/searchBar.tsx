import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Search, Bell, ChevronDown } from 'lucide-react'
import { Input } from '@/components/ui/input'
export default function SearchBar() {
  return (
    <div className="flex justify-between items-center">
      <div
        className="w-[415px] flex 
          flex-row 
          justify-between 
          items-center 
          h-12 
          rounded-xl 
          bg-background 
          px-3 
          py-2 
          text-sm 
          ring-offset-background 
          file:border-0 
          file:bg-transparent 
          file:text-sm 
          file:font-medium 
          placeholder:text-muted-foreground 
          focus-visible:outline-none 
          disabled:cursor-not-allowed 
          disabled:opacity-50
          gap-3"
      >
        <Search className="w-6 h-6" />
        <Input
          placeholder="Search"
          className="h-12
        border-none
            text-muted-foreground 
            focus-visible:ring-0
            focus-visible:ring-offset-0
            pl-0
            text-base
            font-normal
      "
        />
      </div>
      <div className="flex gap-6 items-center">
        <div className="bg-white rounded-2xl p-4">
          <Bell className="w-6 h-6" />
        </div>
        <div className="flex gap-4 items-center bg-white rounded-2xl h-12 px-6 ">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-muted-foreground font-bold">Joe Doe</span>
          <ChevronDown className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

SearchBar.displayName = 'SearchBar'
