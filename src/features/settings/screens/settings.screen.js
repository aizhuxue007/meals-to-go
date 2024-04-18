import React, { useContext } from "react";
import { Text } from "react-native";
import { List, Avatar } from "react-native-paper";
import { styled } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../../services/authentification/authentification.context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const HeaderContainer = styled.View`
  align-items: center;
  gap: ${props => props.theme.space[4]};
`

const SettingItem = styled(List.Item)`
  padding: ${props => props.theme.space[3]};
`

const SettingScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthContext)
  return (
    <SafeArea>
      <HeaderContainer>
        <Avatar.Icon size={150} icon="human" />
        <Text>Settings</Text>
      </HeaderContainer>
      <List.Section>
        <SettingItem
          title="Favourites"
          description="Liked restaurants"
          left={props => <List.Icon {...props} icon="heart" />}
          onPress={() => navigation.navigate('Favorites')}
        />
        <SettingItem
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
