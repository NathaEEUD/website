import { Badge, chakra, Flex, Heading, PropsOf, Text } from '@chakra-ui/react'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import { ITimelineItem } from 'config'
import 'react-vertical-timeline-component/style.min.css'

type Props = PropsOf<typeof Flex> & {
  items?: Array<ITimelineItem>
}

const ChakraVerticalTimeline = chakra(VerticalTimeline)
const ChakraVerticalTimelineElement = chakra(VerticalTimelineElement)

export const Timeline: React.FC<Props> = props => {
  const { items, ...rest } = props

  const Icon = (props: any) => {
    const { icon } = props
    const TheIcon = icon

    return <TheIcon {...props} />
  }

  return (
    <ChakraVerticalTimeline
      sx={{
        ':before': {
          backgroundImage: 'linear-gradient(45deg, var(--base) 25%, var(--complimentary-2))',
        },
      }}
      {...rest}
    >
      {items?.map(item => (
        <ChakraVerticalTimelineElement
          key={item?.title}
          date={item?.date}
          head={true}
          icon={<Icon icon={item.icon} />}
          iconStyle={{
            backgroundImage: 'linear-gradient(45deg, var(--base) 25%, var(--complimentary-2))',
            color: '#fff',
          }}
        >
          <Heading as="h3" size={{ base: 'xs', md: 'md' }}>
            {item.title}
            {item.badge && (
              <Badge colorScheme="purple" display="block" maxW="max-content" my="0.5">
                {item.badge}
              </Badge>
            )}
          </Heading>
          <Heading as="h6" size="xs">
            {item.subtitle}
          </Heading>
          <Text>{item.description}</Text>
        </ChakraVerticalTimelineElement>
      ))}
    </ChakraVerticalTimeline>
  )
}
