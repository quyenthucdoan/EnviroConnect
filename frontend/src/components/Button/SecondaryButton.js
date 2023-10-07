import { Text, TouchableOpacity } from "react-native"

const SecondaryButton = ({ style, title, onPress }) => {
	return (
		<TouchableOpacity
			className="rounded-primary py-2 border-2 border-primary-normal"
			onPress={onPress}
			style={style}
		>
			<Text className=" text-primary-normal font-bold">{title}</Text>
		</TouchableOpacity>
	)
}

export default SecondaryButton
