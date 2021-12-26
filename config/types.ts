import { IconType } from 'react-icons'

export interface IItem {
  icon?: IconType
  label: string
}

interface ITimelineItemContent {
  img?: string
  title: string
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
  content?: Array<ITimelineItemContent>
}
