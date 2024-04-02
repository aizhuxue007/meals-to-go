import React from 'react'
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato'
import { RestaurantCard, RestaurantCardCover, RestaurantInfo, RestaurantDescription, Icons, Ratings, Icon, Status, Open, Star } from './restaurant-info-card.styles'
import { Text } from '../../../components/typography/text.component'
import star from '../../../../assets/star'
import greyStar from '../../../../assets/greyStar'
import open from '../../../../assets/open'
import Spacer from '../../../components/spacer/spacer.component'

export const RestaurantInfoCard = ({ restaurant }) => {
    const [latoLoaded, latoError] = useLato({
        Lato_400Regular,
        Lato_700Bold
    })
    if (!latoLoaded && !latoError) {
        return null;
    }

    const {
        name,
        description,
        icon,
        photos,
        address,
        isOpenNow,
        rating,
        isClosedTemporarily,
    } = restaurant
    const starRatings = [...Array(5)].map((_, i) => i)
    console.log("info",
        name,
        description,
        icon,
        photos,
        address,
        isOpenNow,
        rating,
        isClosedTemporarily,
    )
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos && photos[0] }} />
            <RestaurantInfo>
                <RestaurantDescription>
                    <Spacer position={'bottom'} size={'s'}>
                        <Text variant={"bold"}>{name}</Text>
                    </Spacer>
                    <Spacer position={'bottom'} size={'l'}>
                        <Text variant={"body"}>{description}</Text>
                    </Spacer>
                    <Spacer position={'bottom'} size={'m'}>
                        <Text variant={"body"}>{address}</Text>
                    </Spacer>

                    {isClosedTemporarily && <Text variant={"error"}>Temporarily Closed</Text>}

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
    )
}

export default React.memo(RestaurantInfoCard)