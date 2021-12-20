import React from 'react'
import hsl from 'hsl-to-hex'

import { getRandomNumber, setCustomProperty } from 'utils'

export enum ThemeActionKind {
  UPDATE_COLOR_PALETTE = 'UPDATE_COLOR_PALETTE',
}

type Action = {
  type: ThemeActionKind
  payload?: any
}

type Dispatch = (action: Action) => void

type State = {
  baseColor: string
  complimentaryColor1: string
  complimentaryColor2: string
}

type ThemeProviderProps = { children: React.ReactNode }

const ThemeContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined,
)

const INITIAL_STATE: State = {
  baseColor: '',
  complimentaryColor1: '',
  complimentaryColor2: '',
}

function setColorPaletteProperties(colorPalette: State) {
  setCustomProperty('--hue', colorPalette.baseColor)
  setCustomProperty('--complimentary-hue-1', colorPalette.complimentaryColor1)
  setCustomProperty('--complimentary-hue-2', colorPalette.complimentaryColor2)
}

function getColorPalette(): State {
  const saturation = 95
  const lightness = 50

  const hue = ~~getRandomNumber(180, 360)
  const complimentaryHue1 = hue + 30
  const complimentaryHue2 = hue + 60

  setColorPaletteProperties({
    baseColor: hue.toString(),
    complimentaryColor1: complimentaryHue1.toString(),
    complimentaryColor2: complimentaryHue2.toString(),
  })

  const colorPalette = {
    baseColor: hsl(hue, saturation, lightness),
    complimentaryColor1: hsl(complimentaryHue1, saturation, lightness),
    complimentaryColor2: hsl(complimentaryHue2, saturation, lightness),
  }

  return colorPalette
}

function ThemeReducer(state: State, action: Action) {
  switch (action.type) {
    case ThemeActionKind.UPDATE_COLOR_PALETTE: {
      return {
        ...state,
        ...getColorPalette(),
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = React.useReducer(ThemeReducer, INITIAL_STATE)

  const value = { dispatch, state }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
  const context = React.useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContext')
  }

  return context
}

export { ThemeProvider, useTheme }
