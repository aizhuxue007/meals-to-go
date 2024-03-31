import React, { useState, useEffect, useMemo, createContext } from 'react'
import { restaurantsRequest } from './restaurants.service'
import { transformRestaurantsReq } from './restaurants.service'

export const RestaurantsContext = createContext()

const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await restaurantsRequest('51.219448,4.402464');
                if (resp) {
                    const results = await transformRestaurantsReq(resp);
                    setRestaurants(results);
                } else {
                    console.error('Failed to fetch restaurant data');
                }
            } catch (error) {
                console.error('Error fetching restaurant data:', error);
            }
        }
        fetchData()
    }, [])


    return (
        <RestaurantsContext.Provider value={{ restaurants }}>
            {children}
        </RestaurantsContext.Provider>
    )
}

export default RestaurantsContextProvider