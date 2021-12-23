import { Stack } from '@chakra-ui/react'

export const Section = (props: any) => (
  <Stack
    alignItems="center"
    as="section"
    direction={{ base: 'column', md: 'row' }}
    h="100vh"
    justify={{ base: 'center', md: 'space-between' }}
    m="0"
    spacing={{ base: '4', md: '8' }}
    w="full"
    {...props}
    sx={{
      scrollSnapAlign: 'center',
    }}
  />
)
