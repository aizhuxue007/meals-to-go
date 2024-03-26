import React from 'react'
import { ScrollView } from 'react-native'
import { styled } from 'styled-components/native'
import RestaurantInfoCard from './restaurant-info-card.component'

const ScrollList = styled(ScrollView)`
    padding: 0 ${props => props.theme.space[3]}
`
const RestaurantList = () => {
    return (
        <ScrollList>
            <RestaurantInfoCard />
            <RestaurantInfoCard />
        </ScrollList>
    )
}

export default RestaurantList