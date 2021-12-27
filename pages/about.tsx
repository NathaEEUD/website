import type { NextPage } from 'next'

import { Avatar, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'

import { Lottie } from '@atoms'
import { Section } from '@foundations'
import { List } from '@molecules'
import { Blockquote } from 'components/00_foundations/Blockquote'
import { priorityCourses } from 'config'

const MotionText = motion(Text)
const MotionAvatar = motion(Avatar)

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>NasteRBoost | About</title>
      </Head>

      <Section>
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          initial={{ y: -50, opacity: 0 }}
          maxW={{ base: 'full', md: '60%' }}
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
          and a true lover of Remote Work... I have two 🐶 🐶 and I enjoy their unconditional love
          and company!
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
            I&apos;m really passionate about creative and interactive development, design and motion
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
              Hardware + Software
            </Text>
          </MotionText>
        </Blockquote>
      </Section>

      <Section>
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          initial={{ y: -50, opacity: 0 }}
          maxW={{ base: 'full', md: '50%' }}
          transition={{ duration: 1 }}
        >
          As an electronic engineer and software developer, I like to merge technology, design and
          movement, which is why I&apos;m interested in fields such as IoT, AR, and VR.
        </MotionText>

        <Lottie path="/lottie-virtual-reality.json" w="full" />
      </Section>

      <Section>
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          initial={{ y: -50, opacity: 0 }}
          maxW={{ base: 'full', md: '80%' }}
          transition={{ duration: 1 }}
        >
          My mind is always looking for a requirement / need / problem and planting solutions
          through technology to improve our society, that is why I have a deep desire to excel and
          continually improve my knowledge
        </MotionText>
      </Section>

      <Section>
        <Blockquote
          flexDirection="column"
          sx={{
            gap: '40px',
          }}
        >
          <MotionText
            animate={{ y: 0, opacity: 1 }}
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            initial={{ y: -50, opacity: 0 }}
            maxW={{ base: 'full', md: '80%' }}
            textAlign="center"
            transition={{ duration: 1 }}
          >
            The priority{' '}
            <Text
              as="span"
              bgClip="text"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="extrabold"
              sx={{
                backgroundImage: 'linear-gradient(45deg, var(--base) 25%, var(--complimentary-2))',
              }}
            >
              courses
            </Text>{' '}
            that are in my curriculum are
          </MotionText>

          <List items={priorityCourses} />
        </Blockquote>
      </Section>
    </>
  )
}

export default About
