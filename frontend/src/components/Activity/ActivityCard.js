import { AntDesign, Feather, Ionicons } from "@expo/vector-icons"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import PrimaryButton from "../Button/PrimaryButton"

const ActivityCard = ({
	name,
	organization,
	address,
	distance,
	startDate,
	endDate,
	current,
	max,
}) => {
	return (
		<TouchableOpacity className="flex gap-y-2 bg-white rounded-primary px-6 pt-4 pb-6">
			<View className="flex flex-row justify-between items-start">
				<View className="gap-y-2 ">
					<Text className="text-title2 font-bold">{name}</Text>
					<Text className="text-primary-darker italic">{organization}</Text>
				</View>
				<PrimaryButton title="Join" className="px-6" />
			</View>

			<View className="flex flex-row justify-between ">
				<Text className="text-gray text-xs">{address}</Text>
				<Text className="text-xs">{distance}km</Text>
			</View>
			<View className="flex flex-row justify-between ">
				<View className="flex flex-row items-center gap-x-1">
					<Ionicons name="calendar-sharp" size={14} color="black" />
					<Text className="text-xs">{startDate}</Text>
					<AntDesign name="arrowright" size={10} color="black" />
					<Text className="text-xs">{endDate}</Text>
				</View>
				<View className="flex flex-row items-center gap-x-1">
					<Feather name="users" size={14} color="black" />
					<Text className="text-xs">
						{current} / {max}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}
export default ActivityCard
