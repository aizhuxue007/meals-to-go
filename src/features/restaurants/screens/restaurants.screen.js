import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import Search from "../components/search.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const RestaurantList = React.memo(styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
    overScrollMode: 'never',
})``, (prevProps, nextProps) => prevProps.data === nextProps.data)

const LoadingContainer = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center
`

const Loading = () => {
    return (
        <LoadingContainer>
            <ActivityIndicator animating={true} color={MD2Colors.red800} size={'large'} />
        </LoadingContainer>
    )
}

const renderItem = ({ item }) => (
    <Spacer position="bottom" size="m">
        <RestaurantInfoCard restaurant={item} />
    </Spacer>
);

export const RestaurantsScreen = () => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);

    return (
        <SafeArea>
            <Search />
            {isLoading ? <Loading /> : <RestaurantList
                data={restaurants}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
            />}
        </SafeArea>
    );
};