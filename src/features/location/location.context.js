import React, { useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [keyword] = useState("");

    function onSearch(searchKeyword = "san francisco") {
        setIsLoading(true);
        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                console.log(result);
                setLocation(result);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
                setError(false);
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
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};
