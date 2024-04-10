import React from 'react'
import { Text, View, Image, Platform } from 'react-native'
import { WebView } from 'react-native-webview'
import { styled } from 'styled-components/native'
import { Callout } from 'react-native-maps'

const Bubble = styled(Callout)``

const CalloutView = styled(View)`
    max-width: 200px;
    align-items: center;
`

const imgCss = `
    border-radius: 10px;
    width: 100px;
    height: 100px;
    margin-bottom: 5px;
`

const Img = Platform.OS === 'android' ? styled(WebView)`${imgCss}` : styled(Image)`${imgCss}`

export const MapCallout = ({ restaurant, navigate }) => {
    return (
        <Bubble
            onPress={() => {
                navigate("RestaurantDetail", { restaurant })
            }}
        >
            <CalloutView>
                <Img
                    source={{ uri: restaurant.photos[0] }}
                />
                <Text>{restaurant.name}</Text>
            </CalloutView>
        </Bubble>
    )
}