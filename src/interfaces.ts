export interface IUserData {
	token: string
	tokenType: string
	user: {
		id: number
		organizationId: number
		username: string
		email: string
		password: string | null
		active: boolean
	}
	organization: {
		id: number
		name: string
		orgType: string
		inn: string
		regionId: number
	}
}
