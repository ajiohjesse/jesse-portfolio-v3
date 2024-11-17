// 'use client'

// import useBoop, { BoopConfig } from '@/hooks/useBoop'
// import { cn } from '@/lib/utils'
// import { animated } from '@react-spring/web'

// interface BoopProps {
//   children: React.ReactNode
//   config?: BoopConfig
//   className?: string
// }

// const Boop = ({ children, className, config = { scale: 1.08 } }: BoopProps) => {
//   const { style, trigger } = useBoop(config)

//   return (
//     <animated.span
//       onMouseEnter={() => trigger()}
//       style={style}
//       className={cn('w-fit will-change-transform', className)}
//     >
//       {children}
//     </animated.span>
//   )
// }

// export default Boop
