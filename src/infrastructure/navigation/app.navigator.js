import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import MapScreen from "../../features/restaurants/screens/map.screen";
import SettingScreen from "../../features/restaurants/screens/map.screen";

const Tab = createBottomTabNavigator();

const tabIcon = {
  Restaurants: "storefront-outline",
  Map: "map-outline",
  Setting: "settings-outline",
};

const createScreenOptions = ({ route }) => {
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
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
