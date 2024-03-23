import React from 'react'
import { StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'
import { sizes } from '../../../utils/Sizes'

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some restaurant",
        icon,
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
        address = "100 Some Random Street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant

    return (
        <Card
            elevation={1}
            style={styles.card}
        >
            <Card.Cover key={name} source={{ uri: photos[0] }} />
            <Card.Title title={name} subtitle={address} />
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: sizes.sm,
    }
})

export default RestaurantInfoCard