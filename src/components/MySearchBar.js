import { useState } from "react";
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

export default MySearchBar;
