import React from "react";
import { View, StyleSheet } from "react-native";
import MySearchBar from "../components/MySearchBar";
import RestaurantList from "../components/RestaurantList";
import { sizes } from "../utils/Sizes";

const Search = () => (
  <View style={styles.search}>
    <MySearchBar />
    <RestaurantList />
  </View>
);

const styles = StyleSheet.create({
  search: {
    padding: sizes.sm,
    flex: 1
  }
})

export default Search;
