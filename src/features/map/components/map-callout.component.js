import React from 'react'
import { Text, View, Image } from 'react-native'
import { styled } from 'styled-components/native'
import { Callout } from 'react-native-maps'
import { mockImages } from '../../../services/restaurants/mock'

const Bubble = styled(Callout)`
`

const CalloutView = styled(View)`

`

const Img = styled(Image)`
    width: 200px;
    height: 200px;
`

export const MapCallout = ({ name }) => {
    return (
        <Bubble>
            <CalloutView>
                <View>
                    <Image
                        source={require('../../../../assets/webdev.jpeg')}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text>{name}</Text>
                </View>
            </CalloutView>
        </Bubble>
    )
}