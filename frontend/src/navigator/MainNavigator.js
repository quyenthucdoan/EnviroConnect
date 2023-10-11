import { FontAwesome } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import * as React from "react"
import { theme } from "../../tailwind.config.js"
import AchievementMapScreen from "../screens/AchievementMapScreen.js"
import SearchScreen from "../screens/SearchScreen.js"
import HomeNavigator from "./HomeNavigator.js"
import UserScreen from "../screens/UserScreen.js"

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
	const routes = {
		Home: "home",
		Discovery: "search",
		Achievement: "trophy",
		User: "user"
	}
	return (
		<NavigationContainer initialRouteName="HomeNavigator">
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
				<Tab.Screen name="Home" component={HomeNavigator} />
				<Tab.Screen name="Discovery" component={SearchScreen} />
				<Tab.Screen name="Achievement" component={AchievementMapScreen} />
				<Tab.Screen name="User" component={UserScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default MainNavigator
