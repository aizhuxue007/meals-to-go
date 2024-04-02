import React, { useState, useEffect, useMemo, createContext } from 'react'
import { restaurantsRequest, restaurantsTransform } from './restaurants.service'

export const RestaurantsContext = createContext()

// const restaurants = [
//     {
//         name: 'Ching Chong Dynasty',
//         description: 'best restaurant of all time',
//         icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
//         photos: ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VHXtZJD48Ro6b-r1eNxDoAHaE7%26pid%3DApi&f=1&ipt=66aea6f16d7d01121f4608b930d38e812ab43fda8b719705a1c47a836bfcc800&ipo=images"],
//         address: "58 Chang St, Revere China",
//         isOpenNow: false,
//         rating: 3,
//         isClosedTemporarily: false,
//     },
//     {
//         name: "Some restaurant",
//         description: 'ding dong doodoo',
//         icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
//         photos: ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
//         address: "100 Some Random Street",
//         isOpenNow: true,
//         rating: 4,
//         isClosedTemporarily: true,
//     },
//     {
//         name: 'McDonalds',
//         description: 'Served 10 Trillion people',
//         icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
//         photos: ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Xc8U5_Q-sPm7RlKT_bFt6wHaE2%26pid%3DApi&f=1&ipt=a1e36008292c763c30a699e3d5bc0299e2cc3fa35a18ebcfbbe2bd6570511071&ipo=images"],
//         address: "142 Main Blvd, Shanghai New York",
//         isOpenNow: true,
//         rating: 5,
//         isClosedTemporarily: false,
//     },
//     {
//         name: 'McDonalds',
//         description: 'Served 10 Trillion people',
//         icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
//         photos: ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Xc8U5_Q-sPm7RlKT_bFt6wHaE2%26pid%3DApi&f=1&ipt=a1e36008292c763c30a699e3d5bc0299e2cc3fa35a18ebcfbbe2bd6570511071&ipo=images"],
//         address: "142 Main Blvd, Shanghai New York",
//         isOpenNow: true,
//         rating: 5,
//         isClosedTemporarily: false,
//     },
// ];

const RestaurantsContextProvider = ({ children }) => {
    // restaurants, isLoading, error
    // setTimeout 2 seconds to mock api request
    // make sure last thenable returns results instead of restaurants
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
                    setIsLoading(false)
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

    return (
        <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
            {children}
        </RestaurantsContext.Provider>
    )
}

export default RestaurantsContextProvider