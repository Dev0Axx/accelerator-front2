import React from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import QuotasList from './QuotasList'
import QuotaStatistics from './QuotaStatistics'
import SetQuotaModal from './SetQuotaModal'

const QuotasPage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(false)

	return (
		<Container maxWidth='xl'>
			<Box sx={{ py: 4 }}>
				{/* Заголовок с кнопкой добавления */}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'flex-start',
						mb: 4,
					}}
				>
					<Box>
						<Typography
							variant='h4'
							component='h1'
							gutterBottom
							sx={{ fontWeight: 'bold' }}
						>
							⚖️ Управление квотами
						</Typography>
						<Typography variant='body1' color='text.secondary'>
							Настройка лимитов вылова по видам рыбы и регионам
						</Typography>
					</Box>
					<Button
						variant='contained'
						startIcon={<Add />}
						onClick={() => setIsModalOpen(true)}
					>
						Установить квоту
					</Button>
				</Box>

				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
					{/* Статистика квот */}
					<QuotaStatistics />

					{/* Список квот */}
					<QuotasList />

					{/* Модальное окно установки квоты */}
					<SetQuotaModal
						open={isModalOpen}
						onClose={() => setIsModalOpen(false)}
					/>
				</Box>
			</Box>
		</Container>
	)
}

export default QuotasPage
