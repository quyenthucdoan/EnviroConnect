import { Text, TouchableOpacity } from "react-native"

const FilledButton = ({ style, title, onPress, styleText }) => {
	return (
		<TouchableOpacity
			className="rounded-medium inline-block p-2 bg-primary-normal"
			onPress={onPress}
			style={style}
		>
			<Text className="text-white" style={styleText}>{title}</Text>
		</TouchableOpacity>
	)
}

export default FilledButton
