import React from "react";
import { useEffect } from 'react';
import * as Font from 'expo-font';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import RestaurantsContextProvider from "./src/services/restaurants/restaurants.context";
import { theme } from './src/infrastructure/theme'
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen'
import MapScreen from "./src/features/restaurants/screens/map.screen";
import SettingScreen from "./src/features/restaurants/screens/settings.screen";

const Tab = createBottomTabNavigator()

const tabIcon = {
  Restaurants: 'storefront-outline',
  Map: 'map-outline',
  Setting: 'settings-outline'
}

const createScreenOptions = ({ route }) => {
  const iconName = tabIcon[route.name]

  return ({
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} color={color} size={size} />
    ),
    tabBarShowLabel: false,
    headerShown: false,
    tabBarActiveTintColor: 'rgba(233, 30, 99, 1)',
    tabBarStyle: { paddingBottom: 4 }
  })
}

export default function App() {

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          Lato_400Regular,
          Lato_700Bold,
        });
      } catch (error) {
        console.error('Failed to load fonts:', error);
        // Handle the error case, e.g., show an error message to the user
      }
    };

    loadFonts();
  }, []);

  return (
    <SafeAreaProvider>
      <RestaurantsContextProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
            >
              <Tab.Screen
                name="Restaurants"
                component={RestaurantsScreen}
              />
              <Tab.Screen
                name="Map"
                component={MapScreen}
              />
              <Tab.Screen
                name="Setting"
                component={SettingScreen}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </RestaurantsContextProvider>
    </SafeAreaProvider>
  );
}

