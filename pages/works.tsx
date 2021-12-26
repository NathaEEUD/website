import type { NextPage } from 'next'

import { Timeline } from '@molecules'
import { works } from 'config'

const Works: NextPage = () => {
  return (
    <>
      <Timeline items={works} mt="5rem" />
    </>
  )
}

export default Works
