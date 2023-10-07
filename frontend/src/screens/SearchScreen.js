import { View } from "react-native"
import ActivityCard from "../components/Activity/ActivityCard"
import CustomTextInput from "../components/Input/CustomTextInput"
import Layout from "../components/Layout/Layout"
import VerticalList from "../components/List/VerticalList"
import Map from "../components/Map/Map"

const activities = [
	{
		title: "Planting for future",
		organization: "Vietnam Women’s Union",
		address: "Đ. Võ Thị Sáu, Quận 1",
		distance: "1.2",
		start: "23-02-2023",
		end: "23-02-2023",
		current: "20",
		max: "100",
	},
	{
		title: "Planting for future",
		organization: "Vietnam Women’s Union",
		address: "Đ. Võ Thị Sáu, Quận 1",
		distance: "1.2",
		start: "23-02-2023",
		end: "23-02-2023",
		current: "20",
		max: "100",
	},
]

const SearchScreen = () => {
	return (
		<Layout>
			<Map></Map>
			<View
				className="w-screen bg-white h-2/5"
				style={{ position: "absolute", bottom: "0%", left: "0%", zIndex: 10 }}
			>
				<CustomTextInput placeholder={"What do you want to do today?"} />
				<VerticalList
					Card={ActivityCard}
					data={activities}
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

export default SearchScreen
