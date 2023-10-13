import { configureStore } from "@reduxjs/toolkit"
import locationReducer from "./reducers/locationSlice"

export default store = configureStore({
	reducer: {
		location: locationReducer.reducer,
	},
})
