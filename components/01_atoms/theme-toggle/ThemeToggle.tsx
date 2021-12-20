import { IconButton } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoColorPaletteOutline } from 'react-icons/io5'

import { ThemeActionKind, useTheme } from '@foundations'

export const ThemeToggle = () => {
  const { state, dispatch } = useTheme()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={state.baseColor}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        initial={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <IconButton
          _hover={{
            background: 'var(--tertiary-gradient)',
          }}
          aria-label="Toggle theme"
          borderRadius="full"
          icon={<IoColorPaletteOutline />}
          sx={{
            background: 'var(--secondary-gradient)',
            color: 'var(--light-color)',
          }}
          onClick={() =>
            dispatch({
              type: ThemeActionKind.UPDATE_COLOR_PALETTE,
            })
          }
        />
      </motion.div>
    </AnimatePresence>
  )
}
