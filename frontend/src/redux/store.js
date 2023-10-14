import { configureStore } from "@reduxjs/toolkit"
import locationReducer from "./reducers/locationSlice"
import userReducer from "./reducers/userSlice"

export default store = configureStore({
	reducer: {
		location: locationReducer.reducer,
        user: userReducer.reducer,
	},
})
