'use client'

const SplashScreen = () => {
  return (
    <div className='fixed inset-0 isolate bg-background'>
      <div className='absolute inset-0 z-10 grid grid-cols-2 grid-rows-2'>
        <SplashCard delay={500} />
        <SplashCard delay={700} />
        <SplashCard delay={900} />
        <SplashCard delay={1100} />
      </div>
    </div>
  )
}

export default SplashScreen

interface SplashCardProps {
  delay?: number
}

const SplashCard = (props: SplashCardProps) => {
  const delay = props.delay ?? 0

  return (
    <div
      className={`relative h-full w-full border border-primary-muted bg-background-darker duration-1000 will-change-transform animate-out slide-in-from-top-96 [animation-delay:${delay}ms]`}
    ></div>
  )
}

// [box-shadow:4px_4px_85px_-7px_#000000]
