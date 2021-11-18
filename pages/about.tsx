import type { NextPage } from 'next'

import { Center } from '@chakra-ui/react'

const About: NextPage = () => {
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
        I&apos;m from Bogot&aacute;, Colombia and a true lover of Remote Work
        <br />I have two 🐶 🐶 and I enjoy their unconditional love and company!
      </Center>
    </>
  )
}

export default About
