import React from 'react'
import { Paper, Typography, Box, Stack, useTheme } from '@mui/material'
import { CalendarToday, Scale, TrendingUp, Place } from '@mui/icons-material'

const CatchSummary: React.FC = () => {
	const theme = useTheme()
	const summary = {
		totalCatches: 47,
		totalWeight: 15842.5,
		thisMonth: 8,
		thisMonthWeight: 2850.3,
		favoriteSpecies: 'Хамса',
		favoriteRegion: 'Азовское море',
	}

	return (
		<Paper
			elevation={3}
			sx={{
				p: 4,
				// border: `1px solid ${theme.palette.divider}`,
				// borderRadius: 2,
				// backgroundColor: theme.palette.background.paper,
			}}
		>
			{/* Заголовок */}
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: 40,
						height: 40,
						backgroundColor: theme.palette.primary.main,
						borderRadius: 1,
					}}
				>
					<TrendingUp sx={{ color: 'white', fontSize: 20 }} />
				</Box>
				<Box>
					<Typography variant='h6' sx={{ fontWeight: 600 }}>
						Статистика уловов
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Обзор за всё время
					</Typography>
				</Box>
			</Box>

			<Stack spacing={3}>
				{/* Основные метрики */}
				<Box
					sx={{
						display: 'flex',
						gap: 3,
						flexWrap: 'wrap',
						justifyContent: 'space-between',
					}}
				>
					<Stack direction='column' alignItems='center'>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
							<CalendarToday color='primary' fontSize='small' />
							<Typography variant='body2' color='text.secondary'>
								Всего уловов
							</Typography>
						</Box>
						<Typography variant='h4' sx={{ fontWeight: 700 }}>
							{summary.totalCatches}
						</Typography>
					</Stack>

					<Stack direction='column' alignItems='center'>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
							<Scale color='primary' fontSize='small' />
							<Typography variant='body2' color='text.secondary'>
								Общий вес
							</Typography>
						</Box>
						<Typography variant='h4' sx={{ fontWeight: 700 }}>
							{summary.totalWeight.toLocaleString()} кг
						</Typography>
					</Stack>

					<Stack direction='column' alignItems='center'>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
							<TrendingUp color='primary' fontSize='small' />
							<Typography variant='body2' color='text.secondary'>
								В этом месяце
							</Typography>
						</Box>
						<Typography variant='h4' sx={{ fontWeight: 700 }}>
							{summary.thisMonth}
						</Typography>
					</Stack>
				</Box>

				{/* Дополнительная информация */}
				<Box
					sx={{
						pt: 3,
						borderTop: `1px solid ${theme.palette.divider}`,
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						flexWrap: 'wrap',
						gap: 2,
					}}
				>
					{/* <Box>
						<Typography variant='body2' color='text.secondary' gutterBottom>
							Преобладающий вид:
						</Typography>
						<Typography variant='body1' sx={{ fontWeight: 600 }}>
							{summary.favoriteSpecies}
						</Typography>
					</Box> */}
					<Box>
						<Typography variant='body2' color='text.secondary' gutterBottom>
							Основной регион:
						</Typography>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
							<Place fontSize='small' color='action' />
							<Typography variant='body1' sx={{ fontWeight: 600 }}>
								{summary.favoriteRegion}
							</Typography>
						</Box>
					</Box>
				</Box>
			</Stack>
		</Paper>
	)
}

export default CatchSummary
