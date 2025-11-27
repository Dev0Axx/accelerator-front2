import React from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { CheckCircle, Speed, Analytics, Security } from '@mui/icons-material'

const BenefitsSection: React.FC = () => {
	const benefits = [
		{
			icon: <CheckCircle sx={{ fontSize: 40, color: 'primary.main' }} />,
			title: 'Простота использования',
			description:
				'Интуитивный интерфейс для быстрого ввода данных и просмотра статистики',
		},
		{
			icon: <Speed sx={{ fontSize: 40, color: 'primary.main' }} />,
			title: 'Экономия времени',
			description:
				'Автоматизация отчётности и контроль квот в реальном времени',
		},
		{
			icon: <Analytics sx={{ fontSize: 40, color: 'primary.main' }} />,
			title: 'Детальная аналитика',
			description: 'Подробные отчёты и визуализация данных по уловам и квотам',
		},
		{
			icon: <Security sx={{ fontSize: 40, color: 'primary.main' }} />,
			title: 'Надёжность',
			description:
				'Безопасное хранение данных и соответствие законодательным требованиям',
		},
	]

	return (
		<Box sx={{ textAlign: 'center' }}>
			{/* Заголовок секции */}
			<Typography
				variant='h3'
				component='h2'
				sx={{
					fontWeight: 700,
					mb: 2,
					fontSize: { xs: '2rem', md: '2.5rem' },
				}}
			>
				Почему выбирают нас
			</Typography>

			<Typography
				variant='h6'
				component='p'
				sx={{
					color: 'text.secondary',
					mb: 6,
					maxWidth: '600px',
					margin: '0 auto',
					fontSize: { xs: '1rem', md: '1.1rem' },
				}}
			>
				Современное решение для эффективного управления рыболовной деятельностью
			</Typography>

			{/* Карточки преимуществ */}
			<Box
				mt={8}
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: '1fr',
						sm: '1fr 1fr',
						md: '1fr 1fr 1fr 1fr',
					},
					gap: 3,
				}}
			>
				{benefits.map((benefit, index) => (
					<Card
						key={index}
						sx={{
							border: 'none',
							boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
							transition: 'transform 0.2s ease-in-out',
							'&:hover': {
								transform: 'translateY(-4px)',
							},
						}}
					>
						<CardContent sx={{ p: 3, textAlign: 'center' }}>
							<Box sx={{ mb: 2 }}>{benefit.icon}</Box>
							<Typography
								variant='h6'
								component='h3'
								sx={{
									fontWeight: 600,
									mb: 1,
									fontSize: { xs: '1rem', md: '1.1rem' },
								}}
							>
								{benefit.title}
							</Typography>
							<Typography
								variant='body2'
								color='text.secondary'
								sx={{ lineHeight: 1.5 }}
							>
								{benefit.description}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Box>
		</Box>
	)
}

export default BenefitsSection
