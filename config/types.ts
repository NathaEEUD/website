import { IconType } from 'react-icons'

export interface IItem {
  icon?: IconType
  label: string
}

export interface IContent {
  href?: string
  github?: string
  img?: any
  title: string
  badge?: string
  subtitle?: string
  description: string
  technologies: Array<IItem>
}

export interface ITimelineItem {
  title: string
  icon: IconType
  date: string
  badge?: string
  subtitle: string
  description: string
}
