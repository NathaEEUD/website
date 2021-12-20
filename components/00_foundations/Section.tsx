import { HStack, useStyleConfig } from '@chakra-ui/react'

export const Section = (props: any) => {
  const styles = useStyleConfig('Section')

  return (
    <HStack
      __css={styles}
      as="section"
      h="calc(85vh - 5rem)"
      justify="space-between"
      mt={10}
      // spacing={10}
      w="full"
      {...props}
    />
  )
}
