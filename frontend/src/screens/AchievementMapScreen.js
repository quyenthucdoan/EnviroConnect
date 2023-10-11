import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { useMemo, useRef, useState } from "react"
import { View } from "react-native"
import AchievementCard from "../components/Achievement/AchievementCard"
import CustomTextInput from "../components/Input/CustomTextInput"
import Layout from "../components/Layout/Layout"
import Map from "../components/Map/Map"
import useService from "../hooks/useService"
import { getActivityById } from "../services/activity"
import { getAllBuddies } from "../services/user"

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

	
	const { data } = useService({ service: () => getAllBuddies('651a5221a4e4a95676a65e89') })


	const [chosen, setChosen] = useState('651a5221a4e4a95676a65e89')
	const [markers, setMarkers]	= useState([])

	const changeChosen = async (chosen) => {
		
		
		const activityIds = chosen.activities.map(activity => activity.activityId)
		const markers = await Promise.all(activityIds.map(async (activityId) => {
			try {
			  const activityLocation = await getActivityById(activityId);
			  return activityLocation.data.location;
			} catch (error) {
			  console.log("error");
			}
		  }));

		setChosen(chosen._id)
		setMarkers(markers);
	}
	
	return (
		<Layout>
			<Map markers={markers} team={true}></Map>
			<BottomSheet ref={sheetRef} snapPoints={snapPoints}>
				<CustomTextInput placeholder={"Search your team"} />
				<BottomSheetFlatList
					data={data}
					keyExtractor={(_, i) => i}
					renderItem={({ item }) => 
						<AchievementCard {...item.user} active={item.user?._id == chosen} onPress={()=>changeChosen(item.user)}/>
					}
					ItemSeparatorComponent={() => <View className="mx-6 bg-gray h-[1]" />}
				/>
			</BottomSheet>
		</Layout>
	)
}

export default AchievementMapScreen
