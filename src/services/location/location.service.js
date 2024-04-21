import camelize from "camelize";

export const locationRequest = (searchTerm) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        .then(res => {
            return res.json()
        })
        .then(json => console.log(json))
        .catch(err => console.log('from locationreq catch method', err))
};

export const locationTransform = (location) => {
    const formattedResult = camelize(location.results[0]);
    const { geometry } = formattedResult;
    const { lat, lng } = geometry.location;
    return { lat, lng, viewport: geometry.viewport };
};
