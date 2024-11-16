'use client'

import useBoop, { BoopConfig } from '@/hooks/useBoop'
import { animated } from '@react-spring/web'

interface BoopProps {
  children: React.ReactNode
  config?: BoopConfig
}

const Boop = ({ children, config = { rotation: 10 } }: BoopProps) => {
  const { style, trigger } = useBoop(config)

  return (
    <animated.span
      onMouseEnter={() => trigger()}
      style={style}
      className='will-change-transform'
    >
      {children}
    </animated.span>
  )
}

export default Boop
