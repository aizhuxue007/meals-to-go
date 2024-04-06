import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchBar = styled(Searchbar)`
  background: #f8f9fa;
  color: #1a1a1a;
`;

const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState(keyword);

  return (
    <SearchContainer>
      <SearchBar
        mode="bar"
        elevation={5}
        theme={{
          dark: true,
          colors: {
            primary: "#f8f9fa",
            secondary: "#1a1a1a",
            background: "#f8f9fa",
          },
        }}
        placeholder="Search for a location"
        value={searchTerm}
        onChangeText={(term) => setSearchTerm(term)}
        onSubmitEditing={() => {
          if (searchTerm) {
            search(searchTerm);
            setSearchTerm("");
          }
        }}
      />
    </SearchContainer>
  );
};

export default Search;
