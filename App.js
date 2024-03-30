import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { styled } from "styled-components/native";
import { theme } from './src/infrastructure/theme'
import RestaurantScreen from './src/features/restaurants/screens/restaurants.screen'
import MapScreen from "./src/features/restaurants/screens/map.screen";
import SettingScreen from "./src/features/restaurants/screens/settings.screen";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarActiveTintColor: 'rgba(233, 30, 99, 1)',
              tabBarStyle: { paddingBottom: 4 }
            }}
          >
            <Tab.Screen
              name="Restaurants" component={RestaurantScreen}
              options={{
                tabBarLabel: 'Restaurants',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="storefront-outline" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen name="Map" component={MapScreen}
              options={{
                tabBarLabel: 'Map',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="map-outline" color={color} size={size} />
                ),
              }} />
            <Tab.Screen name="Setting" component={SettingScreen}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings-outline" color={color} size={size} />
                ),
              }} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

