import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/provider'

import '@fontsource/red-hat-display/700.css'
import '@fontsource/source-sans-pro/400.css'
import { Fonts, theme, ThemeProvider } from '@foundations'
import '../components/00_foundations/styles.css'
import { MainLayout } from '@templates'

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider>
        <Fonts />
        <MainLayout router={router}>
          <Component {...pageProps} key={router.route} />
        </MainLayout>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default Website
