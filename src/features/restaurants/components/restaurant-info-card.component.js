import React from 'react'
import { Text, View, Image } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components/native'
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star'
import greyStar from '../../../../assets/greyStar'
import open from '../../../../assets/open'
import Spacer from '../../../components/spacer/spacer.component'

const RestaurantCard = styled(Card)`
    background: ${props => props.theme.colors.bg.primary};
`
const RestaurantCardCover = styled(Card.Cover)``

const RestaurantInfo = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    padding: ${props => props.theme.space[4]} ${props => props.theme.space[3]};
`
const RestaurantDescription = styled(View)``

const Title = styled(Text)`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.title};
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.ui.primary};
    margin-bottom:  ${props => props.theme.space[2]}
`

const Address = styled(Text)`
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.body};
    margin-bottom: ${props => props.theme.space[4]};
`

const IsClosedTemporarily = styled(Text)`
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.body};
    color: ${props => props.theme.colors.ui.error}
`

const Icons = styled(View)`
    align-items: flex-end;
`

const Status = styled(View)`
    flex-direction: row;
    gap: ${props => props.theme.space[3]}
`

const Icon = styled(Image)`
    width: ${props => props.theme.sizes[2]};
    height: ${props => props.theme.sizes[1]};
    margin-top: ${props => props.theme.space[1]}
`

const Ratings = styled(View)`
    flex-direction: row;
    padding: ${props => props.theme.space[1]} 0;
`

const Star = styled(SvgXml)``

const Open = styled(SvgXml)``

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
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
        address = "100 Some Random Street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant

    const starRatings = [...Array(5)].map((_, i) => i)

    return (
        <Spacer position={'bottom'} size={'xl'}>
            <RestaurantCard elevation={5}>
                <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
                <RestaurantInfo>
                    <RestaurantDescription>
                        <Title>{name}</Title>
                        <Address>{address}</Address>
                        {isClosedTemporarily && <IsClosedTemporarily>Temporarily Closed</IsClosedTemporarily>}
                    </RestaurantDescription>
                    <Icons>
                        <Ratings>
                            {starRatings.map(i => i < Math.ceil(rating) ? <Star key={i} xml={star} width={20} height={20} /> : <Star key={i} xml={greyStar} width={20} height={20} />)}
                        </Ratings>
                        <Status>
                            {isOpenNow && <Open xml={open} width={20} height={20} />}
                            <Icon source={{ uri: icon }}></Icon>
                        </Status>
                    </Icons>
                </RestaurantInfo>
            </RestaurantCard>
        </Spacer>
    )
}

export default RestaurantInfoCard