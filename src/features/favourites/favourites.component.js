import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurants/components/compact-restaurant-info.component";
import { Text } from "../../components/typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Text variant="caption">Favourites</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <TouchableOpacity
              key={key}
              onPress={() =>
                onNavigate("RestaurantDetail", {
                  restaurant,
                })
              }
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};