import "react-native-gesture-handler"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import MainNavigator from "./src/navigator/MainNavigator"
export default function App() {
	return (
		<GestureHandlerRootView className="flex-1">
			<MainNavigator />
		</GestureHandlerRootView>
	)
}
