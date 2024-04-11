import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

const saveFavourites = async (value) => {
    try {
        console.log(value)
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("favourites", jsonValue);
        console.log('in saveFavourites', await AsyncStorage.getItem("favourites"))
    } catch (e) {
        console.log("error storing", e);
    }
};


export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        loadFavourites();
    }, []);

    useEffect(() => {
        saveFavourites(favourites);
    }, [favourites]);

    async function loadFavourites() {
        try {
            const value = await AsyncStorage.getItem("favourites");
            if (value !== null) {
                console.log('from loadFavourites', value)
                setFavourites(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading", e);
        }
    };
    const add = (restaurant) => {
        setFavourites([...favourites, restaurant])
    }

    const remove = (restaurant) => {
        const newFavourites = favourites.filter(item => item.placeId !== restaurant.placeId)
        setFavourites(newFavourites)
    }


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