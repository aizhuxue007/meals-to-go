import React, { useState, useContext, useEffect, createContext } from "react";
// import { AuthContext } from "../authentification/authentification.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    // const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    const [restaurant, setRestaurant] = useState(null)
    const [sum, setSum] = useState(0);

    useEffect(() => {
        if (!cart.length) {
            return;
        }
        const newSum = cart.reduce((acc, { price }) => acc += price, 0);
        setSum(newSum);
    }, [cart]);

    const add = (item, rst) => {
        if (!restaurant || restaurant.placeId !== rst.placeId) {
            setRestaurant(rst);
            setCart([item])
        }
        else {
            setCart([...cart, item]);
        }
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
                sum
            }}
        >
            {children}
        </CartContext.Provider>
    )
};