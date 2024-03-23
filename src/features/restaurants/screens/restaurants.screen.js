import React from 'react'
import { View, StyleSheet } from 'react-native'
import { styled } from 'styled-components/native'
import MySearchBar from '../../../components/MySearchBar'
import RestaurantList from '../components/restaurant-list.component'
import { sizes } from '../../../utils/Sizes'

const Search = styled(View)` 
    padding: ${sizes.sm}px;
    flex: 1;
`

export const RestaurantScreen = () => {
    return (
        <Search>
            <MySearchBar />
            <RestaurantList />
        </Search>
    )
}

export default RestaurantScreen