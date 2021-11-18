import type { NextPage } from 'next'

import { Avatar, Center, Text } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Center
        borderColor="black"
        borderRadius={{ base: 'md', md: 'lg' }}
        borderWidth={2}
        fontSize="lg"
        maxW={{ base: 'full', md: '70%' }}
        p={{ base: '2', md: '4' }}
        textAlign="center"
      >
        Hi 👋 My name is Nathaly and I&apos;m an Electronic Engineer and Frontend Developer
      </Center>

      <Avatar name="Nathaly Riaño Bejarano" size="2xl" src="/ProfileNathaly.jpg" />

      <Text>
        I&apos;m an experienced developer, primarily with the JavaScript ecosystem, who found the
        &apos;click&apos; with React.js and the Component Driven Development (CDD) methodology
      </Text>

      <Text>
        Writing CSS and achieving pixel perfect layouts are my hobbies, always with the responsive
        adaptability in mind - based on Width and Height
      </Text>

      <Center
        borderColor="black"
        borderRadius={{ base: 'md', md: 'lg' }}
        borderWidth={2}
        fontSize="lg"
        maxW={{ base: 'full', md: '70%' }}
        p={{ base: '2', md: '4' }}
        textAlign="center"
      >
        I&apos;m really passionate about technology, electronics and software development
      </Center>

      <Text>
        Creating digital products / services is my main motivation right now; my short-term career
        goal is to become a Creative Developer. I want to achieve incredible end-user experiences
        through web interactions that synchronize the storytelling
      </Text>

      <Text>
        I have a solid knowledge of concepts, principles and practices of engineering and web
        development that allow me to create readable, reusable, maintainable and scalable code with
        the main objective of achieving an organized and standardized project
      </Text>

      <Text>DX 🔥 UX</Text>
    </>
  )
}

export default Home
