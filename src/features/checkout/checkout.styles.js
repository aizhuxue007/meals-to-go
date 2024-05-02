import { View } from "react-native";
import { styled } from "styled-components/native";
import { Avatar, List, TextInput, Button, ActivityIndicator, MD2Colors } from "react-native-paper";
import { Text } from "../../components/typography/text.component";
import { colors } from "../../infrastructure/theme/colors";

export const CartIconContainer = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
    size: 128
})`
    background-color: ${props => props.bg || props.theme.colors.brand.primary};
    margin-bottom: ${props => props.theme.space[3]};
`;

export const IndentedText = styled(Text)`
margin: ${props => props.theme.space[3]};
`;

export const IndentedListItem = styled(List.Item)`
margin-left: ${props => props.theme.space[3]};
`;

export const NameInput = styled(TextInput)`
margin: ${props => props.theme.space[3]} auto;
width: 93%;
`

export const PayButton = styled(Button).attrs({
    color: colors.brand.primary, mode: "contained"
})`
    width: 93%;
    margin: ${props => props.theme.space[2]} auto;
    padding: ${props => props.theme.space[2]};
`;

export const ClearButton = styled(Button).attrs({
    mode: "contained"
})`
    width: 93%;
    background-color: #D0421B;
    margin: ${props => props.theme.space[2]} auto ${props => props.theme.space[4]} auto;
    padding: ${props => props.theme.space[2]};
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
    size: 124,
    animating: true,
    color: MD2Colors.green400,
})`
    position: absolute;
    top: 50%;
    left: 35%;
    z-index: 9;
`;