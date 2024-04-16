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
import { Text, View } from "react-native";

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, error } = useContext(AuthContext);

    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <Heading>Register</Heading>
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
                    onChangeText={(p) => setPassword(p)}
                />
                <AuthInput
                    label="Repeat Password"
                    value={repeatedPassword}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) =>
                        setRepeatedPassword(p)
                    }
                />
                {error && (
                    <View>
                        <Text>{error.message || error}</Text>
                    </View>
                )}
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => onRegister(email, password, repeatedPassword)}
                >
                    Register
                </AuthButton>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.goBack()}
                >
                    Go Back
                </AuthButton>
            </AccountContainer>
        </AccountBackground>
    );
};

export default RegisterScreen