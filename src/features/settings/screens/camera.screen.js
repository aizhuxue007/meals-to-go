import React from 'react'
import { Text, View } from 'react-native'
import { Camera, CameraType, takePicturesAsync } from 'expo-camera';

const CameraScreen = () => {
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) requestPermission()
    Camera.take
    return (
        <View style={{ flex: 1 }}>
            <Camera
                style={{ flex: 0.75 }}
                type={CameraType.front}
                onCameraReady={() => null}
            ></Camera>
        </View >
    )
}

export default CameraScreen