import { TouchableOpacity, Text, View  } from "react-native"

const CategoryButton = ({ title, onPress, active, children }) => {
	return (
		<TouchableOpacity
			className={`flex items-center ${active ? "bg-primary-darker" : "bg-white"} rounded-lg p-4`}
			onPress={onPress}
		>
			{children}
		</TouchableOpacity>
	)
}

export default CategoryButton
