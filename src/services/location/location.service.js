import camelize from "camelize";
import axios from 'axios'
import { host } from "../../components/utility/env";

export const locationRequest = async (searchTerm) => {
    try {
        const resp = await axios.get(`https://geocode-lskqsnyqga-uc.a.run.app?city=${searchTerm}`)
            .then(res => res.data.results)
        return resp
    } catch (error) {
        console.log('from locationRequest', error)
    }
};

export const locationTransform = (location) => {
    const formattedResult = camelize(location[0]);
    const { geometry } = formattedResult;
    const { lat, lng } = geometry.location;
    return { lat, lng, viewport: geometry.viewport };
};
