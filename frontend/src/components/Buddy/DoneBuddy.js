import { Text, View } from "react-native"
import VerticalList from "../List/VerticalList"
import BuddyCard from "./BuddyCard"
const buddies = [
	{
		username: "Lan Anh",
		city: "Ho Chi Minh city",
		point: "Đ. Võ Thị Sáu, Quận 1",
		activities: "Plant for future",
		point: 20,
		avatar:
			"https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
	},
	{
		username: "Alex",
		city: "Ho Chi Minh city",
		point: "Đ. Võ Thị Sáu, Quận 1",
		activities: "Plant for future",
		point: 20,
		avatar:
			"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80",
	},
]

const DoneBuddy = () => {
	return (
		<View className="mt-5 mb-6">
			<Text className="text-title1 font-semibold mb-3">Your Buddies</Text>
			<VerticalList Item={BuddyCard} data={buddies} />
		</View>
	)
}

export default DoneBuddy
