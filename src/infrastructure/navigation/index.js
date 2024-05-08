import React from "react";
import { useContext } from "react";
import AppNavigator from "./app.navigator";
import AccountsNavigator from "./accounts.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../../services/authentification/authentification.context";

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const development = false;

  return (
    <NavigationContainer>
      {development || isAuthenticated ? (
        <AppNavigator />
      ) : (
        <AccountsNavigator />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
