import { Center, useStyleConfig } from '@chakra-ui/react'

export const Blockquote = (props: any) => {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Blockquote', variant)

  return (
    <Center
      __css={styles}
      as="blockquote"
      px={{ base: '18', md: '22', lg: '24' }}
      py={{ base: '20', md: '28', lg: '32' }}
      {...rest}
    />
  )
}
