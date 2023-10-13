import { Entypo, Ionicons } from "@expo/vector-icons"
import React from "react"
import { TouchableOpacity, View } from "react-native"
import { theme } from "../../../tailwind.config"
import FilledButton from "../Button/FilledButton"
import OutlinedButton from "../Button/OutlinedButton"
import Avatar from "../Other/Avatar"
import SocialPoint from "../Other/SocialPoint"

const AchievementCard = ({ name, image, active, onPress }) => {
	return (
		<TouchableOpacity
			className={`flex-row gap-y-2 rounded-primary px-6 pt-4 pb-6 items-center ${
				active && "bg-primary-lighter"
			}`}
			onPress={onPress}
		>
			<Avatar
				src={{
					uri: image,
				}}
			/>
			<View className="grow">
				<SocialPoint name={name} number={20} />
				<View className="flex-row justify-self-end gap-x-2 self-end mt-2">
					<FilledButton>
						<Ionicons
							name="chatbubble-ellipses-outline"
							size={24}
							color="white"
						/>
					</FilledButton>
					<OutlinedButton>
						<Entypo
							name="share"
							size={24}
							color={theme.colors.primary.normal}
						/>
					</OutlinedButton>
				</View>
			</View>
		</TouchableOpacity>
	)
}
export default AchievementCard
