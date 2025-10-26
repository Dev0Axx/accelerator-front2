import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from './contexts/ThemeContext'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage/HomePage'
import CatchPage from './pages/CatchPage/CatchPage'
import OverviewPage from './pages/OverviewPage/OverviewPage'
import MyCatchesPage from './pages/MyCatchesPage/MyCatchesPage'
import QuotasPage from './pages/QuotasPage/QuotasPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

function App() {
	return (
		<ThemeProvider>
			<CssBaseline />
			<Router>
				<MainLayout>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/catch' element={<CatchPage />} />
						<Route path='/my-catches' element={<MyCatchesPage />} />
						<Route path='/overview' element={<OverviewPage />} />
						<Route path='/quotas' element={<QuotasPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
					</Routes>
				</MainLayout>
			</Router>
		</ThemeProvider>
	)
}

export default App
