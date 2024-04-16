import React from 'react'
import { Text } from 'react-native'
import { ImgBg, TestView } from '../components/accounts.styles'


const RegisterScreen = () => {
    return (
        <ImgBg source={{ uri: "/Users/aizhuxue/dev/react-native/ztm/meals-to-go/assets/home_bg.jpg" }} resizeMode="cover">
            <TestView>
                <Text>Register</Text>
            </TestView>
        </ImgBg>
    )
}

export default RegisterScreen