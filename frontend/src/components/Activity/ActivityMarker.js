import { MaterialCommunityIcons } from "@expo/vector-icons"
import { View } from "react-native"

const ActivityMarker = ({ name }) => {
	return (
		<View
			className="bg-primary-lighter border-2 border-primary-darker p-1"
			style={{ borderRadius: "50%" }}
		>
			<View className="bg-primary-darker p-1" style={{ borderRadius: "50%" }}>
				<MaterialCommunityIcons name={name} size={20} color="white" />
			</View>
		</View>
	)
}

export default ActivityMarker
