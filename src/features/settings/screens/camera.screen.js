import React, { useRef } from 'react'
import { View, TouchableOpacity, Text, Button } from 'react-native'
import { Camera, CameraType } from 'expo-camera';

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
        console.log('cam pressed')
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
        </TouchableOpacity>
    )
}

export default CameraScreen