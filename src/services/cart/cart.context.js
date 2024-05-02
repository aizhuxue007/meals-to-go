import React, { useState, useContext, useEffect, createContext } from "react";
// import { AuthContext } from "../authentification/authentification.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    // const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    const [restaurant, setRestaurant] = useState(null)
    const [sum, setSum] = useState(0);

    useEffect(() => {
        async function fetchCart() {
            const cartResp = await AsyncStorage.getItem('cart')
            console.log('fetchCart', JSON.parse(cartResp))
            if (cartResp) {
                const parsedCart = JSON.parse(cartResp);
                setCart(parsedCart);
            }
        }
        async function storeCart() {
            try {
                await AsyncStorage.setItem('cart', JSON.stringify(cart))
                const tryFetch = await AsyncStorage.getItem('cart')
                console.log('cartContext useeffect storecart fetch', tryFetch)

            } catch (error) {
                console.log('cartContext useeffect', error);
            }
        }
        if (!cart) {
            fetchCart();
            return;
        } else {
            storeCart();
        }

        if (Array.isArray(cart)) {
            const newSum = cart.reduce((acc, { price }) => acc += price, 0);
            setSum(newSum);
        }
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