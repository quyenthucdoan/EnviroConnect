import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import PrimaryButton from "../Button/PrimaryButton"
import Avatar from "../Other/Avatar"
import SocialPoint from "../Other/SocialPoint"

const BuddyCard = ({ username, city, activities, point }) => {
	return (
		<TouchableOpacity className="gap-2 bg-white rounded-primary p-6">
			<View className="basis-4/5 flex-row">
				<View className="flex-1 flex-row gap-x-2">
					<Avatar
						src={{
							uri: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
						}}
					/>
					<View>
						<SocialPoint className="flex-1" name={username} number={point} />
						<Text className="text-primary-darker italic mt-[8px]">{city}</Text>
					</View>
				</View>
				<View className="flex-1 items-end">
					<PrimaryButton title="Connect" className="px-6" />
				</View>
			</View>
			<View className="flex-row">
				<Ionicons name="calendar-sharp" size={14} color="black" />
				<Text>{activities}</Text>
			</View>
		</TouchableOpacity>
	)
}
export default BuddyCard
