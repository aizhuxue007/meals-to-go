import React from 'react'
import { ImgBg, TestView, AccountsCover, AccountsContainer, AuthButton } from '../components/accounts.styles'
import Spacer from '../../../components/spacer/spacer.component'


const AccountScreen = ({ navigation }) => {
    return (
        <ImgBg source={{ uri: "/Users/aizhuxue/dev/react-native/ztm/meals-to-go/assets/home_bg.jpg" }} resizeMode="cover">
            <AccountsCover />
            <TestView>
                <AccountsContainer>
                    <AuthButton icon="lock-open-outline" mode="contained"
                        onPress={() => navigation.navigate('Login')}
                    >
                        Login
                    </AuthButton>
                    <Spacer position="top" size='m'>
                        <AuthButton icon="lock-open-outline" mode="contained"
                            onPress={() => navigation.navigate('Register')}
                        >
                            Register
                        </AuthButton>
                    </Spacer>
                </AccountsContainer>
            </TestView>
        </ImgBg>
    )
}

export default AccountScreen