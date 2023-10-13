import { configureStore } from "@reduxjs/toolkit"
import locationReducer from "./reducers/locationSlice"
import activityListReducer from "./reducers/activitySlice"

export default store = configureStore({
	reducer: {
		location: locationReducer.reducer,
		activityList: activityListReducer.reducer
	},
})
