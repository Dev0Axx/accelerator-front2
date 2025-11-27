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
	Menu,
	MenuItem,
	Avatar,
} from '@mui/material'
import {
	MoreVert,
	Edit,
	Delete,
	ContentCopy,
	Business,
} from '@mui/icons-material'

// Mock данные квот компаний
const companyQuotasData = [
	{
		id: 1,
		company: {
			id: '1',
			name: 'ООО "Рыбпром"',
			inn: '1234567890',
		},
		species: 'Хамса',
		region: 'Азовское море',
		year: 2024,
		limit: 5000,
		used: 4200,
		percentage: 84,
		status: 'warning',
		isActive: true,
	},
	{
		id: 2,
		company: {
			id: '2',
			name: 'АО "Морские ресурсы"',
			inn: '0987654321',
		},
		species: 'Тюлька',
		region: 'Азовское море',
		year: 2024,
		limit: 3000,
		used: 2800,
		percentage: 93,
		status: 'critical',
		isActive: true,
	},
	{
		id: 3,
		company: {
			id: '3',
			name: 'ИП Сидоров А.В.',
			inn: '1122334455',
		},
		species: 'Кефаль',
		region: 'Чёрное море',
		year: 2024,
		limit: 800,
		used: 450,
		percentage: 56,
		status: 'normal',
		isActive: true,
	},
	{
		id: 4,
		company: {
			id: '4',
			name: 'ООО "Черноморрыба"',
			inn: '5566778899',
		},
		species: 'Камбала-калкан',
		region: 'Чёрное море',
		year: 2024,
		limit: 600,
		used: 590,
		percentage: 98,
		status: 'critical',
		isActive: true,
	},
	{
		id: 5,
		company: {
			id: '5',
			name: 'АО "Северный рыбак"',
			inn: '6677889900',
		},
		species: 'Треска',
		region: 'Баренцево море',
		year: 2024,
		limit: 2500,
		used: 1200,
		percentage: 48,
		status: 'normal',
		isActive: true,
	},
]

const CompanyQuotasList: React.FC = () => {
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10)
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const [selectedQuota, setSelectedQuota] = useState<number | null>(null)

	const handleChangePage = (_event: unknown, newPage: number) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	const handleMenuOpen = (
		event: React.MouseEvent<HTMLElement>,
		quotaId: number
	) => {
		setAnchorEl(event.currentTarget)
		setSelectedQuota(quotaId)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
		setSelectedQuota(null)
	}

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'critical':
				return 'error'
			case 'warning':
				return 'warning'
			default:
				return 'success'
		}
	}

	const getStatusText = (status: string) => {
		switch (status) {
			case 'critical':
				return 'Критично'
			case 'warning':
				return 'Предупреждение'
			default:
				return 'Норма'
		}
	}

	const handleEdit = () => {
		console.log('Редактировать квоту компании:', selectedQuota)
		handleMenuClose()
	}

	const handleDelete = () => {
		if (window.confirm('Вы уверены, что хотите удалить эту квоту компании?')) {
			console.log('Удалить квоту компании:', selectedQuota)
		}
		handleMenuClose()
	}

	const handleDuplicate = () => {
		console.log('Дублировать квоту компании:', selectedQuota)
		handleMenuClose()
	}

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<Box sx={{ p: 2 }}>
				<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
					Квоты компаний
				</Typography>
			</Box>

			<TableContainer>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell>Компания</TableCell>
							<TableCell>ИНН</TableCell>
							<TableCell>Вид рыбы</TableCell>
							<TableCell>Район вылова</TableCell>
							<TableCell>Год</TableCell>
							<TableCell align='right'>Лимит (кг)</TableCell>
							<TableCell align='right'>Использовано (кг)</TableCell>
							<TableCell align='right'>% использования</TableCell>
							<TableCell>Статус</TableCell>
							<TableCell align='center'>Действия</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{companyQuotasData
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map(quota => (
								<TableRow hover key={quota.id}>
									<TableCell>
										<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
											<Avatar
												sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}
											>
												<Business fontSize='small' />
											</Avatar>
											<Box>
												<Typography
													variant='body2'
													sx={{ fontWeight: 'medium' }}
												>
													{quota.company.name}
												</Typography>
											</Box>
										</Box>
									</TableCell>
									<TableCell>{quota.company.inn}</TableCell>
									<TableCell sx={{ fontWeight: 'medium' }}>
										{quota.species}
									</TableCell>
									<TableCell>{quota.region}</TableCell>
									<TableCell>{quota.year}</TableCell>
									<TableCell align='right'>
										{quota.limit.toLocaleString()}
									</TableCell>
									<TableCell align='right'>
										{quota.used.toLocaleString()}
									</TableCell>
									<TableCell align='right'>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												gap: 1,
												justifyContent: 'flex-end',
											}}
										>
											<Typography
												variant='body2'
												sx={{
													fontWeight: 'bold',
													color:
														quota.status === 'critical'
															? 'error.main'
															: quota.status === 'warning'
															? 'warning.main'
															: 'success.main',
												}}
											>
												{quota.percentage}%
											</Typography>
										</Box>
									</TableCell>
									<TableCell>
										<Chip
											label={getStatusText(quota.status)}
											color={getStatusColor(quota.status)}
											size='small'
										/>
									</TableCell>
									<TableCell align='center'>
										<IconButton
											size='small'
											onClick={e => handleMenuOpen(e, quota.id)}
										>
											<MoreVert />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>

			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component='div'
				count={companyQuotasData.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				labelRowsPerPage='Строк на странице:'
				labelDisplayedRows={({ from, to, count }) =>
					`${from}-${to} из ${count}`
				}
			/>

			{/* Контекстное меню */}
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleMenuClose}
			>
				<MenuItem onClick={handleEdit}>
					<Edit sx={{ mr: 1 }} />
					Редактировать
				</MenuItem>
				<MenuItem onClick={handleDuplicate}>
					<ContentCopy sx={{ mr: 1 }} />
					Дублировать
				</MenuItem>
				<MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
					<Delete sx={{ mr: 1 }} />
					Удалить
				</MenuItem>
			</Menu>
		</Paper>
	)
}

export default CompanyQuotasList
