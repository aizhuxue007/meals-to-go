import { ImageBackground, View } from 'react-native'
import { styled } from 'styled-components/native'

export const ImgBg = styled(ImageBackground)`
    flex: 1;
`
export const TestView = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const AccountsCover = styled(View)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3)
`