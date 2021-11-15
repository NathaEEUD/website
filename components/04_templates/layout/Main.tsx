import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { NextRouter } from 'next/router'
import React from 'react'

import { Navbar } from '@organisms'

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

      <Container pt={14}>{children}</Container>
    </Box>
  )
}

export default main
