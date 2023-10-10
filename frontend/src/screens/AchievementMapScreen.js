import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { useMemo, useRef } from "react"
import { View } from "react-native"
import AchievementCard from "../components/Achievement/AchievementCard"
import CustomTextInput from "../components/Input/CustomTextInput"
import Layout from "../components/Layout/Layout"
import Map from "../components/Map/Map"
const teams = [
	{
		name: "Alex",
		city: "Ho Chi Minh city",
		point: "Đ. Võ Thị Sáu, Quận 1",
		activities: "Plant for future",
		point: 20,
	},
	{
		name: "Alex",
		city: "Ho Chi Minh city",
		point: "Đ. Võ Thị Sáu, Quận 1",
		activities: "Plant for future",
		point: 20,
	},
	{
		name: "Planting for future",
		city: "Vietnam Women’s Union",
		point: "Đ. Võ Thị Sáu, Quận 1",
		activities: "Plant for future",
		point: 20,
	},
]

const AchievementMapScreen = () => {
	const sheetRef = useRef(null)

	const snapPoints = useMemo(() => ["25%", "50%", "90%"], [])
	return (
		<Layout>
			<Map></Map>
			<BottomSheet ref={sheetRef} snapPoints={snapPoints}>
				<CustomTextInput placeholder={"Search your team"} />
				<BottomSheetFlatList
					data={teams}
					keyExtractor={(_, i) => i}
					renderItem={({ item }) => (
						<AchievementCard {...item} />
					)}
					ItemSeparatorComponent={() => <View className="mx-6 bg-gray h-[1]" />}
				/>
			</BottomSheet>
		</Layout>
	)
}

export default AchievementMapScreen
