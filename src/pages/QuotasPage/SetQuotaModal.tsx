import React, { useState } from 'react'
import {
	Modal,
	Box,
	TextField,
	MenuItem,
	Button,
	Typography,
	IconButton,
} from '@mui/material'
import { Close, Save } from '@mui/icons-material'

interface SetQuotaModalProps {
	open: boolean
	onClose: () => void
}

interface QuotaFormData {
	species: string
	region: string
	year: number
	limit: string
}

const SetQuotaModal: React.FC<SetQuotaModalProps> = ({ open, onClose }) => {
	const [formData, setFormData] = useState<QuotaFormData>({
		species: '',
		region: '',
		year: new Date().getFullYear(),
		limit: '',
	})

	const species = [
		{ id: '1', name: 'Хамса' },
		{ id: '2', name: 'Тюлька' },
		{ id: '3', name: 'Кефаль' },
		{ id: '4', name: 'Камбала-калкан' },
		{ id: '5', name: 'Треска' },
		{ id: '6', name: 'Сельдь' },
	]

	const regions = [
		{ id: '1', name: 'Азовское море' },
		{ id: '2', name: 'Чёрное море' },
		{ id: '3', name: 'Баренцево море' },
		{ id: '4', name: 'Балтийское море' },
		{ id: '5', name: 'Охотское море' },
	]

	const years = [
		new Date().getFullYear(),
		new Date().getFullYear() + 1,
		new Date().getFullYear() + 2,
	]

	const handleInputChange =
		(field: keyof QuotaFormData) =>
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setFormData(prev => ({ ...prev, [field]: event.target.value }))
		}

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		console.log('Установить квоту:', formData)
		// Здесь будет API запрос
		onClose()
		setFormData({
			species: '',
			region: '',
			year: new Date().getFullYear(),
			limit: '',
		})
	}

	const handleClose = () => {
		onClose()
		setFormData({
			species: '',
			region: '',
			year: new Date().getFullYear(),
			limit: '',
		})
	}

	const isFormValid =
		formData.species &&
		formData.region &&
		formData.limit &&
		parseFloat(formData.limit) > 0

	return (
		<Modal open={open} onClose={handleClose}>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: { xs: '90%', sm: 500 },
					bgcolor: 'background.paper',
					boxShadow: 24,
					p: 4,
					borderRadius: 2,
				}}
			>
				{/* Заголовок */}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						mb: 3,
					}}
				>
					<Typography variant='h5' sx={{ fontWeight: 'bold' }}>
						Установить новую квоту
					</Typography>
					<IconButton onClick={handleClose} size='small'>
						<Close />
					</IconButton>
				</Box>

				{/* Форма */}
				<Box component='form' onSubmit={handleSubmit}>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
						<TextField
							select
							label='Вид рыбы'
							value={formData.species}
							onChange={handleInputChange('species')}
							required
							fullWidth
						>
							{species.map(sp => (
								<MenuItem key={sp.id} value={sp.id}>
									{sp.name}
								</MenuItem>
							))}
						</TextField>

						<TextField
							select
							label='Район вылова'
							value={formData.region}
							onChange={handleInputChange('region')}
							required
							fullWidth
						>
							{regions.map(region => (
								<MenuItem key={region.id} value={region.id}>
									{region.name}
								</MenuItem>
							))}
						</TextField>

						<Box sx={{ display: 'flex', gap: 2 }}>
							<Box sx={{ width: '50%' }}>
								<TextField
									select
									label='Год'
									value={formData.year}
									onChange={handleInputChange('year')}
									required
									fullWidth
								>
									{years.map(year => (
										<MenuItem key={year} value={year}>
											{year}
										</MenuItem>
									))}
								</TextField>
							</Box>

							<Box sx={{ width: '50%' }}>
								<TextField
									label='Лимит (кг)'
									type='number'
									value={formData.limit}
									onChange={handleInputChange('limit')}
									required
									fullWidth
									inputProps={{ min: '1', step: '1' }}
									helperText='Введите лимит в килограммах'
								/>
							</Box>
						</Box>
					</Box>

					{/* Кнопки действий */}
					<Box
						sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 4 }}
					>
						<Button variant='outlined' onClick={handleClose}>
							Отмена
						</Button>
						<Button
							type='submit'
							variant='contained'
							disabled={!isFormValid}
							startIcon={<Save />}
						>
							Сохранить квоту
						</Button>
					</Box>
				</Box>
			</Box>
		</Modal>
	)
}

export default SetQuotaModal
