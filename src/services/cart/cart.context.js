import React, { useState, useContext, createContext } from "react";
// import { AuthContext } from "../authentification/authentification.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    // const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    const [restaurant, setRestaurant] = useState(null)

    const add = (item, rst) => {
        if (!restaurant || restaurant.placeId !== rst.placeId) {
            setRestaurant(rst);
        }

        setCart([...cart, item]);
    }

    const clear = () => {
        setCart([]);
        setRestaurant(null);
    }

    return (
        <CartContext.Provider
            value={{
                addToCart: add,
                clearCart: clear,
                restaurant,
                cart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
};