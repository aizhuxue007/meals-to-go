import React, { createContext, useState, useRef } from 'react'
import {
    onAuthStateChanged,
    getAuth,
} from "firebase/auth";
import { loginRequest } from './authentification.service'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const auth = useRef(getAuth()).current;

    onAuthStateChanged(auth, (usr) => {
        if (usr) {
            setIsLoading(false)
            !isAuthenticated && setIsAuthenticated(true)
            setUser(usr)
        } else {
            setIsLoading(false)
        }
    })

    const onLogin = (email, password) => {
        setIsLoading(false)
        loginRequest(auth, email, password)
            .then(u => {
                setUser(u)
                setIsAuthenticated(true)
                setIsLoading(false)
            })
            .catch(e => {
                setIsLoading(false)
                setError(e)
                console.log(e)
            })
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
                isAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}