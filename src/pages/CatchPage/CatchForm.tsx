import React, { useState } from 'react'
import {
	Box,
	TextField,
	MenuItem,
	Button,
	Typography,
	Alert,
	CircularProgress,
	Divider,
	Stack,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ru } from 'date-fns/locale'
import { Save, Clear } from '@mui/icons-material'

// Типы данных
interface CatchData {
	fishingDate: Date | null
	species: string
	weight: string
	region: string
	notes: string
}

interface Species {
	id: string
	name: string
	scientificName: string
}

interface Region {
	id: string
	name: string
	code: string
}

const CatchForm: React.FC = () => {
	const [formData, setFormData] = useState<CatchData>({
		fishingDate: new Date(),
		species: '',
		weight: '',
		region: '',
		notes: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitSuccess, setSubmitSuccess] = useState(false)

	// Mock данные - в реальном приложении будут приходить с API
	const species: Species[] = [
		{ id: '1', name: 'Хамса', scientificName: 'Engraulis encrasicolus' },
		{ id: '2', name: 'Тюлька', scientificName: 'Clupeonella cultriventris' },
		{ id: '3', name: 'Кефаль', scientificName: 'Mugil cephalus' },
		{ id: '4', name: 'Камбала-калкан', scientificName: 'Psetta maxima' },
		{ id: '5', name: 'Белуга', scientificName: 'Huso huso' },
		{
			id: '6',
			name: 'Осётр русский',
			scientificName: 'Acipenser gueldenstaedtii',
		},
	]

	const regions: Region[] = [
		{ id: '1', name: 'Азовское море', code: 'AZOV' },
		{ id: '2', name: 'Чёрное море', code: 'BLACK' },
		{ id: '3', name: 'Баренцево море', code: 'BARENTS' },
		{ id: '4', name: 'Балтийское море', code: 'BALTIC' },
	]

	const handleInputChange =
		(field: keyof CatchData) =>
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setFormData(prev => ({
				...prev,
				[field]: event.target.value,
			}))
			// Сбрасываем статус успешной отправки при изменении формы
			if (submitSuccess) setSubmitSuccess(false)
		}

	const handleDateChange = (date: Date | null) => {
		setFormData(prev => ({
			...prev,
			fishingDate: date,
		}))
		if (submitSuccess) setSubmitSuccess(false)
	}

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		setIsSubmitting(true)

		// Имитация отправки на сервер
		try {
			await new Promise(resolve => setTimeout(resolve, 1500))
			console.log('Данные улова:', formData)
			setSubmitSuccess(true)
			handleClear()
		} catch (error) {
			console.error('Ошибка при отправке:', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	const handleClear = () => {
		setFormData({
			fishingDate: new Date(),
			species: '',
			weight: '',
			region: '',
			notes: '',
		})
	}

	const isFormValid =
		formData.fishingDate &&
		formData.species &&
		formData.weight &&
		formData.region &&
		parseFloat(formData.weight) > 0

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
			<Box component='form' onSubmit={handleSubmit}>
				<Typography
					variant='h5'
					gutterBottom
					sx={{ fontWeight: 'bold', mb: 3 }}
				>
					Информация об улове
				</Typography>

				{submitSuccess && (
					<Alert severity='success' sx={{ mb: 3 }}>
						Успешно! Улов записан в систему.
					</Alert>
				)}

				{/* Дата вылова */}
				<Stack direction='row' alignItems='top' gap={4}>
					<DatePicker
						label='Дата вылова'
						value={formData.fishingDate}
						onChange={handleDateChange}
						slotProps={{
							textField: {
								fullWidth: true,
								required: true,
								error: !formData.fishingDate,
							},
						}}
					/>
					{/* Вид рыбы */}
					<TextField
						select
						label='Вид рыбы'
						value={formData.species}
						onChange={handleInputChange('species')}
						fullWidth
						required
						error={!formData.species}
					>
						{species.map(spec => (
							<MenuItem key={spec.id} value={spec.id}>
								<Box>
									<Typography variant='body1'>{spec.name}</Typography>
									{/* <Typography variant='caption' color='text.secondary'>
										{spec.scientificName}
									</Typography> */}
								</Box>
							</MenuItem>
						))}
					</TextField>

					{/* Вес улова */}
					<TextField
						label='Вес улова (кг)'
						type='number'
						value={formData.weight}
						onChange={handleInputChange('weight')}
						fullWidth
						required
						error={!formData.weight || parseFloat(formData.weight) <= 0}
						// helperText='Введите вес в килограммах'
						inputProps={{
							min: '0.001',
							step: '0.001',
							max: '10000',
						}}
					/>
				</Stack>

				{/* Район вылова */}
				<Box my={2}>
					<TextField
						select
						label='Район вылова'
						value={formData.region}
						onChange={handleInputChange('region')}
						fullWidth
						required
						error={!formData.region}
					>
						{regions.map(region => (
							<MenuItem key={region.id} value={region.id}>
								{region.name} ({region.code})
							</MenuItem>
						))}
					</TextField>
				</Box>

				{/* Примечания */}
				<TextField
					label='Примечания (необязательно)'
					value={formData.notes}
					onChange={handleInputChange('notes')}
					fullWidth
					multiline
					rows={3}
					placeholder='Дополнительная информация об улове...'
				/>

				<Divider sx={{ my: 3 }} />

				{/* Кнопки действий */}
				<Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
					<Button
						variant='outlined'
						onClick={handleClear}
						startIcon={<Clear />}
						disabled={isSubmitting}
					>
						Очистить
					</Button>
					<Button
						type='submit'
						variant='contained'
						disabled={!isFormValid || isSubmitting}
						startIcon={isSubmitting ? <CircularProgress size={20} /> : <Save />}
						size='large'
					>
						{isSubmitting ? 'Отправка...' : 'Сохранить'}
					</Button>
				</Box>
			</Box>
		</LocalizationProvider>
	)
}

export default CatchForm
