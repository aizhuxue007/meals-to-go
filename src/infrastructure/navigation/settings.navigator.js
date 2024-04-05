import { createStackNavigator } from '@react-navigation/stack'
import SettingScreen from '../../features/restaurants/screens/map.screen'

const SettingStack = createStackNavigator()

export const SettingsNavigator = () => {
    return (
        <SettingStack.Navigator headerMode="none">
            <SettingStack.Screen
                name="SettingScreen"
                component={SettingScreen}
            />
        </SettingStack.Navigator>
    )
}