import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import CheckoutNavigator from "./checkout.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

import SettingsNavigator from "./settings.navigator";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import RestaurantsContextProvider from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { CartContextProvider } from "../../services/cart/cart.context";
const Tab = createBottomTabNavigator();

const tabIcon = {
  Restaurants: "storefront-outline",
  Map: "map-outline",
  Checkout: "cart-outline",
  Setting: "settings-outline",
};

export const createScreenOptions = ({ route }) => {
  const iconName = tabIcon[route.name];

  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} color={color} size={size} />
    ),
    tabBarShowLabel: false,
    headerShown: false,
    tabBarActiveTintColor: "rgba(233, 30, 99, 1)",
    tabBarStyle: { paddingBottom: 4 },
  };
};

const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <CartContextProvider>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Checkout" component={CheckoutNavigator} />
              <Tab.Screen name="Setting" component={SettingsNavigator} />
            </Tab.Navigator>
          </CartContextProvider>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

export default AppNavigator;
