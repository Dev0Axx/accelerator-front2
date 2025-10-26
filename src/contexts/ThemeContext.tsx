/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from 'react'
import {
	ThemeProvider as MUIThemeProvider,
	createTheme,
} from '@mui/material/styles'

type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
	mode: ThemeMode
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
	mode: 'light',
	toggleTheme: () => {},
})

export const useTheme = () => {
	return useContext(ThemeContext)
}

interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [mode, setMode] = useState<ThemeMode>('light')

	const toggleTheme = () => {
		setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
	}

	const theme = createTheme({
		palette: {
			mode,
			primary: {
				main: '#1976d2',
			},
			secondary: {
				main: '#dc004e',
			},
		},
	})

	return (
		<ThemeContext.Provider value={{ mode, toggleTheme }}>
			<MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
		</ThemeContext.Provider>
	)
}
