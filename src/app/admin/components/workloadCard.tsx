import Image from 'next/image'

function WorkloadCard() {
  return (
    <div
      className="
      flex 
      flex-col 
    justify-center
      items-center 
      rounded-2xl 
      bg-blue-75 
      mt-4
      w-[175px]
      
      "
    >
      {/* Fallback */}
      {/* <div className="w-16 h-16 rounded-full bg-slate-300 mt-4 flex justify-center items-center">
        <span className="text-base font-bold text-slate-450">JR</span>
      </div> */}

      <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-300 mt-4 flex justify-center items-center">
        <Image
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Picture of the author"
          width={64}
          height={64}
          className="rounded-full overflow-hidden w-16 h-16 object-cover max-w-16 max-h-16"
        />
      </div>
      <div className="w-full mt-4 flex items-center flex-col">
        <h4 className="text-base font-bold text-slate-950">James Rodriguez</h4>
        <span className="text-sm mt-1 font-light text-muted-foreground">
          Project Manager
        </span>
        <div className="my-4 border-2 border-slate-450 py-2 px-2 rounded-xl">
          <span className="font-semibold text-xs text-slate-450">Senior</span>
        </div>
      </div>
    </div>
  )
}

export { WorkloadCard }

WorkloadCard.displayName = 'WorkloadCard'
