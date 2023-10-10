import { View, Text, Image } from "react-native"
import { Rating } from "react-native-ratings";

const ReviewItem = ({
    avatar,
    user,
    rating,
    comment,
    postedTime
}) => {
    let image;
    if (avatar === 'woman') {
        image = <Image className='w-12 h-12 rounded-full' source={require('../../assets/images/woman-avt.jpg')}></Image>
    } else {
        image = <Image className='w-12 h-12 rounded-full' source={require('../../assets/images/man-avt.jpg')}></Image>
    }

    return (
        <View className='bg-cloud-light rounded-md p-3 mb-3'>
            <View className='flex-row justify-between'>
                <View className='flex-row gap-x-3'>
                    {image}
                    <View className='my-auto'>
                        <Text className='text-small font-semibold'>{user}</Text>
                        <Text className='text-ink-light'>{postedTime}</Text>
                    </View>
                </View>
                <Rating className='my-auto' ratingImage={require('../../assets/images/flower-2.png')} ratingColor='#F5F7F9' ratingBackgroundColor='#F5F7F9' type="custom" ratingCount={rating} imageSize={20} ></Rating>
            </View>
            <Text className='mt-2'>{comment}</Text>
        </View>
    )
}

export default ReviewItem

