import React from 'react'
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { RestaurantCard, RestaurantCardCover, RestaurantInfo, RestaurantDescription, Icons, Ratings, Icon, Status, Open, Star } from './restaurant-info-card.styles'
import { Text } from '../../../components/typography/text.component'
import star from '../../../../assets/star'
import greyStar from '../../../../assets/greyStar'
import open from '../../../../assets/open'
import Spacer from '../../../components/spacer/spacer.component'

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
                        <Spacer position={'bottom'} size={'m'}>
                            <Text variant={"bold"}>{name}</Text>
                        </Spacer>
                        <Spacer position={'bottom'} size={'s'}>
                            <Text variant={"body"}>{"Good restaurant"}</Text>
                        </Spacer>
                        <Spacer position={'bottom'} size={'l'}>
                            <Text variant={"caption"}>{address}</Text>
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
        </Spacer>
    )
}

export default RestaurantInfoCard