import { Text, TouchableOpacity } from "react-native"

const SecondaryButton = ({ style, children, title, onPress }) => {
	return (
		<TouchableOpacity
			className="rounded-primary py-2 border-2 border-primary-normal"
			onPress={onPress}
			style={style}
		>
			{title ? (
				<Text className=" text-primary-normal font-bold">{title}</Text>
			) : (
				children
			)}
		</TouchableOpacity>
	)
}

export default SecondaryButton
