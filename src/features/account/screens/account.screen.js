import React from 'react'
import { Text } from 'react-native'
import { ImgBg, TestView } from '../components/accounts.styles'


const AccountScreen = () => {
    return (
        <ImgBg source={{ uri: "/Users/aizhuxue/dev/react-native/ztm/meals-to-go/assets/home_bg.jpg" }} resizeMode="cover">
            <TestView>
                <Text>Accounts</Text>
            </TestView>
        </ImgBg>
    )
}

export default AccountScreen