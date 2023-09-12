import { Graphics, useTick } from '@inlet/react-pixi'
import debounce from 'debounce'
import * as PIXI from 'pixi.js'
import React from 'react'
import SimplexNoise from 'simplex-noise'

import { getMappedNumber, getRandomNumber } from 'utils'

interface Props {
  fill?: 0x000000
}

const LIMIT = 1000
const INC = 0.001
const simplex = new SimplexNoise()

export const PixiFigure: React.FC<Props> = ({ fill }) => {
  const [bounds, setBounds] = React.useState({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } })
  const [x, setX] = React.useState(0)
  const [y, setY] = React.useState(0)
  const [scale, setScale] = React.useState(1)
  const [radius, setRadius] = React.useState(
    getRandomNumber(window.innerHeight / 6, window.innerHeight / 3),
  )
  const [xOff, setXOff] = React.useState(getRandomNumber(0, LIMIT))
  const [yOff, setYOff] = React.useState(getRandomNumber(0, LIMIT))

  function defBounds() {
    const maxDist = window.innerWidth < LIMIT ? window.innerWidth / 3 : window.innerWidth / 5

    const originX = window.innerWidth / 1.25
    const originY = window.innerHeight < 800 ? window.innerHeight : window.innerHeight / 1.375

    return {
      x: {
        min: originX - maxDist,
        max: originX + maxDist,
      },
      y: {
        min: originY - maxDist,
        max: originY + maxDist,
      },
    }
  }

  React.useLayoutEffect(() => {
    setBounds(defBounds())

    window.addEventListener(
      'resize',
      debounce(() => setBounds(defBounds()), 250),
    )
  }, [])

  React.useEffect(() => {
    setX(getRandomNumber(bounds.x.min, bounds.x.max))
    setY(getRandomNumber(bounds.y.min, bounds.y.max))
  }, [bounds])

  const draw = React.useCallback(
    (g: PIXI.Graphics) => {
      g.clear()
      g.beginFill(fill)
      g.drawCircle(0, 0, radius)
      g.endFill()
    },
    [fill, radius],
  )

  useTick(() => {
    const xNoise = simplex.noise2D(xOff, xOff)
    const yNoise = simplex.noise2D(yOff, yOff)
    const scaleNoise = simplex.noise2D(xOff, yOff)

    setX(Math.round(getMappedNumber(xNoise, -1, 1, bounds.x.min, bounds.x.max)))
    setY(Math.round(getMappedNumber(yNoise, -1, 1, bounds.y.min, bounds.y.max)))
    setScale(Math.round(getMappedNumber(scaleNoise, -1, 1, 0.5, 1)))
    setXOff(prevState => prevState + INC)
    setYOff(prevState => prevState + INC)
  })

  return <Graphics alpha={0.175} draw={draw} scale={scale} x={x} y={y} />
}
