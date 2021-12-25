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
      justifyContent="center"
      px={{ base: '6', md: '16', lg: '20' }}
      py={{ base: '10', md: '22', lg: '24' }}
      w="full"
      {...rest}
    />
  )
}
