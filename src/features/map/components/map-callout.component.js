import React from 'react'
import { Text, View, Image } from 'react-native'
import { styled } from 'styled-components/native'
import { Callout } from 'react-native-maps'
import { mockImages } from '../../../services/restaurants/mock'

const Bubble = styled(Callout)`
`

const CalloutView = styled(View)`
    max-width: 200px;
    flex: 1;
    align-items: center;
    gap: 5px;
`

const Img = styled(Image)`
    border-radius: 10px;
    width: 100px;
    height: 100px;
`

export const MapCallout = ({ name }) => {
    return (
        <Bubble>
            <CalloutView>
                <Img
                    source={{ uri: mockImages[Math.ceil(Math.random() * 6)] }}
                />
                <Text>{name}</Text>
            </CalloutView>
        </Bubble>
    )
}