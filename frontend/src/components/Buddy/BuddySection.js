import { Text } from "react-native"
import VerticalList from "../List/VerticalList"
import BuddyCard from "./BuddyCard"
const buddies = [
	{
		username: "Alex",
		city: "Ho Chi Minh city",
		point: "Đ. Võ Thị Sáu, Quận 1",
		activities: "Plant for future",
		point: 20,
	},
	{
		username: "Alex",
		city: "Ho Chi Minh city",
		point: "Đ. Võ Thị Sáu, Quận 1",
		activities: "Plant for future",
		point: 20,
	},
]

const BuddySection = () => {
	return (
		<>
			<Text className="text-title1 font-bold">Buddies Suggestion</Text>
			<VerticalList Item={BuddyCard} data={buddies} />
		</>
	)
}

export default BuddySection
