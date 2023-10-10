import { ScrollView, TouchableOpacity, View } from "react-native"
import { theme } from "../../tailwind.config"
import ActivitySection from "../components/Activity/ActivitySection"
import BuddySection from "../components/Buddy/BuddySection"
import CustomTextInput from "../components/Input/CustomTextInput"
import Layout from "../components/Layout/Layout"
import Section from "../components/Layout/Section"
const HomeScreen = ({ navigation }) => {
	return (
		<Layout statusBarBgColor={theme.colors.primary.darker}>
			<ScrollView refreshing={false}>
				<Section className="flex-1">
					<View className="w-screen h-2/3	bg-primary-darker absolute" />

					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("SearchScreen")}
						>
							<CustomTextInput placeholder={"What do you want to do today?"} />
						</TouchableOpacity>
					</View>
				</Section>
				<Section className="flex-1">
					<ActivitySection />
				</Section>
				<Section className="flex-1">
					<BuddySection />
				</Section>
			</ScrollView>
		</Layout>
	)
}

export default HomeScreen
