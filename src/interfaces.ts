export interface IUserData {
	token: string | null
	tokenType: string
	user: {
		id: number | null
		organizationId: number | null
		username: string
		email: string
		password: string | null
		active: boolean
	}
	organization: {
		id: number | null
		name: string
		orgType: string
		inn: string
		regionId: number | null
	}
	roles: string[]
	expired: boolean | null
	valid: boolean | null
	error: string | null
	message: string | null
}

// Интерфейс для вида рыбы
export interface FishSpecies {
	id: number
	scientificName: string // Научное название
	commonName: string // Обычное название
	endangered: boolean // Находится ли под угрозой исчезновения
}

// Интерфейс для региона
export interface FishingRegion {
	id: number
	code: string // Код региона (например, "AZOV")
	name: string // Название региона
}

// Интерфейс для организаций
export interface Company {
	id: number
	name: string
	orgType: string
	inn: string
}
