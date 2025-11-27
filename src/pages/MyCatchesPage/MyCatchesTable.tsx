import React, { useMemo } from 'react'
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table'
import { MRT_Localization_RU } from 'material-react-table/locales/ru'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

// Типы данных
interface CatchData {
	id: number
	fishingDate: string
	species: string
	weightKg: number
	region: string
}

// Mock данные с сервера
const mockServerResponse = {
	data: [
		{
			id: 13,
			fishingDate: '2024-01-15',
			species: 'Хамса',
			weightKg: 1250.5,
			region: 'Азовское море',
		},
		{
			id: 12,
			fishingDate: '2024-01-14',
			species: 'Тюлька',
			weightKg: 850.2,
			region: 'Азовское море',
		},
		{
			id: 11,
			fishingDate: '2024-01-13',
			species: 'Кефаль',
			weightKg: 320.7,
			region: 'Чёрное море',
		},
		{
			id: 10,
			fishingDate: '2024-01-10',
			species: 'Хамса',
			weightKg: 980.1,
			region: 'Азовское море',
		},
		{
			id: 9,
			fishingDate: '2024-01-08',
			species: 'Камбала-калкан',
			weightKg: 1500.8,
			region: 'Баренцево море',
		},
		{
			id: 8,
			fishingDate: '2024-01-05',
			species: 'Белуга',
			weightKg: 250.3,
			region: 'Балтийское море',
		},
		{
			id: 7,
			fishingDate: '2024-01-03',
			species: 'Осётр русский',
			weightKg: 180.6,
			region: 'Чёрное море',
		},
		{
			id: 6,
			fishingDate: '2023-12-28',
			species: 'Хамса',
			weightKg: 1100.2,
			region: 'Азовское море',
		},
		{
			id: 5,
			fishingDate: '2023-12-25',
			species: 'Тюлька',
			weightKg: 720.9,
			region: 'Азовское море',
		},
		{
			id: 4,
			fishingDate: '2023-12-20',
			species: 'Кефаль',
			weightKg: 430.1,
			region: 'Чёрное море',
		},
		{
			id: 3,
			fishingDate: '2023-12-15',
			species: 'Камбала-калкан',
			weightKg: 890.4,
			region: 'Баренцево море',
		},
		{
			id: 2,
			fishingDate: '2023-12-10',
			species: 'Хамса',
			weightKg: 1350.7,
			region: 'Азовское море',
		},
		{
			id: 1,
			fishingDate: '2023-12-05',
			species: 'Тюлька',
			weightKg: 610.8,
			region: 'Азовское море',
		},
	],
}

interface MyCatchesTableProps {
	data?: CatchData[]
	isLoading?: boolean
}

const MyCatchesTable: React.FC<MyCatchesTableProps> = ({
	data = mockServerResponse.data,
	isLoading = false,
}) => {
	// Получаем уникальные значения для фильтров
	const speciesOptions = useMemo(
		() => Array.from(new Set(data.map(item => item.species))),
		[data]
	)

	const regionOptions = useMemo(
		() => Array.from(new Set(data.map(item => item.region))),
		[data]
	)

	// Колонки таблицы
	const columns = useMemo<MRT_ColumnDef<CatchData>[]>(
		() => [
			{
				accessorKey: 'fishingDate',
				header: 'Дата вылова',
				size: 130,
				filterVariant: 'date-range',
				Cell: ({ cell }) => {
					const date = new Date(cell.getValue<string>())
					return date.toLocaleDateString('ru-RU')
				},
			},
			{
				accessorKey: 'species',
				header: 'Вид рыбы',
				size: 150,
				filterVariant: 'select',
				filterSelectOptions: speciesOptions,
			},
			{
				accessorKey: 'weightKg',
				header: 'Вес (кг)',
				size: 120,
				filterVariant: 'range',
				Cell: ({ cell }) => {
					const weight = cell.getValue<number>()
					return weight.toLocaleString('ru-RU', {
						minimumFractionDigits: 1,
						maximumFractionDigits: 1,
					})
				},
			},
			{
				accessorKey: 'region',
				header: 'Район вылова',
				size: 160,
				filterVariant: 'select',
				filterSelectOptions: regionOptions,
			},
		],
		[speciesOptions, regionOptions]
	)

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<MaterialReactTable
				columns={columns}
				data={data}
				// Локализация
				localization={MRT_Localization_RU}
				state={{ isLoading }}
				// Настройки отображения
			/>
		</LocalizationProvider>
	)
}

export default MyCatchesTable
