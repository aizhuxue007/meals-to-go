import { mocks } from "./mock/index";

export const restaurantsRequest = (location) => {
    return new Promise((resolve, reject) => {
        const city = mocks[location]
        if (!city) reject('location not found')
        resolve(city)
    })
}