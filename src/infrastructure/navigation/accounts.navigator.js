import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from 'react-native'

const AccountsStack = createStackNavigator()

const AccountsNavigator = () => {
    return (
        <AccountsStack.Navigator headerMode="none">
            <AccountsStack.Screen name="Account" component={
                () => {
                    return (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}
                        ><Text>Accounts</Text></View>)
                }
            } />
            <AccountsStack.Screen name="Login" component={
                () => {
                    return (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}
                        ><Text>Login</Text></View>)
                }
            } />
            <AccountsStack.Screen name="Register" component={
                () => {
                    return (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}
                        ><Text>Register</Text></View>)
                }
            } />
        </AccountsStack.Navigator>
    )
}

export default AccountsNavigator