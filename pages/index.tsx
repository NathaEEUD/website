import type { NextPage } from 'next'

import { Avatar, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { Section } from '@foundations'
import { Blockquote } from 'components/00_foundations/Blockquote'

const MotionText = motion(Text)
const MotionAvatar = motion(Avatar)

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          initial={{ y: -50, opacity: 0 }}
          maxW={{ base: 'full', md: '50%' }}
          transition={{ duration: 1 }}
        >
          Hey there 👋 My name is{' '}
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
          and I&apos;m an Electronic Engineer and Frontend Developer
        </MotionText>

        <MotionAvatar
          animate={{ x: 0, opacity: 1 }}
          h={{ base: '40', md: '3xs', lg: '2xs' }}
          initial={{ x: 50, opacity: 0 }}
          name="Nathaly Riaño Bejarano"
          src="/ProfileNathaly.jpg"
          transition={{ duration: 0.7, delay: 0.5 }}
          w={{ base: '40', md: '3xs', lg: '2xs' }}
        />
      </Section>

      <Section>
        <Blockquote>
          <MotionText
            animate={{ y: 0, opacity: 1 }}
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            initial={{ y: -50, opacity: 0 }}
            maxW={{ base: 'full', md: '80%' }}
            textAlign="center"
            transition={{ duration: 1 }}
          >
            Writing CSS and achieving pixel perfect layouts are my hobbies, always with the
            responsive adaptability in mind, based on Width and Height
          </MotionText>
        </Blockquote>
      </Section>

      <Section>
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          initial={{ y: -50, opacity: 0 }}
          maxW={{ base: 'full', md: '80%' }}
          transition={{ duration: 1 }}
        >
          I have a solid knowledge of concepts, principles and practices of engineering and web
          development that allow me to create readable, reusable, maintainable and scalable code
          with the main objective of providing a quality product by achieving an organized and
          standardized project
        </MotionText>
      </Section>

      <Section>
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          initial={{ y: -50, opacity: 0 }}
          maxW={{ base: 'full', md: '50%' }}
          transition={{ duration: 1 }}
        >
          I&apos;m an experienced developer, primarily with the JavaScript ecosystem, who found the
          &apos;click&apos; with React.js and the Component Driven Development (CDD) methodology
        </MotionText>
        {/* TODO: Add CDD gif */}
      </Section>

      <Section>
        <Blockquote>
          <MotionText
            animate={{ y: 0, opacity: 1 }}
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            initial={{ y: -50, opacity: 0 }}
            maxW={{ base: 'full', md: '80%' }}
            textAlign="center"
            transition={{ duration: 1 }}
          >
            I&apos;m really passionate about technology, electronics and software development
            <br />
            <Text
              as="span"
              bgClip="text"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="extrabold"
              sx={{
                backgroundImage: 'linear-gradient(45deg, var(--base) 25%, var(--complimentary-2))',
              }}
            >
              DX
            </Text>{' '}
            🔥{' '}
            <Text
              as="span"
              bgClip="text"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="extrabold"
              sx={{
                backgroundImage: 'linear-gradient(45deg, var(--base) 25%, var(--complimentary-2))',
              }}
            >
              UX
            </Text>
          </MotionText>
        </Blockquote>
      </Section>

      <Section>
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          initial={{ y: -50, opacity: 0 }}
          maxW={{ base: 'full', md: '80%' }}
          transition={{ duration: 1 }}
        >
          Creating digital products/services is my main motivation right now; my short-term career
          goal is to become a Creative Developer - I want to achieve incredible end-user experiences
          through web interactions that synchronize the storytelling
        </MotionText>
      </Section>
    </>
  )
}

export default Home
