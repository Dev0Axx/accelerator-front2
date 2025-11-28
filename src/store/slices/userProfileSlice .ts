import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
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
}

const initialState: IInitialState = {
	user: {
		id: null,
		organizationId: null,
		username: '',
		email: '',
		password: null,
		active: true,
	},
	organization: {
		id: null,
		name: '',
		orgType: '',
		inn: '',
		regionId: null,
	},
}

const UserProfileSlice = createSlice({
	name: 'userProfile',
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<IInitialState>) => {
			state.user = action.payload.user
			state.organization = action.payload.organization
		},
	},
})

export const { setData } = UserProfileSlice.actions

export default UserProfileSlice.reducer
