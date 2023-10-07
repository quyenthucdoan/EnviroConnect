import { FlatList, View } from "react-native"

const VerticalList = ({
	Card,
	data,
	scrollEnabled = false,
	ItemSeparatorComponent,
}) => {
	return (
		<FlatList
			data={data}
			renderItem={({ item }) => (
				<View className="my-4">
					<Card {...item} />
				</View>
			)}
			scrollEnabled={scrollEnabled}
			//ItemSeparatorComponent={ItemSeparatorComponent}
		></FlatList>
	)
}

export default VerticalList
