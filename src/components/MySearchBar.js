import { useState } from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";


const MySearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      mode="view"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: "green",
  },
  text: {
    color: "white",
  },
});

export default MySearchBar;
