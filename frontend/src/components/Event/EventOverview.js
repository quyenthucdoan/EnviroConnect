import { Feather, Ionicons } from "@expo/vector-icons"
import FilledButton from "../Button/FilledButton"
import OutlinedButton from "../Button/OutlinedButton"
import { useRoute } from "@react-navigation/native"
import { View, Text } from "react-native"

const EventOverview = () => {
    const event = useRoute().params

    return(
        <View className='h-full bg-white px-2 pt-5'>
            <View>
                <Text className='font-semibold text-normal'>{event.title}</Text>
                <Text className='italic text-primary-normal mt-2'>{event.organization}</Text>
                <View className="flex flex-row justify-between mt-4">
                    <Text className="text-xsmall">{event.address}</Text>
                    <Text className="text-xsmall font-semibold">{event.distance} km</Text>
                </View>

                <View className="flex flex-row justify-between mt-2">
                        <View className="flex flex-row items-center gap-x-1">
                            <Ionicons name="calendar-sharp" size={12} color="black" />
                            <Text className="text-xsmall">{event.start} - {event.end}</Text>
                        </View>
                        <View className="flex flex-row items-center gap-x-1">
                            <Feather name="users" size={12} color="black" />
                            <Text className="text-xsmall font-semibold">
                                {event.current} / {event.max}
                            </Text>
                        </View>
                </View>
            </View>
            <View className='mt-3 bg-primary-lighter rounded border-primary-light border-primary py-2 px-3'>
                <Text className='font-semibold text-small'>Point</Text>
                <View className='flex flex-row gap-x-5 mt-3'>
                    <Text className='text-small text-primary-normal'>{event.socialDays} social days</Text>
                    <Text className='text-small text-primary-normal'>{event.socialPoints} points</Text>
                </View>
            </View>
            <View className='mt-3'>
                <Text className='font-semibold text-small'>Description</Text>
                <Text className='text-ink-light text-xsmall' >{event.description}</Text>
            </View>
            <View className='flex-row gap-x-2 mt-4 justify-end'>
                <OutlinedButton title='JOIN WITH TEAM'></OutlinedButton>
                <FilledButton title='JOIN NOW!'></FilledButton>
            </View>
        </View>
    )
}

export default EventOverview