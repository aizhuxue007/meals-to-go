import React from 'react'
import { FlatList } from 'react-native'
import { styled } from 'styled-components/native'
styled
import Spacer from '../../../components/spacer/spacer.component'
import RestaurantInfoCard from './restaurant-info-card.component'

const restaurants = [
    {
        name: 'Ching Chong Dynasty',
        description: 'best restaurant of all time',
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos: ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VHXtZJD48Ro6b-r1eNxDoAHaE7%26pid%3DApi&f=1&ipt=66aea6f16d7d01121f4608b930d38e812ab43fda8b719705a1c47a836bfcc800&ipo=images"],
        address: "58 Chang St, Revere China",
        isOpenNow: false,
        rating: 3,
        isClosedTemporarily: false,
    },
    {
        name: "Some restaurant",
        description: 'ding dong doodoo',
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos: ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
        address: "100 Some Random Street",
        isOpenNow: true,
        rating: 4,
        isClosedTemporarily: true,
    },
    {
        name: 'McDonalds',
        description: 'Served 10 Trillion people',
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos: ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Xc8U5_Q-sPm7RlKT_bFt6wHaE2%26pid%3DApi&f=1&ipt=a1e36008292c763c30a699e3d5bc0299e2cc3fa35a18ebcfbbe2bd6570511071&ipo=images"],
        address: "142 Main Blvd, Shanghai New York",
        isOpenNow: true,
        rating: 5,
        isClosedTemporarily: false,
    },
];

const RestaurantFlatList = styled(FlatList)`
    padding: 0 ${props => props.theme.space[3]}
`

const RestaurantList = () => {
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