import { TouchableOpacity, Text } from "react-native"

const SecondaryButton = ({ title, onPress }) => {
	return (
		<TouchableOpacity
			className="bg-white rounded-lg px-14 py-4 border-2 border-primary-darker"
			onPress={onPress}
		>
			<Text className=" text-primary-darker font-bold">{title}</Text>
		</TouchableOpacity>
	)
}

export default SecondaryButton
