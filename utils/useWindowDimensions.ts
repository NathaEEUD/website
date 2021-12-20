/**
 * This hook returns the viewport/window height and width
 */

import { useEffect, useState } from 'react'

interface IWindowDimensions {
  width: number | undefined
  height: number | undefined
}

export const useWindowDimensions = (): IWindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
