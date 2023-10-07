import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import PrimaryButton from "../Button/PrimaryButton"
import Avatar from "../Other/Avatar"
import SocialPoint from "../Other/SocialPoint"
const AchievementCard = ({ name, point }) => {
	return (
		<TouchableOpacity className="flex flex-row gap-y-2 bg-white rounded-primary px-6 pt-4 pb-6">
			<View class="flex-[3_3_0%] gap-y-4">
				<View className="flex-1 flex-row items-center gap-x-2 mb-2">
					<Avatar
						src={{
							uri: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
						}}
					/>
					<View>
						<Text className="font-bold text-lg mb-2">{name}</Text>
					</View>
				</View>
			</View>
			<View className="flex-1 items-end gap-y-2">
				<SocialPoint className="flex-1" number={point} />
				<PrimaryButton title="Connect" className="px-6" />
			</View>
		</TouchableOpacity>
	)
}
export default AchievementCard
