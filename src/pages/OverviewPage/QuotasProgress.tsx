import React from 'react'
import {
	Paper,
	Typography,
	Box,
	LinearProgress,
	Chip,
	Alert,
} from '@mui/material'
import { Warning } from '@mui/icons-material'

const QuotasProgress: React.FC = () => {
	const quotas = [
		{
			species: 'Хамса',
			region: 'Азовское море',
			used: 13200,
			total: 15000,
			percentage: 88,
			status: 'warning',
		},
		{
			species: 'Тюлька',
			region: 'Азовское море',
			used: 7500,
			total: 10000,
			percentage: 75,
			status: 'normal',
		},
		{
			species: 'Кефаль',
			region: 'Чёрное море',
			used: 4800,
			total: 5000,
			percentage: 96,
			status: 'critical',
		},
		{
			species: 'Камбала-калкан',
			region: 'Чёрное море',
			used: 900,
			total: 1200,
			percentage: 75,
			status: 'normal',
		},
	]

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'critical':
				return 'error'
			case 'warning':
				return 'warning'
			default:
				return 'primary'
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

	const criticalQuotas = quotas.filter(q => q.status === 'critical')

	return (
		<Paper sx={{ p: 3 }}>
			<Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
				Использование квот
			</Typography>

			{criticalQuotas.length > 0 && (
				<Alert severity='warning' sx={{ mb: 3 }}>
					<strong>Внимание!</strong> Некоторые квоты близки к исчерпанию
				</Alert>
			)}

			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 3,
				}}
			>
				{quotas.map((quota, index) => (
					<Box
						key={index}
						sx={{
							width: { xs: '100%', md: 'calc(50% - 12px)' },
							mb: 2,
						}}
					>
						<Box sx={{ mb: 2 }}>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									mb: 1,
								}}
							>
								<Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
									{quota.species}
								</Typography>
								<Chip
									label={getStatusText(quota.status)}
									color={getStatusColor(quota.status)}
									size='small'
								/>
							</Box>

							<Typography variant='body2' color='text.secondary' gutterBottom>
								{quota.region}
							</Typography>

							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									mb: 1,
								}}
							>
								<Typography variant='body2'>
									{quota.used.toLocaleString()} / {quota.total.toLocaleString()}{' '}
									кг
								</Typography>
								<Typography
									variant='body2'
									sx={{
										fontWeight: 'bold',
										color:
											quota.status === 'critical'
												? 'error.main'
												: quota.status === 'warning'
												? 'warning.main'
												: 'text.primary',
									}}
								>
									{quota.percentage}%
								</Typography>
							</Box>

							<LinearProgress
								variant='determinate'
								value={quota.percentage}
								color={getStatusColor(quota.status)}
								sx={{ height: 8, borderRadius: 4 }}
							/>

							{quota.status === 'critical' && (
								<Typography
									variant='caption'
									color='error'
									sx={{ mt: 0.5, display: 'block' }}
								>
									<Warning
										sx={{ fontSize: 12, verticalAlign: 'middle', mr: 0.5 }}
									/>
									Осталось {quota.total - quota.used} кг
								</Typography>
							)}
						</Box>
					</Box>
				))}
			</Box>
		</Paper>
	)
}

export default QuotasProgress
