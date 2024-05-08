import camelize from "camelize";
import axios from "axios";
import { mockMode } from "../../components/utility/env";
import { locations } from "./location.mock";

const liveRequest = async (searchTerm) => {
  try {
    const resp = await axios.get(
      `https://geocode-lskqsnyqga-uc.a.run.app?city=${searchTerm}`,
    );
    return resp.data;
  } catch (error) {
    console.log("from locationRequest", error);
  }
};

const mockRequest = async (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationRequest = async (searchTerm) => {
  let resp;
  if (mockMode) {
    resp = await mockRequest(searchTerm);
  } else {
    resp = await liveRequest(searchTerm);
  }
  return resp.results;
};

export const locationTransform = (location) => {
  const formattedResult = camelize(location[0]);
  const { geometry } = formattedResult;
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
