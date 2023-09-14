import { Box, PropsOf, ThemingProps, useStyleConfig } from '@chakra-ui/react'
import { Dict } from '@chakra-ui/utils'
import React from 'react'

type Props = PropsOf<typeof Box> & {
  variant?: ThemingProps<string> & Dict<any>
}

export const Blockquote: React.FC<Props> = props => {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Blockquote', variant)

  return (
    <Box
      __css={styles}
      alignItems="center"
      as="blockquote"
      display="flex"
      h="initial"
      justifyContent="center"
      px={{ base: '6' }}
      py={{ base: '6', md: '8', lg: '10' }}
      w="full"
      {...rest}
    />
  )
}
