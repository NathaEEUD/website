import {
  SiChakraui,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReacttable,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si'

import { IItem } from './types'

export const favoriteTechStack: Array<IItem> = [
  {
    icon: SiJavascript,
    label: 'JavaScript',
  },
  {
    icon: SiTypescript,
    label: 'TypeScript',
  },
  {
    icon: SiReact,
    label: 'React.js',
  },
  {
    icon: SiNextdotjs,
    label: 'Next.js',
  },
  {
    icon: SiCss3,
    label: 'CSS',
  },
  {
    icon: SiStyledcomponents,
    label: 'Styled Components',
  },
  {
    icon: SiChakraui,
    label: 'Chakra UI',
  },
  {
    icon: SiReacttable,
    label: 'React Query',
  },
  {
    icon: SiReacttable,
    label: 'React Table',
  },
]

export const priorityCourses: Array<IItem> = [
  {
    label: 'Three.js',
  },
  {
    label: 'Creative Frontend',
  },
  {
    label: 'web Optimization',
  },
  {
    label: 'Webflow',
  },
  {
    label: 'Blender',
  },
]
