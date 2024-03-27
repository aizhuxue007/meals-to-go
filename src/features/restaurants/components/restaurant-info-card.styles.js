import { styled } from "styled-components/native"
import { SvgXml } from 'react-native-svg'
import { View, Image } from 'react-native'
import { Card } from 'react-native-paper'

export const RestaurantCard = styled(Card)`
    background: ${props => props.theme.colors.bg.primary};
`
export const RestaurantCardCover = styled(Card.Cover)``

export const RestaurantInfo = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    padding: ${props => props.theme.space[4]} ${props => props.theme.space[3]};
`
export const RestaurantDescription = styled(View)``

export const Title = styled(Text)`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.title};
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.ui.primary};
    margin-bottom:  ${props => props.theme.space[2]}
`

export const Address = styled(Text)`
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.body};
    margin-bottom: ${props => props.theme.space[4]};
`

export const IsClosedTemporarily = styled(Text)`
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.body};
    color: ${props => props.theme.colors.ui.error}
`

export const Icons = styled(View)`
    align-items: flex-end;
`

export const Status = styled(View)`
    flex-direction: row;
    gap: ${props => props.theme.space[3]}
`

export const Icon = styled(Image)`
    width: ${props => props.theme.sizes[2]};
    height: ${props => props.theme.sizes[1]};
    margin-top: ${props => props.theme.space[1]}
`

export const Ratings = styled(View)`
    flex-direction: row;
    padding: ${props => props.theme.space[1]} 0;
`

export const Star = styled(SvgXml)``

export const Open = styled(SvgXml)``