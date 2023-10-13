import { useState } from "react"
import { TextInput, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler"

const MainInput = ({ value, placeholder, onPress, style }) => {
	const [text, setText] = useState("")
	const [color, setColor] = useState("#BAC7D5")
	const [disable, setDisable] = useState(true)

	return (
		<View
			className="w-full flex-row items-center bg-primary-darker"
			style={style}
		>
			<TextInput
				value={value}
				className="flex-1 h-[50]"
				style={{ color: "white", fontSize: 20, fontWeight: "500" }}
				placeholderTextColor={"#BAC7D5"}
				placeholder={placeholder}
				onChangeText={(newText) => {
					setText(newText)
					if (newText === "") {
						setColor("#BAC7D5")
						setDisable(true)
					} else {
						setColor("white")
						setDisable(false)
					}
				}}
				defaultValue={text}
			></TextInput>
			<TouchableOpacity disabled={disable} onPress={onPress}>
				<Ionicons name="arrow-forward" size={28} color={color} />
			</TouchableOpacity>
		</View>
	)
}

export default MainInput
