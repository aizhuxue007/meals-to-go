import React, { useContext, useCallback } from "react";
import { FlatList, TouchableOpacity, Text } from "react-native";
import { styled } from "styled-components/native";
styled;
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  const onPressRestaurant = useCallback(
    (restaurant) => {
      navigation.navigate("RestaurantDetail", { restaurant });
    },
    [navigation],
  );

  return (
    <>
      <Text>In Favourites</Text>
      {favourites.length ? (
        <FavouritesList
          data={favourites}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPressRestaurant(item)}>
              <Spacer position="bottom" size="m">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(e, i) => i}
          bounces={false}
          overScrollMode="never"
        />
      ) : (
        <Text>No favourites</Text>
      )}
    </>
  );
};

export default FavouritesScreen;
