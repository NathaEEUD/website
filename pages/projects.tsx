import type { NextPage } from 'next'

import {
  Badge,
  Box,
  Heading,
  HStack,
  Img,
  Link,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { FiExternalLink } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'

import { projects } from 'config'
import { Heading as AtomHeading } from '@atoms'
import { List } from '@molecules'
import { Section } from '@foundations'

const MotionVStack = motion(VStack)
const MotionBox = motion(Box)

const Projects: NextPage = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <Head>
        <title>NasteRBoost | Projects</title>
      </Head>

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
            <AtomHeading title={project.title} />

            <HStack spacing="4">
              {project.badge && (
                <Badge
                  colorScheme="purple"
                  display="block"
                  maxW="max-content"
                  p="1"
                  variant="outline"
                >
                  {project.badge}
                </Badge>
              )}

              {project?.github && (
                <Link isExternal colorScheme="teal" fontSize="xl" href={project.github}>
                  <SiGithub />
                </Link>
              )}

              {project?.href && (
                <Link isExternal colorScheme="teal" fontSize="xl" href={project.href}>
                  <FiExternalLink />
                </Link>
              )}
            </HStack>

            <Heading as="h5" fontSize="md" fontWeight="light">
              {project.subtitle}
            </Heading>

            <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="bold" letterSpacing="wide">
              {project.description}
            </Text>

            <List items={project.technologies} />
          </MotionVStack>

          {project?.img && (
            <MotionBox
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Img
                alt={project.title}
                objectFit="cover"
                src={project.img}
                width={isLargerThan768 ? 600 : 300}
              />
            </MotionBox>
          )}
        </Section>
      ))}
    </>
  )
}

export default Projects
