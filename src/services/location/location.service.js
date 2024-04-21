import camelize from "camelize";

export const locationRequest = (searchTerm) => {
    console.log(searchTerm)
    return fetch(`http://127.0.0.1:5001/meals-to-go-38736/us-central1/geocode?city=antwerp`)
        .then(res => {
            return res.json()
        })
        .catch(err => console.log('from locationreq', err))
};

export const locationTransform = (location) => {
    console.log(location)
    const formattedResult = camelize(location.results[0]);
    const { geometry } = formattedResult;
    const { lat, lng } = geometry.location;
    return { lat, lng, viewport: geometry.viewport };
};
