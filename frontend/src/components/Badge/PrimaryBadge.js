import { TouchableOpacity } from "react-native-gesture-handler"
import { Text } from "react-native"

const PrimaryBadge = ({ value, onPress, style, styleText }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			className={"bg-primary-darker mr-2 px-2 rounded-normal " + style}
		>
			<Text className="text-center text-primary-lighter" style={styleText}>
				{value}
			</Text>
		</TouchableOpacity>
	)
}

export default PrimaryBadge
