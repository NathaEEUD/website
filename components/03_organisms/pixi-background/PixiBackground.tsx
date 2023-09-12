import styled from '@emotion/styled'
import { Container, Stage, withFilters } from '@inlet/react-pixi'
import { KawaseBlurFilter } from '@pixi/filter-kawase-blur'
import dynamic from 'next/dynamic'
import React from 'react'

import { useTheme } from '@foundations'
import { getRandomNumber, useWindowDimensions } from 'utils'

const NUMBER_OF_CIRCLES = 6

const PixiFigure = dynamic<React.ReactNode>(
  () => import('../../02_molecules/pixi-figure/PixiFigure').then(mod => mod.PixiFigure),
  {
    ssr: false,
  },
)

const Filters = withFilters(Container, {
  blur: KawaseBlurFilter,
})

const StyledStage = styled(Stage)`
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const PixiBackground = () => {
  const { width, height } = useWindowDimensions()
  const { state } = useTheme()

  const props = {
    fill: 0x000000,
  }

  return (
    <StyledStage
      height={height}
      options={{
        resizeTo: window,
        backgroundAlpha: 0,
        antialias: true,
      }}
      width={width}
    >
      <Filters blur={{ blur: 30, quality: 10 }}>
        {Array.from(Array(NUMBER_OF_CIRCLES).keys()).map((figure, index) => {
          props.fill = parseInt(
            Object.values(state)[~~getRandomNumber(0, Object.keys(state).length)].replace(
              '#',
              '0x',
            ),
            16,
          )

          return <PixiFigure key={index} {...props} />
        })}
      </Filters>
    </StyledStage>
  )
}
