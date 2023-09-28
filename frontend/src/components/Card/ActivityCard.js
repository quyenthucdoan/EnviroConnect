import { TouchableOpacity, Text, View } from "react-native"
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons"
import React from "react"

/*
			<ActivityCard
				title="Planting for future"
				organization="Vietnam Women’s Union"
				address="Đ. Võ Thị Sáu, Quận 1"
				distance="1.2"
				start="23-02-2023"
				end="23-02-2023"
				current="20"
				max="100"
			></ActivityCard>
*/
const ActivityCard = (props) => {
	return (
		<TouchableOpacity className="flex gap-y-2 bg-white rounded-lg px-6 pt-4 pb-6">
			<Text className="font-bold text-lg">{props.title}</Text>
			<Text className="text-primary-darker italic">{props.organization}</Text>
			<View className="flex flex-row justify-between ">
				<Text className="text-gray text-xs">{props.address}</Text>
				<Text className="text-xs">{props.distance}km</Text>
			</View>
			<View className="flex flex-row justify-between ">
				<View className="flex flex-row items-center gap-x-1">
					<Ionicons name="calendar-sharp" size={14} color="black" />
					<Text className="text-xs">{props.start}</Text>
					<AntDesign name="arrowright" size={10} color="black" />
					<Text className="text-xs">{props.end}</Text>
				</View>
				<View className="flex flex-row items-center gap-x-1">
					<Feather name="users" size={14} color="black" />
					<Text className="text-xs">
						{props.current} / {props.max}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}
export default ActivityCard
