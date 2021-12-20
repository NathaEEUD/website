import { Box, Container, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { NextRouter } from 'next/router'
import React from 'react'

import { Navbar } from '@organisms'
import { ThemeActionKind, useTheme } from '@foundations'

const PixiBackground = dynamic<React.ReactNode>(
  () => import('../../03_organisms/pixi-background/PixiBackground').then(mod => mod.PixiBackground),
  {
    ssr: false,
  },
)

interface Props {
  children: React.ReactNode
  router: NextRouter
}

const Main: React.FC<Props> = ({ children, router }) => {
  const { dispatch } = useTheme()

  React.useEffect(() => {
    dispatch({
      type: ThemeActionKind.UPDATE_COLOR_PALETTE,
    })
  }, [])

  return (
    <Box as="main">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Nathaly's homepage" name="description" />
        <meta content="Nathaly" name="author" />
        <meta content="nasterboost" name="author" />
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@nasterboost" name="twitter:site" />
        <meta content="@nasterboost" name="twitter:creator" />
        <meta content="Nathaly's Homepage" property="og:site_name" />
        <meta content="website" property="og:type" />
        <title>NasteRBoost | Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container pt={20}>
        <VStack spacing={10}>{children}</VStack>
      </Container>

      <PixiBackground />
    </Box>
  )
}

export default Main
