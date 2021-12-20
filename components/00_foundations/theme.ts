import { ColorModeOptions, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const config: ColorModeOptions = {
  useSystemColorMode: false,
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
      maxW: 'container.lg',
    },
  },
  Text: {
    baseStyle: {
      fontSize: '2xl',
    },
  },
  Link: {
    baseStyle: {
      fontFamily: 'Red Hat Display',
    },
  },
  Section: {
    baseStyle: {
      background: 'rgba(255, 255, 255, 0.375)',
      boxShadow: '0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1)',
      borderRadius: 'xl',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      backdropFilter: 'blur(4px)',
      padding: '8rem 6rem',
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
