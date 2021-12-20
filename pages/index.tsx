import type { NextPage } from 'next'

import { Avatar, Text, VStack } from '@chakra-ui/react'

import { Section } from '@foundations'

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <Text fontSize="4xl" maxW={{ base: 'full', md: '70%' }}>
          Hey there 👋 My name is{' '}
          <Text
            as="span"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
            sx={{
              backgroundImage: 'linear-gradient(45deg, var(--base) 25%, var(--complimentary-2))',
            }}
          >
            Nathaly
          </Text>{' '}
          and I&apos;m an Electronic Engineer and Frontend Developer
        </Text>

        <Avatar name="Nathaly Riaño Bejarano" size="2xl" src="/ProfileNathaly.jpg" />
      </Section>

      <Section>
        <Text fontSize="2xl" maxW={{ base: 'full', md: '70%' }}>
          I have a solid knowledge of concepts, principles and practices of engineering and web
          development that allow me to create readable, reusable, maintainable and scalable code
          with the main objective of providing a quality product by achieving an organized and
          standardized project
        </Text>
      </Section>

      <Section>
        <Text fontSize="2xl" maxW={{ base: 'full', md: '70%' }}>
          I&apos;m an experienced developer, primarily with the JavaScript ecosystem, who found the
          &apos;click&apos; with React.js and the Component Driven Development (CDD) methodology
        </Text>
        <Text fontSize="2xl" maxW={{ base: 'full', md: '70%' }}>
          Writing CSS and achieving pixel perfect layouts are my hobbies, always with the responsive
          adaptability in mind, based on Width and Height
        </Text>
      </Section>

      <Section>
        <Text fontSize="2xl" maxW={{ base: 'full', md: '70%' }}>
          Creating digital products/services is my main motivation right now; my short-term career
          goal is to become a Creative Developer - I want to achieve incredible end-user experiences
          through web interactions that synchronize the storytelling
        </Text>
      </Section>

      <VStack
        borderColor="black"
        borderRadius={{ base: 'md', md: 'lg' }}
        borderWidth={2}
        fontSize="lg"
        maxW={{ base: 'full', md: '70%' }}
        p={{ base: '2', md: '4' }}
        textAlign="center"
      >
        <Text>
          I&apos;m really passionate about technology, electronics and software development
        </Text>
        <Text>DX 🔥 UX</Text>
      </VStack>
    </>
  )
}

export default Home
