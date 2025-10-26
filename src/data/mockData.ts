import type {
	FishSpecies,
	FishingRegion,
	Organization,
	Quota,
} from '../types/fishing'

export const mockSpecies: FishSpecies[] = [
	{
		id: 1,
		scientific_name: 'Engraulis encrasicolus',
		common_name: 'Хамса',
		is_endangered: false,
	},
	{
		id: 2,
		scientific_name: 'Clupeonella cultriventris',
		common_name: 'Тюлька',
		is_endangered: false,
	},
	{
		id: 3,
		scientific_name: 'Mugil cephalus',
		common_name: 'Кефаль',
		is_endangered: false,
	},
	{
		id: 4,
		scientific_name: 'Psetta maxima',
		common_name: 'Камбала-калкан',
		is_endangered: false,
	},
]

export const mockRegions: FishingRegion[] = [
	{ id: 1, code: 'AZOV', name: 'Азовское море' },
	{ id: 2, code: 'BLACK', name: 'Чёрное море' },
]

export const mockOrganizations: Organization[] = [
	{
		id: 1,
		name: 'Рыболовецкая артель «Донская»',
		org_type: 'COMPANY',
		inn: '123456789012',
		region_id: 1,
	},
	{
		id: 2,
		name: 'ООО «Черноморский промысел»',
		org_type: 'COMPANY',
		inn: '234567890123',
		region_id: 2,
	},
]

export const mockQuotas: Quota[] = [
	{
		id: 1,
		organization_id: 1,
		species_id: 1,
		region_id: 1,
		period_start: '2025-04-01',
		period_end: '2025-11-30',
		limit_kg: 15000,
		used_kg: 13200,
		percentage: 88,
	},
	{
		id: 2,
		organization_id: 1,
		species_id: 2,
		region_id: 1,
		period_start: '2025-04-01',
		period_end: '2025-11-30',
		limit_kg: 10000,
		used_kg: 7500,
		percentage: 75,
	},
	{
		id: 3,
		organization_id: 2,
		species_id: 1,
		region_id: 2,
		period_start: '2025-04-01',
		period_end: '2025-11-30',
		limit_kg: 8000,
		used_kg: 4500,
		percentage: 56,
	},
]
