import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../../features/account/screens/account.screen";
import LoginScreen from "../../features/account/screens/login.screen";
import RegisterScreen from "../../features/account/screens/register.screen";

const AccountsStack = createStackNavigator()

const AccountsNavigator = () => {
    return (
        <AccountsStack.Navigator headerMode="none">
            <AccountsStack.Screen name="Account" component={AccountScreen} />
            <AccountsStack.Screen name="Login" component={LoginScreen} />
            <AccountsStack.Screen name="Register" component={RegisterScreen} />
        </AccountsStack.Navigator>
    )
}

export default AccountsNavigator