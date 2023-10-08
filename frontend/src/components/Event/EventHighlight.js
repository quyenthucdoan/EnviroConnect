import BadgeCustom from "../Badge/BadgeCustom"
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";

const EventHighLight = ({
    tags,
    event
}) => {
    return (
        <View className='bg-white mx-4 rounded-medium shadow-md shadow-ink-light mb-4'>
            <FlatList horizontal={true} className='mt-4 mb-5 mx-auto'  data={tags} renderItem={({item}) => <BadgeCustom value={item}></BadgeCustom>}
                >
            </FlatList>
            <Text className='text-center text-title1 font-semibold'>{event.title}</Text>
            <View className="flex flex-row justify-between mt-2 mx-3 mb-6">
				<View className="flex flex-row items-center gap-x-1">
					<Ionicons name="calendar-sharp" size={14} color="#006657" />
					<Text className="text-xs text-ink-light">{event.start} - {event.end}</Text>
				</View>
                <View className="flex flex-row items-center gap-x-1">
                    <Entypo name="location-pin" size={18} color="#006657" />
					<Text className="text-xs text-ink-light">{event.distance} km</Text>
				</View>
				<View className="flex flex-row items-center gap-x-1">
					<Feather name="users" size={14} color="#006657" />
					<Text className="text-xs text-ink-light">
						{event.current} / {event.max}
					</Text>
				</View>
			</View>
        </View>
    )
}

export default EventHighLight