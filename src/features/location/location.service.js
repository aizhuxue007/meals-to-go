import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const mockLocation = locations[searchTerm]
        if (!mockLocation) reject('mockLocation not found!')
        resolve(mockLocation)
    })
}

export const locationTransform = (location) => {
    const formattedResult = camelize(location.results[0])
    const { geometry } = formattedResult
    const { lat, lng } = geometry.location
    return { lat, lng }
}