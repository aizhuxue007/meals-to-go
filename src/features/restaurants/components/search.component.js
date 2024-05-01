import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchBar = styled(Searchbar)`
  background: #f8f9fa;
`;

const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, setKeyword, search } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState(keyword);

  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <SearchBar
        mode="bar"
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        elevation={5}
        theme={{
          dark: true,
          colors: {
            background: "#f8f9fa",
          },
        }}
        placeholder="Search for a location"
        value={searchTerm}
        onChangeText={(term) => {
          setSearchTerm(term);
          setKeyword(term);
        }}
        onSubmitEditing={() => {
          if (searchTerm) {
            search(searchTerm);
            setSearchTerm("");
            setKeyword("");
          }
        }}
      />
    </SearchContainer>
  );
};

export default Search;
