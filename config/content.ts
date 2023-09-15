import { MdComputer } from 'react-icons/md'
import {
  SiAngular,
  SiBitwig,
  SiBootstrap,
  SiBulma,
  SiChakraui,
  SiContentful,
  SiCss3,
  SiDrupal,
  SiExpress,
  SiFigma,
  SiGatsby,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReacttable,
  SiSass,
  SiSocketdotio,
  SiStorybook,
  SiStyledcomponents,
  SiTypescript,
  SiZalando,
  SiPython,
  SiDjango,
  SiDocker,
  SiPostgresql,
} from 'react-icons/si'
import { FiBarChart } from 'react-icons/fi'

import { IContent, IItem, ITimelineItem } from './types'

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
  {
    icon: SiPython,
    label: 'Python',
  },
  {
    icon: SiDjango,
    label: 'Django',
  },
  {
    icon: SiDocker,
    label: 'Docker',
  },
  {
    icon: SiPostgresql,
    label: 'SQL',
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
    icon: MdComputer,
    title: 'NovoEd',
    date: 'May 2022 - Present',
    badge: 'Fulltime',
    subtitle: 'Software Engineer',
    description: `Software Engineer in charge of developing frontend features for NovoEd, this includes analyzing requirements, planning, executing, conducting quality assurance checks, and shipping to production. I work with a primary stack that includes Angular, React, Typescript, Redux, RTK, and Storybook. In addition to supporting the legacy codebase, I am also working towards migrating from Angular to React and improving performance to decrease the platform's load speed.`,
  },
  {
    icon: MdComputer,
    title: 'Protego Solutions',
    date: 'Apr 2021 - Apr 2022',
    badge: 'Freelance -> Fulltime',
    subtitle: 'Senior Frontend Developer',
    description:
      'Developer and frontend leader in charge of bringing the MVP to production, ensuring a project with good coding practices, readable, maintainable and scalable during the implementation of new features and refactoring of existing ones. Also, be involved in the search and implementation of technological solutions understanding the business logic, objectives and requirements.',
  },
  {
    icon: MdComputer,
    title: 'Seico Technology',
    date: 'Apr 2020 - Sep 2020',
    badge: 'Freelance',
    subtitle: 'Frontend Developer',
    description:
      'Leader of the redesign of the user interface of the QualyFlight web application, using the Angular 8 framework and the Atomic Design and Component Based Development methodology for the refactoring of the code.',
  },
  {
    icon: MdComputer,
    title: 'CodeLar',
    date: 'Mar 2020 - Jun 2020',
    badge: 'Fulltime',
    subtitle: 'Frontend Developer',
    description:
      'Developer focused on the frontend implementation of CodeLar projects, with UNICEF Colombia being the main one. In general, I carried out the analysis of the needs / requirements / problems and contributed in the search and implementation of the solution.',
  },
  {
    icon: MdComputer,
    title: 'Robotec',
    date: 'Mar 2019 - Feb 2020',
    badge: 'Fulltime',
    subtitle: 'Fullstack JavaScript Developer',
    description:
      'Web application developer with Angular 8 on the Frontend side and microservices with NodeJs / ExpressJs on the Backend side, with Socket.io and Mongodb for the implementation of real-time communication through Websocket technology.',
  },
  {
    icon: MdComputer,
    title: 'Universidad Distrital',
    date: 'Aug 2018 - Dec 2018',
    badge: 'Contractor',
    subtitle: 'Frontend Developer',
    description:
      'Web application developer in charge of carrying out the technical management, administration and updating of the RITA website and developing, maintaining and supervising software solutions, such as the website, developing a scrapper to obtain updated information, the mobile app, among others.',
  },
]

export const projects: Array<IContent> = [
  {
    img: '/protego-mockup.png',
    title: 'Web Platform',
    badge: 'Web Application',
    subtitle: 'Company: Protego Solutions',
    description:
      'Web application to centralize relevant information from companies in order to automate chargeback processes. Software Engineer in charge of bringing the MVP to production. It has the Dashboard and Reports sections, where it is implemented with tables, filters, pagination, loaders and charts.',
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
      {
        icon: FiBarChart,
        label: 'D3.js',
      },
    ],
  },
  {
    href: 'https://rita.udistrital.edu.co/gps/',
    title: 'GNSS Geodetic Station',
    img: '/gnss-mockup.png',
    badge: 'Website',
    subtitle: 'Company: District University',
    description:
      'Redesign and development of the website of the GNSS Geodetic Station of the District University implementing the SQL queries and templates in Django along with Responsive Design and developing an Scrapper to obtain updated data from differents websites',
    technologies: [
      {
        icon: SiHtml5,
        label: 'HTML',
      },
      {
        icon: SiCss3,
        label: 'CSS',
      },
      {
        icon: SiJavascript,
        label: 'Javascript',
      },
      {
        icon: SiBootstrap,
        label: 'Bootstrap',
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
    href: 'https://marvel-store-nasterb.vercel.app/',
    github: 'https://github.com/NathaEEUD/marvel-store',
    img: '/marvel-mockup.png',
    title: 'Marvel Store',
    badge: 'Web Application',
    subtitle: 'Personal Project',
    description:
      'Web application to display the Marvel API comics information. It was developed taking into account the UI and responsive adaptability, component categorization methodology through Atomic Design, search field and filters.',
    technologies: [
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
    ],
  },
  {
    github: 'https://github.com/NathaEEUD/Project-TicTacToe',
    img: '/tictactoe-mockup.png',
    title: 'Tic Tac Toe',
    badge: 'Web Application',
    subtitle: 'Personal Project',
    description:
      'Tic Tac Toe is a multiplayer game implemented with NodeJs, ExpressJs and Socket.io with connection to MongoDb, which, thanks to Websocket technology, allows you to set up rooms for a maximum of two players, show the history of started, tied and won games and the list of games paused with the possibility of resuming them.',
    technologies: [
      {
        icon: SiHtml5,
        label: 'HTML',
      },
      {
        icon: SiCss3,
        label: 'CSS',
      },
      {
        icon: SiJavascript,
        label: 'Javascript',
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
    href: 'https://donaciones.unicef.org.co/',
    img: '/unicef-mockup.png',
    title: 'UNICEF Colombia',
    badge: 'Website',
    subtitle: 'Company: CodeLar',
    description:
      'Led the adoption and implementation of Atomic Design from the Development team to the Design team, which allowed the UNICEF Colombia team to create Landing Pages in a modular and component-based way. I was in charge of optimizing the performance of the main web page, going from a load time greater than 5s to one less than 1.5s.',
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
    href: 'https://codelar.co/',
    img: '/codelar-mockup.png',
    title: 'CodeLar Landing Page',
    badge: 'Website',
    subtitle: 'Company: CodeLar',
    description:
      'In charge of developing and publishing the landing page of the CodeLar company in order to show the projects carried out and achievements.',
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
  {
    title: 'Visitor Control',
    img: '/transcriber-mockup.png',
    badge: 'Web Application',
    subtitle: 'Company: Robotec',
    description:
      'Design and development of a web platform for visitor control under the MEAN stack in order to have scheduling capacity and entry record in real time.',
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
    img: '/visitor-mockup.png',
    badge: 'Web Application',
    subtitle: 'Company: Robotec',
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
  {
    title: 'Electronic Voting',
    img: '/electronic-voting-mockup.png',
    badge: 'Web Application',
    subtitle: 'Company: District University',
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
]
