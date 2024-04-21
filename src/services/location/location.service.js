import camelize from "camelize";
import axios from 'axios'

export const locationRequest = async (searchTerm) => {
    return await axios.get(`https://3a74-2601-18d-4a7f-d8c0-b08d-77ca-7533-b36.ngrok-free.app/meals-to-go-38736/us-central1/geocode?city=antwerp`)
        .then(res => { console.log(res.data) })
        .catch(err => console.log('from locationreq catch method', err))
};

export const locationTransform = (location) => {
    const formattedResult = camelize(location.results[0]);
    const { geometry } = formattedResult;
    const { lat, lng } = geometry.location;
    return { lat, lng, viewport: geometry.viewport };
};
