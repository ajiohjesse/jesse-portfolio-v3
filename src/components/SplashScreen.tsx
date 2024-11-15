'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import Logo from './icons/Logo'
import Signature from './icons/Signature'

const SplashScreen = () => {
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    const activeTimeout = setTimeout(() => {
      setIsActive(false)
    }, 3000)

    return () => {
      clearTimeout(activeTimeout)
    }
  }, [])

  return (
    <div className='pointer-events-none fixed inset-0 isolate z-[999]'>
      <div className='absolute bottom-0 left-0 right-0 top-0 z-10 grid grid-cols-2 grid-rows-3'>
        <SplashCard delay={500} isActive={isActive} />
        <SplashCard delay={700} isActive={isActive} />
        <SplashCard delay={900} isActive={isActive} />
        <SplashCard delay={900} isActive={isActive} />
        <SplashCard delay={800} isActive={isActive} />
        <SplashCard delay={600} isActive={isActive} />
      </div>
      <div className='relative z-10 grid h-full place-items-center p-12'>
        <div
          className={cn(
            'flex flex-col items-center',
            !isActive && 'animate-splash-fade',
          )}
        >
          <Logo className='size-32 text-primary duration-1000 animate-in zoom-in-50 md:size-44' />
          <Signature className='w-[200px] text-primary' data-id='signature' />
          <p className='mt-8 text-sm duration-1000 animate-in zoom-in-50'>
            FULLSTACK DEVELOPER
          </p>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen

interface SplashCardProps {
  isActive: boolean
  delay?: number
}

const SplashCard = (props: SplashCardProps) => {
  const { delay = 0, isActive } = props

  return (
    <div
      className={cn(
        'relative grid h-full w-full place-items-center bg-background-darker p-12 duration-1000 will-change-transform',
        !isActive && 'animate-splash-fade',
      )}
      style={{ animationDelay: `${delay}ms` }}
    ></div>
  )
}

// [box-shadow:4px_4px_85px_-7px_#000000]
