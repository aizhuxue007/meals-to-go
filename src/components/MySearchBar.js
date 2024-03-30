import { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from 'styled-components/native'
import { sizes } from "../utils/Sizes";
sizes

const StyledSearchBar = styled(Searchbar)`
  background: ${props => props.theme.colors.bg.primary};
`

const MySearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <StyledSearchBar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      mode="view"
    />
  );
};

export default MySearchBar;
