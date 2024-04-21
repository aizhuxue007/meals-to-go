import camelize from "camelize";
import axios from 'axios'
import { API_URL } from 'react-native-dotenv';

export const locationRequest = async (searchTerm) => {
    try {
        const resp = await axios.get(`${API_URL}/meals-to-go-38736/us-central1/geocode?city=${searchTerm}`)
            .then(res => res.data.results)
        return resp
    } catch (error) {
        console.log('from locationRequest', error)
    }
    return
};

export const locationTransform = (location) => {
    console.log('in transform', location[0])
    const formattedResult = camelize(location[0]);
    const { geometry } = formattedResult;
    const { lat, lng } = geometry.location;
    return { lat, lng, viewport: geometry.viewport };
};
