import Image from 'next/image'

function Banner() {
  return (
    <div className="bg-blue-450 h-full min-h-screen w-full">
      <div className="mt-[60px] ml-24 flex flex-col gap-11">
        <div className="flex gap-7">
          <Image
            src={'/shared/logo.svg'}
            fetchPriority="low"
            width={56}
            height={56}
            alt="logo"
          />
          <Image
            src={'/banner-auth/Woorkroom.svg'}
            fetchPriority="low"
            width={146}
            height={41}
            alt="logo title"
          />
        </div>
        <div className="max-w-[300px]">
          <h1 className="text-white text-3xl font-bold">
            Your place to work Plan. Create. Control.
          </h1>
        </div>

        <div>
          <Image
            src={'/banner-auth/Illustration.svg'}
            fetchPriority="low"
            width={500}
            height={373}
            alt="Illustration"
          />
        </div>
      </div>
    </div>
  )
}

export { Banner }

Banner.displayName = 'BannerLogin'
