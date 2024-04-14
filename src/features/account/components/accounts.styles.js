import { ImageBackground, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { styled } from 'styled-components/native'
import { colors } from '../../../infrastructure/theme/colors'


export const AccountBackground = styled(ImageBackground)`
    flex: 1;
`
export const TestView = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const AccountCover = styled(View)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
`

export const AccountContainer = styled(View)`
    width: 300px;
    height: 300px;
    justify-content: flex-end;
    background-color: rgba(255, 255, 255, 0.7);
`

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary
})`
    width: 80%;
    margin: 0 auto 8px auto;
    padding: 8px;
`


export const AuthInput = styled(TextInput)`
  width: 300px;
`;