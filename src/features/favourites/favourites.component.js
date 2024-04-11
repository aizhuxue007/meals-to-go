import React, { useContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const storeFavourites = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('favourites', jsonValue);
    } catch (e) {
        console.log('from storing favourites', e)
    }
};



const FavouritesBar = ({ navigation }) => {
    const { favourites, setFavourites } = useContext(FavouritesContext)

    useEffect(async () => {
        const getFavourites = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('favourites');
                return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch (e) {
                console.log('from loading favourites', e)
            }
        };
        const resp = getFavourites()
        setFavourites(resp)
    }, [])

    useEffect(() => { storeFavourites(favourites) }, [favourites])

    return (
        <HorizontalScroll horizontal>
            {favourites.map ? favourites.map(favourite => {
                return (
                    <TouchableOpacity key={`${favourite.name}-${favourite.placeId}`} onPress={() => navigation.navigate("RestaurantDetail", { restaurant: favourite })}>
                        <SmallCard>
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