import React, { useRef, useContext } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Button } from "react-native-paper";
import { Camera, CameraType } from 'expo-camera';
import { styled } from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../../services/authentification/authentification.context';

const CameraButton = styled(Button).attrs({
    mode: "contained",
    icon: "camera"
})`
    position: absolute;
    top: 525px;
    left: 140px;
 `;

const CameraScreen = () => {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const camRef = useRef()
    const { user } = useContext(AuthContext)

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    const snap = async () => {
        if (!camRef) return null
        const photo = await camRef.current.takePictureAsync()
        await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri)
        console.log('snap', await AsyncStorage.getItem(`${user.uid}-photo`))
    }

    return (
        <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={snap}>
            <Camera
                style={{ width: '100%', height: '100%' }}
                type={CameraType.front}
                ref={camera => (camRef.current = camera)}
            >
            </Camera>
            <CameraButton onPress={snap}>Snap!</CameraButton>
        </TouchableOpacity>
    )
}

export default CameraScreen