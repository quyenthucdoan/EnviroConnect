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
	{
		username: "Planting for future",
		city: "Vietnam Women’s Union",
		point: "Đ. Võ Thị Sáu, Quận 1",
		activities: "Plant for future",
		point: 20,
	},
]

const BuddySection = () => {
	return (
		<>
			<Text className="text-title1">Buddies Suggestion</Text>
			<VerticalList Card={BuddyCard} data={buddies} />
		</>
	)
}

export default BuddySection
