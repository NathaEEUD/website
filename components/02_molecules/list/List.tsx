import { List as ChakraList, ListIcon, ListItem, PropsOf } from '@chakra-ui/react'
import React from 'react'

import { IItem } from 'config'

type Props = PropsOf<typeof ChakraList> & {
  items: Array<IItem>
}

export const List: React.FC<Props> = props => {
  const { items, ...rest } = props

  return (
    <ChakraList
      alignItems="center"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      {...rest}
    >
      {items.map(item => (
        <ListItem
          key={item.label}
          alignItems="center"
          backgroundColor="whiteAlpha.500"
          border="none"
          borderBottomRightRadius="md"
          borderTopLeftRadius="md"
          display="flex"
          fontSize={{ base: 'xs', md: 'xl' }}
          fontWeight="bold"
          m={{ base: '1', md: '2' }}
          px="4"
          py="2"
        >
          {item?.icon && <ListIcon as={item.icon} />}
          {item.label}
        </ListItem>
      ))}
    </ChakraList>
  )
}
