import { ColorModeOptions, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const config: ColorModeOptions = {
  useSystemColorMode: true,
}

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
})

const fonts = {
  heading: 'Red Hat Display',
  body: 'Source Sans Pro',
}

const styles = {
  global: {
    '*, *:before, *:after': {
      boxSizing: 'border-box',
    },
    'html, body': {
      boxSizing: 'border-box',
    },
  },
}

const components = {
  Container: {
    baseStyle: {
      maxW: 'container.md',
    },
  },
  Text: {
    baseStyle: {
      fontSize: '2xl',
    },
  },
}

export default extendTheme({
  config,
  breakpoints,
  fonts,
  styles,
  components,
})
