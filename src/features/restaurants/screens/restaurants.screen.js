import React from 'react'
import { View, StyleSheet } from 'react-native'
import MySearchBar from '../../../components/MySearchBar'
import RestaurantInfo from '../components/restaurant-info.component'
import { sizes } from '../../../utils/Sizes'

export const RestaurantScreen = () => {
    return (
        <View style={styles.search}>
            <MySearchBar />
            <RestaurantInfo />
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