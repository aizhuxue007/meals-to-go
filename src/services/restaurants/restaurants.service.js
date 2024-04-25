import axios from "axios";
import camelize from "camelize";

export const restaurantsRequest = async (location = "37.7749295,-122.4194155") => {
  try {
    const resp = await axios.get(`https://placesnearby-lskqsnyqga-uc.a.run.app/us-central1/placesNearby?location=${location}`)
      .then(res => res.data.results)
    return resp
  } catch (error) {
    console.log('from restaurantRequest', error)
  }
};

export const restaurantsTransform = (results) => {
  const mappedResults = results.map(restaurant => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
