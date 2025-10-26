import React from 'react'
import { Typography, Box, Paper, Stack } from '@mui/material'
import CatchForm from './CatchForm'
import QuotaWarning from './QuotaWarning'
import RecentCatches from './RecentCatches'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined'

const CatchPage: React.FC = () => {
	return (
		<Box sx={{ py: 4 }}>
			<Stack direction='row' alignItems='center' gap={1}>
				<EditNoteOutlinedIcon
					sx={{ fontSize: '50px', pb: 1 }}
					color='primary'
				/>
				<Typography
					variant='h4'
					component='h1'
					gutterBottom
					sx={{ fontWeight: 'bold' }}
				>
					Ввод улова
				</Typography>
			</Stack>
			<Typography variant='body1' color='text.secondary' sx={{ mb: 4, mt: 2 }}>
				Заполните информацию о пойманной рыбе. Система автоматически проверит
				доступные квоты.
			</Typography>

			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
				{/* Предупреждение о квотах (будет показываться при необходимости) */}
				<QuotaWarning />

				{/* Основная форма */}
				<Paper sx={{ p: 4 }}>
					<CatchForm />
				</Paper>

				{/* Последние уловы */}
				<RecentCatches />
			</Box>
		</Box>
	)
}

export default CatchPage
