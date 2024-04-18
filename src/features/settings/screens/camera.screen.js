import React, { useRef } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Button } from "react-native-paper";
import { Camera, CameraType } from 'expo-camera';
import { styled } from 'styled-components/native';

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

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
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
        console.log(photo)
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