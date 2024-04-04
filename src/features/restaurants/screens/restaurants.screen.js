import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = React.memo(styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
    overScrollMode: 'never',
})``, (prevProps, nextProps) => prevProps.data === nextProps.data)


const renderItem = ({ item }) => (
    <Spacer position="bottom" size="m">
        <RestaurantInfoCard restaurant={item} />
    </Spacer>
);

export const RestaurantsScreen = () => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantList
                data={restaurants}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
};