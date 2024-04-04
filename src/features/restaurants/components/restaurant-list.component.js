import React from "react";
import { FlatList } from "react-native";
import { styled } from "styled-components/native";
styled;

const RestaurantFlatList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const RestaurantList = ({ restaurants, renderItem1 }) => {
  console.log("from restaurant list", restaurants);
  return (
    <RestaurantFlatList
      data={restaurants}
      renderItem={renderItem1}
      keyExtractor={(e, i) => i}
      bounces={false}
      overScrollMode="never"
    />
  );
};

export default RestaurantList;
