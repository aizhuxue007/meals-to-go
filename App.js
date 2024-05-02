import "react-native-gesture-handler";
import React, { useEffect } from "react";
import * as Font from "expo-font";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import Navigation from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import { AuthContextProvider } from "./src/services/authentification/authentification.context";

const firebaseConfig = {
  apiKey: "AIzaSyBeG4GNj9l0e5ubC3cLOoychBcjwjgJzgs",
  authDomain: "meals-to-go-38736.firebaseapp.com",
  projectId: "meals-to-go-38736",
  storageBucket: "meals-to-go-38736.appspot.com",
  messagingSenderId: "676522891713",
  appId: "1:676522891713:web:7d8a809dbf35257ec6f740",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default function App() {
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

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AuthContextProvider auth={auth}>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
