import React, { useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("");

  function onSearch(searchKeyword) {
    locationRequest(searchKeyword.toLowerCase().trim())
      .then(locationTransform)
      .then((result) => {
        setError(null);
        setLocation(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
        setKeyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
