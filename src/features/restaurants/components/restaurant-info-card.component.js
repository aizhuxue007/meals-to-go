import React from "react";
import {
  RestaurantCard,
  RestaurantCardCover,
  RestaurantInfo,
  RestaurantDescription,
  Icons,
  Ratings,
  Icon,
  Status,
  Open,
  Star,
} from "./restaurant-info-card.styles";
import { Text } from "../../../components/typography/text.component";

import Favourite from "../../favourites/favourite.component";
import star from "../../../../assets/star";
import greyStar from "../../../../assets/greyStar";
import open from "../../../../assets/open";
import Spacer from "../../../components/spacer/spacer.component";

export const RestaurantInfoCard = React.memo(({ restaurant }) => {
  if (!restaurant) {
    return <Text>No restaurants</Text>;
  }

  const {
    name,
    icon,
    photos,
    vicinity,
    isOpenNow,
    rating,
    isClosedTemporarily,
    placeId,
  } = restaurant;
  const starRatings = [...Array(5)].map((_, i) => i);
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos && photos[0] }} />
      <RestaurantInfo>
        <RestaurantDescription>
          <Spacer position={"bottom"} size={"s"}>
            <Text variant={"bold"}>{name}</Text>
          </Spacer>
          <Spacer position={"bottom"} size={"m"}>
            <Text variant={"body"}>{vicinity}</Text>
          </Spacer>

          {isClosedTemporarily && (
            <Text variant={"error"}>Temporarily Closed</Text>
          )}
        </RestaurantDescription>
        <Icons>
          <Ratings>
            {starRatings.map((i) =>
              i < Math.ceil(rating) ? (
                <Star
                  key={`${placeId}-${i}-yellow`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ) : (
                <Star
                  key={`${placeId}-${i}-grey`}
                  xml={greyStar}
                  width={20}
                  height={20}
                />
              ),
            )}
          </Ratings>
          <Status>
            {isOpenNow && (
              <Spacer position={"top"} size={"s"}>
                <Open xml={open} width={16} height={16} />
              </Spacer>
            )}
            <Icon source={{ uri: icon }} />
          </Status>
        </Icons>
      </RestaurantInfo>
    </RestaurantCard>
  );
});

export default React.memo(RestaurantInfoCard);
