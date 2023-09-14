import type { NextPage } from 'next'

import { Avatar, Box, Spacer, Stack, Text, chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion, useViewportScroll } from 'framer-motion'
import React from 'react'

import { Heading, Lottie } from '@atoms'
import { Section } from '@foundations'
import { Blockquote } from 'components/00_foundations/Blockquote'
import { favoriteTechStack } from 'config'
import { List } from '@molecules'

const MotionAvatar = motion(Avatar)

const MotionText = chakra(motion.p, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const Home: NextPage = () => {
  const { scrollYProgress } = useViewportScroll()
  const [hookedYPosition, setHookedYPosition] = React.useState()

  console.log('hookedYPosition ::: ', hookedYPosition)

  React.useEffect(() => {
    // hook into the onChange, store the current value as state
    scrollYProgress.onChange(v => setHookedYPosition(v))
  }, [scrollYProgress])

  return (
    <>
      <Section>
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          initial={{ y: -50, opacity: 0 }}
          maxW={{ base: 'full', md: '60%' }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ duration: 1 }}
        >
          Hey there!
          <br />
          My name is{' '}
          <Text
            as="span"
            bgClip="text"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="extrabold"
            sx={{
              backgroundImage: 'linear-gradient(45deg, var(--base) 25%, var(--complimentary-2))',
            }}
          >
            Nathaly
          </Text>{' '}
          and I&apos;m a passionate Electronic Engineer and Frontend Developer
        </MotionText>

        <MotionAvatar
          animate={{ x: 0, opacity: 1 }}
          h={{ base: '40', md: '3xs', lg: '2xs' }}
          initial={{ x: 50, opacity: 0 }}
          name="Profile picture of Nathaly"
          src="/ProfileNathaly.jpg"
          transition={{ duration: 0.7, delay: 0.5 }}
          w={{ base: '40', md: '3xs', lg: '2xs' }}
        />
      </Section>

      <Section alignItems="start" direction="column" h="initial" justify="center">
        <Heading title="Solutions" />
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          initial={{ y: -50, opacity: 0 }}
          textAlign="left"
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ duration: 1 }}
        >
          My mind is constantly searching for ways to use technology to solve problems and meet
          needs in projects, products, and businesses. This desire to excel and improve my knowledge
          drives me to always be on the lookout for new solutions.
        </MotionText>
      </Section>

      <Section alignItems="start" direction="column" justify="center">
        <Heading title="Quality" />
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          initial={{ y: -50, opacity: 0 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ duration: 1 }}
        >
          I have a solid knowledge of concepts, principles and practices of engineering and software
          development that allow me to create readable, reusable, maintainable and scalable code
          with the main objective of providing a quality product by achieving an organized and
          standardized project
        </MotionText>
      </Section>

      <Section h="initial" mb="2xl">
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          initial={{ y: -50, opacity: 0 }}
          maxW={{ base: 'full', md: '60%' }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ duration: 1 }}
        >
          I&apos;m from{' '}
          <Text
            as="span"
            bgClip="text"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="extrabold"
            sx={{
              backgroundImage: 'linear-gradient(45deg, var(--base) 25%, var(--complimentary-2))',
            }}
          >
            Bogot&aacute;, Colombia
          </Text>{' '}
          , Digital Nomad whenever I can and a true lover of Remote Work!
        </MotionText>

        <MotionAvatar
          animate={{ x: 0, opacity: 1 }}
          h={{ base: '40', md: '3xs', lg: '2xs' }}
          initial={{ x: 50, opacity: 0 }}
          name="Crash Aslan"
          src="/CrashAslan.jpg"
          transition={{ duration: 0.7, delay: 0.5 }}
          w={{ base: '40', md: '3xs', lg: '2xs' }}
        />
      </Section>

      <Box h="40" />

      <Section alignItems="start" direction="column" justify="center">
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          initial={{ y: -50, opacity: 0 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ duration: 1 }}
        >
          I enjoy understanding requirements, addressing doubts, and mapping out thought processes
          before making any decisions on programming languages, frameworks, or libraries.
        </MotionText>
        <Blockquote>
          <Section h="initial">
            <List items={favoriteTechStack} maxW="50%" />
            <Lottie path="/lottie-atomic-design.json" w="full" />
          </Section>
        </Blockquote>
      </Section>

      <Section alignItems="start" direction="column" justify="center">
        <Heading title="Software as a Tool" />
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          initial={{ y: -50, opacity: 0 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ duration: 1 }}
        >
          One of my most notable accomplishments was creating an MVP entirely from scratch, which
          helped a Startup secure admission to YCombinator. I worked alongside them for a year,
          expanding the product.
          <br />
          Through my involvement in numerous projects, I have had the opportunity to explore
          different technologies such as Python, Django, Drupal, Angular, and more to reach my
          primary goal - leveraging software as a tool.
        </MotionText>
      </Section>
    </>
  )
}

export default Home
