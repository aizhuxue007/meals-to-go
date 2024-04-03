import React, { useState, useEffect, useMemo, createContext } from 'react'
import { restaurantsRequest, restaurantsTransform } from './restaurants.service'

export const RestaurantsContext = createContext()

const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    function retrieveRestaurants() {
        setIsLoading(true)
        setTimeout(() => {
            restaurantsRequest()
                .then(restaurantsTransform)
                .then(result => {
                    setRestaurants(result)
                })
                .catch(err => {
                    console.log(err)
                    setError(err)
                    setIsLoading(false)
                })
        }, 2000)
    }

    useEffect(() => {
        retrieveRestaurants()
    }, [])

    const contextValue = useMemo(() => ({ restaurants, isLoading, error }), [restaurants, isLoading, error])

    return (
        <RestaurantsContext.Provider value={contextValue}>
            {children}
        </RestaurantsContext.Provider>
    )
}

export default React.memo(RestaurantsContextProvider)