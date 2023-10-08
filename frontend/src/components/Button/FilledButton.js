import { Text, TouchableOpacity } from "react-native"

const FilledButton = ({ style, title, onPress }) => {
	return (
		<TouchableOpacity
			className="rounded-medium inline-block p-2 bg-primary-normal"
			onPress={onPress}
			style={style}
		>
			<Text className=" text-white">{title}</Text>
		</TouchableOpacity>
	)
}

export default FilledButton