import React from 'react'
import { FlatList } from 'react-native'
import { styled } from 'styled-components/native'
styled
import Spacer from '../../../components/spacer/spacer.component'
import RestaurantInfoCard from './restaurant-info-card.component'

const RestaurantFlatList = styled(FlatList).attrs({
    contentContainerStyle: { padding: 16 }
})``

const RestaurantList = ({ restaurants }) => {
    return (
        <RestaurantFlatList
            data={restaurants}
            renderItem={(restaurant) => <Spacer position={'bottom'} size={'xl'}><RestaurantInfoCard restaurant={restaurant.item} /></Spacer>}
            keyExtractor={(e, i) => i}
            bounces={false}
            overScrollMode="never"
        />
    )
}

export default RestaurantList