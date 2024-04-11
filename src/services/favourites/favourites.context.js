import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

const getFavourites = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('favourites');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log('from favourites', e)
    }
};

const storeFavourites = async (value) => {
    try {
        await AsyncStorage.setItem('favourites', JSON.stringify(value));
    } catch (e) {
        console.log("from favourites context", e)
    }
};

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([])

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant])
    }

    const remove = (restaurant) => {
        const newFavourites = favourites.filter(item => item.placeId !== restaurant.placeId)
        setFavourites(newFavourites)
    }

    useEffect(() => {
        setFavourites(getFavourites())
    }, [])

    useEffect(() => {
        storeFavourites(favourites)
    }, [favourites])

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove
            }}
        >
            {children}
        </FavouritesContext.Provider>
    )
}