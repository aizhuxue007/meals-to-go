import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native-paper";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => (
          <Text style={{ marginTop: 50 }}>Restaurant Details</Text>
        )}
      />
    </RestaurantStack.Navigator>
  );
};
