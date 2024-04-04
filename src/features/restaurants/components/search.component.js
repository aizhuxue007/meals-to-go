import React, { useState, useContext } from 'react'
import styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../location/location.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Search = () => {
    const { keyword, search } = useContext(LocationContext)
    const [searchTerm, setSearchTerm] = useState(keyword)

    return (
        <SearchContainer>
            <Searchbar
                placeholder='Search for a location'
                value={searchTerm}
                onChangeText={(term) => setSearchTerm(term)}
                onSubmitEditing={() => search(searchTerm)}
            />
        </SearchContainer>
    )
}

export default Search