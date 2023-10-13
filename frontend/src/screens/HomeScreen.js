import { Ionicons } from "@expo/vector-icons"
import { Image, ScrollView, Text, View } from "react-native"
import { theme } from "../../tailwind.config"
import ActivitySection from "../components/Activity/ActivitySection"
import BuddySection from "../components/Buddy/BuddySection"
import MainInput from "../components/Input/MainInput"
import Layout from "../components/Layout/Layout"
import Section from "../components/Layout/Section"

const HomeScreen = ({ navigation }) => {
	return (
		<Layout statusBarBgColor={theme.colors.primary.darker}>
			<ScrollView refreshing={false}>
				<Section className="flex-1 pt-5 bg-primary-darker">
					<MainInput
						placeholder={"What do you want to do today?"}
						onPress={() => navigation.navigate("SearchScreen")}
					/>
					<View>
						<Image
							resizeMode="contain"
							className="w-2/5 h-7"
							source={require("../assets/images/EcoImpact.png")}
						></Image>
					</View>
					<View className="flex-row justify-between mb-4">
						<View className="flex-row gap-x-2">
							<Text>
								<Ionicons name="globe" size={14} color={"#BAC7D5"} />
								<Text className="text-cloud-normal"> Activities</Text>
							</Text>
							<Text className="font-bold text-primary-light">20</Text>
						</View>

						<View className="flex-row gap-x-2">
							<Text>
								<Ionicons name="location" size={14} color={"#BAC7D5"} />
								<Text className="text-cloud-normal"> Locations</Text>
							</Text>
							<Text className="font-bold text-primary-light">12</Text>
						</View>

						<View className="flex-row gap-x-2">
							<Text>
								<Ionicons name="people" size={14} color={"#BAC7D5"} />
								<Text className="text-cloud-normal"> Buddies</Text>
							</Text>
							<Text className="font-bold text-primary-light">40</Text>
						</View>
					</View>
				</Section>
				<Section className="flex-1 mt-5">
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
