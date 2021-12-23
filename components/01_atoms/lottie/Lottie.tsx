import type { LottiePlayer } from 'lottie-web'

import { Box, PropsOf } from '@chakra-ui/react'
import React from 'react'

type Props = PropsOf<typeof Box> & {
  path: string
}

export const Lottie: React.FC<Props> = props => {
  const { path, ...rest } = props
  const ref = React.useRef<HTMLDivElement>(null)
  const [lottie, setLottie] = React.useState<LottiePlayer | null>(null)

  React.useEffect(() => {
    import('lottie-web').then(Lottie => setLottie(Lottie.default))
  }, [])

  React.useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path,
      })

      return () => animation.destroy()
    }
  }, [lottie, path])

  return <Box ref={ref} {...rest} />
}
