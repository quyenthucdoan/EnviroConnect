import { View, Image, Text } from "react-native"
import EventHighLight from "../components/Event/EventHighlight"
import Layout from "../components/Layout/Layout"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather, Ionicons } from "@expo/vector-icons"
import OutlinedButton from "../components/Button/OutlinedButton";
import FilledButton from "../components/Button/FilledButton";

const tags = ['Planting', 'Near you', 'Clean up']
const event = {
    title: 'Plant for future',
    current: 20,
    max: 100,
    distance: 1.2,
    start: "Fri, Jul 14",
    end: "Sun, Jul 17",
    organization: "Vietnam Women’s Union",
    address: "Đ. Võ Thị Sáu, Quận 1",
    socialDays: 2,
    socialPoints: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
}

const Tab = createMaterialTopTabNavigator()

const OverviewTab = () => (
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

const RewardTab = () => (
    <View className='h-full bg-white px-2 pt-5'>
        <Text>REWARD TAB</Text>
    </View>
)

const ReviewTab = () => (
    <View className='h-full bg-white px-2 pt-5'>
        <Text>REVIEW TAB</Text>
    </View>
)

const DetailScreen = ({ navigation }) => {
    return (
        <Layout>
            <View className='flex-1 pt-32 bg-white'>
                <Image className='w-full h-1/3 absolute' source={require('../assets/images/ocg-saving-the-ocean.jpg')}></Image>
                <EventHighLight tags={tags} event={event}></EventHighLight>
                <Tab.Navigator className='mx-4' screenOptions={{ 
                        tabBarActiveTintColor: '#009580', 
                        tabBarInactiveTintColor: '#4A617C', 
                        tabBarIndicatorStyle: { backgroundColor: '#009580' } }}>
                    <Tab.Screen name="OVERVIEW" component={OverviewTab} />
                    <Tab.Screen name="REWARD" component={RewardTab} />
                    <Tab.Screen name="REVIEW" component={ReviewTab} />
                </Tab.Navigator>
            </View>
        </Layout>
    )
}

export default DetailScreen