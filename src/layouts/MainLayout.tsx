import React from 'react'
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Box,
	Container,
	Stack,
} from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { useTheme } from '../contexts/ThemeContext'
import { useNavigate, useLocation } from 'react-router-dom'
import PhishingIcon from '@mui/icons-material/Phishing'

interface Props {
	children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
	const { mode, toggleTheme } = useTheme()
	const navigate = useNavigate()
	const location = useLocation()

	// Навигационные пункты меню
	const navigationItems = [
		{ label: 'Ввод улова', path: '/catch' },
		{ label: 'Мои уловы', path: '/my-catches' },
		{ label: 'Обзор уловов', path: '/overview' },
		{ label: 'Квоты', path: '/quotas' },
	]

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
			{/* Шапка */}
			<AppBar position='static' sx={{ flexShrink: 0 }}>
				<Container maxWidth='lg' disableGutters>
					<Toolbar
						sx={{
							justifyContent: 'space-between',
							minHeight: '64px !important',
							px: { xs: 2, sm: 3 },
						}}
					>
						{/* Логотип и название */}
						<Stack direction='row' alignItems='center' gap={1}>
							<PhishingIcon />
							<Typography
								variant='h6'
								component='div'
								sx={{
									cursor: 'pointer',
									fontWeight: 'bold',
									display: 'flex',
									alignItems: 'center',
									gap: 1,
									flexShrink: 0,
								}}
								onClick={() => navigate('/')}
							>
								Рыболовный учёт
							</Typography>
						</Stack>

						{/* Навигация */}
						<Box
							sx={{
								display: { xs: 'none', md: 'flex' },
								gap: 1,
								flex: 1,
								justifyContent: 'center',
								mx: 2,
							}}
						>
							{navigationItems.map(item => (
								<Button
									key={item.path}
									color='inherit'
									onClick={() => navigate(item.path)}
									variant={
										location.pathname === item.path ? 'outlined' : 'text'
									}
									size='small'
									sx={{
										borderColor: 'rgba(255,255,255,0.3)',
									}}
								>
									{item.label}
								</Button>
							))}
						</Box>

						{/* Переключение темы */}
						<Box sx={{ flexShrink: 0 }}>
							<IconButton
								color='inherit'
								onClick={toggleTheme}
								sx={{
									'&:hover': {
										backgroundColor: 'rgba(255, 255, 255, 0.1)',
									},
								}}
							>
								{mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
							</IconButton>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>

			{/* Основной контент */}
			<Container
				component='main'
				maxWidth='lg'
				sx={{
					flex: 1,
					py: 3,
					px: { xs: 2, sm: 3 },
				}}
			>
				{children}
			</Container>
		</Box>
	)
}

export default MainLayout
