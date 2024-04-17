import React from 'react'
import LottieView from 'lottie-react-native'
import { AccountBackground, TestView, AccountCover, AccountContainer, AuthButton, AnimationWrapper } from '../components/accounts.styles'
import Spacer from '../../../components/spacer/spacer.component'


const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>
                <LottieView
                    key="animation"
                    source={require("../../../../assets/watermelon.json")}
                    style={{ width: "100%", height: "100%" }}
                    autoPlay
                    resizeMode='cover'
                    loop
                />
            </AnimationWrapper>
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