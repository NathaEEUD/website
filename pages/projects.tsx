import type { NextPage } from 'next'

import {
  Avatar,
  Badge,
  Box,
  Heading,
  HStack,
  Link,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import { FiExternalLink } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'

import { projects } from 'config'
import { List } from '@molecules'
import { Section } from '@foundations'

const MotionVStack = motion(VStack)
const MotionBox = motion(Box)
const MotionText = motion(Text)

const Projects: NextPage = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <Section>
        <MotionText
          animate={{ y: 0, opacity: 1 }}
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          initial={{ y: -50, opacity: 0 }}
          maxW={{ base: 'full', md: '60%' }}
          transition={{ duration: 1 }}
        >
          Here, you can find the{' '}
          <Text
            as="span"
            bgClip="text"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="extrabold"
            sx={{
              backgroundImage: 'linear-gradient(45deg, var(--base) 25%, var(--complimentary-2))',
            }}
          >
            projects
          </Text>{' '}
          that I have done!
        </MotionText>
      </Section>

      {projects.map(project => (
        <Section key={project.title}>
          <MotionVStack
            alignItems="flex-start"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -50, opacity: 0 }}
            maxW={{ base: 'full', md: '60%' }}
            spacing="4"
            transition={{ duration: 1 }}
          >
            <Heading as="h2" fontSize="3xl">
              {project.title}
            </Heading>

            <HStack spacing="4">
              {project.badge && (
                <Badge colorScheme="purple" display="block" maxW="max-content" variant="outline">
                  {project.badge}
                </Badge>
              )}

              {project?.github && (
                <Link isExternal colorScheme="teal" href={project.github} size="sm">
                  <SiGithub />
                </Link>
              )}

              {project?.href && (
                <Link isExternal colorScheme="teal" href={project.href} size="sm">
                  <FiExternalLink />
                </Link>
              )}
            </HStack>

            <Heading as="h5" fontSize="lg">
              {project.subtitle}
            </Heading>

            <Text fontSize={{ base: 'md', md: 'xl' }}>{project.description}</Text>

            <List items={project.technologies} />
          </MotionVStack>

          {project?.img && (
            <MotionBox
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <NextImage
                alt={project.title}
                height={isLargerThan768 ? 235 : 135}
                layout="fixed"
                objectFit="contain"
                src={project.img}
                width={isLargerThan768 ? 400 : 300}
              />
            </MotionBox>
          )}
        </Section>
      ))}
    </>
  )
}

export default Projects
