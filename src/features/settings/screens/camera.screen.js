import React from 'react'
import { Text, View } from 'react-native'
import { Camera, CameraType } from 'expo-camera';

const CameraScreen = () => {
    return (
        <View>
            <Camera
                style={{ flex: 1 }}
                type={CameraType.front}
            ></Camera>
        </View>
    )
}

export default CameraScreen