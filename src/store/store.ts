import { configureStore } from '@reduxjs/toolkit'
import UserProfilesReducer from './slices/userProfileSlice '

export default configureStore({
	reducer: {
		userProfile: UserProfilesReducer,
	},
})
