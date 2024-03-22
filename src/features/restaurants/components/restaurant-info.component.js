import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-paper'

export const RestaurantInfo = ({ restaurant = {} }) => {
    const {
        name = "Some restaurant",
        icon,
        photos = [],
        address = "100 Some Random Street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant

    return (
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
                <Text variant="titleLarge">Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
    )
}

export default RestaurantInfo