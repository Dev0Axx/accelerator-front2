import React from 'react'
import {
	Paper,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Box,
	Chip,
} from '@mui/material'
import { History } from '@mui/icons-material'

// Mock данные последних уловов
const recentCatches = [
	{
		id: 1,
		date: '2024-01-15',
		species: 'Хамса',
		weight: 1250.5,
		region: 'Азовское море',
		status: 'confirmed',
	},
	{
		id: 2,
		date: '2024-01-14',
		species: 'Тюлька',
		weight: 850.2,
		region: 'Азовское море',
		status: 'confirmed',
	},
	{
		id: 3,
		date: '2024-01-13',
		species: 'Кефаль',
		weight: 320.7,
		region: 'Чёрное море',
		status: 'pending',
	},
]

const RecentCatches: React.FC = () => {
	return (
		<Paper sx={{ p: 3 }}>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
				<History color='primary' />
				<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
					Последние уловы
				</Typography>
			</Box>

			<TableContainer>
				<Table size='small'>
					<TableHead>
						<TableRow>
							<TableCell>Дата</TableCell>
							<TableCell>Вид рыбы</TableCell>
							<TableCell align='right'>Вес (кг)</TableCell>
							<TableCell>Район</TableCell>
							<TableCell>Статус</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{recentCatches.map(catchItem => (
							<TableRow key={catchItem.id} hover>
								<TableCell>{catchItem.date}</TableCell>
								<TableCell>{catchItem.species}</TableCell>
								<TableCell align='right'>
									{catchItem.weight.toLocaleString()}
								</TableCell>
								<TableCell>{catchItem.region}</TableCell>
								<TableCell>
									<Chip
										label={
											catchItem.status === 'confirmed'
												? 'Подтверждён'
												: 'На проверке'
										}
										color={
											catchItem.status === 'confirmed' ? 'success' : 'warning'
										}
										size='small'
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			{recentCatches.length === 0 && (
				<Typography
					variant='body2'
					color='text.secondary'
					sx={{ textAlign: 'center', py: 3 }}
				>
					У вас пока нет записей об уловах
				</Typography>
			)}
		</Paper>
	)
}

export default RecentCatches
