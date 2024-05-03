import axios from "axios";
import camelize from "camelize";
import { mockMode } from "../../components/utility/env";
import { mocks, mockImages } from "./mock";

const defaultLocation = "37.7749295,-122.4194155";

const liveRequest = async (location) => {
  try {
    const resp = await axios
      .get(
        `https://placesnearby-lskqsnyqga-uc.a.run.app/us-central1/placesNearby?location=${location}`,
      )
      .then((res) => res.data.results);
    return resp;
  } catch (error) {
    console.log("from restaurantRequest", error);
  }
};

const mockRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
}

export const restaurantsRequest = async (location = defaultLocation) => {
  let resp;
  if (mockMode) {
    resp = await mockRequest(location);;
  } else {
    resp = await liveRequest(location);
  }
  return resp;
};

export const restaurantsTransform = (results) => {
  console.log('rest Trans', results)
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status
        === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
