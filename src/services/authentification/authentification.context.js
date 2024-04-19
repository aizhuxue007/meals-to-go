import React, { createContext, useState, useEffect, useCallback } from 'react';
import { onAuthStateChanged, getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { loginRequest } from './authentification.service';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([]);
    const auth = getAuth()

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
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setError(e);
                setIsLoading(false);
            });
    }, [auth]);

    const onRegister = (email, password, repeatPassword) => {
        setIsLoading(true)
        if (password !== repeatPassword) {
            setError('password and repeat password need to match')
            setIsLoading(false)
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setIsLoading(false)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                setIsLoading(false)
            });
    }

    const onLogout = async () => {
        setUser(null)
        try {
            await signOut(auth);
            console.log("User Signed Out Successfully!");
        } catch (error) {
            console.log(error.code);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, error, onLogin, onRegister, onLogout, isAuthenticated: !!user, auth }}>
            {children}
        </AuthContext.Provider>
    );
};
