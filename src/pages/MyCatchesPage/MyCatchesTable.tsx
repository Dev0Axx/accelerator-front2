import React, { useState } from 'react'
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TablePagination,
	Box,
	Typography,
	Chip,
	IconButton,
	Tooltip,
} from '@mui/material'
import { Edit, Delete, Visibility } from '@mui/icons-material'

// Mock данные - только уловы текущего пользователя
const myCatchesData = [
	{
		id: 1,
		date: '2024-01-15',
		species: 'Хамса',
		weight: 1250.5,
		region: 'Азовское море',
		status: 'confirmed',
		canEdit: true,
	},
	{
		id: 2,
		date: '2024-01-14',
		species: 'Тюлька',
		weight: 850.2,
		region: 'Азовское море',
		status: 'confirmed',
		canEdit: true,
	},
	{
		id: 3,
		date: '2024-01-13',
		species: 'Кефаль',
		weight: 320.7,
		region: 'Чёрное море',
		status: 'pending',
		canEdit: true, // Можно редактировать пока на проверке
	},
	{
		id: 4,
		date: '2024-01-10',
		species: 'Хамса',
		weight: 980.1,
		region: 'Азовское море',
		status: 'confirmed',
		canEdit: false, // Нельзя редактировать подтвержденные
	},
]

const MyCatchesTable: React.FC = () => {
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10)

	const handleChangePage = (_event: unknown, newPage: number) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'confirmed':
				return 'success'
			case 'pending':
				return 'warning'
			case 'rejected':
				return 'error'
			default:
				return 'default'
		}
	}

	const getStatusText = (status: string) => {
		switch (status) {
			case 'confirmed':
				return 'Подтверждён'
			case 'pending':
				return 'На проверке'
			case 'rejected':
				return 'Отклонён'
			default:
				return status
		}
	}

	const handleEdit = (catchId: number) => {
		console.log('Редактировать улов:', catchId)
		// Навигация на страницу редактирования
	}

	const handleDelete = (catchId: number) => {
		if (window.confirm('Вы уверены, что хотите удалить этот улов?')) {
			console.log('Удалить улов:', catchId)
		}
	}

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<Box sx={{ p: 2 }}>
				<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
					История уловов
				</Typography>
			</Box>

			<TableContainer>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell>Дата</TableCell>
							<TableCell>Вид рыбы</TableCell>
							<TableCell align='right'>Вес (кг)</TableCell>
							<TableCell>Район</TableCell>
							<TableCell>Статус</TableCell>
							<TableCell align='center'>Действия</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{myCatchesData
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map(catchItem => (
								<TableRow hover key={catchItem.id}>
									<TableCell>{catchItem.date}</TableCell>
									<TableCell sx={{ fontWeight: 'medium' }}>
										{catchItem.species}
									</TableCell>
									<TableCell align='right'>
										{catchItem.weight.toLocaleString()}
									</TableCell>
									<TableCell>{catchItem.region}</TableCell>
									<TableCell>
										<Chip
											label={getStatusText(catchItem.status)}
											color={getStatusColor(catchItem.status)}
											size='small'
										/>
									</TableCell>
									<TableCell align='center'>
										<Box
											sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}
										>
											<Tooltip title='Просмотр'>
												<IconButton size='small'>
													<Visibility />
												</IconButton>
											</Tooltip>

											{catchItem.canEdit && (
												<>
													<Tooltip title='Редактировать'>
														<IconButton
															size='small'
															onClick={() => handleEdit(catchItem.id)}
														>
															<Edit />
														</IconButton>
													</Tooltip>
													<Tooltip title='Удалить'>
														<IconButton
															size='small'
															onClick={() => handleDelete(catchItem.id)}
															color='error'
														>
															<Delete />
														</IconButton>
													</Tooltip>
												</>
											)}
										</Box>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>

			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component='div'
				count={myCatchesData.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				labelRowsPerPage='Строк на странице:'
				labelDisplayedRows={({ from, to, count }) =>
					`${from}-${to} из ${count}`
				}
			/>
		</Paper>
	)
}

export default MyCatchesTable
