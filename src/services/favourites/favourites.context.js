import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@favourites", jsonValue);
        } catch (e) {
            console.log("error storing", e);
        }
    };

    const loadFavourites = async () => {
        try {
            const value = await AsyncStorage.getItem("@favourites");
            if (value !== null) {
                setFavourites(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading", e);
        }
    };
    const addToFavourites = (restaurant) => {
        setFavourites((prevFavourites) => {
            return [...prevFavourites, restaurant]
        })
        console.log('in add')
    }

    const removeFromFavourites = (restaurant) => {
        console.log('in remove')
        setFavourites((prevFavourites) => prevFavourites.filter(item => item.placeId !== restaurant.placeId))
    }

    useEffect(() => {
        loadFavourites();
    }, []);

    useEffect(() => {
        saveFavourites(favourites);
    }, [favourites]);

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                setFavourites,
                addToFavourites,
                removeFromFavourites,
            }}
        >
            {children}
        </FavouritesContext.Provider>
    );
};