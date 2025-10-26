import React from 'react'
import { Paper, Typography, Box } from '@mui/material'
import { CalendarToday, Scale, TrendingUp } from '@mui/icons-material'

const CatchSummary: React.FC = () => {
	const summary = {
		totalCatches: 47,
		totalWeight: 15842.5,
		thisMonth: 8,
		thisMonthWeight: 2850.3,
		favoriteSpecies: 'Хамса',
		favoriteRegion: 'Азовское море',
	}

	return (
		<Paper sx={{ p: 3 }}>
			<Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
				Статистика за всё время
			</Typography>

			<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					<CalendarToday color='primary' />
					<Box>
						<Typography variant='h4' sx={{ fontWeight: 'bold' }}>
							{summary.totalCatches}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							всего уловов
						</Typography>
					</Box>
				</Box>

				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					<Scale color='primary' />
					<Box>
						<Typography variant='h4' sx={{ fontWeight: 'bold' }}>
							{summary.totalWeight.toLocaleString()} кг
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							общий вес
						</Typography>
					</Box>
				</Box>

				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					<TrendingUp color='primary' />
					<Box>
						<Typography variant='h4' sx={{ fontWeight: 'bold' }}>
							{summary.thisMonth}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							уловов в этом месяце
						</Typography>
					</Box>
				</Box>

				<Box>
					<Typography variant='body2' color='text.secondary'>
						Чаще всего ловите:
					</Typography>
					<Typography variant='body1' sx={{ fontWeight: 'bold' }}>
						{summary.favoriteSpecies} в {summary.favoriteRegion}
					</Typography>
				</Box>
			</Box>
		</Paper>
	)
}

export default CatchSummary
