import React from "react";
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from "styled-components";
import { theme } from './src/infrastructure/theme'

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

