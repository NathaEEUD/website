import type { NextPage } from 'next'

import Head from 'next/head'

import { Timeline } from '@molecules'
import { works } from 'config'

const Works: NextPage = () => {
  return (
    <>
      <Head>
        <title>NasteRBoost | Works</title>
      </Head>

      <Timeline items={works} mb="4rem" mt="5rem" />
    </>
  )
}

export default Works
