import { Text, TouchableOpacity } from "react-native"

const PrimaryButton = ({ style, title, onPress }) => {
	return (
		<TouchableOpacity
			className="bg-primary-normal py-2 rounded-primary"
			onPress={onPress}
			style={style}
		>
			<Text className="font-bold text-white">{title}</Text>
		</TouchableOpacity>
	)
}

export default PrimaryButton
