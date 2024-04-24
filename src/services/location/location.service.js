import camelize from "camelize";
import axios from 'axios'
import { host } from "../../components/utility/env";

export const locationRequest = async (searchTerm) => {
    try {
        const resp = await axios.get(`${host}/us-central1/geocode?city=${searchTerm}&mock=true`)
            .then(res => res.data.results)
        console.log(resp)
        return resp
    } catch (error) {
        console.log('from locationRequest', error)
    }
};

export const locationTransform = (location) => {
    const formattedResult = camelize(location[0]);
    console.log(formattedResult)
    const { geometry } = formattedResult;
    const { lat, lng } = geometry.location;
    return { lat, lng, viewport: geometry.viewport };
};
