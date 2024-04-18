import React, { useContext } from "react";
import { Text } from "react-native";
import { List } from "react-native-paper";
import { styled } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../../services/authentification/authentification.context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const SettingScreen = () => {
  const { onLogout } = useContext(AuthContext)
  return (
    <SafeArea>
      <Text>Settings</Text>

    </SafeArea>
  );
};

export default SettingScreen;
