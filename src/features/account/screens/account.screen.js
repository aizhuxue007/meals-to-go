import React from "react";
import LottieView from "lottie-react-native";
import { styled } from "styled-components/native";
import {
  AccountBackground,
  TestView,
  AccountCover,
  AccountContainer,
  AuthButton,
  AnimationWrapper,
} from "../components/accounts.styles";
import Spacer from "../../../components/spacer/spacer.component";

const Lottie = styled(LottieView)`
  width: 100%;
  height: 100%;
`;

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <Lottie
          key="animation"
          source={require("../../../../assets/watermelon.json")}
          autoPlay
          resizeMode="cover"
          loop
        />
      </AnimationWrapper>
      <TestView>
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AuthButton>
          <Spacer position="top" size="m">
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </TestView>
    </AccountBackground>
  );
};

export default AccountScreen;
