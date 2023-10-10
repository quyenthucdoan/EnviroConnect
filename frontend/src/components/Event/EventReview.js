import { FlatList } from "react-native-gesture-handler"
import ReviewItem from "./ReviewItem"
import { View, Text, Image, StyleSheet } from "react-native"

const reviews = [
    {
        user: "Nguyen Thanh Truc",
        avatar: 'man',
        postedTime: '2 hours ago',
        comment: 'Nostrud excepteur magna id est quis in aliqua consequat. Exercitation enim eiusmod elit sint laborum',
        rating: 3
    }, {
        user: "Nhiep Bao Chau",
        avatar: 'woman',
        postedTime: 'A day ago',
        comment: 'Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est',
        rating: 5
    }, {
        user: "Huynh Ngoc Nhu",
        avatar: 'man',
        postedTime: 'A month ago',
        comment: 'Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est',
        rating: 4
    }, {
        user: "Doan Thuc Quyen",
        avatar: 'woman',
        postedTime: '3 months ago',
        comment: 'Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est',
        rating: 5
    }
]

const avgRating = reviews.map(x => x.rating).reduce((sum, x) => sum + x, 0) * 1.0 / reviews.length

const EventReview = () => {
    return(
        <View className='h-full bg-white px-2 pt-5'>
            <View className='flex-row gap-x-1 mb-2'>
                <Image style={styles.image} source={require('../../assets/images/flower-2.png')}></Image>
                <View className='flex-row gap-x-2'>
                    <Text className='font-medium text-base my-auto'>{avgRating}/5</Text>
                    <Text className='text-small my-auto'>({reviews.length} recommendations)</Text>
                </View>
            </View>

            <FlatList data={reviews} 
                renderItem={({item}) => <ReviewItem user={item.user} avatar={item.avatar} postedTime={item.postedTime} comment={item.comment} rating={item.rating}></ReviewItem>} >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 25,
        height: 25
    }
})

export default EventReview