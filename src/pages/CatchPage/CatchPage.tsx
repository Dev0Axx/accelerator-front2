// CatchPage.tsx
import React from 'react'
import { Typography, Box, Paper, Stack, Alert } from '@mui/material'
import CatchForm from './CatchForm'
import QuotaWarning from './QuotaWarning'
import RecentCatches from './RecentCatches'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined'
import CompanyQuotas from './CompanyQuotas'
import useSWR from 'swr'
import { api } from '../../api/api'
import type { FishingQuota } from '../../interfaces'
import { useAppSelector } from '../../hooks/storeHooks'

const CatchPage: React.FC = () => {
	const organizationId = useAppSelector(
		state => state.userProfile.organization.id
	)

	const fetcher = async (url: string): Promise<FishingQuota[]> => {
		const token = localStorage.getItem('token')
		const response = await api.get(url, {
			headers: {
				Authorization: token ? `Bearer ${token}` : '',
			},
		})
		return response.data.content
	}
	const { data, isLoading, error } = useSWR('/my/quotas/allocation', fetcher)

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

			{data && data?.length > 0 ? (
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
						<CompanyQuotas quotas={data} />
						{/* Предупреждение о квотах */}
						<QuotaWarning />
						Основная форма
						{/* <Paper sx={{ p: 4 }} elevation={3}>
							<CatchForm availableSpecies={companyQuotas.map(q => q.species)} />
						</Paper> */}
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
