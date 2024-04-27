import React, { useRef, useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-paper";
import { Camera, CameraType } from "expo-camera";
import { styled } from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../services/authentification/authentification.context";

const CameraButton = styled(Button).attrs({
  mode: "contained",
  icon: "camera",
})`
  position: absolute;
  top: 525px;
  left: 140px;
`;

const Touchable = styled(TouchableOpacity)`
  background-color: red;
`;

const Cam = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const CenteredText = styled(Text)`
  text-align: center;
`;

const CameraScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const camRef = useRef();
  const { user } = useContext(AuthContext);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <CenteredText>We need your permission to show the camera</CenteredText>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const snap = async () => {
    if (!camRef) {
      return null;
    }
    const photo = await camRef.current.takePictureAsync();
    await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
    navigation.goBack();
  };

  return (
    <Touchable onPress={snap}>
      <Cam
        ratio={"16:9"}
        type={CameraType.front}
        ref={(camera) => (camRef.current = camera)}
      />
      <CameraButton onPress={snap}>Snap!</CameraButton>
    </Touchable>
  );
};

export default CameraScreen;
