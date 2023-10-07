import { Image } from "react-native"

const Avatar = ({ src }) => {
	return <Image className="rounded-full w-[50px] h-[50px]" source={src} />
}

export default Avatar
