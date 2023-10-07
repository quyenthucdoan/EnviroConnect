import { FontAwesome } from "@expo/vector-icons"
import { Text, View } from "react-native"

const SocialPoint = ({ number }) => {
	return (
		<View className="flex-row bg-primary-lighter px-4 py-2 gap-x-2 rounded-primary">
			<Text>{number}</Text>
			<FontAwesome name="envira" size={16} color="black" />
		</View>
	)
}

export default SocialPoint
