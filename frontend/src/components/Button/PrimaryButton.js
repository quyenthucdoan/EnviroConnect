import { TouchableOpacity, Text } from "react-native"

const PrimaryButton = ({ title, onPress }) => {
	return (
		<TouchableOpacity
			className="bg-primary-darker rounded-lg px-14 py-4"
			onPress={onPress}
		>
			<Text className="font-bold text-white">{title}</Text>
		</TouchableOpacity>
	)
}

export default PrimaryButton
