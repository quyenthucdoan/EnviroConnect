import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen.js"
import SearchScreen from "../screens/SearchScreen.js"

const Stack = createStackNavigator()

const HomeNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="SearchScreen" component={SearchScreen} />
		</Stack.Navigator>
	)
}

export default HomeNavigator
