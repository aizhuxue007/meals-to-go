import { useState } from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { sizes } from "../utils/Sizes";
sizes

const MySearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <Searchbar
      style={styles.search}
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      mode="view"
    />
  );
};

const styles = StyleSheet.create({
  search: {
    marginBottom: sizes.md
  }
})

export default MySearchBar;
