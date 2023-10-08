import { Text } from "react-native"

const BadgeCustom = ({
    value
}) => {
    return (
        <Text className='bg-primary-lighter ml-2 w-20 rounded-normal text-center text-primary-darker'>{value}</Text>
    )
}

export default BadgeCustom