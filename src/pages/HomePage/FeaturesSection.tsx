import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
// import { useNavigate } from 'react-router-dom'

const FeaturesSection: React.FC = () => {
	// const navigate = useNavigate()

	const features = [
		{
			number: '01',
			title: 'Учёт уловов',
			description:
				'Простой и быстрый ввод данных о пойманной рыбе с автоматической проверкой квот',
			path: '/catch',
		},
		{
			number: '02',
			title: 'Контроль квот',
			description:
				'Мониторинг использования квот в реальном времени с уведомлениями о приближении лимитов',
			path: '/quotas',
		},
		{
			number: '03',
			title: 'Аналитика и отчёты',
			description:
				'Детальные отчёты и визуализация данных для принятия взвешенных решений по управлению рыболовной деятельностью',
			path: '/analytics',
		},
	]

	return (
		<Box sx={{ textAlign: 'center' }}>
			<Typography
				variant='h3'
				component='h2'
				sx={{
					fontWeight: 700,
					mb: 2,
					fontSize: { xs: '2rem', md: '2.5rem' },
				}}
			>
				Ключевые возможности
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
				Все необходимые инструменты для эффективного управления рыболовной
				деятельностью
			</Typography>

			{/* Первая строка - 2 пункта */}
			<Box
				mt={4}
				sx={{
					display: 'flex',
					gap: 4,
					mb: 4,
					flexDirection: { xs: 'column', md: 'row' },
				}}
			>
				{features.slice(0, 2).map((feature, index) => (
					<Paper
						elevation={3}
						key={index}
						sx={{
							flex: 1,
							display: 'flex',
							alignItems: 'flex-start',
							gap: 3,
							textAlign: 'left',
							p: 4,
							borderRadius: 2,
							transition: 'all 0.3s ease-in-out',
							'&:hover': {
								// bgcolor: 'action.hover',
								transform: 'translateY(-4px)',
								boxShadow: 3,
							},
							// cursor: 'pointer',
							// border: '1px solid',
							// borderColor: 'divider',
						}}
						// onClick={() => navigate(feature.path)}
					>
						<Typography
							variant='h3'
							component='div'
							sx={{
								fontSize: { xs: '2.5rem', md: '3rem' },
								fontWeight: 700,
								color: 'primary.main',
								lineHeight: 1,
								minWidth: '70px',
							}}
						>
							{feature.number}
						</Typography>
						<Box sx={{ flex: 1 }}>
							<Typography
								variant='h5'
								component='h3'
								sx={{
									fontWeight: 600,
									mb: 2,
									fontSize: { xs: '1.3rem', md: '1.5rem' },
								}}
							>
								{feature.title}
							</Typography>
							<Typography
								variant='body1'
								color='text.secondary'
								sx={{ lineHeight: 1.6, mb: 2 }}
							>
								{feature.description}
							</Typography>
							{/* <Button
								variant='text'
								sx={{
									color: 'primary.main',
									fontWeight: 600,
									p: 0,
									'&:hover': {
										backgroundColor: 'transparent',
										textDecoration: 'underline',
									},
								}}
							>
								Подробнее →
							</Button> */}
						</Box>
					</Paper>
				))}
			</Box>

			{/* Вторая строка - 1 пункт по центру */}
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Paper
					elevation={3}
					sx={{
						maxWidth: '600px',
						width: '100%',
						display: 'flex',
						alignItems: 'flex-start',
						gap: 3,
						textAlign: 'left',
						p: 4,
						borderRadius: 2,
						transition: 'all 0.3s ease-in-out',
						'&:hover': {
							// bgcolor: 'action.hover',
							transform: 'translateY(-4px)',
							boxShadow: 3,
						},
						// cursor: 'pointer',
						border: '1px solid',
						borderColor: 'divider',
					}}
					// onClick={() => navigate(features[2].path)}
				>
					<Typography
						variant='h3'
						component='div'
						sx={{
							fontSize: { xs: '2.5rem', md: '3rem' },
							fontWeight: 700,
							color: 'primary.main',
							lineHeight: 1,
							minWidth: '70px',
						}}
					>
						{features[2].number}
					</Typography>
					<Box sx={{ flex: 1 }}>
						<Typography
							variant='h5'
							component='h3'
							sx={{
								fontWeight: 600,
								mb: 2,
								fontSize: { xs: '1.3rem', md: '1.5rem' },
							}}
						>
							{features[2].title}
						</Typography>
						<Typography
							variant='body1'
							color='text.secondary'
							sx={{ lineHeight: 1.6, mb: 2 }}
						>
							{features[2].description}
						</Typography>
						{/* <Button
							variant='text'
							sx={{
								color: 'primary.main',
								fontWeight: 600,
								p: 0,
								'&:hover': {
									backgroundColor: 'transparent',
									textDecoration: 'underline',
								},
							}}
						>
							Подробнее →
						</Button> */}
					</Box>
				</Paper>
			</Box>
		</Box>
	)
}

export default FeaturesSection
