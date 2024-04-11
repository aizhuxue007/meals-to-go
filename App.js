import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import { Text } from 'react-native'
import * as Font from "expo-font";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import RestaurantsContextProvider from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import Navigation from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";

const firebaseConfig = {
  apiKey: "AIzaSyBeG4GNj9l0e5ubC3cLOoychBcjwjgJzgs",
  authDomain: "meals-to-go-38736.firebaseapp.com",
  projectId: "meals-to-go-38736",
  storageBucket: "meals-to-go-38736.appspot.com",
  messagingSenderId: "676522891713",
  appId: "1:676522891713:web:7d8a809dbf35257ec6f740"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export default function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          Lato_400Regular,
          Lato_700Bold,
        });
      } catch (error) {
        console.error("Failed to load fonts:", error);
      }
    };

    loadFonts();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, 'aizhudeveloper@gmail.com', 'abc123')
        .then((userCredential) => {
          const user = userCredential.user;
          setIsAuth(true)
          setUser(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
        });
    }, 2000)

  }, [])

  return (
    <SafeAreaProvider>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <ThemeProvider theme={theme}>
              {isAuth ? <Text>logged in</Text> : <Text>Not logged in</Text>}
              <Navigation />
            </ThemeProvider>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </SafeAreaProvider>
  );
}
