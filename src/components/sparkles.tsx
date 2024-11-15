'use client'

import useRandomInterval from '@/hooks/useRandomInterval'
import { randomInt } from '@/lib/utils'
import { useState } from 'react'
import { SparkleStar } from './icons/SparkleStar'

// Default color is a bright yellow
const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)'

const generateSparkle = (color = DEFAULT_COLOR) => {
  return {
    id: String(randomInt(10000, 99999)) + Date.now(),
    createdAt: Date.now(),
    color,
    size: randomInt(6, 16),
    style: {
      // Pick a random spot in the available space
      top: randomInt(0, 100) + '%',
      left: randomInt(0, 100) + '%',
      // Float sparkles above sibling content
      zIndex: 2,
    },
  }
}

type Sparkle = ReturnType<typeof generateSparkle>

const Sparkles: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useRandomInterval(
    () => {
      const now = Date.now()
      // Create a new sparkle
      const sparkle = generateSparkle()
      // Clean up any "expired" sparkles
      const nextSparkles = sparkles.filter(sparkle => {
        const delta = now - sparkle.createdAt
        return delta < 4000
      })
      // Include our new sparkle
      nextSparkles.push(sparkle)
      // Make it so!
      setSparkles(nextSparkles)
    },
    200,
    500,
  )

  return (
    <span className='relative inline-block leading-none'>
      {sparkles.map(sparkle => (
        <SparkleStar
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <strong className='relative z-[1] inline-block font-bold'>
        {children}
      </strong>
    </span>
  )
}

export default Sparkles
