import { createStackNavigator } from '@react-navigation/stack'
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen'

const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <RestaurantStack.Screen
                name="RestaurantsScreen"
                component={RestaurantsScreen}
            />
        </RestaurantStack.Navigator>
    )
}
