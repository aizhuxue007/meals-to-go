import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { createScreenOptions } from "./app.navigator";
import SettingScreen from "../../features/settings/screens/settings.screen";

const SettingsStack = createStackNavigator()

const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator
            screenOptions={{ createScreenOptions, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
        >
            <SettingsStack.Screen name='SettingsScreen' component={SettingScreen} />
            <SettingsStack.Screen name='Favorites' component={() => null} />
        </SettingsStack.Navigator>
    )
}

export default SettingsNavigator