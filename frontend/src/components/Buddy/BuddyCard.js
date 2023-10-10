import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import PrimaryButton from "../Button/PrimaryButton"
import Avatar from "../Other/Avatar"
import SocialPoint from "../Other/SocialPoint"
const BuddyCard = ({ username, city, activities, point }) => {
	return (
		<TouchableOpacity className="flex flex-row gap-y-2 bg-white rounded-primary px-6 pt-4 pb-6">
			<View class="flex-[3_3_0%]">
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
				<Text>{activities}</Text>
			</View>
			<View className="flex-1 items-end">
				<PrimaryButton title="Connect" className="px-6" />
			</View>
		</TouchableOpacity>
	)
}
export default BuddyCard
