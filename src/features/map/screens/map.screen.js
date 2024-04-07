import React, { useState, useEffect, useContext } from "react"
import MapView, { Marker } from 'react-native-maps'
import { SafeArea } from '../../../components/utility/safe-area.component'
import Search from '../components/search.component'
import { LocationContext } from '../../location/location.context'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'

export const MapScreen = () => {
    const [latDelta, setLatDelta] = useState(null)
    const { location } = useContext(LocationContext)

    const { lat, lng, viewport } = location
    const { restaurants } = useContext(RestaurantsContext)

    useEffect(() => {
        const neLat = viewport.northeast.lat
        const swLat = viewport.southwest.lat
        setLatDelta(neLat - swLat)
    }, [location, viewport])

    return (
        <SafeArea style={{ position: 'relative' }}>
            <Search />
            <MapView
                style={{ height: '100%' }}
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02
                }}
            >
                {restaurants && restaurants.map(restaurant => {
                    console.log("from map screen", restaurant.geometry.location)
                    return (
                        <Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng
                            }}
                        />
                    )
                })}
            </MapView>
        </SafeArea>
    )
}