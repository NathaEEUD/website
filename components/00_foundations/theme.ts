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
  heading: `'Plain Light', sans-serif`,
  body: `'Canela Web', serif`,
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
      fontFamily: `'Plain Light', sans-serif`,
      fontWeight: 700,
    },
  },
  Blockquote: {
    baseStyle: {
      width: '100%',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      borderRadius: 'xl',
      boxShadow: '0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1)',
    },
    variants: {
      featured: {
        background: 'rgba(255, 255, 255, 0.375)',
        backdropFilter: 'blur(4px)',
      },
    },
    defaultProps: {
      variant: 'featured',
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
