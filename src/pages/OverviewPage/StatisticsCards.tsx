import React from 'react'
import {
	Card,
	CardContent,
	Typography,
	Box,
	LinearProgress,
} from '@mui/material'
import { TrendingUp, Scale, Person, LocationOn } from '@mui/icons-material'

const StatisticsCards: React.FC = () => {
	const stats = [
		{
			title: 'Общий улов',
			value: '42,847.5',
			unit: 'кг',
			change: '+12.5%',
			trend: 'up',
			icon: <Scale sx={{ fontSize: 40, color: 'primary.main' }} />,
			progress: 75,
		},
		{
			title: 'Активных рыбаков',
			value: '15',
			unit: 'чел',
			change: '+2',
			trend: 'up',
			icon: <Person sx={{ fontSize: 40, color: 'success.main' }} />,
		},
		{
			title: 'Районов вылова',
			value: '4',
			unit: 'шт',
			change: '0',
			trend: 'stable',
			icon: <LocationOn sx={{ fontSize: 40, color: 'info.main' }} />,
		},
		{
			title: 'Средний улов',
			value: '2,856.5',
			unit: 'кг/чел',
			change: '+5.2%',
			trend: 'up',
			icon: <TrendingUp sx={{ fontSize: 40, color: 'warning.main' }} />,
		},
	]

	const getTrendColor = (trend: string) => {
		switch (trend) {
			case 'up':
				return 'success.main'
			case 'down':
				return 'error.main'
			default:
				return 'text.secondary'
		}
	}

	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
			{stats.map((stat, index) => (
				<Box
					key={index}
					sx={{
						width: {
							xs: '100%',
							sm: 'calc(50% - 12px)',
							md: 'calc(25% - 18px)',
						},
					}}
				>
					<Card sx={{ height: '100%' }}>
						<CardContent>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'flex-start',
									mb: 2,
								}}
							>
								<Box>
									<Typography
										color='text.secondary'
										gutterBottom
										variant='overline'
									>
										{stat.title}
									</Typography>
									<Typography
										variant='h4'
										component='div'
										sx={{ fontWeight: 'bold' }}
									>
										{stat.value}
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										{stat.unit}
									</Typography>
								</Box>
								{stat.icon}
							</Box>

							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
								<Typography
									variant='body2'
									sx={{ color: getTrendColor(stat.trend) }}
								>
									{stat.change}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									за месяц
								</Typography>
							</Box>

							{stat.progress && (
								<Box sx={{ mt: 2 }}>
									<LinearProgress
										variant='determinate'
										value={stat.progress}
										sx={{ height: 6, borderRadius: 3 }}
									/>
									<Typography
										variant='caption'
										color='text.secondary'
										sx={{ mt: 0.5 }}
									>
										{stat.progress}% от плана
									</Typography>
								</Box>
							)}
						</CardContent>
					</Card>
				</Box>
			))}
		</Box>
	)
}

export default StatisticsCards
