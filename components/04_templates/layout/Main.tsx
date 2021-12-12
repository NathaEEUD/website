import { Box, Container, VStack, chakra } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { NextRouter } from 'next/router'
import React from 'react'

import { Navbar } from '@organisms'

const PixiBackground = dynamic<React.ReactNode>(
  () => import('../../03_organisms/pixi-background/PixiBackground').then(mod => mod.PixiBackground),
  {
    ssr: false,
  },
)

const ChakraPixiBackground = chakra(PixiBackground)

interface Props {
  children: React.ReactNode
  router: NextRouter
}

const main: React.FC<Props> = ({ children, router }) => {
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

      <ChakraPixiBackground
        bottom="0"
        h="full"
        left="0"
        position="fixed"
        right="0"
        top="0"
        w="full"
        zIndex="hide"
      />

      {/* <ChakraSvgBackground
        bottom="0"
        h="full"
        left="0"
        position="fixed"
        right="0"
        top="0"
        w="full"
        zIndex="hide"
      /> */}
    </Box>
  )
}

export default main
