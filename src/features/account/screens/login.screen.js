import React, { useState, useContext } from "react";
import {
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    AuthInput,
} from "../components/accounts.styles"
import Spacer from "../../../components/spacer/spacer.component";
import { AuthContext } from "../../../services/authentification/authentification.context";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error } = useContext(AuthContext);

    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <AuthInput
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    secure
                    onChangeText={(p) => setPassword(p)}
                />
                {error && (
                    <Spacer position="top" size="l">
                    </Spacer>
                )}
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => onLogin(email, password)}
                >
                    Login
                </AuthButton>
            </AccountContainer>
        </AccountBackground>
    );
};

export default LoginScreen

// import React, { useRef, useContext, useState } from 'react'
// import { TextInput } from 'react-native-paper'
// import { ImgBg, TestView, AccountsCover, AccountsContainer, AuthButton } from '../components/accounts.styles'
// import { AuthContext } from '../../../services/authentification/authentification.context'
// import Spacer from '../../../components/spacer/spacer.component'

// const LoginScreen = () => {
//     const [text, setText] = useState("");
//     const { onLogin } = useContext(AuthContext)

//     const handleLogin = () => {
//         console.log(email)
//     }

//     return (
//         <Spacer position="top" size="xxl">
//             <TextInput
//                 label="Email"
//                 value={text}
//                 onChangeText={text => setText(text)}
//             />
//         </Spacer>
//         // <ImgBg source={{ uri: "/Users/aizhuxue/dev/react-native/ztm/meals-to-go/assets/home_bg.jpg" }} resizeMode="cover">
//         //     <AccountsCover />
//         //     <TestView>
//         //         <AccountsContainer>
//         //             <Spacer position="bottom" size="s">
//         //                 <TextInput
//         //                     label="Email"
//         //                     textContentType="emailAddress"
//         //                     keyboardType='email-address'
//         //                     value={email}
//         //                     onChangeText={text => setEmail(text)}
//         //                     autoCapitalize="none"
//         //                 />
//         //             </Spacer>
//         //             <Spacer position="bottom" size="s">
//         //                 <TextInput
//         //                     label="password"
//         //                     textContentType="password"
//         //                     secureTextEntry
//         //                     autoCapitalize="none"
//         //                     secure
//         //                 />
//         //             </Spacer>

//         //             <Spacer position="top" size='m'>
//         //                 <AuthButton icon="lock-open-outline" mode="contained"
//         //                     onPress={handleLogin}
//         //                 >
//         //                     Login
//         //                 </AuthButton>
//         //             </Spacer>
//         //         </AccountsContainer>
//         //     </TestView>
//         // </ImgBg>
//     )
// }

// export default LoginScreen