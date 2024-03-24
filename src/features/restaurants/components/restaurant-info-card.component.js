import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components/native'
import { sizes } from '../../../utils/Sizes'

const RestaurantCard = styled(Card)`
    marginBottom: ${sizes.xxl}px;
    background: #f8f9fa;
`

const RestaurantCardCover = styled(Card.Cover)`

`

const Title = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0px 5px 10px;
`
const Subtitle = styled(Text)`
    font-size: 16px;
    margin: 10px;
`

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
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
            <Subtitle>{address}</Subtitle>
        </RestaurantCard>
    )
}

export default RestaurantInfoCard