import React, { createContext, useState, useEffect, useCallback, useRef } from 'react';
import { onAuthStateChanged, getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { loginRequest } from './authentification.service';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([]);
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
                console.log(JSON.parse(e));
            });
    }, [auth]);

    const onRegister = ({ email, password, repeatPassword }) => {
        if (password !== repeatPassword) {
            setError('password and repeat password need to match')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user, 'just signed up')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode)
                setError(errorMessage)
            });
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, error, onLogin, isAuthenticated: !!user, onRegister }}>
            {children}
        </AuthContext.Provider>
    );
};
