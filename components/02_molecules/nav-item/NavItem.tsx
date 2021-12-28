import { Link, MenuItem, PropsOf, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { VscGithub } from 'react-icons/vsc'

export type Props = PropsOf<typeof Link> & {
  label: string
  href: string
  path?: string
  isMenuItem?: boolean
}

export const NavItem: React.FC<Props> = props => {
  const { label, href, path, isMenuItem, ...rest } = props

  const active = href === path
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  if (isMenuItem) {
    if (label === 'Source') {
      return (
        <NextLink passHref href={href} scroll={true}>
          <MenuItem
            _target="blank"
            align="center"
            as={Link}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            display="inline-flex"
            style={{ gap: 4 }}
            {...rest}
          >
            <VscGithub />
            {label}
          </MenuItem>
        </NextLink>
      )
    }

    return (
      <NextLink passHref href={href}>
        <MenuItem
          as={Link}
          bg={active ? 'grassTeal' : undefined}
          color={active ? '#202023' : inactiveColor}
          {...rest}
        >
          {label}
        </MenuItem>
      </NextLink>
    )
  } else {
    if (label === 'Source') {
      return (
        <NextLink passHref href={href}>
          <Link
            _target="blank"
            alignItems="center"
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            display="inline-flex"
            style={{ gap: 4 }}
            {...rest}
          >
            <VscGithub />
            {label}
          </Link>
        </NextLink>
      )
    }

    return (
      <NextLink passHref href={href}>
        <Link
          bg={active ? 'grassTeal' : undefined}
          color={active ? '#202023' : inactiveColor}
          {...rest}
        >
          {label}
        </Link>
      </NextLink>
    )
  }
}
