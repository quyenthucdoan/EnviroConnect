import { FlatList } from "react-native-gesture-handler"
import ReviewItem from "./ReviewItem"
import { View, Text } from "react-native"

const reviews = [
    {
        user: "Nguyen Thanh Truc"
    }, {
        user: "Nhiep Bao Chau"
    }
]

const EventReview = () => {
    return(
        <View className='h-full bg-white px-2 pt-5'>
            <Text>REVIEW TAB</Text>
            <FlatList data={reviews} renderItem={({item}) => <ReviewItem user={item.user}></ReviewItem>} ></FlatList>
        </View>
    )
}

export default EventReview