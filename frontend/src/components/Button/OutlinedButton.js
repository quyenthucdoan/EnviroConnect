import { Text, TouchableOpacity } from "react-native"

const OutlinedButton = ({ style, title, onPress }) => {
	return (
		<TouchableOpacity
			className="rounded-medium border-primary inline-block p-2 border-primary-normal"
			onPress={onPress}
			style={style}
		>
			<Text className=" text-primary-normal">{title}</Text>
		</TouchableOpacity>
	)
}

export default OutlinedButton
