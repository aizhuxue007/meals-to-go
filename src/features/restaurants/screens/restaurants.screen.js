import React, { useContext, useCallback, useMemo } from 'react'
import { View, FlatList, Text } from 'react-native'
import { styled } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MySearchBar from '../../../components/MySearchBar'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import Spacer from '../../../../src/components/spacer/spacer.component'
import RestaurantInfoCard from '../components/restaurant-info-card.component'

const Search = styled(View)` 
    padding: 0 ${props => props.theme.space[0]} ${props => props.theme.space[0]} ${props => props.theme.space[0]};
    flex: 1;
`

const SafeArea = styled(SafeAreaView)`
    flex: 1;
`

const RestaurantFlatList = styled(FlatList).attrs({
    contentContainerStyle: { padding: 16 }
})``

export const RestaurantScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext)
    const flatRestaurants = restaurants.length > 0 ? restaurants[0] : [];

    console.log('in restaurant screen', restaurants)

    const memoizedRestaurants = useMemo(() => {
        return restaurants.map(restaurant => ({
            ...restaurant
        }));
    }, [restaurants]);

    const renderItem = useCallback(
        ({ item }) => {
            return (
                <Spacer position={'bottom'} size={'xl'}>
                    <RestaurantInfoCard restaurant={item} />
                </Spacer>
            )
        },
        []
    );

    return (
        <SafeArea>
            <Search>
                <MySearchBar />
                <RestaurantFlatList
                    data={memoizedRestaurants}
                    renderItem={renderItem}
                    keyExtractor={(item, i) => `${item.name}-${item.placeId}-${item.vicinity}${i}`}
                    bounces={false}
                    overScrollMode="never"
                />
            </Search>
        </SafeArea>
    )
}

export default RestaurantScreen