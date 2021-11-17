import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/provider'
import '@fontsource/red-hat-display/600.css'
import '@fontsource/source-sans-pro/400.css'

import { theme } from '@foundations'
import { MainLayout } from '@templates'

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout router={router}>
        <Component {...pageProps} key={router.route} />
      </MainLayout>
    </ChakraProvider>
  )
}

export default Website
