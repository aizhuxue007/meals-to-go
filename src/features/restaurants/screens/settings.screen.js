import React from "react";
import { Text } from "react-native";
import { styled } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const SettingScreen = () => {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
};

export default SettingScreen;
