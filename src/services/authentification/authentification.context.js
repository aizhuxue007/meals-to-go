import React, { createContext, useState, useEffect, useCallback, useRef } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { loginRequest } from './authentification.service';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const auth = useRef(getAuth()).current;

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (usr) => {
            if (usr) {
                setUser(usr);
                setIsLoading(false);
            } else {
                setUser(null);
                setIsLoading(false);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    const onLogin = useCallback((email, password) => {
        setIsLoading(true);
        loginRequest(auth, email, password)
            .then((u) => {
                console.log(email, password, u)
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setError(e);
                setIsLoading(false);
                console.log(e.toString());
            });
    }, [auth]);

    return (
        <AuthContext.Provider value={{ user, isLoading, error, onLogin, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

// add a comment