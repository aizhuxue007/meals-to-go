import { useContext } from "react";
import AppNavigator from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../../services/authentification/authentification.context";


const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <NavigationContainer>
      {isAuthenticated ?
        <AppNavigator /> :
        <AccountsNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
