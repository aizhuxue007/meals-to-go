import React from 'react'
import { View, StyleSheet } from 'react-native'
import MySearchBar from '../../../components/MySearchBar'
import RestaurantList from '../components/restaurant-list.component'
import { sizes } from '../../../utils/Sizes'

export const RestaurantScreen = () => {
    return (
        <View style={styles.search}>
            <MySearchBar />
            <RestaurantList />
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        padding: sizes.sm,
        flex: 1
    }
})

export default RestaurantScreen