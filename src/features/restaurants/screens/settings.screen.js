import React, { useContext } from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { styled } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../../services/authentification/authentification.context";
import { colors } from "../../../infrastructure/theme/colors";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export const LogoutButton = styled(Button).attrs({
  color: colors.brand.primary
})`
  width: 98%;
  margin: 0 auto 8px auto;
  padding: 8px;
`;

const SettingScreen = () => {
  const { onLogout } = useContext(AuthContext)
  return (
    <SafeArea>
      <Text>Settings</Text>
      <LogoutButton onPress={onLogout}>Logout</LogoutButton>
    </SafeArea>
  );
};

export default SettingScreen;
