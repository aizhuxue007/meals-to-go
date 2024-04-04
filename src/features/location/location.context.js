import React, { useState, useEffect } from 'react'
import { locationRequest, locationTransform } from './location.service'

const LocationContext = React.createContext()

const LocationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [location, setLocation] = useState(null)
    const [keyword, setKeyword] = useState('antwerp')

    useEffect(() => {
        onSearch('toronto')
    }, [])

    function onSearch(searchKeyword = 'san francisco') {
        setIsLoading(true)
        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then(result => {
                console.log(result)
                setLocation(result)
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                setError(false)
            })
    }

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword
            }}
        >{children}</LocationContext.Provider>)
}

export default LocationContextProvider