import React, { useState } from 'react'
import {
	Container,
	Paper,
	Box,
	TextField,
	Button,
	Typography,
	Alert,
	CircularProgress,
	Divider,
} from '@mui/material'
import {
	Login,
	Visibility,
	VisibilityOff,
	Person,
	Lock,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const LoginPage: React.FC = () => {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})
	const [showPassword, setShowPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const demoAccounts = [
		{
			username: 'fisherman',
			password: 'fisherman',
			role: 'Рыбак',
			description: 'Ввод уловов и просмотр истории',
		},
		{
			username: 'admin',
			password: 'admin',
			role: 'Администратор',
			description: 'Полный доступ к системе',
		},
	]

	const handleInputChange =
		(field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setFormData(prev => ({ ...prev, [field]: event.target.value }))
			if (error) setError('')
		}

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		setIsLoading(true)
		setError('')

		try {
			// Имитация запроса к API
			await new Promise(resolve => setTimeout(resolve, 1500))

			const account = demoAccounts.find(
				acc =>
					acc.username === formData.username &&
					acc.password === formData.password
			)

			if (account) {
				console.log('Успешный вход:', account)
				// В реальном приложении здесь будет сохранение токена и данных пользователя
				localStorage.setItem('user', JSON.stringify(account))
				navigate('/')
			} else {
				setError('Неверное имя пользователя или пароль')
			}
		} catch {
			setError('Ошибка при входе в систему')
		} finally {
			setIsLoading(false)
		}
	}

	const isFormValid = formData.username.trim() && formData.password.trim()

	return (
		<Container
			maxWidth='sm'
			sx={{
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				py: 4,
			}}
		>
			<Paper
				elevation={8}
				sx={{
					width: '100%',
					p: 4,
					borderRadius: 3,
					background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
				}}
			>
				{/* Заголовок */}
				<Box sx={{ textAlign: 'center', mb: 4 }}>
					<Typography
						variant='h3'
						component='h1'
						gutterBottom
						sx={{
							fontWeight: 'bold',
							background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
							backgroundClip: 'text',
							WebkitBackgroundClip: 'text',
							color: 'transparent',
						}}
					>
						🎣 Рыболовный учёт
					</Typography>
					<Typography
						variant='h5'
						component='h2'
						gutterBottom
						sx={{ fontWeight: 'medium' }}
					>
						Вход в систему
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Введите ваши учетные данные для доступа
					</Typography>
				</Box>

				{error && (
					<Alert severity='error' sx={{ mb: 3 }}>
						{error}
					</Alert>
				)}

				{/* Форма входа */}
				<Box component='form' onSubmit={handleSubmit}>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
						{/* Поле username */}
						<TextField
							label='Имя пользователя'
							value={formData.username}
							onChange={handleInputChange('username')}
							required
							fullWidth
							InputProps={{
								startAdornment: (
									<Person sx={{ color: 'text.secondary', mr: 1 }} />
								),
							}}
							placeholder='Введите имя пользователя'
						/>

						{/* Поле password */}
						<TextField
							label='Пароль'
							type={showPassword ? 'text' : 'password'}
							value={formData.password}
							onChange={handleInputChange('password')}
							required
							fullWidth
							InputProps={{
								startAdornment: (
									<Lock sx={{ color: 'text.secondary', mr: 1 }} />
								),
								endAdornment: (
									<Button
										size='small'
										onClick={() => setShowPassword(!showPassword)}
										sx={{ minWidth: 'auto', p: 0.5 }}
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</Button>
								),
							}}
							placeholder='Введите пароль'
						/>
					</Box>

					{/* Кнопка входа */}
					<Button
						type='submit'
						variant='contained'
						fullWidth
						size='large'
						disabled={!isFormValid || isLoading}
						startIcon={isLoading ? <CircularProgress size={20} /> : <Login />}
						sx={{
							mt: 3,
							py: 1.5,
							fontSize: '1.1rem',
							fontWeight: 'bold',
						}}
					>
						{isLoading ? 'Вход...' : 'Войти'}
					</Button>
				</Box>

				<Divider sx={{ my: 4 }}>
					<Typography variant='body2' color='text.secondary'>
						Нет аккаунта?
					</Typography>
				</Divider>

				{/* Ссылка на регистрацию */}
				<Box sx={{ textAlign: 'center' }}>
					<Button component={Link} to='/register' variant='outlined' fullWidth>
						Создать новый аккаунт
					</Button>
				</Box>
			</Paper>
		</Container>
	)
}

export default LoginPage
