import { mocks } from "./mock/index.js";
import camelize from 'camelize'

export const restaurantsRequest = (location) => {
    return new Promise((resolve, reject) => {
        const city = mocks[location]
        if (!city) reject('location not found')
        resolve(city)
    })
}

export const transformRestaurantsReq = ({ results = [] }) => {
    const mappedResults = results.map(restaurant => {
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED TEMPORARILY",
        }
    })

    return camelize(mappedResults)
}