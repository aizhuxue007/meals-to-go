import React, { useState, useEffect, useContext } from "react"
import MapView, { Marker } from 'react-native-maps'
import { SafeArea } from '../../../components/utility/safe-area.component'
import Search from '../components/search.component'
import { LocationContext } from '../../location/location.context'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { MapCallout } from "../components/map-callout.component"
import { styled } from "styled-components/native"

export const MapScreen = () => {
    const [latDelta, setLatDelta] = useState(null)
    const { location } = useContext(LocationContext)
    const { restaurants } = useContext(RestaurantsContext)

    useEffect(() => {
        if (location && location.viewport) {
            const { viewport } = location
            const neLat = viewport.northeast.lat
            const swLat = viewport.southwest.lat
            setLatDelta(neLat - swLat)
        }
    }, [location])

    const Map = styled(MapView)`
        height: 100%;
        width: 100%;
    `

    return (
        <SafeArea>
            <Search />
            {location ?
                <MapView
                    style={{ height: '100%' }}
                    region={{
                        latitude: location.lat,
                        longitude: location.lng,
                        latitudeDelta: latDelta,
                        longitudeDelta: 0.02
                    }}
                >
                    {restaurants &&
                        restaurants.map(restaurant => {
                            const lat = restaurant?.geometry?.location?.lat;
                            const lng = restaurant?.geometry?.location?.lng;

                            if (lat && lng) {
                                return (
                                    <Marker
                                        key={restaurant.name}
                                        coordinate={{
                                            latitude: lat,
                                            longitude: lng,
                                        }}
                                    >
                                        <MapCallout name={restaurant.name} />
                                    </Marker>
                                );
                            }
                            return null;
                        })}
                </MapView> : <Map />}

        </SafeArea>
    )
}