import camelize from "camelize";
import axios from 'axios'

export const locationRequest = async (searchTerm) => {
    try {
        const resp = await axios.get(`https://3a74-2601-18d-4a7f-d8c0-b08d-77ca-7533-b36.ngrok-free.app/meals-to-go-38736/us-central1/geocode?city=${searchTerm}`)
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
