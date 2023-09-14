import { PropsOf, Text } from '@chakra-ui/react'
import React from 'react'

type Props = PropsOf<typeof Text> & {
  title: string
}

export const Heading: React.FC<Props> = ({ title }) => {
  return (
    <Text
      as="h2"
      bgClip="text"
      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
      fontWeight="extrabold"
      sx={{
        backgroundImage: 'linear-gradient(45deg, var(--base) 25%, var(--complimentary-2))',
      }}
    >
      {title}
    </Text>
  )
}
