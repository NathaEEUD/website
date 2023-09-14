import { Badge, chakra, Flex, Heading, PropsOf, Text } from '@chakra-ui/react'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import { ITimelineItem } from 'config'

import 'react-vertical-timeline-component/style.min.css'
import { css } from '@emotion/react'

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

  const boxStyles = css`
    .vertical-timeline-element-content {
      border: 1px solid rgba(255, 255, 255, 0.25);
      box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);
      background: rgba(255, 255, 255, 0.375);
      backdrop-filter: blur(4px);

      .vertical-timeline-element-date,
      p {
        font-weight: 600;
      }
    }
  `

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
          css={boxStyles}
          date={item?.date}
          head={true}
          icon={<Icon icon={item.icon} />}
          iconStyle={{
            backgroundImage: 'linear-gradient(45deg, var(--base) 25%, var(--complimentary-2))',
            color: '#fff',
          }}
        >
          <Flex
            direction="column"
            sx={{
              gap: '8px',
            }}
          >
            <Heading
              as="h3"
              bgClip="text"
              fontSize={{ base: 'md' }}
              sx={{
                backgroundImage: 'linear-gradient(45deg, var(--base) 25%, var(--complimentary-2))',
              }}
            >
              {item.title}
            </Heading>
            <Heading as="h6" fontSize={{ base: 'md', md: 'lg' }} fontWeight="extrabold">
              {item.subtitle}
            </Heading>
            {item.badge && (
              <Badge
                display="block"
                fontWeight="700"
                maxW="max-content"
                opacity="0.7"
                p="1"
                sx={{
                  backgroundImage:
                    'linear-gradient(45deg, var(--base) 25%, var(--complimentary-2))',
                  backdropFilter: 'blur(4px)',
                }}
              >
                {item.badge}
              </Badge>
            )}
          </Flex>
          <Text>{item.description}</Text>
        </ChakraVerticalTimelineElement>
      ))}
    </ChakraVerticalTimeline>
  )
}
