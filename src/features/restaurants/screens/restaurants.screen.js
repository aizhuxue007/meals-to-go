import React, { useState, useContext, useCallback } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import Search from "../components/search.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import Favourites from "../../favourites/favourites.component";

const RestaurantList = React.memo(
    styled(FlatList).attrs({
        contentContainerStyle: {
            padding: 16,
        },
        overScrollMode: "never",
    })``,
    (prevProps, nextProps) => prevProps.data === nextProps.data,
);

const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
    return (
        <LoadingContainer>
            <ActivityIndicator
                animating={true}
                color={MD2Colors.red800}
                size={"large"}
            />
        </LoadingContainer>
    );
};

export const RestaurantsScreen = ({ navigation }) => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    const [isToggled, setIsToggled] = useState(false);

    const onPressRestaurant = useCallback(
        (restaurant) => {
            navigation.navigate("RestaurantDetail", { restaurant });
        },
        [navigation],
    );

    if (error) {
        console.log(error);
    }

    return (
        <SafeArea>
            <Search
                isFavouritesToggled={isToggled}
                onFavouritesToggle={() => setIsToggled(!isToggled)}
            />
            {isToggled && <Favourites />}
            {isLoading ? (
                <Loading />
            ) : (
                <RestaurantList
                    data={restaurants}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => onPressRestaurant(item)}>
                            <Spacer position="bottom" size="m">
                                <RestaurantInfoCard restaurant={item} />
                            </Spacer>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.name}
                />
            )}
        </SafeArea>
    );
};
