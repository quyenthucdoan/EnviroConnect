import { View, Text } from "react-native"

const ReviewItem = ({
    avatar,
    user,
    rating,
    comment,
    postedTime
}) => {
    return (
        <View className='bg-cloud-light'>
            <Text>{user}</Text>
        </View>
    )
}

export default ReviewItem

