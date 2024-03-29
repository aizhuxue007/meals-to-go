import React from "react";
import RestaurantScreen from './src/features/restaurants/screens/restaurants.screen'
import MapScreen from "./src/features/restaurants/screens/map.screen";
import SettingScreen from "./src/features/restaurants/screens/settings.screen";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from './src/infrastructure/theme'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurant" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

