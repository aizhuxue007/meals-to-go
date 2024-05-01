import { ImageBackground, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styled } from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("/Users/aizhuxue/dev/react-native/ztm/meals-to-go/assets/home_bg.jpg"),
  resizeMode: "cover",
})`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const TestView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled(View)`
  width: 300px;
  height: 300px;
  padding: 16px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: 98%;
  margin: 0 auto 8px auto;
  padding: 8px;
`;

export const AuthInput = styled(TextInput)`
  width: 95%;
  margin-bottom: 16px;
`;

export const Heading = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const AnimationWrapper = styled.View`
  positon: absolute;
  width: 400px;
  height: 40%;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
