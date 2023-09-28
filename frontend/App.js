import * as React from "react"
import { FontAwesome } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { theme } from "./tailwind.config.js"
import HomeScreen from "./src/screens/HomeScreen.js"

const Tab = createBottomTabNavigator()

export default function App() {
	const routes = {
		Home: "home",
	}
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name={routes[route.name]} size={size} color={color} />
					),
					tabBarActiveTintColor: theme.colors.primary.normal,
					tabBarInactiveTintColor: "gray",
					headerShown: false,
				})}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
