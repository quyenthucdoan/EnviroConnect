import { Entypo } from "@expo/vector-icons"
import { useState } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import useService from "../../hooks/useService"
import { getAllActivies } from "../../services/activity"
import PrimaryButton from "../Button/PrimaryButton"
import SecondaryButton from "../Button/SecondaryButton"
import VerticalList from "../List/VerticalList"
import ActivityCard from "./ActivityCard"

const ActivitySection = () => {
	const { data } = useService({ service: () => getAllActivies() })
	const [selected, setSelected] = useState("All")
	const categories = ["All", "Planting", "Cleanup", "Collect", "Workshop"]
	return (
		<>
			<View className="flex flex-row justify-between items-center">
				<Text className="text-title1 font-bold">Activities Suggestion</Text>
				<TouchableOpacity className="text-xs">
					<Text>On map</Text>
				</TouchableOpacity>
			</View>
			<View className="flex flex-row items-center">
				<Entypo name="location-pin" size={18} color="black" />
				<Text>Find activities near you</Text>
			</View>
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
			<VerticalList Item={ActivityCard} data={data?.slice(0, 5)} />
		</>
	)
}

export default ActivitySection
