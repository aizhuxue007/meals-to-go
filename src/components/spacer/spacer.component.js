import { View } from "react-native";
import { styled } from 'styled-components/native'

const TopSmall = styled(View)`margin-top: ${props => props.theme.space[1]}`
const TopMedium = styled(View)`margin-top: ${props => props.theme.space[2]}`
const TopLarge = styled(View)`margin-top: ${props => props.theme.space[4]}`
const LeftSmall = styled(View)`margin-left: ${props => props.theme.space[1]}`
const LeftMedium = styled(View)`margin-left: ${props => props.theme.space[2]}`
const LeftLarge = styled(View)`margin-left: ${props => props.theme.space[3]}`

const Spacer = ({ variant }) => {
    let Component;
    {
        switch (variant) {
            case "top.small":
                Component = TopSmall
                break
            case "top.medium":
                Component = TopMedium
                break
            case "top.large":
                Component = TopLarge
                break
            case "left.small":
                Component = LeftSmall
                break
            case "left.medium":
                Component = LeftMedium
                break
            case "left.large":
                Component = LeftLarge
                break
            default:
                Component = View
                break
        }
    }
    return <Component />
}

export default Spacer

