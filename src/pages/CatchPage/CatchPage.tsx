// CatchPage.tsx
import React from 'react'
import { Typography, Box, Paper, Stack, Alert } from '@mui/material'
import CatchForm from './CatchForm'
import QuotaWarning from './QuotaWarning'
import RecentCatches from './RecentCatches'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined'
import CompanyQuotas from './CompanyQuotas'

const CatchPage: React.FC = () => {
	// Mock данные квот компании
	const companyQuotas = [
		{
			id: '1',
			species: 'Хамса',
			totalQuota: 10000,
			usedQuota: 7500,
			region: 'Азовское море',
		},
		{
			id: '2',
			species: 'Тюлька',
			totalQuota: 8000,
			usedQuota: 3200,
			region: 'Азовское море',
		},
		{
			id: '3',
			species: 'Кефаль',
			totalQuota: 5000,
			usedQuota: 4800,
			region: 'Чёрное море',
		},
	]

	const hasQuotas = companyQuotas.length > 0

	return (
		<Box sx={{ py: 4 }}>
			<Stack direction='row' alignItems='center' gap={1}>
				{/* <EditNoteOutlinedIcon
					sx={{ fontSize: '50px', pb: 1 }}
					color='primary'
				/> */}
				<Typography
					variant='h4'
					component='h1'
					gutterBottom
					sx={{ fontWeight: 'bold' }}
				>
					Ввод улова
				</Typography>
			</Stack>

			{hasQuotas ? (
				<>
					<Typography
						variant='body1'
						color='text.secondary'
						sx={{ mb: 4, mt: 2 }}
					>
						Заполните информацию о пойманной рыбе. Система автоматически
						проверит доступные квоты.
					</Typography>

					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
						{/* Квоты компании */}
						<CompanyQuotas quotas={companyQuotas} />

						{/* Предупреждение о квотах */}
						<QuotaWarning />

						{/* Основная форма */}
						<Paper sx={{ p: 4 }} elevation={3}>
							<CatchForm availableSpecies={companyQuotas.map(q => q.species)} />
						</Paper>

						{/* Последние уловы */}
						<RecentCatches />
					</Box>
				</>
			) : (
				<>
					<Alert severity='warning' sx={{ my: 2 }}>
						<Typography variant='h6' gutterBottom>
							Нет доступных квот
						</Typography>
						<Typography variant='body1'>
							У вашей компании нет активных квот на вылов рыбы. Обратитесь к
							администратору для получения квот.
						</Typography>
					</Alert>
					{/* Последние уловы */}
					<RecentCatches />
				</>
			)}
		</Box>
	)
}

export default CatchPage
