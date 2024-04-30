import { View } from "react-native";
import { styled } from "styled-components/native";
import { Avatar, List, TextInput } from "react-native-paper";
import { Text } from "../../components/typography/text.component";

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