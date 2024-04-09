import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  width: 100%;
  z-index: 2;
  top: 50px;
`;

const SearchBar = styled(Searchbar)`
  background: #f8f9fa;
`;

const Search = () => {
    const { keyword, setKeyword, search } = useContext(LocationContext);
    const [searchTerm, setSearchTerm] = useState(keyword);

    useEffect(() => {
        setSearchTerm(keyword)
    }, [keyword])

    return (
        <SearchContainer>
            <SearchBar
                mode="bar"
                elevation={5}
                icon="map"
                placeholder="Search for a location"
                value={searchTerm}
                onChangeText={(term) => {
                    setSearchTerm(term)
                    setKeyword(term)
                }
                }
                onSubmitEditing={() => {
                    if (searchTerm) {
                        search(searchTerm);
                        setSearchTerm("");
                        setKeyword("")
                    }
                }}
            />
        </SearchContainer>
    );
};

export default Search;
