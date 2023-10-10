import { Text, TouchableOpacity } from "react-native"

const PrimaryButton = ({ style, children, title, onPress }) => {
	return (
		<TouchableOpacity
			className="bg-primary-normal py-2 rounded-medium"
			onPress={onPress}
			style={style}
		>
			{title ? <Text className="font-bold text-white">{title}</Text> : children}
		</TouchableOpacity>
	)
}

export default PrimaryButton
