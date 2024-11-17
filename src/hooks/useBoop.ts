// import { SpringConfig, useSpring } from '@react-spring/web'
// import React from 'react'

// export type BoopConfig = {
//   x?: number
//   y?: number
//   rotation?: number
//   scale?: number
//   timing?: number
//   springConfig?: SpringConfig
// }

// const DEFAULT_CONFIG: BoopConfig = {
//   x: 0,
//   y: 0,
//   rotation: 0,
//   scale: 1,
//   timing: 150,
//   springConfig: {
//     tension: 700,
//     friction: 10,
//   },
// }

// function useBoop(config?: BoopConfig) {
//   const [isBooped, setIsBooped] = React.useState(false)
//   const values = config ? config : DEFAULT_CONFIG

//   const {
//     x = DEFAULT_CONFIG.x,
//     y = DEFAULT_CONFIG.y,
//     rotation = DEFAULT_CONFIG.rotation,
//     scale = DEFAULT_CONFIG.scale,
//     timing = DEFAULT_CONFIG.timing,
//     springConfig = DEFAULT_CONFIG.springConfig,
//   } = values

//   const style = useSpring({
//     transform: isBooped
//       ? `translate(${x}px, ${y}px)
//          rotate(${rotation}deg)
//          scale(${scale})`
//       : `translate(0px, 0px)
//          rotate(0deg)
//          scale(1)`,
//     config: springConfig,
//   })

//   React.useEffect(() => {
//     if (!isBooped) {
//       return
//     }

//     const timeoutId = window.setTimeout(() => {
//       setIsBooped(false)
//     }, timing)

//     return () => {
//       window.clearTimeout(timeoutId)
//     }
//   }, [isBooped, timing])

//   const trigger = React.useCallback(() => {
//     setIsBooped(true)
//   }, [])

//   return { style, trigger }
// }

// export default useBoop
