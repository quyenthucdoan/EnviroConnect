import { AntDesign, Feather, Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import moment from "moment"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import useService from "../../hooks/useService"
import { getUserById } from "../../services/user"
import FilledButton from "../Button/FilledButton"

const ActivityCard = ({
	name,
	organizerID,
	address,
	distance,
	startDate,
	endDate,
	current,
	max,
}) => {
	const navigation = useNavigation()
	const { data } = useService({ service: () => getUserById(organizerID) })

	return (
		<TouchableOpacity
			className="flex gap-y-2 bg-white rounded-primary px-5 pt-3 pb-5"
			onPress={() => navigation.navigate("DetailScreen")}
		>
			<View className="flex flex-row justify-between items-start">
				<View className="gap-y-2 basis-4/5">
					<Text className="text-title2 font-bold ">{name}</Text>
					<Text className="text-primary-darker italic">{organizerID}</Text>
				</View>
				<FilledButton title="JOIN" className="bg-primary-lighter px-4 py-2" styleText={{ color: "#276831", fontWeight: 500 }} />
			</View>

			<View className="flex flex-row justify-between">
				<Text className="text-gray text-xs basis-4/5">{address}</Text>
				<Text className="text-xs">{distance}km</Text>
			</View>
			<View className="flex flex-row justify-between ">
				<View className="flex flex-row items-center gap-x-1">
					<Ionicons name="calendar-sharp" size={14} color="#3E4E63" />
					<Text className="text-xs">
						{moment(startDate).utc().format("ddd, MMM DD")}
					</Text>
					<AntDesign name="arrowright" size={10} color="black" />
					<Text className="text-xs">
						{moment(endDate).utc().format("ddd, MMM DD")}
					</Text>
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
