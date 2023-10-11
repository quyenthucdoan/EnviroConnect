import { Entypo, Ionicons } from "@expo/vector-icons"
import React from "react"
import { TouchableOpacity, View } from "react-native"
import { theme } from "../../../tailwind.config"
import PrimaryButton from "../Button/PrimaryButton"
import SecondaryButton from "../Button/SecondaryButton"
import Avatar from "../Other/Avatar"
import SocialPoint from "../Other/SocialPoint"

const AchievementCard = ({ name, point, active, onPress }) => {
	return (
		<TouchableOpacity
			className={`flex-row gap-y-2 rounded-primary px-6 pt-4 pb-6 items-center ${active && "bg-primary-lighter"}`}
			onPress={onPress}
		>
			<Avatar
				src={{
					uri: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
				}}
			/>
			<View className="grow">
				<SocialPoint name={name} number={20} />
				<View className="flex-row justify-self-end gap-x-2 self-end mt-2">
					<PrimaryButton className="px-6">
						<Ionicons
							name="chatbubble-ellipses-outline"
							size={24}
							color="white"
						/>
					</PrimaryButton>
					<SecondaryButton className="px-6">
						<Entypo
							name="share"
							size={24}
							color={theme.colors.primary.normal}
						/>
					</SecondaryButton>
				</View>
			</View>
		</TouchableOpacity>
	)
}
export default AchievementCard
