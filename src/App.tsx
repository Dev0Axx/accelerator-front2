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
import ContactPage from './pages/ContactPage/ContactPage'
import AdminMessagesPage from './pages/AdminMessagesPage/AdminMessagesPage'
import AccessDenied from './shared/components/AccessDenied'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
	const token = useLocalStorage('token')

	return (
		<ThemeProvider>
			<CssBaseline />
			<Router>
				<MainLayout>
					<Routes>
						<Route path='/' element={<HomePage />} />

						<Route path='/login' element={!token && <LoginPage />} />

						<Route path='/register' element={!token && <RegisterPage />} />

						<Route path='/contact' element={<ContactPage />} />

						<Route
							path='/catch'
							element={token ? <CatchPage /> : <AccessDenied />}
						/>

						<Route
							path='/my-catches'
							element={token ? <MyCatchesPage /> : <AccessDenied />}
						/>

						<Route
							path='/overview'
							element={token ? <OverviewPage /> : <AccessDenied />}
						/>

						<Route
							path='/quotas'
							element={token ? <QuotasPage /> : <AccessDenied />}
						/>

						<Route
							path='/adminMessages'
							element={token ? <AdminMessagesPage /> : <AccessDenied />}
						/>
					</Routes>
				</MainLayout>
			</Router>
		</ThemeProvider>
	)
}

export default App
