import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { theme } from './src/infrastructure/theme'
import RestaurantScreen from './src/features/restaurants/screens/restaurants.screen'
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
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestaurantScreen}
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
    </SafeAreaProvider>
  );
}

