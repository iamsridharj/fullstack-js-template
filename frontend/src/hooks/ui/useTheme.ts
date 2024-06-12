import { createContext, useContext } from 'react'
import { theme, Theme } from 'src/design-system/foundation/theme'

const themeContext = createContext<Theme>(theme)

export const useTheme = () => useContext<Theme>(themeContext)
