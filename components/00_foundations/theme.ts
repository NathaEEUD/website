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

export default extendTheme({
  config,
  breakpoints,
  styles: {
    global: {
      '*, *:before, *:after': {
        boxSizing: 'border-box',
      },
      'html, body': {
        boxSizing: 'border-box',
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: 'container.lg',
      },
    },
  },
})
