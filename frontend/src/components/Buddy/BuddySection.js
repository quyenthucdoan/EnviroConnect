import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import useService from "../../hooks/useService"
import { getSuggestBuddies } from '../../services/user'
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

const BuddySection = () => {
	const userId = useSelector((state) => state.user._id)
	const { data } = useService({
		service: () => getSuggestBuddies(userId),
	})
	return (
		<View className="mt-5 mb-6">
			<Text className="text-title1 font-semibold mb-3">More Buddies</Text>
			<VerticalList Item={BuddyCard} data={data?.reduce((acc, buddy) => !buddy?.obj?.buddy?.includes(userId) && buddy?.obj?._id !== userId ?[...acc, buddy?.obj] : acc, [])} />
		</View>
	)
}

export default BuddySection
