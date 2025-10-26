import React from 'react'
import {
	Card,
	CardContent,
	Typography,
	Button,
	Box,
	Stack,
} from '@mui/material'
import {
	AddCircleOutline,
	ListAlt,
	Analytics,
	Settings,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const FeaturesSection: React.FC = () => {
	const navigate = useNavigate()

	const features = [
		{
			icon: <AddCircleOutline sx={{ fontSize: 40 }} />,
			title: 'Ввод улова',
			description:
				'Быстрое добавление информации о пойманной рыбе с проверкой квот',
			path: '/catch',
			color: '#1976d2',
		},
		{
			icon: <ListAlt sx={{ fontSize: 40 }} />,
			title: 'Мои уловы',
			description: 'Просмотр истории всех ваших уловов с фильтрацией и поиском',
			path: '/my-catches',
			color: '#2e7d32',
		},
		{
			icon: <Analytics sx={{ fontSize: 40 }} />,
			title: 'Обзор уловов',
			description: 'Аналитика и статистика по всем уловам в системе',
			path: '/overview',
			color: '#ed6c02',
		},
		{
			icon: <Settings sx={{ fontSize: 40 }} />,
			title: 'Управление квотами',
			description: 'Настройка лимитов и контроль выполнения квот',
			path: '/quotas',
			color: '#9c27b0',
		},
	]

	return (
		<Box>
			<Typography
				variant='h4'
				component='h2'
				gutterBottom
				sx={{ textAlign: 'center', mb: 4 }}
			>
				Основные возможности
			</Typography>

			<Stack direction='row' flexWrap='wrap' rowGap={4} gap={2}>
				{features.map((feature, index) => (
					<Card
						key={index}
						sx={{
							minHeight: '100%',
							cursor: 'pointer',
							transition: 'all 0.3s ease',
							flex: 'calc(50% - 16px)',
							'&:hover': {
								transform: 'translateY(-4px)',
								boxShadow: 6,
							},
						}}
						onClick={() => navigate(feature.path)}
					>
						<CardContent sx={{ p: 3 }}>
							<Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
								<Box sx={{ color: feature.color, mr: 2 }}>{feature.icon}</Box>
								<Box>
									<Typography
										variant='h6'
										component='h3'
										gutterBottom
										sx={{ fontWeight: 'bold' }}
									>
										{feature.title}
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										{feature.description}
									</Typography>
								</Box>
							</Box>
							<Button
								variant='text'
								size='small'
								sx={{ mt: 1, color: feature.color }}
							>
								Перейти →
							</Button>
						</CardContent>
					</Card>
				))}
			</Stack>
		</Box>
	)
}

export default FeaturesSection
