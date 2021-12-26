import { MdWork } from 'react-icons/md'
import {
  SiAngular,
  SiBitwig,
  SiBootstrap,
  SiBulma,
  SiChakraui,
  SiContentful,
  SiCss3,
  SiDjango,
  SiDrupal,
  SiExpress,
  SiFigma,
  SiGatsby,
  SiGraphql,
  SiIonic,
  SiJavascript,
  SiJoomla,
  SiJquery,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiReacttable,
  SiSass,
  SiSocketdotio,
  SiStorybook,
  SiStyledcomponents,
  SiTypescript,
  SiZalando,
} from 'react-icons/si'

import { IItem, ITimelineItem } from './types'

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

export const works: Array<ITimelineItem> = [
  {
    icon: MdWork,
    title: 'Protego Solutions',
    date: 'Apr 2021 - Present',
    badge: 'Fulltime',
    subtitle: 'Senior Frontend Developer',
    description:
      'Developer and frontend leader in charge of bringing the MVP to production, ensuring a project with good coding practices, readable, maintainable and scalable during the implementation of new features and refactoring of existing ones. Also, be involved in the search and implementation of technological solutions understanding the business logic, objectives and requirements.',
    content: [
      {
        title: 'Backoffice',
        description: 'Desc',
        technologies: [
          {
            icon: SiFigma,
            label: 'Figma',
          },
          {
            icon: SiStorybook,
            label: 'Storybook',
          },
          {
            icon: SiNextdotjs,
            label: 'Next.js',
          },
          {
            icon: SiTypescript,
            label: 'TypeScript',
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
        ],
      },
    ],
  },
  {
    icon: MdWork,
    title: 'Seico Technology',
    date: 'Apr 2020 - Sep 2020',
    badge: 'Freelance',
    subtitle: 'Frontend Developer',
    description:
      'Leader of the redesign of the user interface of the QualyFlight web application, using the Angular 8 framework and the Atomic Design and Component Based Development methodology for the refactoring of the code.',
  },
  {
    icon: MdWork,
    title: 'CodeLar',
    date: 'Mar 2020 - Jun 2020',
    badge: 'Fulltime',
    subtitle: 'Frontend Developer',
    description:
      'Developer focused on the frontend implementation of CodeLar projects, with UNICEF Colombia being the main one.Led the adoption and implementation of Atomic Design from the Development team to the Design team, which allowed the UNICEF Colombia team to create Landing Pages in a modular and component-based way. I was in charge of optimizing the performance of the main web page, going from a load time greater than 5s to one less than 1.5s. In general, I carried out the analysis of the needs / requirements / problems and contributed in the search and implementation of the solution.',
    content: [
      {
        title: 'UNICEF Colombia',
        description: 'Desc',
        technologies: [
          {
            icon: SiSass,
            label: 'CSS | Sass',
          },
          {
            icon: SiDrupal,
            label: 'Drupal',
          },
          {
            icon: SiBitwig,
            label: 'Twig',
          },
          {
            icon: SiZalando,
            label: 'Lando',
          },
        ],
      },
      {
        title: 'Website CodeLar',
        description: 'Desc',
        technologies: [
          {
            icon: SiFigma,
            label: 'Figma',
          },
          {
            icon: SiStorybook,
            label: 'Storybook',
          },
          {
            icon: SiStyledcomponents,
            label: 'Styled Components',
          },
          {
            icon: SiGraphql,
            label: 'GraphQL',
          },
          {
            icon: SiGatsby,
            label: 'Gatsby',
          },
          {
            icon: SiContentful,
            label: 'Contentful',
          },
        ],
      },
    ],
  },
  {
    icon: MdWork,
    title: 'Robotec',
    date: 'Mar 2019 - Feb 2020',
    badge: 'Fulltime',
    subtitle: 'Fullstack JavaScript Developer',
    description:
      'Web application developer with Angular 8 on the Frontend side and microservices with NodeJs / ExpressJs on the Backend side, with Socket.io and Mongodb for the implementation of real-time communication through Websocket technology.',
    content: [
      {
        title: 'Visitor Control',
        description:
          'Design and development of a web platform for visitor control under the MEAN stack',
        technologies: [
          {
            icon: SiSass,
            label: 'CSS | Sass',
          },
          {
            icon: SiBulma,
            label: 'Bulma CSS',
          },
          {
            icon: SiAngular,
            label: 'Angular 8',
          },
          {
            icon: SiNodedotjs,
            label: 'Node.js',
          },
          {
            icon: SiExpress,
            label: 'Express.js',
          },
          {
            icon: SiMongodb,
            label: 'MongoDB',
          },
          {
            icon: SiSocketdotio,
            label: 'Socket.io',
          },
        ],
      },
      {
        title: 'Transcriber',
        description:
          'Design and development of a web platform for the transcription of audio or video together with a text editor under the MEAN stack',
        technologies: [
          {
            icon: SiSass,
            label: 'CSS | Sass',
          },
          {
            icon: SiBulma,
            label: 'Bulma CSS',
          },
          {
            icon: SiAngular,
            label: 'Angular 8',
          },
          {
            icon: SiNodedotjs,
            label: 'Node.js',
          },
          {
            icon: SiExpress,
            label: 'Express.js',
          },
          {
            icon: SiMongodb,
            label: 'MongoDB',
          },
          {
            icon: SiSocketdotio,
            label: 'Socket.io',
          },
        ],
      },
    ],
  },
  {
    icon: MdWork,
    title: 'Universidad Distrital',
    date: 'Aug 2018 - Dec 2018',
    badge: 'Contractor',
    subtitle: 'Frontend Developer',
    description:
      'Web application developer in charge of carrying out the technical management, administration and updating of the RITA website and developing, maintaining and supervising software solutions that support research projects and some processes of the District University dependencies.',
    content: [
      {
        title: 'Website RITA',
        description:
          'In charge of carrying out the technical management, administration and updating of the RITA website',
        technologies: [
          {
            icon: SiBootstrap,
            label: 'Bootstrap',
          },
          {
            icon: SiJoomla,
            label: 'Joomla',
          },
          {
            icon: SiJquery,
            label: 'Jquery',
          },
          {
            icon: SiIonic,
            label: 'Ionic',
          },
          {
            icon: SiPython,
            label: 'Python',
          },
          {
            icon: SiDjango,
            label: 'Django',
          },
        ],
      },
      {
        title: 'Electronic Voting',
        description:
          'Support in the layout of the project interfaces for the registration process and system elections of the district system of culture, recreation and sports (SDCAP and DRAFE)',
        technologies: [
          {
            icon: SiSass,
            label: 'CSS | Sass',
          },
          {
            icon: SiReact,
            label: 'React.js',
          },
        ],
      },
    ],
  },
]
