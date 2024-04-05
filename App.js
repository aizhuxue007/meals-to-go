import React from "react";
import { useEffect } from "react";
import * as Font from "expo-font";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import RestaurantsContextProvider from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/features/location/location.context";
import AppNavigator from "./src/infrastructure/navigation/app.navigator";
import { theme } from "./src/infrastructure/theme";

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
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <ThemeProvider theme={theme}>
            <AppNavigator />
          </ThemeProvider>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </SafeAreaProvider>
  );
}
