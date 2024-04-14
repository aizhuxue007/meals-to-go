import React from 'react'
import { AccountBackground, TestView, AccountCover, AccountContainer, AuthButton } from '../components/accounts.styles'
import Spacer from '../../../components/spacer/spacer.component'


const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground source={{ uri: "/Users/aizhuxue/dev/react-native/ztm/meals-to-go/assets/home_bg.jpg" }} resizeMode="cover">
            <AccountCover />
            <TestView>
                <AccountContainer>
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
                </AccountContainer>
            </TestView>
        </AccountBackground>
    )
}

export default AccountScreen