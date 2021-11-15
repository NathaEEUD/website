import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  PropsOf,
} from '@chakra-ui/react'
import React from 'react'

import { INavItem, NavItem } from '@molecules'
import { Logo, ThemeToggle } from '@atoms'

type Props = PropsOf<typeof Box> & {
  path: string
}

const navItems: INavItem[] = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Works',
    href: '/works',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Source',
    href: 'https://github.com/NathaEEUD',
  },
]

export const Navbar: React.FC<Props> = props => {
  const { path, ...rest } = props

  return (
    <Box as="nav" position="fixed" w="full" zIndex="docked" {...rest}>
      <Container>
        <HStack align="center" justify="space-between" my={4}>
          <HStack spacing={8}>
            <Logo />

            <HStack spacing={4}>
              {navItems.map(navItem => (
                <NavItem key={navItem.href} href={navItem.href} label={navItem.label} path={path} />
              ))}
            </HStack>
          </HStack>

          <HStack spacing={4}>
            <ThemeToggle />

            <Box display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy>
                <MenuButton
                  aria-label="Options"
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  {navItems.map(navItem => (
                    <NavItem
                      key={navItem.href}
                      isMenuItem
                      href={navItem.href}
                      label={navItem.label}
                      path={path}
                    />
                  ))}
                </MenuList>
              </Menu>
            </Box>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}
