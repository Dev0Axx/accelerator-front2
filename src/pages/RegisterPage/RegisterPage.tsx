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
	Stepper,
	Step,
	StepLabel,
	MenuItem,
} from '@mui/material'
import {
	PersonAdd,
	Visibility,
	VisibilityOff,
	Person,
	Lock,
	Email,
	Badge,
	ArrowBack,
} from '@mui/icons-material'
import { useNavigate, Link } from 'react-router-dom'

const RegisterPage: React.FC = () => {
	const navigate = useNavigate()
	const [activeStep, setActiveStep] = useState(0)
	const [formData, setFormData] = useState({
		// Шаг 1: Основная информация
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
		// Шаг 2: Профиль
		fullName: '',
		phone: '',
		experience: '',
		vessel: '',
	})
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const steps = ['Основная информация', 'Профиль рыбака']

	const handleInputChange =
		(field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setFormData(prev => ({ ...prev, [field]: event.target.value }))
			if (error) setError('')
		}

	const handleNext = () => {
		if (activeStep === 0) {
			// Валидация первого шага
			if (
				!formData.username.trim() ||
				!formData.email.trim() ||
				!formData.password
			) {
				setError('Заполните все обязательные поля')
				return
			}
			if (formData.password.length < 6) {
				setError('Пароль должен содержать минимум 6 символов')
				return
			}
			if (formData.password !== formData.confirmPassword) {
				setError('Пароли не совпадают')
				return
			}
		}
		setActiveStep(prev => prev + 1)
		setError('')
	}

	const handleBack = () => {
		setActiveStep(prev => prev - 1)
		setError('')
	}

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		setIsLoading(true)
		setError('')

		try {
			// Имитация запроса к API
			await new Promise(resolve => setTimeout(resolve, 2000))

			// В реальном приложении здесь будет отправка данных на сервер
			console.log('Регистрация:', formData)

			// Сохраняем пользователя (в реальном приложении - токен)
			const userData = {
				username: formData.username,
				email: formData.email,
				role: 'Рыбак', // Новые пользователи всегда рыбаки
				fullName: formData.fullName,
				experience: formData.experience,
			}

			localStorage.setItem('user', JSON.stringify(userData))
			navigate('/')
		} catch {
			setError('Ошибка при регистрации. Попробуйте позже.')
		} finally {
			setIsLoading(false)
		}
	}

	const getStepContent = (step: number) => {
		switch (step) {
			case 0:
				return (
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
						<TextField
							label='Имя пользователя *'
							value={formData.username}
							onChange={handleInputChange('username')}
							required
							fullWidth
							InputProps={{
								startAdornment: (
									<Person sx={{ color: 'text.secondary', mr: 1 }} />
								),
							}}
							placeholder='Придумайте имя пользователя'
							helperText='От 3 до 20 символов'
						/>

						<TextField
							label='Email *'
							type='email'
							value={formData.email}
							onChange={handleInputChange('email')}
							required
							fullWidth
							InputProps={{
								startAdornment: (
									<Email sx={{ color: 'text.secondary', mr: 1 }} />
								),
							}}
							placeholder='example@mail.com'
						/>

						<TextField
							label='Пароль *'
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
							helperText='Минимум 6 символов'
						/>

						<TextField
							label='Подтверждение пароля *'
							type={showConfirmPassword ? 'text' : 'password'}
							value={formData.confirmPassword}
							onChange={handleInputChange('confirmPassword')}
							required
							fullWidth
							InputProps={{
								startAdornment: (
									<Lock sx={{ color: 'text.secondary', mr: 1 }} />
								),
								endAdornment: (
									<Button
										size='small'
										onClick={() => setShowConfirmPassword(!showConfirmPassword)}
										sx={{ minWidth: 'auto', p: 0.5 }}
									>
										{showConfirmPassword ? <VisibilityOff /> : <Visibility />}
									</Button>
								),
							}}
						/>
					</Box>
				)

			case 1:
				return (
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
						<TextField
							label='ФИО'
							value={formData.fullName}
							onChange={handleInputChange('fullName')}
							fullWidth
							InputProps={{
								startAdornment: (
									<Badge sx={{ color: 'text.secondary', mr: 1 }} />
								),
							}}
							placeholder='Иванов Иван Иванович'
						/>

						<TextField
							label='Телефон'
							value={formData.phone}
							onChange={handleInputChange('phone')}
							fullWidth
							placeholder='+7 (999) 999-99-99'
						/>

						<TextField
							select
							label='Опыт работы'
							value={formData.experience}
							onChange={handleInputChange('experience')}
							fullWidth
						>
							<MenuItem value=''>Не указано</MenuItem>
							<MenuItem value='less1'>Менее 1 года</MenuItem>
							<MenuItem value='1-3'>1-3 года</MenuItem>
							<MenuItem value='3-5'>3-5 лет</MenuItem>
							<MenuItem value='5-10'>5-10 лет</MenuItem>
							<MenuItem value='10plus'>Более 10 лет</MenuItem>
						</TextField>

						<TextField
							label='Название судна'
							value={formData.vessel}
							onChange={handleInputChange('vessel')}
							fullWidth
							placeholder="Например, 'Волна-1'"
							helperText='Необязательное поле'
						/>
					</Box>
				)

			default:
				return 'Неизвестный шаг'
		}
	}

	return (
		<Container
			maxWidth='md'
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
						🎣 Регистрация
					</Typography>
					<Typography variant='body1' color='text.secondary'>
						Создайте аккаунт для доступа к системе
					</Typography>
				</Box>

				{/* Степпер */}
				<Stepper activeStep={activeStep} sx={{ mb: 4 }}>
					{steps.map(label => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>

				{error && (
					<Alert severity='error' sx={{ mb: 3 }}>
						{error}
					</Alert>
				)}

				{/* Форма */}
				<Box
					component='form'
					onSubmit={activeStep === steps.length - 1 ? handleSubmit : undefined}
				>
					{getStepContent(activeStep)}

					{/* Кнопки навигации */}
					<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
						<Button
							onClick={handleBack}
							disabled={activeStep === 0}
							startIcon={<ArrowBack />}
						>
							Назад
						</Button>

						{activeStep === steps.length - 1 ? (
							<Button
								type='submit'
								variant='contained'
								disabled={isLoading}
								startIcon={
									isLoading ? <CircularProgress size={20} /> : <PersonAdd />
								}
								size='large'
							>
								{isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
							</Button>
						) : (
							<Button variant='contained' onClick={handleNext} size='large'>
								Далее
							</Button>
						)}
					</Box>
				</Box>

				<Divider sx={{ my: 4 }}>
					<Typography variant='body2' color='text.secondary'>
						Уже есть аккаунт?
					</Typography>
				</Divider>

				{/* Ссылка на вход */}
				<Box sx={{ textAlign: 'center' }}>
					<Button component={Link} to='/login' variant='outlined' fullWidth>
						Войти в существующий аккаунт
					</Button>
				</Box>

				{/* Информация */}
				<Box sx={{ mt: 3, textAlign: 'center' }}>
					<Typography variant='caption' color='text.secondary'>
						После регистрации вы получите роль "Рыбак". Для получения прав
						администратора обратитесь к системному администратору.
					</Typography>
				</Box>
			</Paper>
		</Container>
	)
}

export default RegisterPage
