import { View } from "react-native"
import AchievementCard from "../components/Achievement/AchievementCard"
import CustomTextInput from "../components/Input/CustomTextInput"
import Layout from "../components/Layout/Layout"
import VerticalList from "../components/List/VerticalList"
import Map from "../components/Map/Map"

const teams = [
	{
		name: "Alex",
		city: "Ho Chi Minh city",
		point: "Đ. Võ Thị Sáu, Quận 1",
		activities: "Plant for future",
		point: 20,
	},
	{
		name: "Alex",
		city: "Ho Chi Minh city",
		point: "Đ. Võ Thị Sáu, Quận 1",
		activities: "Plant for future",
		point: 20,
	},
	{
		name: "Planting for future",
		city: "Vietnam Women’s Union",
		point: "Đ. Võ Thị Sáu, Quận 1",
		activities: "Plant for future",
		point: 20,
	},
]

const AchievementMapScreen = () => {
	return (
		<Layout>
			<Map></Map>
			<View
				className="w-screen bg-white h-2/5"
				style={{ position: "absolute", bottom: "0%", left: "0%", zIndex: 10 }}
			>
				<CustomTextInput placeholder={"What do you want to do today?"} />
				<VerticalList
					Card={AchievementCard}
					data={teams}
					scrollEnabled={true}
					ItemSeparatorComponent={() => (
						<View
							className="w-5/6 h-[1] bg-gray-300"
							style={{
								height: 0.5,
								width: "90%",
								backgroundColor: "#A7ADB7",
								margin: "auto",
								display: "flex",
							}}
						/>
					)}
				/>
			</View>
		</Layout>
	)
}

export default AchievementMapScreen
