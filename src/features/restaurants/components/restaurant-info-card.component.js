import React from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components/native'
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star'
import { sizes } from '../../../utils/Sizes'

const RestaurantCard = styled(Card)`
    marginBottom: ${sizes.xxl}px;
    background: ${props => props.theme.colors.bg.primary};
`
const RestaurantCardCover = styled(Card.Cover)``

const RestaurantInfo = styled(View)`
    flex-direction: row
`
const RestaurantDescription = styled(View)`
`

const Title = styled(Text)`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.title};
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.ui.error};
    margin: 10px 0 0 10px;
`
const Address = styled(Text)`
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.body};
    margin: ${props => props.theme.space[2]};
`

const Ratings = styled(View)`
    flex-direction: row;
    
`

const Star = styled(SvgXml)`
    margin-left: ${sizes.sm}px;
    margin-bottom: ${sizes.sm}px;
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const [oswaldLoaded, oswaldError] = useOswald({
        Oswald_400Regular
    })
    const [latoLoaded, latoError] = useLato({
        Lato_400Regular
    })

    if (!oswaldLoaded && !oswaldError || !latoLoaded && !latoError) {
        return null;
    }

    const {
        name = "Some restaurant",
        icon,
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
        address = "100 Some Random Street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant

    const starRatings = [...Array(Math.ceil(rating))].map((_, i) => i)

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <RestaurantInfo>
                <RestaurantDescription>
                    <Title>{name}</Title>
                    <Address>{address}</Address>
                </RestaurantDescription>
                <Ratings>
                    {starRatings.map(_ => <Star xml={star} width={20} height={20} />)}
                </Ratings>
            </RestaurantInfo>
        </RestaurantCard>
    )
}

export default RestaurantInfoCard