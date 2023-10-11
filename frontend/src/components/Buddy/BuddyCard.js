import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import OutlinedButton from "../Button/OutlinedButton"
import Avatar from "../Other/Avatar"
import SocialPoint from "../Other/SocialPoint"

const BuddyCard = ({ username, city, activities, point, avatar }) => {
	return (
		<TouchableOpacity className="bg-white rounded-primary p-4">
			<View className="flex-row mb-1">
				<View className="flex-row">
					<Avatar
						src={{
							uri: avatar,
						}}
					/>
					<View className='ml-2'>
						<SocialPoint className="flex-1" name={username} number={point} />
						<Text className="text-ink-light mt-[8px]">{city}</Text>
					</View>
				</View>
				<View className="flex-1 items-end">
					<OutlinedButton title="Connect" className="px-4" />
				</View>
			</View>
			<Text>
				<Ionicons name="calendar-sharp" size={14} color="#009580" />
				<Text> {activities}</Text>
			</Text>
		</TouchableOpacity>
	)
}
export default BuddyCard
