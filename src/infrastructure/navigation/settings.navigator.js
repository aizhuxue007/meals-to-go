import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { createScreenOptions } from "./app.navigator";
import SettingScreen from "../../features/settings/screens/settings.screen";
import FavouritesScreen from "../../features/settings/screens/favourites.screen";

const SettingsStack = createStackNavigator()

const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator
            screenOptions={{ createScreenOptions, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
        >
            <SettingsStack.Screen name='SettingsScreen' component={SettingScreen} />
            <SettingsStack.Screen name='Favorites' component={FavouritesScreen} />
        </SettingsStack.Navigator>
    )
}

export default SettingsNavigator