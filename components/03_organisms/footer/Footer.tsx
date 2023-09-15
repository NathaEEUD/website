import { Box, Container, HStack, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'

export const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      backdropFilter="saturate(180%) blur(5px)"
      backgroundColor="whiteAlpha.500"
      bottom="0"
      position="fixed"
      py={{ base: '2', md: '4' }}
      w="full"
      zIndex="docked"
    >
      <Container>
        <HStack align="center" justify="space-between">
          <HStack spacing={4}>
            <Link
              isExternal
              aria-label="Go to NasterBoost GitHub page"
              href="https://github.com/NathaEEUD"
            >
              <Icon
                _hover={{ color: 'var(--complimentary-1)' }}
                as={SiGithub}
                display="block"
                h={{ base: '4', md: '5' }}
                transition="color 0.2s"
                w={{ base: '4', md: '5' }}
              />
            </Link>
            <Link
              isExternal
              aria-label="Go to NasterBoost LinkedIn page"
              href="https://www.linkedin.com/in/nasterb/"
            >
              <Icon
                _hover={{ color: 'var(--complimentary-1)' }}
                as={SiLinkedin}
                display="block"
                h={{ base: '4', md: '5' }}
                transition="color 0.2s"
                w={{ base: '4', md: '5' }}
              />
            </Link>
            <Link
              isExternal
              aria-label="Go to NasterBoost Twitter page"
              href="https://twitter.com/nasterboost"
            >
              <Icon
                _hover={{ color: 'var(--complimentary-1)' }}
                as={SiTwitter}
                display="block"
                h={{ base: '4', md: '5' }}
                transition="color 0.2s"
                w={{ base: '4', md: '5' }}
              />
            </Link>
          </HStack>

          <Text fontSize="md">
            Developed by <strong>@nasterboost</strong>
          </Text>
        </HStack>
      </Container>
    </Box>
  )
}
