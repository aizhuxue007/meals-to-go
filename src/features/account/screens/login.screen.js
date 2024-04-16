import React, { useState, useContext } from "react";
import {
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    AuthInput,
    Heading
} from "../components/accounts.styles"
import { AuthContext } from "../../../services/authentification/authentification.context";
import Spacer from "../../../components/spacer/spacer.component";
import { Text, View } from "react-native";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error } = useContext(AuthContext);
    console.log(error)
    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <Heading>Login</Heading>
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
                {error.length &&
                    <Text>{`${error[0] || 'hello'}`}</Text>
                }
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