import { Entypo } from "@expo/vector-icons"
import { useState } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import PrimaryButton from "../Button/PrimaryButton"
import SecondaryButton from "../Button/SecondaryButton"
import VerticalList from "../List/VerticalList"
import ActivityCard from "./ActivityCard"
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

const ActivitySection = () => {
	const [selected, setSelected] = useState("All")
	const categories = ["All", "Planting", "Cleanup", "Collect", "Workshop"]
	return (
		<>
			<View className="flex flex-row justify-between items-center">
				<Text className="text-title1">Activities Suggestion</Text>
				<TouchableOpacity className="text-xs">
					<Text>On map</Text>
				</TouchableOpacity>
			</View>
			<View className="flex flex-row items-center">
				<Entypo name="location-pin" size={18} color="black" />
				<Text>Find activities near you</Text>
			</View>

			<View>
				<FlatList
					data={categories}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) =>
						item === selected ? (
							<PrimaryButton
								className="px-2 mr-2"
								title={item}
								onPress={() => setSelected(item)}
							/>
						) : (
							<SecondaryButton
								className="px-2 mr-2"
								title={item}
								onPress={() => setSelected(item)}
							/>
						)
					}
				/>
			</View>
			<VerticalList Card={ActivityCard} data={activities} />
		</>
	)
}

export default ActivitySection
