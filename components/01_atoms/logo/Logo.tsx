import { Heading, Link } from '@chakra-ui/react'
import '@fontsource/comforter-brush'
import { motion, useViewportScroll } from 'framer-motion'
import NextLink from 'next/link'
import React from 'react'

export const Logo: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const [hookedYPostion, setHookedYPosition] = React.useState(0)

  const transition = {
    duration: 0.4,
    delay: 0.2,
    ease: 'easeInOut',
  }

  const variants = {
    hidden: {
      width: '0px',
      scale: 0,
      opacity: 0,
      transition,
    },
    show: {
      width: '38.6px',
      scale: 1,
      opacity: 1,
      transition,
    },
  }

  React.useEffect(() => {
    // hook into the onChange, store the current value as state
    scrollYProgress.onChange(v => setHookedYPosition(v))
  }, [scrollYProgress])

  return (
    <NextLink passHref href="/">
      <Link _focus={{ boxShadow: 'none' }} _hover={{ textDecoration: 'none' }}>
        <Heading as="h1" fontFamily="Comforter Brush">
          N
          <motion.span
            animate={hookedYPostion < 0.1 ? 'show' : 'hidden'}
            exit="hidden"
            initial="show"
            style={{ display: 'inline-flex' }}
            variants={variants}
          >
            aste
          </motion.span>
          RB
          <motion.span
            animate={hookedYPostion < 0.1 ? 'show' : 'hidden'}
            exit="hidden"
            initial="show"
            style={{ display: 'inline-flex' }}
            variants={variants}
          >
            oost
          </motion.span>
        </Heading>
      </Link>
    </NextLink>
  )
}
