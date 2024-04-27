import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useMemo,
} from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  function retrieveRestaurants(loc) {
    setIsLoading(true);
    setTimeout(() => { }, 1000)
    restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then((results) => {
        setIsLoading(false);
        setError(null);
        setRestaurants(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }

  useEffect(() => {
    if (location) {
      const { lat, lng } = location;
      const locationString = `${lat},${lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  const value = useMemo(
    () => ({
      restaurants,
      isLoading,
      error,
    }),
    [restaurants, isLoading, error],
  );

  return (
    <RestaurantsContext.Provider value={value}>
      {children}
    </RestaurantsContext.Provider>
  );
};

export default React.memo(RestaurantsContextProvider);
