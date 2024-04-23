import React, { useState, useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
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
  const { onLogout, user } = useContext(AuthContext)
  const [photo, setPhoto] = useState()
  let text = ''

  const getProfilePicture = async (currUser) => {
    const resp = await AsyncStorage.getItem(`${currUser.uid}-photo`)
    if (typeof resp === 'string') { setPhoto(resp) }
  }

  useFocusEffect(() => {
    getProfilePicture(user)
  })

  if (user._tokenResponse) { text = user._tokenResponse.email }
  else if (user.email) { text = user.email }
  else { null }

  return (
    <SafeArea>
      <HeaderContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {photo ? <Avatar.Image size={150} source={{ uri: photo }} /> : <Avatar.Icon size={150} icon="human" />}
        </TouchableOpacity>
        <Text>{`${text}`}</Text>
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
