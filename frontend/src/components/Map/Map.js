import * as Location from "expo-location"
import React, { useEffect, useState } from "react"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import ActivityMarker from "../Activity/ActivityMarker"

const Map = ({ markers }) => {
	const [location, setLocation] = useState(null)

	useEffect(() => {
		;(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync()
			if (status !== "granted") {
				//setErrorMsg("Permission to access location was denied")
				return
			}

			let location = await Location.getCurrentPositionAsync({})
			setLocation(location)
		})()
	}, [])

	return (
		<MapView
			style={{ borderRadius: 12 }}
			className="w-full h-full"
			provider={PROVIDER_GOOGLE}
			showsUserLocation={true}
			followsUserLocation={true}
			region={{
				latitude: location?.coords?.latitude,
				longitude: location?.coords?.longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
			zoomEnabled={true}
		>
			{markers?.map((marker, index) => (
				<Marker
					key={index}
					coordinate={{
						latitude: marker?.lat,
						longitude: marker?.long,
					}}
				>
					<ActivityMarker name="tree-outline" team={false} />
				</Marker>
			))}
		</MapView>
	)
}

export default Map
