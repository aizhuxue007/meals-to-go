import React from 'react'
import { View } from 'react-native'
import { styled } from 'styled-components/native'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MySearchBar from '../../../components/MySearchBar'
import RestaurantList from '../components/restaurant-list.component'
import { sizes } from '../../../utils/Sizes'

const Search = styled(View)` 
    padding: 0 ${sizes.sm}px ${sizes.sm}px ${sizes.sm}px;
    flex: 1;
`

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`

export const RestaurantScreen = () => {
    return (
        <SafeArea>
            <Search>
                <MySearchBar />
                <RestaurantList />
            </Search>
        </SafeArea>
    )
}

export default RestaurantScreen