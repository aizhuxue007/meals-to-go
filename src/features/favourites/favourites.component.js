import React, { useContext } from "react";
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { styled } from "styled-components/native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const HorizontalScroll = styled(ScrollView)`
    width: 90%;
    margin: 0 auto 10px auto;
    height: 200px;
`

const SmallCard = styled(View)`
    margin-right: 10px;
    height: 160px;
`

const Img = styled(Image)`
    width: 100px;
    height: 100px;
    border-radius: 10px;
`

const Name = styled(Text)`
    width: 100px;
    font-size: ${props => props.theme.fontSizes['body']};
`

const FavouritesBar = ({ navigation }) => {
    const { favourites } = useContext(FavouritesContext)
    return (
        <HorizontalScroll horizontal>
            {favourites.map ? favourites.map(favourite => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: favourite })}>
                        <SmallCard key={`${favourite.name}-${favourite.placeId}`}>
                            <Img source={{ uri: favourite.photos[0] }} />
                            <Name>{favourite.name}</Name>
                        </SmallCard>
                    </TouchableOpacity>
                )
            }) : <Text>No favourites</Text>}
        </HorizontalScroll>
    )
}

export default FavouritesBar