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
  // {
  //   label: 'About',
  //   href: '/about',
  // },
  {
    label: 'Works',
    href: '/works',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  // {
  //   label: 'Source',
  //   href: 'https://github.com/NathaEEUD',
  // },
]

export const Navbar: React.FC<Props> = props => {
  const { path, ...rest } = props

  return (
    <Box
      as="nav"
      position="fixed"
      w="full"
      zIndex="docked"
      {...rest}
      backdropFilter="saturate(180%) blur(5px)"
      backgroundColor="whiteAlpha.500"
      py={4}
    >
      <Container>
        <HStack align="center" justify="space-between">
          <HStack spacing={10}>
            <Logo />

            <HStack display={{ base: 'none', md: 'flex' }} spacing={5}>
              {navItems.map(navItem => (
                <NavItem key={navItem.href} href={navItem.href} label={navItem.label} path={path} />
              ))}
            </HStack>
          </HStack>

          <HStack spacing={5}>
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
