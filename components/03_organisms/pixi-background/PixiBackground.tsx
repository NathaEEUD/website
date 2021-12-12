import { Container, Stage, withFilters } from '@inlet/react-pixi'
import { KawaseBlurFilter } from '@pixi/filter-kawase-blur'
import dynamic from 'next/dynamic'

const PixiFigure = dynamic<React.ReactNode>(
  () => import('../../02_molecules/pixi-figure/PixiFigure').then(mod => mod.PixiFigure),
  {
    ssr: false,
  },
)

const Filters = withFilters(Container, {
  blur: KawaseBlurFilter,
})

export const PixiBackground = () => {
  return (
    <Stage
      options={{
        resizeTo: window,
        transparent: true,
      }}
    >
      <Filters blur={{ blur: 30, quality: 10 }}>
        {Array.from(Array(5).keys()).map((figure, index) => (
          <>
            <PixiFigure key={index} />
          </>
        ))}
      </Filters>
    </Stage>
  )
}
