import React, { useContext } from "react";
import { Text } from "react-native";
import { List } from "react-native-paper";
import { styled } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../../services/authentification/authentification.context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const SettingScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthContext)
  return (
    <SafeArea>
      <Text>Settings</Text>
      <List.Section>
        <List.Item
          title="Favourites"
          description="Liked restaurants"
          left={props => <List.Icon {...props} icon="heart" />}
          onPress={() => navigation.navigate('Favorites')}
        />
        <List.Item
          title="Logout"
          description=""
          left={props => <List.Icon {...props} icon="door" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  );
};

export default SettingScreen;
