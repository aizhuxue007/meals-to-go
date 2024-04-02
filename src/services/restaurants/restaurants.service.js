import { mockImages, mocks } from "./mock/index.js";
import camelize from 'camelize'

export const restaurantsRequest = (location = '51.219448,4.402464') => {
    return new Promise((resolve, reject) => {
        const city = mocks[location]
        if (!city) reject('location not found')
        resolve(city)
    })
}

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map(restaurant => {
        restaurant.photos = restaurant.photos.map(p => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))])
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED TEMPORARILY",
        }
    })

    return camelize(mappedResults)
}