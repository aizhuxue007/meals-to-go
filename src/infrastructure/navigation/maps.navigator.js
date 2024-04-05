import { createStackNavigator } from '@react-navigation/stack'
import MapScreen from '../../features/restaurants/screens/map.screen'

const MapStack = createStackNavigator()

export const MapsNavigator = () => {
    return (
        <MapStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <MapStack.Screen
                name="MapsScreen"
                component={MapScreen}
            />
        </MapStack.Navigator>
    )
}